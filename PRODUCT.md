# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated: Astro with static output, on a free static host (Cloudflare Pages unless the couple prefer another). There are no server features to support, and Astro's image pipeline keeps the photo gallery light on phones. No domain or host has been specified.

## Users

Wedding guests invited by the two families, who receive the link on WhatsApp and open it mostly on their phones. They want to know when and where each event is, get there, save the dates, and enjoy the couple's story and photos.

## Product Purpose

A wedding website for Adhil Naufal and Sona Haris that extends their invitation. Success means a guest who opens the link knows which events are when and where, can get directions, can save both events to their calendar, and feels warmly invited.

## Positioning

This is the online companion to this couple's own invitation: two events on consecutive days in two cities, hosted together by two named families.

## Operating Context

- Shared as an open link, mainly through WhatsApp. Anyone with the link can view it.
- The site is hidden from search engines, because it carries family names and venue details.
- Guests may open it on the road or at short notice, including on the day itself.

## Capabilities and Constraints

Confirmed functionality:

- Event details for both events, with map links and directions.
- Add-to-calendar for each event, and a countdown.
- The couple's story and a photo gallery.

Out of scope: RSVP, a guest wishes wall, personal per-guest links, and password protection.

Event facts, from the wording supplied by the groom's family (these override the invitation where they differ):

| | Wedding | Reception |
|---|---|---|
| Date | Sunday 20 December 2026 | Monday 21 December 2026 |
| Time | 12:00 PM | 6:00 PM |
| Venue | Camelot Convention Centre, Alapuzzha | Walk Avenue Convention Centre, Thoppumpady, Kochi |

Timing constraint: the first event is on 20 December 2026, so the site must be live well before then.

Open decisions:

- Domain or URL.
- Exact map locations for both venues.
- Music on opening: waiting on the client. Build so a track can be added or left out.

## Brand Commitments

The site's theme is inspired by the invitation (`invite card@2x.png`), which the couple's designer made. Binding:

- Palette: #DF617E pink, #4B5B65 dark blue, #F4BD8D yellow, #FFFBEE cream (background).
- Type: Vienna Romance is the main script; Libre Baskerville carries all supporting text in all caps, italic and regular.
- Pattern: `pattern.png`, the mandala lattice, used at 10–15% opacity, and only behind cream or pink backgrounds (never dark blue or yellow).
- Crown (`flowers 1.svg`): only at a small size; on the reception and footer it sits on the seam with the section above.
- The hero names read "Adhil & Sona"; full names appear in the families section.
- Spelling: "Centre" and "Alapuzzha", confirmed by the site's designer.
- The site borrows its content and structure from the reference (ashwinloveakshaya.talk4fun.net, captured in `references/`), not its theme.

Names and wording:

- Adhil Naufal, S/O PK Naufal & Asiya Naufal, Grandson of Late Kunju Muhammad & Late Sabira.
- Sona Haris, D/O Haris Hassan & Saleena Haris, Granddaughter of Late Hassan Koya & Late Khadeeja Beevi.
- Opens with the Bismillah in Arabic calligraphy.
- "Together with our families," / "cordially invite you to join the auspicious occasions" / "Your presence and blessings are our greatest joy."
- "With warm regards, Afraz · Nazneen · Nihala"

The invitation prints "FAMILES" and "WIth"; these are typos and should not be carried into the site.

## Evidence on Hand

- `invite card@2x.png`: names, family details, event details and artwork, as a single flattened image.
- `AS Monogram Logo.svg` and `AS Monogram Logo@2x.png`: the couple's monogram.
- `flowers 1.svg`, `flowers 2.svg`, `flowers 3.svg`, `bismillah.svg`: the invitation's artwork as vectors.
- `fonts/`: Vienna Romance and Libre Baskerville (Regular, Italic, Bold), supplied for the site.
- `IMG_6074-Picsart-AiImageEnhancer.jpg.jpeg`: portrait of the couple at night on a waterfront.
- Not yet supplied: the couple's story and any further photos. Do not write a story, invent details about the couple, or use stand-in photos as if they were real.

## Product Principles

1. Logistics are never buried: when, where and how to get there stay reachable within a tap.
2. Two events stay distinct. A guest must never confuse the day, time or city of the wedding and the reception.
3. It should work well on a phone opened from WhatsApp, including on a weak connection.
4. Names and family details are reproduced exactly, with the respect the invitation gives them.
5. Only the couple's real words and photos represent them.
