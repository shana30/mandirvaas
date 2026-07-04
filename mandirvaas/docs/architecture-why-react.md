# Why MandirVaas Is Moving From Laravel Blade to a React SPA

## Executive Summary

MandirVaas is migrating its front end from a Laravel Blade monolith to a
React-based Single Page Application (SPA). This document lays out the
technical rationale for that shift, with specific attention to two features
that expose the limits of the current architecture most clearly: dynamic
stay filtering and the interactive temple map.

## Rendering Model: Full Page Reloads vs. Component-Level Updates

In the Blade monolith, every filter change on the Stays page — a new
check-in date, a different guest count — triggers a full server round trip:
the browser requests a new page, Laravel re-renders the entire Blade
template server-side, and the client repaints the whole DOM from scratch.
This is wasteful for what is functionally a small, localized change (the
results grid), and it introduces a visible flash and a network-latency
delay on every interaction. A React SPA instead keeps the page's state in
browser memory and re-renders only the components whose underlying data
changed. Filtering stays becomes a local state update — React diffs the
previous and next virtual DOM trees and patches only the results grid,
leaving the sidebar, navigation, and page shell untouched. The user
perceives this as instant, because there is no server round trip and no
full-document reload in the critical path.

## State Transitions and Interactive Features

The temple map is the clearest case for client-side state. Panning,
zooming, selecting a pin, and filtering visible temples by deity are all
rapid, continuous interactions that need to feel immediate — waiting on a
server response for each zoom level or pin click would make the map
unusable. In a component architecture, the map's viewport, selected pin,
and active filters live as local (or lightly shared) state that updates
synchronously in the browser, with the server consulted only for the
underlying data (temple coordinates, availability), not for every
interaction. This same pattern extends to the Stays filters and the
partner-intake form: state transitions (selecting a date, moving to the
next form step) happen instantly on the client, and the network is used
only when data actually needs to be fetched or persisted — not as a proxy
for UI state changes.

## Separation of Concerns

Finally, the SPA model enforces a cleaner boundary between what the server
is responsible for and what the client is responsible for. In Blade,
markup, server logic, and page state are interleaved in the same template
files, which makes it hard to reuse a piece of UI (say, a temple card)
across different contexts without duplicating markup or fighting Blade's
templating constraints. In React, `Temples.jsx`, `Stays.jsx`, and the
shared components in `src/components/` are self-contained units: they
own their own rendering logic and can be composed, tested, and reused
independently of any specific server route. The backend's job shrinks to
serving data through an API, and the frontend's job is entirely about
presenting and reacting to that data — which is the separation of concerns
this migration is intended to establish.
