---
name: Adhil & Sona
description: The couple's wedding invitation, opened out into one long sheet for guests on their phones.
colors:
  blue: "#4b5b65"
  pink: "#df617e"
  yellow: "#f4bd8d"
  cream: "#fffbee"
  blue-deep: "#2f3b43"
typography:
  display:
    fontFamily: "Vienna Romance, Libre Baskerville, serif"
    fontSize: "clamp(4.75rem, 25vw, 7rem)"
    fontWeight: 400
    lineHeight: 1.2
  headline:
    fontFamily: "Vienna Romance, Libre Baskerville, serif"
    fontSize: "clamp(3.25rem, 16vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.2
  title:
    fontFamily: "Vienna Romance, Libre Baskerville, serif"
    fontSize: "clamp(2.25rem, 10vw, 3.25rem)"
    fontWeight: 400
    lineHeight: 1.2
  name:
    fontFamily: "Vienna Romance, Libre Baskerville, serif"
    fontSize: "clamp(2rem, 9vw, 2.75rem)"
    fontWeight: 400
    lineHeight: 1.2
  figure:
    fontFamily: "Libre Baskerville, Georgia, serif"
    fontSize: "clamp(1.875rem, 8vw, 2.5rem)"
    fontWeight: 400
    lineHeight: 1.35
  figure-small:
    fontFamily: "Libre Baskerville, Georgia, serif"
    fontSize: "clamp(1.75rem, 8vw, 2.25rem)"
    fontWeight: 400
    lineHeight: 1.1
  statement:
    fontFamily: "Libre Baskerville, Georgia, serif"
    fontSize: "clamp(1.5rem, 6vw, 1.875rem)"
    fontWeight: 400
    lineHeight: 1.45
  venue:
    fontFamily: "Libre Baskerville, Georgia, serif"
    fontSize: "clamp(1.0625rem, 4.4vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.4
  body:
    fontFamily: "Libre Baskerville, Georgia, serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Libre Baskerville, Georgia, serif"
    fontSize: "0.6875rem"
    fontWeight: 400
    letterSpacing: "0.2em"
  button:
    fontFamily: "Libre Baskerville, Georgia, serif"
    fontSize: "0.6875rem"
    fontWeight: 400
    letterSpacing: "0.16em"
  nav:
    fontFamily: "Libre Baskerville, Georgia, serif"
    fontSize: "0.6875rem"
    fontWeight: 400
    letterSpacing: "0.14em"
  label-small:
    fontFamily: "Libre Baskerville, Georgia, serif"
    fontSize: "0.625rem"
    fontWeight: 400
    letterSpacing: "0.16em"
rounded:
  circle: "50%"
spacing:
  gutter: "clamp(1rem, 5vw, 4rem)"
  frame-inset: "clamp(0.625rem, 2vw, 1.25rem)"
  corner: "clamp(5.75rem, 25vw, 13rem)"
  corner-wide: "clamp(9rem, 28vh, 15rem)"
  corner-hero: "clamp(5rem, 23vw, 10rem)"
  crown: "3.5rem"
  stack-xs: "0.75rem"
  stack-sm: "1.25rem"
  stack-md: "1.75rem"
  stack-lg: "2.25rem"
  stack-xl: "2.75rem"
  section: "5.5rem"
  section-wide: "7.5rem"
