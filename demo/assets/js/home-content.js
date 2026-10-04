(function () {
  const site = window.SLTSC;
  const news = document.querySelector('[data-news-grid]');
  if (news) {
    news.innerHTML = site.news.map(item => `<article class="news-card"><a href="news.html"><img src="${item.image.url}" alt="${item.image.alt}" loading="lazy"><span class="card-kicker">${item.category}</span><h3>${item.title}</h3><span class="card-date">${item.date} <span class="demo-badge">Demo info</span></span><span class="text-link">Read the insight ↗</span></a></article>`).join('');
  }
  const events = document.querySelector('[data-events-strip]');
  if (events) {
    events.innerHTML = site.events.map(item => `<article class="event-card"><div><span class="card-kicker">${item.type}</span><h4>${item.title}</h4></div><time>${item.date}</time></article>`).join('');
  }
}());
