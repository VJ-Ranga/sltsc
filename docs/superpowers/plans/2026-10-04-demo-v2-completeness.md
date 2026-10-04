# Demo v2 Completeness Repair Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make every `demo/` page load cleanly and behave consistently as an accurate client-review demo.

**Architecture:** Keep static HTML/CSS/JavaScript. Centralize confirmed content in `assets/js/data.js` and shared behavior in `main.js`/`site-fixes.js`; keep page-specific rendering in existing page scripts. Add one Node verification script without adding dependencies.

**Tech Stack:** HTML, CSS, browser JavaScript, Node.js, Google Chrome headless.

## Global Constraints

- Unknown client data stays labelled `Demo info — to be confirmed`.
- Do not add backend, real form submission, Sinhala copy, Cisco logo assets, or unsupported claims.
- Use confirmed founder and CCNA facts from `02 Strategy/Client Facts (Confirmed).md`.
- Preserve responsive behavior, keyboard access, visible focus, and reduced-motion behavior.

### Task 1: Establish automated static checks

**Files:**
- Create: `demo/verify-demo.js`

- [ ] Check every JavaScript file with `node --check` from shell.
- [ ] Verify every local `href` and `src` in HTML resolves, ignoring anchors, templates, and external URLs.
- [ ] Report dead `href="#"` links outside skip links.
- [ ] Exit non-zero when any check fails.

### Task 2: Repair shared navigation and footer behavior

**Files:**
- Modify: `demo/assets/js/main.js`
- Modify: `demo/assets/js/site-fixes.js`
- Modify: `demo/assets/css/style.css`

- [ ] Ensure mobile close button resets `aria-expanded` and `aria-hidden`.
- [ ] Ensure menu closes on navigation, Escape, outside click, and close button.
- [ ] Ensure mega-menu links remain keyboard reachable and close after focus leaves.
- [ ] Replace unavailable social placeholders with non-link labelled `Demo link — to be confirmed` text.
- [ ] Add `loading="lazy"` to non-hero injected images.
- [ ] Preserve reduced-motion behavior.

### Task 3: Repair forms and interactive page scripts

**Files:**
- Modify: `demo/assets/js/page-contact.js`
- Modify: `demo/assets/js/page-faq.js`
- Modify: `demo/assets/js/page-programs.js`
- Modify: `demo/assets/js/page-community.js`
- Modify: `demo/assets/js/page-news.js`
- Modify: affected HTML form shells

- [ ] Keep demo forms local-only and show clear local-demo confirmation.
- [ ] Add accessible invalid state and error cleanup after correction.
- [ ] Ensure all filters handle missing controls without throwing.
- [ ] Ensure article routes show a useful not-found state.
- [ ] Ensure FAQ tabs and search expose active state to assistive technology.

### Task 4: Align content and page structure

**Files:**
- Modify: `demo/assets/js/data.js`
- Modify: `demo/assets/js/data-founder.js`
- Modify: `demo/assets/js/data-programs.js`
- Modify: `demo/index.html`
- Modify: affected inner-page HTML files

- [ ] Keep confirmed CCNA details: three modules, eight months, LKR 31,500, instalments, next batch unannounced.
- [ ] Keep confirmed founder history and credentials.
- [ ] Mark all secondary course, testimonial, schedule, image, and contact placeholders.
- [ ] Fix unclosed sections and missing semantic labels.
- [ ] Remove stale claims and dead social/share targets.

### Task 5: Verify every page

**Files:**
- Modify: `demo/verify-demo.js` if checks need correction.

- [ ] Run `node --check` on all demo JavaScript files.
- [ ] Run `node verify-demo.js` and require zero failures.
- [ ] Load every HTML page through headless Chrome.
- [ ] Capture console/runtime errors and fix all project-owned errors.
- [ ] Re-run photo verification and confirm no duplicate registry IDs.
