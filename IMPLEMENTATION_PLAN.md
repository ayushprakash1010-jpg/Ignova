# IGNOVA website update: implementation plan

**Status:** Proposal for review. This file is the requested deliverable; no site code or live content has been changed.

## 1. Which instructions come from where

| Source | What it says | How the plan treats it |
|---|---|---|
| Your request | Inspect the material and produce a plan explaining the changes and remaining needs. | This turn stops at the plan. |
| WhatsApp messages from your senior | Match the website's design, colors, and layout to the attached webpage reference; take website content from the updated presentation; avoid wording like “your priority.” | Treat these as project requirements for the eventual website work. The message asking for implementation soon does not change your request for a plan in this turn. |
| Website screenshot | Shows the desired homepage composition and visual style. | Use as a visual reference, not as the sole source of copy. Its “Start with your business priority” line conflicts with the wording instruction and should not be copied as-is. |
| Executive presentation | Contains the brand story, service descriptions, process, measures, client experience, and closing message. | Use as the content source across relevant pages; do not try to put all 18 slides onto the homepage. |

## 2. Current site findings

- The project is a Next.js App Router site with Home, About, Services, three service detail pages, Our Approach, and Contact routes.
- The homepage already contains some of the same claims and service topics, but its hero is text-and-dossier based, its service cards are text-only, and its sections do not follow the screenshot's sequence.
- The current visual system uses navy, orange, white, and cream. The header is already light, but the footer is navy. Inter, Manrope, and Playfair Display are available; the reference calls for a more editorial serif-led feel.
- The existing public image assets are logos and small presentation graphics. The presentation includes a 1600×900 graphic and small logo/icon assets, but no suitable set of the four photographs shown in the reference.
- “Business priority” wording currently appears in several route headings, CTAs, descriptions, and the Contact form. The deck itself also uses “Prioritize” and “priority” in some copy, so the precise wording rule needs to be settled before copy migration.
- The Contact form and its API route already exist and should be retained while the page is restyled.

## 3. Proposed website changes

### A. Shared site frame and visual style

- Update the shared header to follow the reference: IGNOVA logo at left, Home / About / Services / Our Approach links, and a compact “Get in touch” action at right. Preserve the existing mobile navigation behavior.
- Apply a warm ivory/cream, deep navy, muted peach, and warm-gray palette; use the existing serif font for prominent editorial headings and the existing sans-serif fonts for navigation and body copy.
- Use generous whitespace, thin dividers, restrained card borders, and square or lightly rounded shapes to match the reference's quieter presentation.
- Change the shared footer to a light background. Place the dark navy closing call-to-action immediately above it, following the screenshot.
- Reuse shared layout/components where practical so the service pages retain a consistent look without forcing the homepage layout onto detailed content pages.

### B. Homepage layout and content

Rebuild the homepage sections in this order:

1. **Split hero:** navy copy panel on the left with “Enabling execution & impact.” and concise supporting copy; industrial photograph on the right; service and contact links.
2. **Credibility strip:** four metrics from the deck: 50 years of industrial expertise, 1,000+ candidates hired, 8+ years in recruitment, and 12+ major recruitment clients.
3. **Three capability cards:** IGNOVA Triage, IGNOVA Edge, and Project Execution, each with a relevant image, short deck-based description, and a link to its existing detail route.
4. **Performance ambition:** a compact four-column process section using the deck's Diagnose, Prioritize, Execute, and Impact content.
5. **Selected client experience:** industrial consulting and recruitment names, plus the sector list from the deck.
6. **Closing CTA:** use the deck's “Align the mandate. Mobilize expertise. Deliver performance.” message, followed by the light footer.

### C. Content migration by route

