'use strict';
const { data, esc, img, src, icon, demo, schoolOf, sectionHead, ctaBand, programCard, articleCard, eyebrow } = require('../lib');

const TOPICS = ['Cisco IOS', 'Packet Tracer', 'Linux', 'Python', 'Wireshark', 'Git', 'JavaScript', 'Cloud basics'];

module.exports = function home() {
  const hero = `<section class="hero">
  <div class="hero__bg">${img('students1', { w: 2000, h: 1200, alt: '', eager: true })}</div>
  <div class="wrap hero__in">
    <div class="hero__copy">
      ${eyebrow('Online-first IT academy · Sri Lanka')}
      <h1>Learn IT online. Build a <span class="scribble">career</span> ready for what’s next.</h1>
      <p>Practical pathways in networking, cybersecurity and software development, taught live by an official Cisco Networking Academy instructor.</p>
      <div class="hero__actions"><a class="btn btn--primary btn--lg" href="programs.html">Explore programmes</a><a class="btn btn--glass btn--lg" href="admissions.html">Apply now ${icon('arrow-up-right', 'i--sm')}</a></div>
    </div>
    <aside class="hero__side"><p>Start with the CCNA, then keep building. Software, data, cloud and AI schools are on the way.</p></aside>
    <div class="hero__proof"><div class="faces" aria-hidden="true">${['portraits1', 'portraits2', 'portraits6'].map(k => img(k, { w: 112, h: 112, alt: '' })).join('')}</div><div><strong>Official Cisco NetAcad</strong><span>Networking Academy courses</span></div></div>
    <a class="hero__card" href="program-ccna.html">${img('networking1', { w: 220, h: 220, alt: '' })}<div><span class="kicker">Flagship programme</span><strong>CCNA 200-301 v2</strong><small>8 months · 3 modules · LKR 31,500</small></div></a>
  </div></section>`;

  const ticker = `<div class="ticker" aria-label="Topics across our schools"><div class="ticker__track">${[...TOPICS, ...TOPICS].map(t => `<span>${t}</span>`).join('')}</div></div>`;

  const intro = `<section class="sec"><div class="wrap">
  <div class="split" data-reveal><div>${eyebrow('Empowered by education')}<h2>Build real capability, one step at a time.</h2></div>
  <div class="prose"><p>SLTSC is a practical, guided, online IT academy. Start at the level that fits you, practise with real tools, and always see the next step in your path.</p><p>Courses follow the Cisco Networking Academy curriculum, with live classes, structured labs and mentoring from someone who has done the work. ${demo('Delivery details — to be confirmed')}</p></div></div>
  <div class="features" data-reveal-group>
    ${[['laptop', 'Live online classes', 'Learn with a guided cohort from wherever you are.'], ['flask', 'Virtual labs', 'Practise concepts through structured, hands-on work.'], ['award', 'Exam preparation', 'Build confidence for recognised technology exams.'], ['globe', 'Sinhala & English support', `Language support ${demo('To be confirmed')}`]].map(([i, t, d]) => `<div class="feature" data-reveal><span class="feature__icon">${icon(i)}</span><h3>${t}</h3><p>${d}</p></div>`).join('')}
  </div></div></section>`;

  const bento = `<section class="sec sec--sand"><div class="wrap">
  ${sectionHead({ eyebrow: 'The flagship pathway', title: 'Start with the CCNA. Grow from there.', text: 'Our first programme is the Cisco CCNA 200-301 v2, delivered through the official NetAcad curriculum.', action: `<a class="arrow-link" href="program-ccna.html">See the programme ${icon('arrow')}</a>` })}
  <div class="bento" data-reveal-group>
    <figure class="bento__photo" data-reveal>${img('networking2', { w: 900, h: 1000, alt: 'Technician working on network equipment' })}<figcaption><span class="kicker">Hands-on</span>Real equipment, real concepts.</figcaption></figure>
    <div class="stat-tile stat-tile--accent" data-reveal><strong>8</strong><span>months, three modules</span></div>
    <div class="stat-tile" data-reveal><strong>LKR 31,500</strong><span>with instalments available</span></div>
    <div class="stat-tile" data-reveal><strong>3</strong><span>Cisco NetAcad Verified badges</span></div>
    <div class="stat-tile stat-tile--dark" data-reveal><strong>2011</strong><span>NetAcad certified trainer since</span></div>
  </div></div></section>`;

  const schools = `<section class="sec"><div class="wrap">
  ${sectionHead({ eyebrow: 'Find your direction', title: 'Four schools. One practical learning journey.', text: 'Begin with the technology that interests you today, then keep building toward what comes next.' })}
  <div class="school-grid" data-reveal-group>
    ${data.schools.map(s => `<a class="scard${s.future ? ' scard--future' : ''}" href="school-${s.id}.html" data-reveal>${img(s.image, { w: 640, h: 860, alt: '' })}<div class="scard__body"><span class="kicker">${s.future ? 'Future school' : 'Current pathway'}</span><h3>${esc(s.name)}</h3><span class="arrow-link">Explore ${icon('arrow')}</span></div></a>`).join('')}
  </div></div></section>`;

  const programs = `<section class="sec sec--sand"><div class="wrap">
  ${sectionHead({ eyebrow: 'Start learning now', title: 'Explore our popular programmes.', text: 'From foundations to exam preparation, explore the current catalogue and future pathways.' })}
  <div class="tabs" role="group" aria-label="Filter programmes" data-filter-group="home-programs">
    <button type="button" class="tab is-active" data-filter="all" aria-pressed="true">All</button><button type="button" class="tab" data-filter="networking" aria-pressed="false">Networking</button><button type="button" class="tab" data-filter="cybersecurity" aria-pressed="false">Cybersecurity</button><button type="button" class="tab" data-filter="software" aria-pressed="false">Software</button>
  </div>
  <div class="grid grid--3" id="home-programs">${data.programs.filter(p => ['networking', 'cybersecurity', 'software'].includes(p.school)).map(p => programCard(p)).join('')}</div>
  <p class="center"><a class="btn btn--dark" href="programs.html">View all programmes</a></p></div></section>`;

  const steps = [['Join a live class', 'Meet the concept with a real instructor and cohort.'], ['Practise in a lab', 'Turn the lesson into a repeatable skill.'], ['Get mentored', 'Ask, review, and keep moving with support.'], ['Get exam-ready', 'Prepare with a clear view of your next milestone.']];
  const learn = `<section class="sec"><div class="wrap split split--media">
  <div class="duo" data-reveal>${img('online_class4', { w: 640, h: 800, alt: 'Learner with headphones in a live online class' })}${img('networking4', { w: 640, h: 800, alt: 'Fibre cables connected to a network switch' })}</div>
  <div data-reveal>${eyebrow('The online learning experience')}<h2>Learn the idea. Touch the tool. Make it yours.</h2>
  <p class="lead">Guided practice and clear momentum, from your first class to exam day. ${demo('Platforms & schedules — to be confirmed')}</p>
  <ol class="steps">${steps.map(([t, d], i) => `<li><span class="steps__n">0${i + 1}</span><div><h3>${t}</h3><p>${d}</p></div></li>`).join('')}</ol></div></div></section>`;

  const founder = `<section class="sec sec--sand"><div class="wrap split split--media">
  <figure class="portrait" data-reveal>${img('instructor2', { w: 800, h: 1000, alt: 'Instructor teaching a class' })}<figcaption>${demo('Demo photo')}</figcaption></figure>
  <div data-reveal>${eyebrow('The human behind the path')}<h2>Learn with someone who knows the work behind the screen.</h2>
  <p class="lead">Yasiru Nirmala Herath is the founder and lead instructor of SLTSC Academy. A Cisco Networking Academy Certified Trainer since 2011, he brings 12+ years of industry experience into every class.</p>
  <blockquote class="pull">“The next step becomes possible when learning feels practical, guided, and close to real work.”</blockquote>
  <ul class="pills"><li>CCNP ×2</li><li>CCNA ×2</li><li>Cisco Academy Council Secretary</li></ul>
  <p><a class="btn btn--primary" href="founder.html">Meet the founder</a></p></div></div></section>`;

  const t = data.testimonials;
  const stories = `<section class="sec"><div class="wrap">
  <div class="quote-slider" data-slider>
    <div class="quote-slider__photos">${t.map((x, i) => `<div class="qs-photo${i ? '' : ' is-active'}" data-slide>${img(x.image, { w: 640, h: 640, alt: '' })}</div>`).join('')}</div>
    <div class="quote-slider__copy">${eyebrow('What a learner journey includes')}
      <div class="qs-quotes">${t.map((x, i) => `<figure class="qs-quote${i ? '' : ' is-active'}" data-slide><blockquote>“${esc(x.quote)}”</blockquote><figcaption><strong>${esc(x.name)}</strong><span>${esc(x.role)}</span></figcaption></figure>`).join('')}</div>
      <p>${demo('Demo testimonial — to be confirmed')}</p>
      <div class="slider-ctrl"><button type="button" class="round" data-prev aria-label="Previous story">${icon('arrow', 'i--flip')}</button><button type="button" class="round" data-next aria-label="Next story">${icon('arrow')}</button><span class="dots" data-dots aria-hidden="true">${t.map((_, i) => `<i${i ? '' : ' class="is-active"'}></i>`).join('')}</span></div>
    </div></div></div></section>`;

  const news = `<section class="sec sec--sand"><div class="wrap">
  ${sectionHead({ eyebrow: 'Keep exploring', title: 'Ideas, events, and the next conversation.', action: `<a class="arrow-link" href="news.html">All insights ${icon('arrow')}</a>` })}
  <div class="grid grid--3" data-reveal-group>${data.articles.slice(0, 3).map(a => articleCard(a)).join('')}</div>
  <ul class="events" data-reveal-group>${data.events.map(e => `<li data-reveal><span class="events__type">${esc(e.type)}</span><strong>${esc(e.title)}</strong><time>${esc(e.date)}</time></li>`).join('')}</ul></div></section>`;

  const cta = ctaBand({ eyebrow: 'Your next step can start here', title: 'Find the path that fits where you are now.', actions: `<a class="btn btn--light btn--lg" href="admissions.html">Explore admissions</a><a class="btn btn--outline-light btn--lg" href="contact.html">Talk to us</a>` });

  return { title: 'SLTSC Academy', description: 'SLTSC Academy is an online-first IT academy for networking, cybersecurity and software. Official Cisco Networking Academy courses, taught live.', hero: true, body: hero + ticker + intro + bento + schools + programs + learn + founder + stories + news + cta };
};
