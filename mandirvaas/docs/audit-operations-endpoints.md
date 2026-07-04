# Operations Endpoint Audit — Temples, Temple Map, Stays, Shop

**Audited against:** production `mandirvaas.in` (Laravel monolith, live as of this
audit). This is a live-site trace, not a spec written from assumptions — every
field and filter below was observed on the actual pages, and every place my
observation diverges from the endpoint shape we were handed is called out
explicitly rather than smoothed over.

---

## 1. Temples (`/temples`, `/temple-map`)

### What's on the page today
Filter controls observed on `/temples`: **Select Deity** (16 options — Ayyappa,
Devi, Durga, Ganesha, Hanuman, Kali, Krishna, Lakshmi, Murugan, Navagraha,
Rama, Sai Baba, Saraswati, Shiva, Venkateswara, Vishnu), **Select State** (full
list of Indian states/UTs), **Select District** (dependent dropdown — populates
based on state), and **Temple Category** (Ancient Temple, Divya Desam, Famous
Temple, Jyotirlinga, Navagraha Temple, Shakti Peetha, etc. — 15 categories).
Results are paginated server-side: 93 total temples, 12 per page, `?page=N` in
the URL. Each card shows deity, city, state, and links to a detail page.

### Endpoint spec

```
GET /api/temples
```

| Param | Type | Notes |
|---|---|---|
| `deity` | string | matches the 16-value Select Deity list observed live |
| `state` | string | full Indian state/UT name |
| `district` | string | **not in the original task spec — but it's a real, dependent filter on the live site.** District options change based on the selected state, so the client needs a way to fetch the district list scoped to a state, likely `GET /api/districts?state=` |
| `category` | string | Temple Category filter (Ancient Temple, Jyotirlinga, Shakti Peetha, etc.) — also live today but not in the original spec |
| `page` | integer | site currently paginates at 12/page |

```json
// example response shape, inferred from the card fields shown per temple
{
  "data": [
    {
      "id": 118,
      "slug": "thiruparankundram-murugan-temple-arupadaiveedu",
      "name": "Arulmigu Subramanya Swamy Temple",
      "deity": "Murugan",
      "city": "Madurai",
      "state": "Tamil Nadu",
      "featured_image": "https://mandirvaas.in/storage/temples/featured/....jpg"
    }
  ],
  "meta": { "current_page": 1, "per_page": 12, "total": 93 }
}
```

**Gap to flag:** the task spec only lists `deity` and `state` as filter
params. Live, there are two more (`district`, `category`) that the React
filter UI has to support or the migration will visibly regress functionality
users already have.

### `/temple-map`
No separate map data endpoint could be confirmed from a static page trace —
pin data is likely loaded from the same `/api/temples` response (each temple
already carries an implicit lat/lng, since stay detail pages link out to
Google Maps by coordinate). Recommend confirming with backend whether
`/api/temples` includes `lat`/`lng` per record, or whether a dedicated
`GET /api/temples/map` is needed to avoid over-fetching card data just to
render pins.

---

## 2. Stays (`/stays`)

### What's on the page today
Filter controls: **Select Deity**, **Select State**, **Select District**,
**Select Temple** (dependent on the above), plus a **Filters** side panel
with free-text **Search Stay** and grouped **Amenities** checkboxes across six
categories — Other, Basic, Food, Pilgrim Support, Policies, Popular, Safety
(24 individual amenity flags total, e.g. `Free WiFi`, `Pure Veg Food`,
`Women Friendly`, `CCTV Security`). Results show distance from the linked
temple, a short list of amenities, and a Verified badge.

**Important gap:** there is **no check-in/check-out date picker or guest-count
field on the `/stays` listing page today.** Those fields only appear on the
individual **stay detail page** (e.g. `/stays/mantra-koodam-heritage-stay`),
alongside a **Room Type** selector — because the site books per-room, not
per-property, and room type isn't known until you're on that stay's page.

### Endpoint spec

```
GET /api/stays
```

| Param | Type | Notes |
|---|---|---|
| `deity`, `state`, `district`, `temple_id` | string/int | matches the four live dropdowns |
| `search` | string | free-text stay name search |
| `amenities[]` | string[] | one entry per checked amenity; 24 possible values across 6 groups |

`check_in` / `check_out` / `guests` as listed in the original task spec are
**not listing-page filters on the live site** — they belong to the detail-page
availability check instead:

```
GET /api/stays/{slug}/availability
```
| Param | Type |
|---|---|
| `check_in` | date |
| `check_out` | date |
| `room_type_id` | int |
| `guests` | int |

**Recommendation:** build the React Stays listing page against the amenities/
location filters that actually exist today, and treat check-in/check-out/
guests as belonging to the stay detail + booking flow, not the listing page —
matching production rather than the spec's assumed shape.

---

## 3. Bookings

### What's on the page today
On a stay's detail page, after selecting Check-in, Check-out, Room Type, and
Guests, there are **two distinct calls to action**: **"Book Directly with
Hotel"** and **"Book with MandirVaas Assistance."** No payment gateway or cart
step was observed — this reads as a **lead-capture flow**, not a live payment
checkout. That materially changes what the payload needs to contain.

### Endpoint spec

```
POST /api/bookings
```

```json
{
  "stay_id": 42,
  "room_type_id": 7,
  "check_in": "2026-08-10",
  "check_out": "2026-08-12",
  "guests": 2,
  "booking_mode": "assisted",          // "direct" | "assisted" — maps to the two CTAs observed
  "contact": {
    "name": "string, required",
    "phone": "string, required",
    "email": "string, optional"
  },
  "notes": "string, optional"
}
```

`booking_mode` isn't in the original spec but is required to distinguish the
two real buttons on the page — collapsing them into one payload shape would
lose real product behavior.

### Shop (`/products`) — item-count adjustments
Filter controls observed: **All Categories**, **All Temples** (long dropdown —
every temple with linked products), and free-text **Search**. No visible
cart/quantity stepper was reachable via a static page trace (likely
client-side JS on the product detail page, not the listing page). This needs
a follow-up dynamic trace (headless browser) before the basket payload shape
in `POST /api/bookings` (or a separate `POST /api/orders`) can be finalized
with confidence — flagging rather than guessing at fields I couldn't verify.

```
GET /api/products
```
| Param | Type |
|---|---|
| `category` | string |
| `temple_id` | int |
| `search` | string |

---

## Summary of Gaps vs. Original Task Spec

| Spec assumed | Live site actually has |
|---|---|
| `GET /api/temples?deity,state` | + `district` (dependent), `category`, `page` |
| `GET /api/stays?check_in,check_out,guests` | Listing page uses `deity,state,district,temple_id,search,amenities[]`; date/guest fields live on the **detail page**, scoped to a specific room type |
| `POST /api/bookings` as a generic payload | Needs a `booking_mode` field — production has two distinct booking paths (direct vs. assisted), not a single checkout |
| Shop basket item-count adjustment | Not observable via static trace — needs a headless-browser follow-up before finalizing |
