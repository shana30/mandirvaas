# Experience & Acquisition Endpoint Audit — Home, Tours, Blogs, Partner, Auth

**Audited against:** production `mandirvaas.in` (Laravel monolith, live as of
this audit). Every field below was traced on the live pages, including two
places where what's actually live differs from what the task brief assumed —
called out explicitly rather than papered over.

---

## 1. Home Hero (`/`)

Live hero has **Select Deity** (16 options), **Select State**, **Select
District**, and a **Find Temples** submit — this is a filtered-search hero,
not a free-text search bar. It posts through to `/temples` with the selected
filters as query params (same shape as the Temples listing audited by
Dhanush). No separate hero-specific endpoint is needed — the React Home hero
should call the same `GET /api/temples` endpoint with `deity`/`state`/
`district` params and route to the Temples page on submit.

---

## 2. Partner Registration — Multi-Step Form

**Gap vs. the task brief:** the live `/partner-with-us` page is **not itself a
multi-step form.** It's a landing page with four partnership-type cards
(Spiritual Seller, Stay Owner, Blogger, Tour Operator). Three of the four
route straight to a WhatsApp deep link (`wa.me/919361707232?text=...`) — only
**Spiritual Seller** has an actual in-app form, at `/seller/register`, and
it's a **single-page form, not multi-step**, with these fields observed live:

| Field | Required? |
|---|---|
| Contact Person Name | ✅ |
| Business Name | — |
| Phone Number | ✅ |
| WhatsApp Number | ✅ |
| Email | ✅ |
| Address | — |
| City | — |
| State | — |
| Business Logo | — (file upload) |
| Password | ✅ |
| Confirm Password | ✅ |

### Capture & sanitization workflow
1. **Client-side validation before submit:** required-field presence, email
   format, phone/WhatsApp as 10-digit numeric, password ⇄ confirm-password
   match, and a file-type/size check on the logo upload (image only, capped
   size) before it ever leaves the browser — this is what "sanitize before
   issuing" means in practice: reject obviously-bad input locally so the
   round trip to Laravel isn't wasted on it.
2. **CSRF:** every page on the live site ships a `<meta name="csrf-token">`
   tag (confirmed on `/`, `/stays`, `/temples`, `/blogs`, `/login`,
   `/register`, `/seller/register`) — this is Laravel's default Blade CSRF
   protection. A React SPA calling into this same Laravel backend needs
   Laravel Sanctum's SPA mode: hit `GET /sanctum/csrf-cookie` first to get
   the `XSRF-TOKEN` cookie, then send it back as the `X-XSRF-TOKEN` header
   on the POST — not a manually-scraped meta tag, since the SPA won't be
   server-rendering Blade views.
3. **Submit:**

```
POST /api/partners/register
Content-Type: multipart/form-data   // because of the Business Logo file field
```

```json
{
  "contact_person_name": "string, required",
  "business_name": "string, optional",
  "phone": "string, required, 10-digit",
  "whatsapp_number": "string, required, 10-digit",
  "email": "string, required, valid email",
  "address": "string, optional",
  "city": "string, optional",
  "state": "string, optional",
  "business_logo": "file, optional, image/*",
  "password": "string, required, min 8 chars",
  "password_confirmation": "string, required, must match password"
}
```

4. **Server response handling:** on `422`, map Laravel's standard
   `{ "errors": { "field": ["message"] } }` validation-error shape back onto
   the individual form fields inline — don't show a single generic toast, the
   live form's per-field structure implies per-field error display is
   expected.

**Recommendation:** the React `JoinPartner.jsx` component should present the
four partnership-type cards first (matching what's live today), and only
render the actual form for the Seller path — routing Stay Owner/Blogger/Tour
Operator to WhatsApp exactly as production does today, until those three get
real in-app forms of their own.

---

## 3. Blogs Feed (`/blogs`)

Live filters: free-text **Search**, **Category**, **Tag**, **Author**
dropdowns, plus **Reset**. Pagination is server-side: 10 posts total, 9 shown
per page, `?page=N`. Each card shows title, author, publish date, and a short
excerpt.

### Lazy ingestion workflow
```
GET /api/posts
```
| Param | Type |
|---|---|
| `search` | string |
| `category` | string |
| `tag` | string |
| `author` | string |
| `page` | integer |

For lazy-loading in the React feed: fetch page 1 on mount, then either
infinite-scroll (`IntersectionObserver` on a sentinel element triggering
`page + 1`) or a "Load More" button — either way, **append** new records to
existing state rather than replacing it, and de-dupe by post `id` in case a
filter change races with an in-flight page-2 request. Keep `category`/`tag`/
`author` filter changes as a full state reset (back to `page: 1`, replace
rather than append) since changing a filter mid-scroll should restart the
list, not blend two different result sets together.

---

## 4. Authentication (`/login`, `/register`)

**Gap vs. the task brief:** the live `/login` and `/register` pages render
under an `AdminLTE 3` page title with no MandirVaas site chrome (header/
footer) — this is Laravel's **default auth scaffolding**, essentially
untouched from a standard `Auth::routes()` setup, styled with the AdminLTE
admin theme rather than the public site's design system. That's a strong
signal this is **session-based auth** (Laravel's default `web` guard, cookie
+ CSRF token), not a token-issuing API endpoint today.

### What this means for the React integration
Because the backend is session-cookie auth today, not a bare token API, the
clean integration path is **Laravel Sanctum's SPA authentication mode**
rather than hand-rolling JWTs:

1. React app and Laravel API must share the same top-level domain (Sanctum's
   SPA mode requires this — it authenticates via **cookies**, not a bearer
   token stored in JS).
2. `GET /sanctum/csrf-cookie` — call once before any state-changing request,
   sets the `XSRF-TOKEN` cookie.
3. `POST /login` (or a new `POST /api/login` if the team wants to keep the
   API surface separate from the existing Blade-facing `/login` route) —
   Laravel sets an encrypted, `HttpOnly` session cookie in the response.
   React never touches the session token directly; the browser just carries
   the cookie on subsequent requests.
4. **CORS:** `config/cors.php` needs `supports_credentials: true`, and the
   React dev origin (`http://localhost:5173`) added to `allowed_origins` —
   plus `axios.defaults.withCredentials = true` (or `fetch(..., { credentials:
   'include' })`) on the client, or the cookie won't be sent cross-origin
   even in dev.
5. **Auth state on the client:** don't try to read the session cookie
   directly (it's `HttpOnly` by design — JS can't see it). Instead, call a
   `GET /api/user` endpoint on app load; a `200` with a user payload means
   authenticated, a `401` means not. Store that result in React state/context,
   not the cookie itself.
6. **Logout:** `POST /logout` invalidates the server-side session; the client
   just needs to clear its local auth state after a successful response and
   redirect.

**Flagging for the team:** since `/login` and `/register` currently render
as bare AdminLTE pages with none of the public site's design, this pairing
either needs new Blade routes that skip rendering entirely (pure JSON API)
or the AdminLTE auth scaffold needs to stay serving the admin panel while a
parallel `/api/login` is added for the SPA — worth confirming which, since
they're currently the same routes.