| Route | Presentation source | Planned content treatment |
|---|---|---|
| Home | Slides 1–4, 17–18 | Brand statement, metrics, capability overview, performance process, client experience, and closing CTA. |
| About | Slides 1–2, 17 | Keep the firm overview and credibility grounded in deck material; remove unsupported or redundant copy. |
| Services overview | Slides 3–4, 16–17 | Present the three capabilities, shared process, agreed measures, and selected experience. |
| IGNOVA Triage | Slides 5–9 | Organize the existing detail page around learning impact, domain, leadership, and technical development. |
| IGNOVA Edge | Slides 10–11 | Use the deck's search process, advisory scope, hiring outcomes, and measures. |
| Project Execution | Slides 12–15 | Use the five focus areas, transformation areas, on-site execution, and delivery method. |
| Our Approach | Slides 4, 15–16 | Align the process and performance measurement language with the deck. |
| Contact | Slide 18 for CTA language | Keep the form fields, validation, submission flow, and API; update its visual style and wording. |

The current route structure and links can remain. The work is primarily a redesign and content alignment, not a rebuild of the site's routing or contact system.

### D. Wording and claims

- Remove “Start with your business priority,” “Your Priority,” and similar second-person priority prompts from headings, CTAs, descriptions, and form prompts.
- Use the deck's closing line as the default replacement: “Align the mandate. Mobilize expertise. Deliver performance.”
- The deck labels one process step “Prioritize.” Confirm whether the instruction prohibits only “your/business priority” phrasing or every form of the word. If every form is prohibited, rename that step while preserving its stated activity and outcome.
- Keep numeric claims and client names as supplied in the deck, subject to the verification listed below. Do not add claims that are not in the presentation.

## 4. Main implementation areas

- `src/app/page.tsx`: replace the current homepage composition with the reference sequence.
- `src/components/layout/Navbar.tsx` and `Footer.tsx`: align the shared navigation and footer.
- `src/components/ui/`: adjust or add reusable editorial service-card, metric-strip, and process-section components as needed.
- `src/lib/constants.ts`: consolidate approved presentation copy, metrics, capability labels, client names, and process language.
- `src/app/about/`, `src/app/services/`, `src/app/services/triage/`, `src/app/services/edge/`, `src/app/services/project-execution/`, `src/app/approach/`, and `src/app/contact/`: align route copy and styling with the deck and shared visual system.
- `src/app/globals.css` and `src/app/layout.tsx`: tune shared design tokens, typography usage, and site-wide metadata where the approved brand copy changes.
- `public/images/`: add approved, optimized photography for the hero and three capability cards.

## 5. Suggested implementation sequence

1. Confirm scope, wording interpretation, image source, and factual claims.
2. Prepare an approved copy map from the presentation, including the wording exception or replacement for “Prioritize.”
3. Add the selected images and establish shared color, type, spacing, and card styles.
4. Rebuild the homepage to match the screenshot's section order and desktop composition, with responsive stacking for smaller screens.
5. Align the shared header/footer and migrate content across the remaining routes using the slide-to-route map above.
6. Review desktop and mobile page layouts, image crops, links, form behavior, and that no disallowed priority phrasing remains.

## 6. Inputs needed before implementation

1. **Scope:** Should the screenshot's full visual refresh apply to every public route, or should only the homepage match it? This plan assumes every route receives the shared style and deck-aligned copy, with the homepage matching the screenshot most closely.
2. **Wording rule:** Does “don't use word like your priority etc” ban the phrase “your/business priority” only, or the word “Prioritize” too? The screenshot and deck contain the phrase, and the deck uses “Prioritize” as a process label.
3. **Photography:** Supply original/high-resolution images for the factory hero and three capability cards, or approve sourcing licensed imagery. The reference screenshot can guide subject and crop, but is not a suitable source file for production photography.
4. **Claims and names:** Confirm the 50 years, 1,000+, 8+, and 12+ figures and approve display of the client names/logos from slide 17. The deck marks the figures as company-supplied.
5. **Copy fidelity:** Confirm whether the deck should be followed verbatim except for the wording restriction, or whether light editing for web-length headings and descriptions is acceptable.
