# Demo v2 Completeness Repair

## Goal

Complete the static `demo/` experience as a reliable client-review demo. Preserve the documented boundary: confirmed facts may be public; unknown facts remain visibly labelled as demo information.

## Scope

- Repair shared header, mobile navigation, mega-menu, footer, filters, sliders, FAQ, and demo forms.
- Align visible content with `02 Strategy/Client Facts (Confirmed).md`.
- Remove dead navigation targets and stale claims.
- Preserve static HTML/CSS/JavaScript architecture.
- Keep forms local-only; no backend or real submission handling.
- Add lightweight verification for JavaScript syntax, local references, and page loading.

## Content Rules

- Use confirmed founder and CCNA facts.
- Keep next batch, academy email, logo, photos, testimonials, schedules, and secondary-course details labelled `Demo info — to be confirmed`.
- Do not add Cisco logo assets or unsupported accreditation claims.
- Keep Cisco exam and trademark wording within `Cisco Branding Rules.md`.

## Verification

- Run `node --check` for every demo JavaScript file.
- Check local HTML asset references.
- Load every HTML page through headless Chrome.
- Confirm no page-level console/runtime errors.
- Confirm responsive and reduced-motion rules remain intact.