components:
  button-solid:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.cream}"
    typography: "{typography.button}"
    padding: "0.5rem 1.5rem"
    height: "3rem"
  button-solid-hover:
    backgroundColor: "{colors.blue-deep}"
    textColor: "{colors.cream}"
  button-line:
    textColor: "{colors.blue}"
    typography: "{typography.button}"
    padding: "0.5rem 1.5rem"
    height: "3rem"
  button-line-hover:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.cream}"
  button-deep:
    backgroundColor: "{colors.blue-deep}"
    textColor: "{colors.cream}"
    typography: "{typography.button}"
    padding: "0.5rem 1.5rem"
    height: "3rem"
  button-deep-hover:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.cream}"
  button-solid-night:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.blue}"
    typography: "{typography.button}"
    padding: "0.5rem 1.5rem"
    height: "3rem"
  button-solid-night-hover:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.blue-deep}"
  button-line-night:
    textColor: "{colors.cream}"
    typography: "{typography.button}"
    padding: "0.5rem 1.5rem"
    height: "3rem"
  button-line-night-hover:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.blue}"
  nav-link:
    textColor: "{colors.blue}"
    typography: "{typography.nav}"
    padding: "0 0.5rem"
    height: "2.75rem"
  nav-link-hover:
    textColor: "{colors.blue-deep}"
  icon-control:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.blue}"
    rounded: "{rounded.circle}"
    size: "3rem"
---

# Design System: Adhil & Sona

## Overview

**Creative North Star: "The Invitation, Opened Out"**

The site is the couple's printed invitation unfolded into one long sheet. Everything it is made of comes from that card: the four-colour palette, the mandala lattice, the flower corners and crown, the dark blue rule, the formal script for the names and the bookish serif for everything else. It is warm, ceremonial and unhurried, with the composure of stationery rather than the density of an interface.

Cream paper carries the framed moments. Between them, whole fields of pink, dark blue and yellow arrive edge to edge, so colour reads as a change of sheet instead of an accent. Facts stay plain and softly sized: a date, a time and a venue are set like the lines of a card, with their actions directly beneath. The whole type scale sits small for a softer, more elegant feel.

Motion behaves like the object it describes. The monogram traces itself, the card parts like two doors, script headings wipe on as if written, the prints drift slightly with the scroll, and the hero photograph leans toward the pointer. All of it falls away under reduced motion.

**Key Characteristics:**
- One palette of four invitation colours plus a single deepened blue for legibility.
- Rule frames with the invitation's flower corners, scaled and positioned by one measure.
- A mandala lattice at 12%, behind cream and pink only.
- Vienna Romance for names and headings; Libre Baskerville in caps, italic and regular for the rest.
- A small, soft type scale: body at 0.9375rem, the smallest type at 0.625rem.
- Square paper, soft shadows only under objects that are physically paper.

## Colors

The invitation's own palette, used at full strength in whole fields and limited by contrast in type.

