(function () {
  const site = window.SLTSC;
  const $ = selector => document.querySelector(selector);
  const imageUrl = program => program.image.url.replace('w=1600', 'w=800');
  const schoolName = id => site.schools.find(school => school.id === id)?.short || id;
  const durationBucket = duration => {
    const weeks = parseInt(duration, 10);
    return weeks <= 8 ? 'short' : weeks <= 16 ? 'medium' : 'long';
  };

  function card(program) {
    return `<article class="program-card--large"><a class="program-image" href="program.html?id=${program.id}"><img src="${imageUrl(program)}" alt="${program.image.alt}" loading="lazy"></a><div class="program-body"><span class="eyebrow">${schoolName(program.school)} · ${program.level}</span><h3>${program.title}</h3><p>${program.mode} · ${program.duration}</p><div class="program-footer"><span class="demo-badge">${program.badge || 'Demo info — to be confirmed'}</span><a class="btn btn--link" href="program.html?id=${program.id}">View programme</a></div></div></article>`;
  }

  function renderListing() {
    const results = $('#program-results');
    if (!results) return;
    const school = $('#school-filter')?.value || 'all';
    const level = $('#level-filter')?.value || 'all';
    const mode = $('#mode-filter')?.value || 'all';
    const duration = $('#duration-filter')?.value || 'all';
    const sort = $('#sort-filter')?.value || 'title';
    const query = ($('#program-search')?.value || '').trim().toLowerCase();
    const programs = site.programs.filter(program => {
      const searchable = `${program.title} ${program.school} ${program.level}`.toLowerCase();
      return (school === 'all' || program.school === school) &&
        (level === 'all' || program.level.toLowerCase().includes(level)) &&
        (mode === 'all' || program.mode.toLowerCase().includes(mode)) &&
        (duration === 'all' || durationBucket(program.duration) === duration) &&
        searchable.includes(query);
    });
    programs.sort((left, right) => sort === 'duration' ? parseInt(left.duration, 10) - parseInt(right.duration, 10) : left.title.localeCompare(right.title));
    const count = $('#program-count');
    if (count) count.textContent = `${programs.length} programmes shown`;
    results.innerHTML = programs.length ? programs.map(card).join('') : '<div class="empty-state"><h3>No exact match yet.</h3><p>Try a broader filter, or ask the academy team to help you choose a starting point.</p></div>';
  }

  function renderDetail() {
    const title = $('[data-program-title]');
    if (!title) return;
    const id = new URLSearchParams(location.search).get('id') || 'ccna';
    const program = site.programs.find(item => item.id === id);
    if (!program) {
      title.closest('.detail-hero').innerHTML = '<div class="container section"><span class="eyebrow">Programme not found</span><h1>That programme is not in the demo catalogue.</h1><a class="btn btn--primary" href="programs.html">Browse programmes</a></div>';
      return;
    }
    const detail = site.programPage?.[id] || site.programPage?.default;
    title.textContent = program.title;
    document.querySelectorAll('[data-program-school]').forEach(element => { element.textContent = schoolName(program.school); });
    const intro = document.querySelector('.detail-hero .page-intro');
    if (intro && detail?.intro) intro.firstChild.textContent = `${detail.intro} `;
    const image = $('[data-program-image]');
    if (image) { image.src = program.image.url; image.alt = program.image.alt; }
    document.querySelectorAll('[data-program-value]').forEach(element => {
      const key = element.dataset.programValue;
      element.textContent = program[key] || detail?.[key] || 'Demo info — to be confirmed';
    });
    const moduleList = document.querySelector('[data-program-modules]');
    if (moduleList && detail?.modules) moduleList.innerHTML = detail.modules.map(module => `<details><summary><span>${module[0]}</span>${module[1]}</summary><p>${module[2]} <span class="demo-badge">${module[3] || 'Demo info'}</span></p></details>`).join('');
  }

  document.addEventListener('DOMContentLoaded', () => {
    const schoolFromUrl = new URLSearchParams(location.search).get('school');
    const schoolFilter = $('#school-filter');
    if (schoolFilter && site.schools.some(school => school.id === schoolFromUrl)) schoolFilter.value = schoolFromUrl;
    document.querySelectorAll('#school-filter,#level-filter,#mode-filter,#duration-filter,#sort-filter,#program-search').forEach(control => control.addEventListener(control.tagName === 'INPUT' ? 'input' : 'change', renderListing));
    renderListing();
    renderDetail();
  });
}());
