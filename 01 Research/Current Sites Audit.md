---
tags: [research, audit]
date: 2026-10-03
---
# Current Sites Audit
Back to [[00 Home]]

## sltsc.lk (client academy site)
| Item | Finding |
|---|---|
| State | Static "Under Construction" page, 4.5 KB |
| Stack | Cloudflare + LiteSpeed |
| Routes | /about, /courses, /contact all return 404 |
| Title | "SLTSC Academy \| Cybersecurity & CCNA Training" |
| Tagline | Master networking & cybersecurity; expert-led CCNA and Cybersecurity programs for future-ready tech professionals |
| Name | Full meaning of "SLTSC" unknown ⏳ Waiting on client |
| Logo | None (text + emoji) |
| Colors | #0a1a2f navy bg, #00aaff blue, #00ffcc aqua; text #eaf3ff #cfd8e3 #9ed7ff #7a8ea1 |
| Font | Poppins 400/600 |
| Contact | Only a Cloudflare-obfuscated email |
| Missing | Phone, WhatsApp, socials, address, courses, fees, trust signals, og tags, schema |

## ynh.lk (Yasiru's personal site)
| Item | Finding |
|---|---|
| State | Static "Coming Soon" with a fake rolling countdown |
| Title | "YNH.lk \| Professional IT Education" |
| Claims | "Cisco Certified Instructor" badge; 12+ years networking/cyber; "student-count claim worldwide"; 100% practical focus |
| Phone | 071 8 000 849 |
| Colors | #0a0e17, #141b2d bg; #0084ff blue; #00e676 green |
| Fonts | Orbitron + Roboto Mono |
| Cross-links | None to sltsc.lk |
| Certs | CCNA/CCNP/CCIE not listed ⏳ confirm |

> [!warning] Unverified claims
> "student-count claim" and "12+ years" are client claims. Do not publish until evidence is supplied (see [[Content Checklist (Waiting on Client)]]).

> [!warning] Fake countdown
> The rolling countdown is a dark-pattern risk. Drop it in the new build.

## Takeaways
- Both sites are blank slates; the redesign is greenfield.
- Palettes are close but differ; unify under [[Design System]].
- Fonts differ (Poppins vs Orbitron/Roboto Mono); Poppins for SLTSC, mono only for CLI snippets.
- Brand split needs a decision: [[Positioning & Audience]].
