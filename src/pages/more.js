'use strict';
const { data, esc, img, icon, demo, banner, sectionHead, ctaBand, articleCard, eyebrow } = require('../lib');

/* ---------- community ---------- */
function community() {
  const c = data.community;
  const body = banner({ eyebrow: 'Student life', title: 'Learn together. Find your people.', crumbs: [['Community', 'community.html']], image: 'events1' }) + `
  <section class="sec"><div class="wrap">
    ${sectionHead({ eyebrow: 'A community layer for the journey', title: 'Online learning feels better when the work is shared.', text: 'Connect with fellow learners, bring questions into the room, and keep your momentum between classes.' })}
    <div class="grid grid--3" data-reveal-group>${c.pillars.map(p => `<article class="card pillar" data-reveal><div class="card__media">${img(p.image, { w: 720, h: 560, alt: '' })}</div><div class="card__body"><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p></div></article>`).join('')}</div></div></section>

  <section class="sec sec--sand"><div class="wrap">
    ${sectionHead({ eyebrow: 'Learner voices', title: 'Stories from the cohort.', action: demo('Demo stories — to be confirmed') })}
    <div class="grid grid--2" data-reveal-group>${c.stories.map(s => `<article class="story" data-reveal>${img(s.image, { w: 520, h: 640, alt: '' })}<div><blockquote>“${esc(s.quote)}”</blockquote><strong>${esc(s.name)}</strong><span class="muted">${esc(s.role)}</span></div></article>`).join('')}</div></div></section>

  <section class="sec"><div class="wrap split">
    <div data-reveal>${eyebrow('Events')}<h2>Join a live moment.</h2><ul class="eventlist">${data.events.map(e => `<li><span class="events__type">${esc(e.type)}</span><strong>${esc(e.title)}</strong><time>${esc(e.date)}</time></li>`).join('')}</ul></div>
    <figure class="portrait portrait--wide" data-reveal>${img(data.events[0].image, { w: 900, h: 700, alt: '' })}<figcaption><span class="kicker">Next up</span>${esc(data.events[0].title)}</figcaption></figure></div></section>

  <section class="sec sec--sand"><div class="wrap">
    ${sectionHead({ eyebrow: 'Gallery', title: 'Moments from learning together.', action: demo('Demo photos') })}
    <div class="gallery" data-reveal-group>${c.gallery.map(g => `<figure data-reveal>${img(g, { w: 640, h: 640, alt: '' })}</figure>`).join('')}</div></div></section>` +
    ctaBand({ eyebrow: 'Be part of it', title: 'Start learning, and meet the cohort.', actions: `<a class="btn btn--light btn--lg" href="admissions.html">Apply now</a>` });
  return { title: 'Community', description: 'The SLTSC Academy community: peers, mentors, events and shared learning.', body };
}

/* ---------- news ---------- */
function news() {
  const cats = [...new Set(data.articles.map(a => a.category))];
  const [first, ...rest] = data.articles;
  const body = banner({ eyebrow: 'Insights & updates', title: 'Useful context for your next step in IT.', intro: 'Editorial notes about learning paths, practical work and the people around the academy. Articles are placeholders until confirmed.', crumbs: [['Insights', 'news.html']], image: 'coding5' }) + `
  <section class="sec"><div class="wrap">
    ${articleCard(first, true)}
    <div class="tabs tabs--spaced" role="group" aria-label="Filter articles" data-filter-group="news-grid"><button type="button" class="tab is-active" data-filter="all" aria-pressed="true">All</button>${cats.map(c => `<button type="button" class="tab" data-filter="${esc(c)}" aria-pressed="false">${esc(c)}</button>`).join('')}</div>
    <div class="grid grid--3" id="news-grid" data-attr="category" data-keep-first>${data.articles.map(a => articleCard(a)).join('')}</div></div></section>` +
    ctaBand({ eyebrow: 'Stay in the loop', title: 'Thoughtful updates for your learning journey.', actions: `<a class="btn btn--light btn--lg" href="contact.html">Contact the academy</a>` });
  return { title: 'Insights', description: 'Insights, field notes and updates from SLTSC Academy.', body };
}

