(function(){
  const s=window.SLTSC, esc=x=>String(x).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  const img=x=>x.url.replace('w=1600','w=800');
  document.addEventListener('DOMContentLoaded',()=>{
    const c=s.community;
    document.querySelector('[data-pillars]').innerHTML=c.pillars.map((p,i)=>`<article class="community-pillar reveal"><div class="community-pillar-image"><img src="${img(p.image)}" alt="${esc(p.image.alt)}" loading="lazy"><span>0${i+1}</span></div><div><span class="eyebrow">Community pillar</span><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p></div></article>`).join('');
    document.querySelector('[data-stories]').innerHTML=c.stories.map(x=>`<article class="story-card"><img src="${img(x.image)}" alt="${esc(x.image.alt)}" loading="lazy"><div><span class="demo-badge">Demo story — to be confirmed</span><blockquote>“${esc(x.quote)}”</blockquote><strong>${esc(x.name)}</strong><small>${esc(x.role)}</small></div></article>`).join('');
    document.querySelector('[data-events]').innerHTML=s.events.map(e=>`<li><span class="event-type">${esc(e.type)}</span><strong>${esc(e.title)}</strong><time>${esc(e.date)}</time></li>`).join('');
    document.querySelector('[data-gallery]').innerHTML=c.gallery.map(x=>`<figure><img src="${img(x)}" alt="${esc(x.alt)}" loading="lazy"></figure>`).join('');
  });
})();
