'use strict';
// Shared helpers + components for the SLTSC static site generator.
const fs = require('fs');
const path = require('path');

const read = name => JSON.parse(fs.readFileSync(path.join(__dirname, 'data', name + '.json'), 'utf8'));
const data = {};
['photos', 'config', 'schools', 'programs', 'faculty', 'testimonials', 'articles', 'events', 'stats', 'about', 'founder', 'programPage', 'schoolPage', 'community']
  .forEach(n => { data[n] = read(n); });

const esc = s => String(s ?? '').replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));

/* ---------- images ---------- */
const UNSPLASH = 'https://images.unsplash.com/';
function photo(key) {
  const p = data.photos[key];
  if (!p) throw new Error('Unknown photo key: ' + key);
  return p;
}
const key = x => (typeof x === 'string' ? x : x.photo);
function src(k, w = 800, h) {
  const p = photo(key(k));
  return `${UNSPLASH}${p.id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ''}&q=76`;
}
/** <img> with explicit size (prevents layout shift). */
function img(k, { w = 800, h, alt, cls = '', eager = false, sizes } = {}) {
  const p = photo(key(k));
  const height = h || Math.round(w * 0.66);
  return `<img${cls ? ` class="${cls}"` : ''} src="${src(k, w, h)}" alt="${esc(alt ?? p.alt)}" width="${w}" height="${height}"${sizes ? ` sizes="${sizes}"` : ''}${eager ? ' fetchpriority="high"' : ' loading="lazy" decoding="async"'}>`;
}

/* ---------- icons (inline sprite) ---------- */
const ICONS = {
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  'arrow-up-right': '<path d="M7 17 17 7M8 7h9v9"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/>',
  laptop: '<rect x="4" y="5" width="16" height="11" rx="2"/><path d="M2 20h20"/>',
  flask: '<path d="M9 3h6M10 3v6L4.5 19a2 2 0 0 0 1.8 3h11.4a2 2 0 0 0 1.8-3L14 9V3M7.500 15h9"/>',
  cap: '<path d="m12 4 10 5-10 5L2 9l10-5Z"/><path d="M6 11.500V16c0 1.500 2.700 3 6 3s6-1.500 6-3v-4.500"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.500 2.500 3.500 5.500 3.500 9S14.500 18.500 12 21c-2.500-2.500-3.500-5.500-3.500-9S9.500 5.500 12 3Z"/>',
  check: '<path d="m5 12.500 4.500 4.500L19 7.500"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h10"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  play: '<path d="M8 5v14l11-7L8 5Z"/>',
  shield: '<path d="M12 3 4 6v6c0 4.500 3.300 8 8 9 4.700-1 8-4.500 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/>',
  code: '<path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 5l-4 14"/>',
  server: '<rect x="3" y="4" width="18" height="6" rx="1.500"/><rect x="3" y="14" width="18" height="6" rx="1.500"/><path d="M7 7h.01M7 17h.01"/>',
  chat: '<path d="M21 12a8 8 0 0 1-11.500 7.200L4 20l1-4.500A8 8 0 1 1 21 12Z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  phone: '<path d="M5 4h4l2 5-2.500 1.500a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/>',
  pin: '<path d="M12 21s7-6.200 7-12a7 7 0 1 0-14 0c0 5.800 7 12 7 12Z"/><circle cx="12" cy="9" r="2.500"/>',
  users: '<circle cx="9" cy="8" r="3.500"/><path d="M2.500 20a6.500 6.500 0 0 1 13 0M16 4.500a3.500 3.500 0 0 1 0 7M18 14.500a6.500 6.500 0 0 1 3.500 5.500"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  award: '<circle cx="12" cy="9" r="6"/><path d="m8.500 14-1.500 7 5-3 5 3-1.500-7"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.500-3.500"/>',
  star: '<path d="m12 3 2.800 5.800 6.200.9-4.500 4.400 1 6.200L12 17.300 6.500 20.300l1-6.200L3 9.700l6.200-.9L12 3Z"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.700 0l3-3a4 4 0 0 0-5.700-5.700l-1 1M14 10a4 4 0 0 0-5.700 0l-3 3a4 4 0 0 0 5.700 5.700l1-1"/>'
};
const icon = (name, cls = '') => `<svg class="i${cls ? ' ' + cls : ''}" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-${name}"/></svg>`;
const sprite = () => `<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><defs>${Object.entries(ICONS).map(([n, d]) => `<symbol id="i-${n}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${d}</symbol>`).join('')}</defs></svg>`;

/* ---------- small pieces ---------- */
const demo = (t = 'Demo info — to be confirmed') => `<span class="tag tag--demo">${esc(t)}</span>`;
const schoolOf = id => data.schools.find(s => s.id === id);
const btn = (label, href, kind = 'primary', extra = '') => `<a class="btn btn--${kind}" href="${href}"${extra}>${label}${kind === 'link' ? '' : ''}</a>`;
const eyebrow = (t, cls = '') => `<span class="eyebrow${cls ? ' ' + cls : ''}">${t}</span>`;

