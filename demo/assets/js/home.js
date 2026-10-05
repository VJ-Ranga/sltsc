(function () {
  const site = window.SLTSC;
  const $ = (s, c = document) => c.querySelector(s);
  const arrow = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  const diag = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>';
  const cal = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M8 3v4M16 3v4M3 10h18"/></svg>';

  // stats
  const stats = $('[data-stats]');
  if (stats) {
    stats.innerHTML = site.stats.map(s => `<div class="stat"><strong><span data-count="${s.value}">0</span>${s.suffix}</strong><span>${s.label}</span></div>`).join('');
    const run = el => {
      const target = Number(el.dataset.count); let n = 0;
      const step = Math.max(1, Math.ceil(target / 40));
      const tick = () => { n = Math.min(target, n + step); el.textContent = n; if (n < target) requestAnimationFrame(tick); };
      tick();
    };
    const els = [...stats.querySelectorAll('[data-count]')];
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } }));
      els.forEach(el => io.observe(el));
    } else els.forEach(el => { el.textContent = el.dataset.count; });
  }

  // schools
  const schools = $('[data-schools]');
  if (schools) {
    schools.innerHTML = site.schools.map(s => `<a class="school rv" href="school-${s.id}.html"><img src="${s.image.url}" alt="${s.image.alt}" loading="lazy"><span class="school-tag">${s.future ? 'Future school' : 'Current pathway'}</span><span class="school-go">${diag}</span><h3>${s.name}</h3><p>${s.description}</p></a>`).join('');
  }

  // ticker
  const ticker = $('[data-ticker]');
  if (ticker) {
    const tools = ['Cisco IOS', 'Linux', 'Python', 'AWS', 'Wireshark', 'React', 'JavaScript', 'Git', 'TCP/IP', 'Packet Tracer'];
    const row = tools.map(t => `<span>${t}</span>`).join('');
    ticker.innerHTML = row + row;
  }

  // programmes
  const grid = $('[data-programs]');
  const render = school => {
    const list = site.programs.filter(p => school === 'all' || p.school === school).slice(0, 6);
    grid.innerHTML = list.map(p => {
      const sc = site.schools.find(s => s.id === p.school);
      return `<a class="pcard" href="program.html?id=${p.id}"><div class="pcard-img"><img src="${p.image.url}" alt="${p.image.alt}" loading="lazy"><span class="chip">${sc ? sc.short : ''}</span></div><div class="pcard-body"><h3>${p.title}</h3><div class="meta"><span>${p.level}</span><span>${p.duration}</span></div><span class="pcard-link">View programme ${arrow}</span></div></a>`;
    }).join('');
  };
  if (grid) {
    render('all');
    document.querySelectorAll('.tab').forEach(b => b.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(x => x.classList.remove('is-active'));
      b.classList.add('is-active');
      render(b.dataset.school);
    }));
  }

  // stories
  const stories = $('[data-stories]');
  if (stories) {
    stories.innerHTML = site.testimonials.slice(0, 3).map((t, i) => `<figure class="story rv" style="--i:${i};margin:0"><q>${t.quote}</q><figcaption class="who"><img src="${t.image.url}" alt="${t.image.alt}" loading="lazy"><div><b>${t.name}</b><span>${t.role}</span></div></figcaption></figure>`).join('');
  }

  // news + events
  const news = $('[data-news]');
  if (news) {
    news.innerHTML = site.news.map((n, i) => `<a class="ncard rv" style="--i:${i}" href="news.html"><div class="ncard-img"><img src="${n.image.url}" alt="${n.image.alt}" loading="lazy"></div><small>${n.category}</small><h3>${n.title}</h3></a>`).join('');
  }
  const events = $('[data-events]');
  if (events) {
    events.innerHTML = site.events.map(e => `<div class="event"><span class="event-ico">${cal}</span><div><b>${e.title}</b><span>${e.type} · ${e.date}</span></div></div>`).join('');
  }

  // newsletter
  const nl = $('[data-newsletter]');
  if (nl) nl.addEventListener('submit', e => {
    e.preventDefault();
    $('[data-nl-msg]').textContent = 'Demo only: newsletter signup is not connected yet.';
    nl.reset();
  });

  // reveal on scroll
  const items = document.querySelectorAll('.rv');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .08, rootMargin: '0px 0px -40px' });
    items.forEach(el => io.observe(el));
  } else items.forEach(el => el.classList.add('in'));
}());
