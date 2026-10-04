---
tags: [build, tech, seo, plan]
---
# Tech Stack & Build Plan
Back to [[00 Home]] · Design: [[Design System]] · Pages: [[Page Wireframes]]

## Phase 1: HTML demo (for client approval)
- Bootstrap 5 + Font Awesome + Poppins; JetBrains Mono for code
- Files in `demo/`; data in `assets/data.js` (courses, batches, contact)
- Fully working UI: filters, accordions, batch table, forms (mock submit), WhatsApp links
- Responsive, WhatsApp float on every page
- Use placeholders for ⏳ items

## Phase 2: WordPress + Elementor
- Custom Post Types: **Courses**, **Batches** (relation to Course)
- ACF fields: exam code, level, hours, mode, fee (LKR), instalments, prerequisites, outline, syllabus PDF; Batch: start date, days/time, mode, seats left
- Elementor templates for archive/single course; global tokens from [[Design System]]
- Child theme for custom code; no hardcoded local domain URLs
- Bilingual: English + Sinhala (plugin choice ⏳, e.g. a multilingual plugin; decide at build)

## SEO
- Schema: EducationalOrganization, Course (with CourseInstance for batches), FAQPage, BreadcrumbList
- Local SEO: Google Business Profile ⏳, NAP consistency, Google Maps embed
- Target keywords: "CCNA course Sri Lanka", "CCNA classes Colombo" ⏳ (confirm city), "cybersecurity course Sri Lanka", "CCNP course Sri Lanka", "ethical hacking course Sri Lanka"
- Blog: certification guides, exam tips, Pearson VUE in Sri Lanka
- og tags, sitemap.xml, clean URLs, hreflang for Sinhala

## Performance
Image optimization (WebP), lazy loading, font subsetting/preload, minimal JS, caching, Core Web Vitals targets.

## Security and forms
- OWASP basics: input validation/escaping, nonces, prepared queries, least privilege, updates
- Spam: honeypot + Turnstile/reCAPTCHA, rate limiting
- No personal data in URLs; privacy policy and consent text
- Admin 2FA, login limiting, backups

## Hosting / Cloudflare
Domain already behind Cloudflare. Plan: Cloudflare DNS/CDN/WAF, SSL full strict, caching rules; hosting provider ⏳ Waiting on client.

## Milestones
- [ ] Client answers [[Content Checklist (Waiting on Client)]]
- [ ] Design system approved (color, logo)
- [ ] Phase 1 demo built
- [ ] Demo approved by client
- [ ] WordPress staging set up
- [ ] CPTs + ACF built
- [ ] Pages built in Elementor
- [ ] Sinhala content added
- [ ] SEO + schema configured
- [ ] Security + performance pass
- [ ] Desktop and mobile tests, check for leftover localhost/mixed-content URLs
- [ ] Go-live + redirect checks
- [ ] Post-launch monitoring
