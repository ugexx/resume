---
name: FOUCH
description: Colton Fouch's site on the FOUCH Studio and Cream Coast system.
colors:
  night: "#05070D"
  graphite: "#11141C"
  paper: "#F4F1EA"
  sunset-orange: "#FF7F45"
  adobe-cream: "#F1E6D2"
  paper-surface: "#FBF6EC"
  umber: "#3A2A1F"
  low-sun: "#B2533A"
  low-sun-text: "#93412B"
  on-primary-light: "#FFF8EE"
  muted-dark: "#A3A9B6"
  muted-light: "#5E5044"
  dusk-pink: "#F4B6C2"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 6.4vw, 4.75rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
  xl: "24px"
  full: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
  xxl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.sunset-orange}"
    textColor: "{colors.night}"
    rounded: "{rounded.md}"
    padding: "0 16px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "#FF925F"
    textColor: "{colors.night}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "0 16px"
    height: "44px"
---

## Overview

**Creative North Star: "Studio supply sheet."**

The site is a night studio that switches to coast light. Night `#05070D` is the ground, Graphite holds the record, and Sunset Orange appears as the signature: the primary action, the `0520` mark, and one glow. Cream mode swaps the ground to Adobe Cream and the accent to Low Sun. The clay avatar and the FOUCH wordmark are the personal mark. The old blue terminal is not part of this system.

**Key Characteristics:**

- Archivo 800 display, width axis 112, tracking no tighter than -0.04em.
- Inter for reading. JetBrains Mono for labels, codes, and data keys.
- One primary action per view. Night type on orange. Low Sun text on cream.
- Borders in the dark. A soft offset shadow only in the light.

## Colors

Dark (Studio) is the default ground: Night, Graphite surfaces, Paper text, muted `#A3A9B6`, Sunset Orange `#FF7F45`. Type on orange is Night.

Light (Cream Coast) follows `prefers-color-scheme: light` and the theme toggle: Adobe Cream ground, paper cards, Umber text, muted `#5E5044`, Low Sun fill `#B2533A`, Low Sun text `#93412B`, on-primary `#FFF8EE`.

**The One Accent Rule.** Sunset Orange is not text and not a fill behind text on cream. Lavender and Lawn Teal stay out of the UI. One orange glow, on the hero primary action, and only in the dark theme.

All of these values live in `src/styles/tokens.css` as `--fx-*`. Components reference the variables.

## Typography

Display and section headings use Archivo 800 with `font-variation-settings: 'wdth' 112`. Body is Inter at 16px, leads at 20px, measure about 68ch. Labels, nav, `0520`, and spec keys are JetBrains Mono. Headings and labels are Title Case. Body stays sentence case.

## Layout

A single column inside a 1120px container. The header is a solid bar: avatar chip, wordmark, mono nav, `0520`, theme toggle. The first viewport is the name, the offer, the two actions, then a record plate (cream avatar well plus the six facts). Later sections are a work index, decision disclosures, the about portrait, an experience ledger, one stack sheet, a teaching row, and a contact band. More space above a heading than below it.

## Elevation & Depth

Dark cards are border only. Light cards use `--fx-shadow-card` (`0 1px 2px` and `0 4px 12px`, umber, soft). The hero primary button is the only element with `--fx-glow`.

## Shapes

Controls use 10px. Cards and the record plate use 16px. The avatar chip is a circle. Focus is a 2px ring, offset 2px, in `--fx-focus`.

## Components

- Primary button: Sunset Orange and Night in the dark; Low Sun and `#FFF8EE` in the light. Minimum 44px. Press scale 0.98 unless motion is reduced.
- Secondary button: strong border, transparent fill.
- Nav: mono caps. The section in view gets a 2px primary underline and `aria-current`.
- Record plate: cream figure well and a spec grid. Not a terminal.
- Tags: mono, hairline border, no fill.
- Decisions: one disclosure per ADR. Field labels are mono.

## Do's and Don'ts

- Do keep Night on orange and Low Sun on cream.
- Do use the outlined wordmark and the cream clay avatar.
- Do put new colors in `src/styles/tokens.css` only.
- Don't put Sunset Orange on cream.
- Don't put Paper or white on Sunset Orange.
- Don't bring back the blue accent, the terminal prompt, or a glass header.
- Don't add a second glow.
