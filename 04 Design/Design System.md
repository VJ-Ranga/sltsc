---
tags: [design, design-system, tokens]
---

> [!warning] Superseded by v2 — see [[Client Facts (Confirmed)]] and [[Demo v2 Build]]

# Design System
Back to [[00 Home]] · Mood: [[Mood & References]] · Build: [[Tech Stack & Build Plan]]

Order of work: 1 Color, 2 Typography, 3 Buttons, 4 Spacing/layout, then components.

> [!warning] Waiting on client
> Brand color confirmation and logo ⏳. Tokens below use current-site colors as defaults.

## 1. Color palette
Dark-tech default, matching current sltsc.lk.

| Token | Hex | Use |
|---|---|---|
| `--navy-900` (base) | #0a1a2f | Page background (from current site) |
| `--navy-800` | #0f2440 | Cards, header |
| `--navy-700` | #16315a | Borders, hover surfaces |
| `--primary` (recommended) | #00aaff | Links, primary accents on dark (existing site color) |
| `--primary-alt` (generic placeholder) | #1A56DB | Light sections, buttons on white |
| `--accent` | #00ffcc | Highlights, terminal cursor, success-adjacent glow. Use sparingly |
| `--text` | #eaf3ff | Body on dark |
| `--text-muted` | #9ed7ff / #cfd8e3 | Secondary text |
| `--text-dim` | #7a8ea1 | Captions (large/non-essential only) |
| `--success` | #16a34a | Seats available, confirmations |
| `--warning` | #f59e0b | Few seats left |
| `--error` | #dc2626 | Form errors, danger |
| `--light-bg` | #f4f7fb | Light-section alternative |
| `--light-text` | #0a1a2f | Text on light |

**Recommendation:** use **#00aaff** as the primary (continuity with the live site, strong on navy). Keep **#1A56DB** for light sections and as the fallback if the client supplies no brand color. Confirm with client ⏳.

Contrast notes (approximate, verify with a checker before build):
- #00aaff on #0a1a2f is about 6.9:1: passes AA for text.
- White text on #00aaff is about 2.5:1: fails. Use navy text on cyan buttons.
- #1A56DB on #0a1a2f is under 3:1: do not use for text on dark.
- White on #1A56DB is about 6:1; #1A56DB on white is about 6:1: passes AA.
- #7a8ea1 on navy is ~5.2:1 and passes WCAG AA for normal text; use for captions (large/non-essential only).
- Accent #00ffcc: decorative/large text only, never the only signal.

## 2. Typography
- Font: **Poppins** (400, 500, 600, 700). Mono: **JetBrains Mono** (400, 500) for CLI snippets and terminal hero only.
- Avoid Orbitron (ynh.lk) for body; at most a single display use on ynh.lk.

| Style | Size | Weight | Line height |
|---|---|---|---|
| h1 | 48px / 3rem (mobile 36px) | 700 | 1.15 |
| h2 | 36px / 2.25rem (mobile 28px) | 600 | 1.2 |
| h3 | 28px / 1.75rem | 600 | 1.25 |
| h4 | 22px / 1.375rem | 600 | 1.3 |
| h5 | 18px / 1.125rem | 600 | 1.4 |
| h6 | 16px / 1rem | 600 | 1.4 |
| Body | 16px / 1rem | 400 | 1.6 |
| Small | 14px / 0.875rem | 400 | 1.5 |
| Caption | 12px / 0.75rem | 400 | 1.4 |
| Code | 14px / 0.875rem mono | 400 | 1.6 |

Sinhala: pick a Sinhala web font (e.g. Noto Sans Sinhala) and test line height (≥1.7). ⏳ confirm.

## 3. Button system
One component, variants only change color.

| Variant | Background | Text | Border | Use |
|---|---|---|---|---|
| Primary | #00aaff | #0a1a2f | none | Main CTA (Enrol, View courses) |
| Secondary | transparent | #00aaff | 1px #00aaff | Alternate CTA |
| Ghost | transparent | #eaf3ff | none | Tertiary, links-as-buttons |
| Danger | #dc2626 | #fff | none | Destructive only (admin/forms) |

- Radius 8px; padding 12px 24px (small 8px 16px, large 16px 32px); weight 600; min height 44px.
- Hover: lighten 8%, translateY(-1px). Active: darken 8%, no lift.
- Focus: 3px outline #00ffcc, 2px offset, never removed.
- Disabled: 50% opacity, `cursor: not-allowed`, no hover effect.
- WhatsApp button: brand green (#25D366) exception, with dark text.

## 4. Spacing and layout
- Scale (8px base): 4, 8, 16, 24, 32, 48, 64, 96 px.
- Section padding: 64px mobile, 96px desktop.
- Container (Bootstrap 5): 540 / 720 / 960 / 1140 / 1320 px max.
- Breakpoints (Bootstrap 5): sm 576, md 768, lg 992, xl 1200, xxl 1400. Mobile-first.
- Grid: 12 columns, 24px gutter. Cards: 16px radius, 24px padding.

## Components
| Component | Notes |
|---|---|
| Course card | Group badge, title, exam code, duration, mode, fee from, CTA |
| Roadmap stepper | CCST > CCNA > CCNP > CCIE with cyber and automation branches; current/next states |
| Batch table | Responsive; collapses to cards on mobile; seats-left chip |
| Badge wall | Credly badges, TVEC ⏳; verified only |
| Testimonial | Photo, name, course, quote; only real ⏳ |
| Terminal-style hero element | Mono font, fake CLI session (`Router# show ip route`), subtle blink; decorative, `aria-hidden` |
| WhatsApp float | Bottom-right, every page, prefilled message per course |
| Lead form | Short, inline validation, spam protection |
| FAQ accordion | Accessible, schema-ready |

## Accessibility
WCAG AA contrast, visible focus, semantic HTML, alt text, reduced-motion respected for terminal animation, 44px touch targets.
