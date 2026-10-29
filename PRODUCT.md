# Product

<!-- impeccable:product-schema 1 -->

Inferred from the repository and the rebrand brief. No structured question tool was available in this session, so nothing below was confirmed in a live interview.

## Platform

web

## Users

People deciding whether to talk to Colton Fouch about endpoint strategy, identity, or live production: infrastructure peers, hiring managers, and recruiters. They arrive with a name or a link and need the role, the proof, and a way to write.

## Product Purpose

coltonfouch.com is Colton Fouch's personal and professional site. It presents the work he already did, the decisions behind it, and how to reach him. Success is a visitor who can find the case studies, the reasoning, and info@coltonfouch.com without a new claim being invented for them.

## Positioning

The site is the record of one person's path, from Guitar Center helpdesk through Patagonia platform management, told with the case studies and architecture decisions already on the site.

## Capabilities and Constraints

- Astro 5, Tailwind 4, static output in `dist`. `site` is `https://coltonfouch.com`. Sitemap integration stays.
- Routes stay `/` and `/case-studies/{zero-touch,platform-sso,live-streaming,patch-automation,content-caching}`.
- Hosting cutover is Cloudflare Pages. This change does not edit `CNAME` or the GitHub Pages workflow.
- `npm ci && npm run build` must succeed on Node 22.
- Factual copy, metrics, roles, and the email stay. No new claims or metrics.
- Raw hex colors are allowed only in `src/styles/tokens.css`. The build fails otherwise.

## Brand Commitments

FOUCH brand system supplied with this rebrand (guide text is v2.3.0; the cream avatar is the v2.2 character). Dark is Night and Graphite with Sunset Orange as the accent. Light is Adobe Cream with the Low Sun family. Sunset Orange is never text or a text fill on cream. Type is Archivo 800 for display, Inter for body, JetBrains Mono for labels and codes. Use the wordmark and the cream clay avatar. WCAG AA. Honor `prefers-color-scheme`, with a theme toggle.

## Evidence on Hand

Live copy is in `src/pages` and `src/components`. Brand marks and the cream avatar are in `public/brand/`. Do not invent customers, benchmarks, or resume claims that are not already in those files.

## Product Principles

- Keep the record. Presentation can tighten. Facts cannot grow.
- The offer and the email are visible without hunting.
- One accent does the work. Orange on Night, Low Sun on cream.
- The page is a site, not a terminal and not a personal dashboard.

## Accessibility & Inclusion

WCAG AA for text. Visible focus. Hit targets at least 44px. `prefers-reduced-motion` removes the single entrance. Both color schemes are supported.
