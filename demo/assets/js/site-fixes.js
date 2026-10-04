(function () {
  const site = window.SLTSC;

  document.querySelectorAll('[data-image-key]').forEach((image, index) => {
    const item = (site.imageLibrary?.[image.dataset.imageKey] || [])[index] || site.images[image.dataset.imageKey] || site.images.hero;
    if (item) {
      image.src = item.url || item.card;
      image.alt = image.alt || item.alt;
    }
  });

  const stats = document.querySelector('[data-stats]');
  if (stats) {
    stats.innerHTML = site.stats.map(item => `<div class="stat"><strong><span data-counter="${item.value}">0</span>${item.suffix}</strong><span>${item.label} <small class="demo-badge">Demo info</small></span></div>`).join('');
  }

  const schools = document.querySelector('[data-schools-grid]');
  if (schools) {
    schools.innerHTML = site.schools.map(item => `<article class="school-card ${item.future ? 'school-card--future' : ''}"><img src="${item.image.url}" alt="${item.image.alt}" loading="lazy"><div class="school-content"><span class="eyebrow">${item.future ? 'Future school' : 'Current pathway'}</span><h3>${item.name}</h3><a href="school-${item.id}.html">Explore school ↗</a></div></article>`).join('');
  }

  const duration = document.querySelector('#duration-filter');
  if (duration) {
    duration.innerHTML = '<option value="all">Any duration</option><option value="short">≤ 8 weeks</option><option value="medium">2–4 months</option><option value="long">6+ months</option>';
    duration.value = 'all';
    duration.dispatchEvent(new Event('change', { bubbles: true }));
  }

  document.querySelectorAll('.has-mega').forEach(menu => {
    const close = () => menu.classList.add('mega-closed');
    menu.addEventListener('mouseleave', () => menu.classList.remove('mega-closed'));
    menu.addEventListener('focusout', event => {
      if (!menu.contains(event.relatedTarget)) close();
    });
    document.addEventListener('click', event => {
      if (!menu.contains(event.target)) close();
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') close();
    });
  });

  const panel = document.querySelector('.mobile-panel');
  const toggle = document.querySelector('.menu-toggle');
  if (panel && !panel.querySelector('.mobile-close')) {
    const button = document.createElement('button');
    button.className = 'mobile-close';
    button.type = 'button';
    button.setAttribute('aria-label', 'Close menu');
    button.textContent = '×';
    button.onclick = () => {
      panel.classList.remove('is-open');
      document.body.classList.remove('menu-open');
      toggle?.setAttribute('aria-expanded', 'false');
      panel.setAttribute('aria-hidden', 'true');
    };
    panel.prepend(button);
  }

  document.querySelectorAll('img').forEach(image => image.addEventListener('error', () => image.classList.add('image-fallback'), { once: true }));
  window.addEventListener('error', event => {
    if (event.target instanceof HTMLImageElement) event.target.classList.add('image-fallback');
  }, true);

  const quickIcons = [
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M9 5h10v10"/></svg>',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 8 8-4 8 4-8 4-8-4Zm0 4 8 4 8-4M4 16l8 4 8-4"/></svg>',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"/><path d="m12 8 3 4-3 4-3-4 3-4Z"/></svg>',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5v14M18 5v14M6 12h12M9 5h6"/></svg>'
  ];
  document.querySelectorAll('.quick-icon').forEach((icon, index) => { icon.innerHTML = quickIcons[index] || quickIcons[0]; });

  document.querySelectorAll('.whatsapp-float').forEach(container => {
    const link = container.matches('a') ? container : container.querySelector('a');
    if (!link) return;
    link.innerHTML = '<span aria-hidden="true">WA</span><span class="sr-only">Open WhatsApp</span>';
    link.title = 'Chat with SLTSC Academy on WhatsApp';
  });
}());
