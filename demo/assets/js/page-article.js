(function () {
  const site = window.SLTSC;
  const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[character]));
  const imageUrl = image => image.url.replace('w=1600', 'w=800');

  document.addEventListener('DOMContentLoaded', () => {
    const id = new URLSearchParams(location.search).get('id');
    const article = site.articles.find(item => item.id === id);
    const root = document.querySelector('[data-article]');

    if (!article) {
      root.innerHTML = '<div class="article-not-found"><h1>We couldn’t find that article.</h1><a class="btn btn--primary" href="news.html">Back to insights</a></div>';
      return;
    }

    root.innerHTML = `<div class="article-hero"><span class="card-kicker">${escapeHtml(article.category)}</span><h1>${escapeHtml(article.title)}</h1><p>${escapeHtml(article.excerpt)}</p><div class="article-meta">By ${escapeHtml(article.author)} · ${escapeHtml(article.date)} · ${escapeHtml(article.read)} <span class="demo-badge">Demo content</span></div><img src="${imageUrl(article.image)}" alt="${escapeHtml(article.image.alt)}"></div><div class="article-layout"><div class="article-body"><p class="lead">Technology becomes easier to approach when ideas are connected to a real practice loop: learn, try, reflect, and try again.</p><h2>Start with a useful question</h2><p>Good learning content gives you enough context to make a decision, then enough room to test it.</p><blockquote>“Progress is easier to see when the next action is concrete.”</blockquote><h2>Make practice repeatable</h2><p>Keep your examples small. Name what you are testing. Write down what changed.</p><pre><code>Router&gt; enable&#10;Router# show ip interface brief&#10;Router# show running-config</code></pre><img class="article-inline-image" src="${imageUrl(site.images.code)}" alt="${escapeHtml(site.images.code.alt)}"><h2>Leave with a next step</h2><ul><li>Choose one concept to revisit.</li><li>Practise it in a controlled environment.</li><li>Share the question you still have.</li></ul><span class="demo-badge">Demo article — editorial copy to be confirmed</span></div><aside class="article-aside"><div class="share-box"><strong>Share this note</strong><div class="share-links"><span aria-label="LinkedIn link to be confirmed">in · Demo link</span><span aria-label="Facebook link to be confirmed">f · Demo link</span></div></div></aside></div>`;
  });
}());
