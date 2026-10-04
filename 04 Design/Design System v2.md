---
tags: [design, design-system, visual-direction, v2]
date: 2026-10-03
status: demo-ready-direction
---
# Design System v2 — Editorial IT Academy

Back to [[00 Home]] · Inspired by [[Mood & References]] and the supplied Uni template brief · Strategy: [[Strategy v2 - IT Academy]]

## Direction

Adapt the ThemeREX Uni language—oversized editorial type, full-bleed human photography, asymmetrical collages, marquees, counters, stickers, flat square cards, and generous whitespace—for a credible online IT academy. Avoid the rejected v1 visual: no diagram-led hero, no card-wall homepage, no single-course framing.

## Palette decision

Keep the template’s warm editorial base, but replace orange/yellow as the main identity with deep navy and one electric cyan accent. Cream makes photography and long-form content feel premium and human; navy supplies authority; cyan signals technology without turning the site into a generic dark dashboard.

| Token | Hex | Use |
|---|---|---|
| `--paper` | #FBF9F5 | Main background |
| `--sand` | #F1EEE3 | Alternating bands / course surfaces |
| `--navy` | #071A35 | Headings, footer, dark panels |
| `--navy-soft` | #12345A | Secondary dark surface |
| `--electric` | #00B8E6 | Primary accent, links, data highlights |
| `--signal` | #FFCE3A | Sticker/scribble/attention accent only |
| `--ink-muted` | #5E6874 | Secondary copy |
| `--white` | #FFFFFF | Cards and reversed type |

WCAG AA rule: use navy text on paper/sand; white on navy; navy on electric for buttons. Do not use white text on electric or muted text for essential copy. Verify final combinations with a contrast checker.

## Typography

Agency mandate: **Poppins** for headings and body. Use 500–600 headings with tight tracking to evoke the compact confidence of Lexend while retaining a single dependable family for Sinhala/English implementation. Use 400 body; do not add DM Sans unless a later language/font test proves a measurable benefit.

| Style | Desktop | Mobile | Weight / line |
|---|---:|---:|---|
| H1 | clamp(3.5rem, 6vw, 5.25rem) ≈ 84px | 42px | 500–600 / .95 |
| H2 | clamp(2.6rem, 4vw, 4rem) | 34px | 500–600 / 1.05 |
| H3 | 2.2rem | 28px | 600 / 1.1 |
| H4 | 1.45rem | 22px | 600 / 1.2 |
| Body | 1rem | 1rem | 400 / 1.65 |
| Eyebrow | 11–12px | 11px | 600 / uppercase, 0.12em |

## Layout and controls

- Container: max 1300px; 70px desktop gutters; 24px mobile gutters; 12-column grid; 24px gutters.
- Spacing: 8px base; section padding 144px desktop / 80px mobile; allow large quiet zones.
- Buttons: square/4px radius, min 44px height, 15px × 30px padding, Poppins 600. Primary navy with electric underline/edge or electric with navy text; secondary outlined navy; text link with arrow.
- Cards: flat, square corners, no default shadow; 1px translucent border where needed. White course cards on sand bands.
- Header: transparent over hero, becomes paper/navy sticky header after scroll; compact mobile accordion menu.

## Homepage composition

1. Full-bleed hero: smiling Sri Lankan learner/instructor in an online class, dark navy overlay, editorial H1, “Explore programs” CTA, small online-learning proof card, avatar cluster/counter only when verified.
2. Intro split: “Build your next capability” + four benefits: live guidance, practical labs, flexible replay, career pathways.
3. Asymmetric academy story collage.
4. School/programme discovery band with three large image cards.
5. Tech-stack/partner logo marquee (verified logos only).
6. Learning experience: laptop/live class/lab collage with counters (only sourced numbers).
7. Founder/faculty portrait grid.
8. Giant marquee: “LEARN PRACTICALLY. MOVE FORWARD.”
9. Student/community proof (real stories only; otherwise use “What a learner journey includes”).
10. News/events staggered cards.
11. Strong electric/ signal CTA band: “Find your next path.”
12. Navy footer with schools, programmes, admissions, contact, legal.

## Motion and interaction

Fade-up reveal for sections/images (0.6–0.8s, ease-out); odometer counters only for verified values; slow logo/text marquees with pause-on-hover; subtle parallax on scribbles and collage layers; 1.05–1.08 image hover zoom; arrow/button colour transition; page-title image banner with breadcrumb on inner pages; accordions and filters keyboard accessible. Respect `prefers-reduced-motion`: no autoplay marquee/counter/parallax, instant reveals, functional sliders only.

## Component inventory

Header/mega-menu; page-title banner; breadcrumb; hero; programme card; school card; filter bar; programme metadata strip; roadmap/stepper; batch/schedule table; fee/payment card; lab preview; LMS feature row; faculty card; founder profile; testimonial/story card; event/news card; FAQ accordion; application form; WhatsApp/contact float; marquee; counter; sticker/scribble decoration; footer; 404.

## Image art direction

Commission/source real, diverse Sri Lankan-context photography: live online class; learner on laptop at home; instructor speaking to camera; router/switch and lab gear; cyber/security practice environment; coding screens shown as authentic work, not fake terminal wallpaper; peer collaboration; certificates/celebration; graduation/community moments; Colombo and regional learner context. Use wide 16:9 hero/section crops, portrait 4:5 faculty, 4:3 news, and close-up detail shots. Every image needs meaningful alt text; decorative stickers are `aria-hidden`.

## Demo content treatment

Use visible `Demo info — to be confirmed` labels beside placeholder programme durations, faculty, metrics, fees, partners, testimonials, and accreditation. Never present mock numbers as proof. Image placeholders should be labelled by intended art direction, not random stock imagery.

## Summary

The visual system preserves Uni’s editorial premium feel while making technology the subject: human photography builds trust, school/programme structure creates scale, and navy/electric accents give SLTSC a clear, accessible signature.