### Primary
- **Invitation Dark Blue** (#4b5b65): Body text on cream, the frame rules, solid buttons, and the reception and closing fields. Against cream it measures 6.80:1 in both directions.

### Secondary
- **Invitation Pink** (#df617e): The bridge field, the wedding heading, the "Our families" heading, the ampersands, the monogram, the date row's diamond and the selection and scrollbar colour.

### Tertiary
- **Invitation Yellow** (#f4bd8d): The keepsake field, the monogram's second colour, the hairlines that divide event details and head the countdown, and the closing ampersand on dark blue.

### Neutral
- **Card Cream** (#fffbee): The page, the framed sheets, the doors, and text on dark blue and pink, including the footer's sibling names.
- **Deep Ink Blue** (#2f3b43): Small text on yellow, the deep button, button hover states, and the tint in every shadow and the lightbox backdrop. It is the dark blue deepened for legibility, not a fifth brand colour.

### Named Rules
**The Large Pink Rule.** Pink text stays at 24px (1.5rem) or larger, because of contrast (3.30:1 on cream, 2.06:1 on dark blue). Below that size pink is ornament only: the monogram, the flower art, the date row's diamond. In the build pink on dark blue appears only as ornament; at 2.06:1 it does not reach 3:1 even for large type, so treat ornament as its practical limit there.

**The Small Text Rule.** Small text is dark blue on cream, cream on dark blue, or Deep Ink Blue (#2f3b43) on yellow. Dark blue on yellow measures 4.19:1 and is why the deepened blue exists; Deep Ink Blue on yellow measures 6.85:1.

**The Large Field Text Rule.** Cream on pink (3.30:1) and yellow on dark blue (4.19:1) are for large type only: the bridge statement and the closing ampersand.

**The Whole Field Rule.** Colour arrives as whole full-bleed sections that meet on a hard edge. A section is cream, pink, dark blue or yellow, and its type follows the pairings above.

**The Twelve Percent Rule.** The lattice is `pattern.png` at 12% opacity, centred from the top and tiled at max(62rem, 100%) wide. It appears only behind cream or pink, never dark blue or yellow. It keeps its own pink and yellow on cream and is filtered to white on pink. Framed sheets sit on solid cream above it.

## Typography

**Display Font:** Vienna Romance (with Libre Baskerville, serif)
**Body Font:** Libre Baskerville (with Georgia, serif)

**Character:** A formal copperplate script set against a sturdy, generously leaded book serif, exactly as the invitation pairs them. The script is ceremony; the serif is information.

### Hierarchy
- **Display** (400, clamp(4.75rem, 25vw, 7rem), 1.2): The couple's names alone in the hero, "Adhil" and "Sona", one name per line around the ampersand, never wrapped.
- **Headline** (400, clamp(3.25rem, 16vw, 4.5rem), 1.2): Event names. A connective such as "Followed by" sits inside the heading at 0.5em.
- **Title** (400, clamp(2.25rem, 10vw, 3.25rem), 1.2): Script section headings; the keepsake heading and the closing names run larger at clamp(2.75rem, 12vw to 13vw, 4rem).
- **Name** (400, clamp(2rem, 9vw, 2.75rem), 1.2): A person's name inside a framed sheet, and the names on the opening card.
- **Figure** (400, clamp(1.875rem, 8vw, 2.5rem), 1.35): Event time, in the roman serif. Countdown numerals use clamp(1.5rem, 7vw, 2.25rem) with tabular lining figures.
- **Figure Small** (400, clamp(1.75rem, 8vw, 2.25rem), 1.1): The numerals in the hero's date row.
- **Statement** (400 italic, clamp(1.5rem, 6vw, 1.875rem), 1.45): A single sentence on a colour field, at 24ch and balanced.
- **Venue** (400, clamp(1.0625rem, 4.4vw, 1.25rem), 1.4): Venue names, followed by the place in body italic.
- **Body** (400, 0.9375rem, 1.75): Running text and family details, regular or italic, usually centred within 24ch to 26ch for short invitation lines. Short italic lines step between 0.8125rem and 1.0625rem.
- **Label** (400, 0.6875rem, 0.2em, uppercase): Event dates and the date on the opening card.
- **Button** (400, 0.6875rem, 0.16em, uppercase): All button text.
- **Nav** (400, 0.6875rem, 0.14em, uppercase): Links in the sticky bar.
- **Label Small** (400, 0.625rem, 0.12em to 0.2em, uppercase): The invitation's own opening line, the words and event links of the date row, and countdown units. This is the smallest type in the system.

### Named Rules
**The Soft Scale Rule.** The whole scale stays small for a softer, more elegant feel, with body at 0.9375rem and nothing below 0.625rem. Hierarchy comes from the script and from a change of cut, not from sheer size.

**The Script Is For Names Rule.** Vienna Romance sets names and headings only, with a hairline stroke of 0.012em in the text colour so its thin strokes hold on screen. Anything a guest must read to act is in Libre Baskerville.

**The Three Cuts Rule.** Libre Baskerville appears in regular, italic and uppercase with tracking, all at weight 400. Emphasis comes from size, italic or a change of field, not from bold.

**The Caps Carry Facts Rule.** Tracked capitals carry dates, event labels and the invitation's own words. They never become an invented label above a heading.

## Layout

One centred column reads as a single sheet on phones, and the same sheet widens rather than rearranges. Above 860px, the hero, the events and the keepsake split into two columns (1.1fr / 0.9fr, 1fr / 1fr and 0.8fr / 1.2fr), with event details divided from the title by a yellow hairline and 3rem of padding. Content stays within 66rem to 70rem, and text remains centred.

Horizontal space comes from the gutter (clamp(1rem, 5vw, 4rem)). Sections breathe at 5.5rem on phones and 7.5rem from 860px, with pink bridge and closing bands tighter at 4rem to 4.5rem. Inside a section, the stack steps through 0.75rem, 1.25rem, 1.75rem, 2.25rem and 2.75rem.

The hero frame runs flush to the viewport edges directly under the bar, while the hero's content keeps to the gutter inside it.

The sticky bar is 3.75rem tall, and anchors land 4.5rem below the top so a heading is never tucked under it. Below 375px the bar compresses its links rather than wrapping them.

**The Logistics In Reach Rule.** Date, time, venue, directions and calendar sit together in one block, so nothing a guest needs is more than a tap away.

## Elevation & Depth

Depth is mostly tonal: fields and frames are flat and stacked by colour change. Shadows exist only under paper objects, as long, soft, negative-spread falloff tinted with Deep Ink Blue. The sticky bar separates with a 1px hairline of dark blue at 22%, not a shadow.

### Shadow Vocabulary
- **Print** (`box-shadow: 0 1.5rem 2.75rem -1rem color-mix(in srgb, #2f3b43 55%, transparent)`): The mounted portrait photograph.
- **Tucked Card** (`box-shadow: 0 1rem 1.75rem -0.5rem color-mix(in srgb, #2f3b43 50%, transparent)`): The small invitation tucked against the portrait.
- **Keepsake Card** (`box-shadow: 0 1.75rem 3rem -1.25rem color-mix(in srgb, #2f3b43 60%, transparent)`): The full invitation on the yellow field.

### Named Rules
**The Paper Lifts Rule.** Only objects that would be physical paper carry a shadow, and only those objects tilt (between 1.5deg and 5deg, easing toward level on hover). The hero's stack of prints may also lean in perspective toward the pointer, up to 3.5deg on each axis. Fields, frames, sheets and buttons stay flat.

## Shapes

Paper is square. Frames, sheets, buttons and photographs have no radius; the only circles are the two icon-only controls (50%, 3rem), which sit outside the sheet.

The signature shape is the rule frame: a dark blue border of max(1.5px, corner × 0.009) with the invitation's flower art in each corner and a small crown flower at the top rule. The corner art comes from a single tall drawing, cropped with an aspect ratio of 182 / 253 at the top and 182 / 198 at the bottom, and mirrored on the right. Leaf sprays grow in from a section's edge.

**The Landing Rule.** Flower corners use offsets proportional to the corner measure (top −0.033, bottom −0.008, sides −0.03) so the rule drawn in the artwork lands on the CSS frame line at every size. When a frame changes its corner measure, it inherits these ratios unchanged, and the frame's border thickness is derived from the same measure.

**The Small Crown Rule.** The crown is only ever small (3.5rem), whatever it heads. On the reception and footer, where no frame carries it, it sits centred on the seam with the section above.

## Components

### Buttons
Quiet rectangles of stationery, firm and legible.
- **Shape:** Square corners (no radius), 3rem minimum height, 1.5rem side padding.
- **Solid:** Dark blue with cream text and a matching 1px border. **Line:** a 1px dark blue outline with dark blue text.
- **Deep:** Deep Ink Blue with cream text, for the yellow field.
- **On dark blue:** Solid inverts to cream with dark blue text; Line becomes a cream outline.
- **Hover / Focus:** Colour-only transitions over 0.25s on the expo ease. Solid deepens; Line fills; on dark blue, Solid turns yellow with Deep Ink Blue text. Focus is a 2px outline in the current colour at a 3px offset, as everywhere.

### Rule Frame
The card itself: the opening doors, the hero frame and the families sheet. Each uses the Landing Rule. The hero frame has no ground of its own, runs flush to the viewport edges on a corner measure of clamp(5rem, 23vw, 10rem), and hangs its crown from the top rule. The families sheet has a solid cream ground with generous padding (6.5rem above and 7rem below on phones; 6rem block and 5rem inline from 860px) and its crown centred on the top rule.

### Opening Gate
A full-screen framed card split into two 50.2% doors with the frame carried across the join. The monogram traces itself (1.7s), the names, date and solid button settle in afterwards, and on opening the doors slide fully apart over 1.15s on the expo ease. It shows once per session and is skipped when a guest arrives at an anchor.

### Date Row
The hero's dates, set like the invitation's own line: "Sunday & Monday" at right, the numerals "20 & 21" in Figure Small at centre, and "December 2026" at left, in Label Small between dark blue hairlines at 28%. The event links sit below it, each linking to its event as a 2.75rem target, stacked on phones and side by side from 560px with a small pink diamond between them.

### Event Block
Script heading in one half, details in the other: date caps, time as a Figure, venue, italic place, then a directions button and an add-to-calendar disclosure that opens two underlined italic links with 3rem targets. Buttons are 14.5rem wide so the pair aligns.

### Countdown
Four tabular numerals with tiny caps units beneath, set under an italic label and a yellow hairline at 60%.

### Navigation
A 3.75rem sticky cream bar with a monogram at left and tracked caps links at right, each with a 2.75rem touch target. Hover underlines and deepens to Deep Ink Blue.

### Paper Prints
The portrait is mounted on cream with 0.625rem of margin, a 1px dark blue border and a 1.75deg tilt. The invitation is tucked over it at −5deg as a button that opens the lightbox. Prints drift gently with scroll, and the hero's stack leans toward the pointer.

### Lightbox
A native dialog over a Deep Ink Blue backdrop at 88%, showing the whole invitation, closed with a circular cream control or by tapping outside. It lifts in over 0.5s.

### Motion Vocabulary
Script headings wipe left to right over 1.2s; details rise 18px and fade over 0.9s; both begin on entering view, only ever added by script. The hero's stack tilts in perspective (1000px, up to 3.5deg on each axis) toward the pointer on hover-capable devices with a fine pointer when motion is allowed, settling back over 0.6s on the expo ease. Everything but the essential state changes is removed under reduced motion.

## Do's and Don'ts

### Do:
- **Do** set small text as dark blue on cream, cream on dark blue, or Deep Ink Blue (#2f3b43) on yellow.
- **Do** keep the lattice to `pattern.png` at 12%, behind cream or pink only, filtered white on pink.
- **Do** position flower corners with offsets proportional to the corner measure, so the rule in the artwork lands on the CSS frame line.
- **Do** derive frame border thickness from the same corner measure: max(1.5px, corner × 0.009).
- **Do** give colour to whole sections and let them meet on a hard edge.
- **Do** keep the crown at 3.5rem, and centre it on the seam where no frame carries it.
- **Do** keep touch targets at 2.75rem or larger and retain the 2px current-colour focus outline.
- **Do** make every motion optional under reduced motion, leaving the page fully readable, and keep the hero's pointer tilt to hover-capable devices.

### Don't:
- **Don't** set pink text below 24px, or use pink for text on dark blue; below that size it is ornament only.
- **Don't** set small text in dark blue directly on yellow; use Deep Ink Blue.
- **Don't** set the lattice outside the invitation's 10% to 15% range.
- **Don't** put the lattice behind dark blue or yellow.
- **Don't** enlarge the crown past 3.5rem.
- **Don't** position a flower corner with fixed offsets, or change its aspect ratio without redrawing the offsets.
- **Don't** set Vienna Romance for dates, times, venues or actions.
- **Don't** use bold; Libre Baskerville stays at weight 400.
- **Don't** add a small capitalised label above a heading unless it is the invitation's own wording.
- **Don't** add shadow or tilt to fields, frames, sheets or buttons.
- **Don't** round frames, buttons or photographs; the circle is reserved for icon-only controls.
