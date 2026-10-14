(function () {
  const site = window.SLTSC;
  const $ = (s, c = document) => c.querySelector(s);
  const arrow = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  const esc = x => String(x).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));

  // schools: image, description, programme list
  const schools = $('[data-schools]');
  if (schools) {
    schools.innerHTML = site.schools.map((s, i) => {
      const progs = site.programs.filter(p => p.school === s.id);
      const href = s.future ? 'school-data.html' : `school-${s.id}.html`;
      return `<article class="scard ${s.future ? 'scard--future' : ''} rv" style="--i:${i}"><a class="scard-img" href="${href}"><img src="${s.image.url}" alt="${esc(s.image.alt)}" loading="lazy"><span class="scard-tag">${s.future ? 'Opening soon' : `${progs.length} programmes`}</span></a><div class="scard-body"><h3>${s.name}</h3><p>${s.description}</p><ul>${progs.slice(0, 3).map(p => `<li><a href="program.html?id=${p.id}">${p.title}</a></li>`).join('')}</ul><a class="link-arrow" href="${href}">${s.future ? 'Register interest' : 'Explore school'} ${arrow}</a></div></article>`;
    }).join('');
  }

  // programmes
  const grid = $('[data-programs]');
  const render = school => {
    const list = site.programs.filter(p => p.school !== 'data' && (school === 'all' || p.school === school)).slice(0, 6);
    grid.innerHTML = list.map(p => {
      const sc = site.schools.find(s => s.id === p.school);
      return `<a class="pcard" href="program.html?id=${p.id}"><div class="pcard-img"><img src="${p.image.url}" alt="${esc(p.image.alt)}" loading="lazy"><span class="chip">${sc ? sc.short : ''}</span></div><div class="pcard-body"><h3>${p.title}</h3><div class="meta"><span>${p.level}</span><span>${p.duration}</span></div><span class="pcard-link">View programme ${arrow}</span></div></a>`;
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
    const pics = ['students4', 'students5', 'graduation2'].map(k => window.photo(k, 'card'));
    stories.innerHTML = site.testimonials.slice(0, 3).map((t, i) => `<figure class="story rv" style="--i:${i}"><div class="story-img"><img src="${pics[i].url}" alt="${esc(pics[i].alt)}" loading="lazy"></div><div class="story-body"><q>${esc(t.quote)}</q><figcaption class="who"><img src="${t.image.url}" alt="" loading="lazy"><div><b>${esc(t.name)}</b><span>${esc(t.role)}</span></div></figcaption></div></figure>`).join('');
  }

  // news + events
  const news = $('[data-news]');
  if (news) {
    const list = (site.articles || site.news).slice(0, 2);
    news.innerHTML = list.map((n, i) => `<a class="ncard rv" style="--i:${i}" href="${n.id ? `article.html?id=${encodeURIComponent(n.id)}` : 'news.html'}"><div class="ncard-img"><img src="${n.image.url}" alt="${esc(n.image.alt)}" loading="lazy"></div><div class="ncard-body"><small>${esc(n.category)}</small><h3>${esc(n.title)}</h3>${n.excerpt ? `<p>${esc(n.excerpt)}</p>` : ''}</div></a>`).join('');
  }
  const events = $('[data-events]');
  if (events) {
    events.innerHTML = site.events.map(e => `<a class="event" href="community.html"><span class="event-date"><span><b>TBC</b><small>${esc(e.type.split(' ')[0])}</small></span></span><div><b class="t">${esc(e.title)}</b><span>${esc(e.type)} · online</span></div></a>`).join('');
  }

  // gallery strip
  const strip = $('[data-strip]');
  if (strip && site.community) {
    strip.innerHTML = site.community.gallery.map(g => `<figure><img src="${g.url}" alt="${esc(g.alt)}" loading="lazy"></figure>`).join('');
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
