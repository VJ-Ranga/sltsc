(function () {
  if (!document.querySelector('link[href*="shell.css"]')) {
    const l = document.createElement('link'); l.rel = 'stylesheet'; l.href = 'assets/css/shell.css?v=6'; document.head.append(l);
  }
  const site = window.SLTSC;
  const $ = (s, c = document) => c.querySelector(s);
  const link = (href, label) => `<a href="${href}">${label}</a>`;
  const brand = '<a class="nx-brand" href="index.html" aria-label="SLTSC Academy home"><span class="nx-brand-mark">S</span><span>SLTSC<i>.</i></span></a>';

  function header() {
    const el = $('#site-header'); if (!el) return;
    const cur = location.pathname.split('/').pop() || 'index.html';
    const nav = (h, l) => `<a href="${h}"${cur === h ? ' aria-current="page"' : ''}>${l}</a>`;
    el.innerHTML = `<div class="nx-top"><div class="nx-c"><span><b>Official Cisco Networking Academy</b> · Online-first IT learning</span><nav aria-label="Utility"><a href="tel:+94718000849">${site.config.phone}</a><a href="https://wa.me/${site.config.whatsapp}">WhatsApp</a><a href="faq.html">Help &amp; FAQs</a><a href="contact.html">Contact</a></nav></div></div><header class="nx-header"><div class="nx-c nx-bar">${brand}<nav class="nx-nav" aria-label="Primary navigation">${nav('about.html', 'About')}<div class="nx-dd"><button type="button" aria-haspopup="true">Schools<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></button><div class="nx-dd-panel">${site.schools.map(s => `<a href="${s.future ? 'school-data.html' : `school-${s.id}.html`}"><strong>${s.name}</strong><span>${s.description}</span></a>`).join('')}</div></div>${nav('programs.html', 'Programmes')}${nav('online-learning.html', 'How it works')}${nav('community.html', 'Community')}${nav('news.html', 'Insights')}</nav><div class="nx-actions"><a class="nx-btn nx-btn--grad" href="admissions.html">Apply now</a><button class="nx-burger" type="button" aria-label="Open menu" aria-expanded="false"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h16M4 16h16"/></svg></button></div></div></header>
    <div class="nx-drawer" aria-hidden="true"><div class="nx-drawer-top">${brand}<button class="nx-drawer-close" type="button" aria-label="Close menu">×</button></div><nav aria-label="Mobile navigation">${link('about.html', 'About')}${link('schools.html', 'Schools')}${link('programs.html', 'Programmes')}${link('online-learning.html', 'How it works')}${link('admissions.html', 'Admissions')}${link('community.html', 'Community')}${link('news.html', 'Insights')}${link('contact.html', 'Contact')}</nav><a class="nx-btn nx-btn--grad" href="admissions.html">Apply now</a></div>`;
    const panel = $('.nx-drawer'), toggle = $('.nx-burger');
    const set = open => { panel.classList.toggle('is-open', open); document.body.classList.toggle('nx-lock', open); panel.setAttribute('aria-hidden', !open); toggle.setAttribute('aria-expanded', open); };
    toggle.addEventListener('click', () => set(true));
    $('.nx-drawer-close').addEventListener('click', () => set(false));
    panel.querySelectorAll('a').forEach(a => a.addEventListener('click', () => set(false)));
    document.addEventListener('keydown', e => e.key === 'Escape' && set(false));
  }

  function footer() {
    const el = $('#site-footer'); if (!el) return;
    el.innerHTML = `<footer class="nx-footer"><div class="nx-c"><div class="nx-foot-top"><div class="nx-foot-about">${brand}<p>Learn with guidance. Practise with real tools. See your next step clearly.</p><a class="nx-btn nx-btn--light" href="contact.html">Talk to the academy</a></div><div><h4>Explore</h4><ul><li>${link('about.html', 'About SLTSC')}</li><li>${link('founder.html', 'Founder')}</li><li>${link('schools.html', 'Schools')}</li><li>${link('faculty.html', 'Faculty')}</li></ul></div><div><h4>Learn</h4><ul><li>${link('programs.html', 'All programmes')}</li><li>${link('online-learning.html', 'Online learning')}</li><li>${link('admissions.html', 'Admissions')}</li><li>${link('faq.html', 'FAQs')}</li></ul></div><div><h4>Connect</h4><ul><li>${link('contact.html', site.config.phone)}</li><li><a href="https://wa.me/${site.config.whatsapp}">WhatsApp us</a></li><li>${link('community.html', 'Community')}</li><li>${link('news.html', 'News & events')}</li></ul></div></div><p class="nx-foot-note">Content marked <strong>Demo info</strong> is placeholder — to be confirmed by SLTSC. SLTSC Academy is an official Cisco Networking Academy. Cisco, CCNA, and Cisco Networking Academy are trademarks of Cisco Systems, Inc.</p><div class="nx-foot-bottom"><span>© 2026 SLTSC Academy.</span><span>Built for a future-ready learning journey.</span></div></div></footer><a class="nx-wa" href="https://wa.me/${site.config.whatsapp}" aria-label="Chat with SLTSC Academy on WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 2a8 8 0 1 1-4.2 14.8l-.4-.2-2.6.7.7-2.5-.3-.4A8 8 0 0 1 12 4Zm-3 3.5c-.3 0-.6.1-.8.5-.5.7-.8 1.5-.1 2.7 1.1 2 2.6 3.5 4.800 4.400 1.200.5 1.900.4 2.500 0 .4-.3.700-.9.700-1.300l-1.800-.9c-.3-.1-.5 0-.7.200l-.5.600c-.2.200-.4.200-.6.100-1.200-.5-2.100-1.300-2.700-2.400-.1-.2-.1-.4.100-.6l.4-.5c.1-.2.1-.4 0-.6L9.800 7.700c-.1-.2-.4-.2-.8-.2Z"/></svg></a>`;
  }

  document.addEventListener('DOMContentLoaded', () => { header(); footer(); });
}());