function sectionHead({ eyebrow: e, title, text, action, center = false }) {
  return `<header class="sec-head${center ? ' sec-head--center' : ''}" data-reveal><div>${e ? eyebrow(e) : ''}<h2>${title}</h2></div>${text || action ? `<div class="sec-head__aside">${text ? `<p>${text}</p>` : ''}${action || ''}</div>` : ''}</header>`;
}

function ctaBand({ eyebrow: e, title, actions }) {
  return `<section class="cta"><div class="wrap cta__in" data-reveal><div>${e ? eyebrow(e) : ''}<h2>${title}</h2></div><div class="cta__actions">${actions}</div></div></section>`;
}

function banner({ eyebrow: e, title, intro, crumbs = [], image, cls = '' }) {
  const trail = [['Home', 'index.html'], ...crumbs];
  const nav = `<nav class="crumbs" aria-label="Breadcrumb"><ol>${trail.map(([l, h], i) => i === trail.length - 1 ? `<li aria-current="page">${esc(l)}</li>` : `<li><a href="${h}">${esc(l)}</a></li>`).join('')}</ol></nav>`;
  return `<section class="banner ${cls}"><div class="banner__bg">${img(image, { w: 1800, h: 900, alt: '', eager: true })}</div><div class="wrap banner__in">${nav}${e ? eyebrow(e) : ''}<h1>${title}</h1>${intro ? `<p class="banner__intro">${intro}</p>` : ''}</div></section>`;
}

function programCard(p, { compact = false } = {}) {
  const s = schoolOf(p.school);
  return `<article class="card pcard" data-school="${p.school}" data-level="${esc(p.level)}" data-weeks="${weeksOf(p.duration)}" data-title="${esc(p.title.toLowerCase())}">
  <a class="card__media" href="program-${p.id}.html" tabindex="-1" aria-hidden="true">${img(p.image, { w: 720, h: 460, alt: '' })}<span class="chip chip--float">${esc(s.short)}</span></a>
  <div class="card__body">
    ${p.badge ? `<span class="tag tag--gold">${esc(p.badge)}</span>` : `<span class="card__kicker">${esc(p.level)}</span>`}
    <h3><a href="program-${p.id}.html">${esc(p.title)}</a></h3>
    <ul class="meta"><li>${icon('clock')}${esc(p.duration)}</li><li>${icon('laptop')}${esc(p.mode)}</li></ul>
    <div class="card__foot"><span class="price">${p.fee.startsWith('Demo') ? demo('Demo fee') : esc(p.fee.split(' · ')[0])}</span><a class="arrow-link" href="program-${p.id}.html">View ${icon('arrow')}</a></div>
  </div></article>`;
}
function weeksOf(d) {
  const n = parseInt(d, 10) || 0;
  return /month/i.test(d) ? n * 4 : n;
}

function articleCard(a, feature = false) {
  return `<article class="card acard${feature ? ' acard--feature' : ''}" data-category="${esc(a.category)}"><a class="acard__link" href="article-${a.id}.html">
  <div class="card__media">${img(a.image, { w: feature ? 1000 : 720, h: feature ? 720 : 460, alt: '' })}</div>
  <div class="card__body"><span class="card__kicker">${esc(a.category)}</span><h3>${esc(a.title)}</h3><p>${esc(a.excerpt)}</p><div class="card__foot"><span class="muted">${esc(a.date)} · ${esc(a.read)}</span><span class="arrow-link">Read ${icon('arrow')}</span></div></div></a></article>`;
}

/* ---------- layout ---------- */
const NAV = [['about.html', 'About'], ['schools.html', 'Schools', true], ['programs.html', 'Programmes'], ['online-learning.html', 'How it works'], ['community.html', 'Community'], ['news.html', 'Insights']];