/* ---------- article ---------- */
function article(a) {
  const related = data.articles.filter(x => x.id !== a.id).slice(0, 3);
  const body = `<section class="sec article-top"><div class="wrap narrow"><nav class="crumbs crumbs--dark" aria-label="Breadcrumb"><ol><li><a href="index.html">Home</a></li><li><a href="news.html">Insights</a></li><li aria-current="page">${esc(a.category)}</li></ol></nav>
    <span class="card__kicker">${esc(a.category)}</span><h1>${esc(a.title)}</h1><p class="lead">${esc(a.excerpt)}</p><p class="muted">By ${esc(a.author)} · ${esc(a.date)} · ${esc(a.read)} ${demo('Demo content')}</p></div>
    <div class="wrap article__hero">${img(a.image, { w: 1400, h: 700, alt: '', eager: true })}</div></section>
  <section class="sec sec--flush"><div class="wrap article"><div class="article__body prose">
    <p class="lead">Technology becomes easier to approach when ideas are connected to a real practice loop: learn, try, reflect, and try again.</p>
    <h2>Start with a useful question</h2><p>Good learning content gives you enough context to make a decision, then enough room to test it.</p>
    <blockquote class="pull">“Progress is easier to see when the next action is concrete.”</blockquote>
    <h2>Make practice repeatable</h2><p>Keep your examples small. Name what you are testing. Write down what changed.</p>
    <pre><code>Router&gt; enable
Router# show ip interface brief
Router# show running-config</code></pre>
    <h2>Leave with a next step</h2><ul class="checks"><li>Choose one concept to revisit.</li><li>Practise it in a controlled environment.</li><li>Share the question you still have.</li></ul>
    <p>${demo('Demo article — editorial copy to be confirmed')}</p></div>
    <aside class="article__aside"><div class="sidecard"><h3>Keep going</h3><p class="muted">Turn reading into practice with a guided programme.</p><a class="btn btn--primary btn--block" href="programs.html">Explore programmes</a></div></aside></div></section>
  <section class="sec sec--sand"><div class="wrap">${sectionHead({ eyebrow: 'Keep reading', title: 'More insights.' })}<div class="grid grid--3" data-reveal-group>${related.map(r => articleCard(r)).join('')}</div></div></section>`;
  return { title: a.title, description: a.excerpt, body };
}

/* ---------- FAQ ---------- */
const FAQ = [
  ['Admissions', 'Who are the programmes designed for?', 'The catalogue is shaped for beginners, career switchers, and working IT learners. Entry requirements for each programme are to be confirmed.'],
  ['Online learning', 'How does online learning work?', 'The intended model combines live online classes, replay resources, guided practice, and community touchpoints. Platforms and schedules are to be confirmed.'],
  ['Payments', 'Can I pay in instalments?', 'Instalments are available for the CCNA programme (LKR 31,500). Other payment terms are placeholders, to be confirmed.'],
  ['Certifications', 'Will I receive a certification?', 'CCNA modules earn Cisco NetAcad Verified badges. Completion and certification language for other pathways must be confirmed before publication.'],
  ['Technical', 'What do I need to join a class?', 'A reliable internet connection and a suitable device are a sensible starting point. Exact technical requirements are to be confirmed.'],
  ['Online learning', 'Are recordings available?', 'Replay access is part of the proposed learning model, but availability and retention details are to be confirmed.']
];
function faq() {
  const cats = [...new Set(FAQ.map(f => f[0]))];
  const body = banner({ eyebrow: 'Answers, clearly', title: 'Questions before your next step?', crumbs: [['FAQ', 'faq.html']], image: 'students2' }) + `
  <section class="sec"><div class="wrap faq">
    <div class="faq__nav"><div class="tabs tabs--stack" role="group" aria-label="Question categories" data-faq-tabs><button type="button" class="tab is-active" data-cat="All" aria-pressed="true">All questions</button>${cats.map(c => `<button type="button" class="tab" data-cat="${esc(c)}" aria-pressed="false">${esc(c)}</button>`).join('')}</div></div>
    <div class="faq__list"><h2>Start with the practical details.</h2><p class="muted">Use the categories or search the answers below. Final admissions, payment and certification details are to be confirmed.</p>
      <div class="search">${icon('search')}<label class="sr-only" for="faq-q">Search FAQs</label><input id="faq-q" type="search" placeholder="Search FAQs" data-faq-search></div>
      <div class="accordion" data-faq-items>${FAQ.map(([c, q, a]) => `<details data-cat="${esc(c)}"><summary>${esc(q)}${icon('plus')}</summary><p>${esc(a)}</p></details>`).join('')}</div>
      <p class="empty" data-faq-empty hidden><strong>No matching questions.</strong> <button type="button" class="arrow-link" data-faq-clear>Clear search</button></p></div></div></section>` +
    ctaBand({ eyebrow: 'Still have a question?', title: 'Talk to a human about your next step.', actions: `<a class="btn btn--light btn--lg" href="contact.html">Contact the academy</a>` });
  return { title: 'FAQ', description: 'Frequently asked questions about SLTSC Academy admissions, online learning, payments and certification.', body };
}