function header(file) {
  const cur = file;
  const isCur = h => (h === cur || (h === 'schools.html' && /^school/.test(cur)) || (h === 'programs.html' && /^program/.test(cur)) || (h === 'news.html' && /^article/.test(cur)) || (h === 'about.html' && /^(founder|faculty)/.test(cur))) ? ' aria-current="page"' : '';
  const mega = `<div class="mega"><div class="wrap mega__in">
    <div class="mega__intro">${eyebrow('Four schools')}<p>Start with a school, then choose a practical next step.</p><a class="arrow-link" href="schools.html">All schools ${icon('arrow')}</a></div>
    ${data.schools.map(s => `<a class="mega__item" href="school-${s.id}.html"><strong>${esc(s.name)}</strong><span>${esc(s.description)}</span></a>`).join('')}
  </div></div>`;
  const links = NAV.map(([h, l, m]) => m
    ? `<div class="nav__has-mega"><a href="${h}"${isCur(h)} aria-haspopup="true">${l}${icon('chevron', 'i--sm')}</a>${mega}</div>`
    : `<a href="${h}"${isCur(h)}>${l}</a>`).join('');
  const mobile = NAV.map(([h, l]) => `<li><a href="${h}">${l}</a></li>`).join('') + '<li><a href="admissions.html">Admissions</a></li><li><a href="contact.html">Contact</a></li>';
  return `<header class="site-header" data-header><div class="wrap site-header__in">
  <a class="brand" href="index.html" aria-label="SLTSC Academy — home"><span class="brand__mark" aria-hidden="true">S</span><span class="brand__text">SLTSC<small>Academy</small></span></a>
  <nav class="nav" aria-label="Primary">${links}</nav>
  <div class="site-header__cta"><a class="btn btn--primary btn--sm" href="admissions.html">Apply now</a><button class="burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="drawer" data-burger>${icon('menu')}</button></div>
  </div>
  <div class="drawer" id="drawer" hidden data-drawer><nav aria-label="Mobile"><ul>${mobile}</ul></nav><a class="btn btn--primary" href="admissions.html">Apply now</a></div></header>`;
}

function footer() {
  const c = data.config;
  return `<footer class="site-footer"><div class="wrap">
  <div class="site-footer__top">
    <div class="site-footer__brand"><a class="brand" href="index.html"><span class="brand__mark" aria-hidden="true">S</span><span class="brand__text">SLTSC<small>Academy</small></span></a>
    <p>Learn with guidance. Practise with real tools. See your next step clearly.</p>
    <form class="subscribe" data-demo-form novalidate><label class="sr-only" for="sub-email">Email address</label><input id="sub-email" type="email" placeholder="Your email address" required autocomplete="email"><button class="btn btn--primary" type="submit">Subscribe</button><p class="form-note" role="status" data-note></p></form></div>
    <div class="site-footer__col"><h4>Academy</h4><ul><li><a href="about.html">About</a></li><li><a href="founder.html">Founder</a></li><li><a href="faculty.html">Faculty</a></li><li><a href="schools.html">Schools</a></li></ul></div>
    <div class="site-footer__col"><h4>Learn</h4><ul><li><a href="programs.html">Programmes</a></li><li><a href="online-learning.html">How it works</a></li><li><a href="admissions.html">Admissions</a></li><li><a href="faq.html">FAQs</a></li></ul></div>
    <div class="site-footer__col"><h4>Connect</h4><ul><li><a href="tel:+${c.whatsapp}">${esc(c.phone)}</a></li><li><a href="https://wa.me/${c.whatsapp}">WhatsApp</a></li><li><a href="community.html">Community</a></li><li><a href="contact.html">Contact</a></li></ul></div>
  </div>
  <p class="site-footer__legal">Content marked <strong>Demo info</strong> is placeholder text, to be confirmed by SLTSC. SLTSC Academy is an official Cisco Networking Academy. Cisco, CCNA and Cisco Networking Academy are trademarks of Cisco Systems, Inc.</p>
  <div class="site-footer__base"><span>© 2026 SLTSC Academy · Demo build</span><a href="#top">Back to top ${icon('arrow-up-right', 'i--sm')}</a></div>
  </div></footer>
  <a class="wa" href="https://wa.me/${c.whatsapp}" aria-label="Chat with SLTSC Academy on WhatsApp">${icon('chat')}</a>`;
}

/** Full HTML document. */
function layout({ file, title, description, body, hero = false }) {
  const t = title === 'SLTSC Academy' ? 'SLTSC Academy — Learn IT for what’s next' : `${title} | SLTSC Academy`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(t)}</title>
<meta name="description" content="${esc(description)}">
<meta name="theme-color" content="#0f1623">
<script>document.documentElement.classList.add("js")</script>
<meta property="og:title" content="${esc(t)}"><meta property="og:description" content="${esc(description)}"><meta property="og:type" content="website">
<link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="preconnect" href="https://images.unsplash.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400..700;1,9..40,400&family=Lexend:wght@400..700&display=swap">
<link rel="stylesheet" href="assets/css/site.css">
</head>
<body class="${hero ? 'has-hero' : ''}" id="top">
${sprite()}
<a class="skip" href="#main">Skip to content</a>
${header(file)}
<main id="main">
${body}
</main>
${footer()}
<script src="assets/js/site.js" defer></script>
</body>
</html>
`;
}

module.exports = { data, esc, photo, src, img, icon, demo, schoolOf, btn, eyebrow, sectionHead, ctaBand, banner, programCard, articleCard, layout, weeksOf };