/* ---------- contact ---------- */
function contact() {
  const c = data.config;
  const body = banner({ eyebrow: 'Contact the academy', title: 'A clear answer starts with a good question.', crumbs: [['Contact', 'contact.html']], image: 'online_class2' }) + `
  <section class="sec"><div class="wrap contact">
    <div data-reveal><p class="lead">This is a demo contact surface. Email and address details are placeholders until confirmed.</p>
      <ul class="contact__cards"><li>${icon('phone')}<div><span>Call or WhatsApp</span><strong><a href="tel:+${c.whatsapp}">${esc(c.phone)}</a></strong>${demo('Availability — to be confirmed')}</div></li>
      <li>${icon('mail')}<div><span>Email</span><strong>hello@sltsc.academy</strong>${demo('Placeholder inbox')}</div></li>
      <li>${icon('pin')}<div><span>Address</span><strong>Colombo, Sri Lanka</strong>${demo('Location — to be confirmed')}</div></li></ul>
      <a class="btn btn--dark" href="https://wa.me/${c.whatsapp}">${icon('chat', 'i--sm')} Chat on WhatsApp</a></div>
    <form class="form" data-demo-form novalidate data-reveal aria-labelledby="enq-title"><h2 id="enq-title">Send an enquiry</h2>
      <div class="fields"><label>Name<input name="name" required autocomplete="name"></label><label>Phone<input name="phone" required autocomplete="tel"></label>
      <label>Email<input type="email" name="email" required autocomplete="email"></label><label>Programme<select name="programme" required><option value="">Choose a programme</option>${data.programs.map(p => `<option>${esc(p.title)}</option>`).join('')}</select></label>
      <label class="full">Message<textarea name="message" rows="5" required></textarea></label></div>
      <label class="check"><input type="checkbox" required> I understand this is a demo enquiry form and contact details are placeholders until confirmed.</label>
      <button class="btn btn--primary" type="submit">Send enquiry</button><p class="form-note" role="status" data-note></p></form></div></section>

  <section class="sec sec--sand"><div class="wrap grid grid--2 grid--gap" data-reveal-group><div data-reveal>${eyebrow('Hours')}<h2>When we’re around.</h2><p class="muted">Hours are placeholders until confirmed.</p>${demo('Hours — to be confirmed')}</div>
    <div class="map" data-reveal role="img" aria-label="Map placeholder"><span>Colombo · demo map</span></div></div></section>` +
    ctaBand({ eyebrow: 'Corporate & group training', title: 'Training a team? Let’s talk about a tailored programme.', actions: `<a class="btn btn--light btn--lg" href="https://wa.me/${c.whatsapp}">Start a conversation</a>` });
  return { title: 'Contact', description: 'Contact SLTSC Academy by phone, WhatsApp or the enquiry form.', body };
}

module.exports = { community, news, article, faq, contact };
