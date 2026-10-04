'use strict';
const { data, esc, img, icon, demo, sectionHead, ctaBand, programCard, articleCard, eyebrow } = require('../lib');

const TOPICS = ['Cisco IOS', 'Packet Tracer', 'Linux', 'Python', 'Wireshark', 'Git', 'JavaScript', 'VLANs', 'OSPF', 'Cloud basics'];

function pathway() {
  const nodes = [
    { x: 120, y: 175, c: 'var(--lime)', t: 'Networking', s: 'CCNA' },
    { x: 380, y: 85, c: 'var(--coral)', t: 'Cybersecurity', s: 'Defend' },
    { x: 640, y: 175, c: 'var(--pink)', t: 'Software', s: 'Build' },
    { x: 900, y: 85, c: 'var(--violet)', t: 'Data, Cloud & AI', s: 'Next' }
  ];
  const d = `M${nodes[0].x} ${nodes[0].y} C 250 ${nodes[0].y}, 250 ${nodes[1].y}, ${nodes[1].x} ${nodes[1].y} S 510 ${nodes[2].y}, ${nodes[2].x} ${nodes[2].y} S 770 ${nodes[3].y}, ${nodes[3].x} ${nodes[3].y}`;
  return `<div class="path" data-reveal><svg viewBox="0 0 1020 260" role="img" aria-label="Learning pathway from networking to cybersecurity, software, then data, cloud and AI">
    <path class="path__line" d="${d}"/><path class="path__run" d="${d}"/>
    ${nodes.map(n => `<g class="path__node"><circle cx="${n.x}" cy="${n.y}" r="34" fill="${n.c}" opacity=".16"/><circle cx="${n.x}" cy="${n.y}" r="20" fill="${n.c}"/><circle cx="${n.x}" cy="${n.y}" r="7" fill="#120e1f"/><text x="${n.x}" y="${n.y + (n.y > 120 ? 62 : -48)}" text-anchor="middle">${n.t}</text></g>`).join('')}
  </svg>
  <div class="path__legend">${[['lime', 'Networking & Infrastructure', 'Where we start: the CCNA.'], ['coral', 'Cybersecurity', 'Learn to defend what you build.'], ['pink', 'Software & Web', 'Turn ideas into products.'], ['violet', 'Data, Cloud & AI', 'The future school.']].map(([c, t, d]) => `<div style="--tint:var(--${c})"><strong>${t}</strong><span>${d}</span></div>`).join('')}</div></div>`;
}

module.exports = function home() {
  const hero = `<section class="hero">
  <div class="hero__glow"></div><div class="hero__grid"></div>
  <div class="wrap">
    <div class="hero__in">
      <div class="hero__copy">
        ${eyebrow('Online-first IT academy · Sri Lanka')}
        <h1>Learn IT online. Build a <span class="hl">career</span> ready for what’s next.</h1>
        <p class="hero__lead">Practical pathways in networking, cybersecurity and software, taught live by an official Cisco Networking Academy instructor.</p>
        <div class="hero__actions"><a class="btn btn--primary btn--lg" href="programs.html">Explore programmes ${icon('arrow')}</a><a class="btn btn--glass btn--lg" href="admissions.html">Apply now</a></div>
        <div class="hero__proof"><div class="faces" aria-hidden="true">${['portraits1', 'portraits2', 'portraits6'].map(k => img(k, { w: 112, h: 112, alt: '' })).join('')}</div><div><strong>Official Cisco NetAcad</strong><span>Networking Academy courses</span></div></div>
      </div>
      <div class="hero__stage" aria-hidden="false">
        <div class="hero__photo hero__photo--a">${img('students1', { w: 760, h: 760, alt: 'Students learning together', eager: true })}</div>
        <div class="hero__photo hero__photo--b">${img('portraits3', { w: 360, h: 480, alt: 'Smiling learner' })}</div>
        <div class="hero__photo hero__photo--c">${img('networking3', { w: 300, h: 300, alt: 'Network switch with cables' })}</div>
        <div class="float float--live"><i></i>Live class in session</div>
        <div class="float float--ping"><i></i>ping sltsc.academy · 12ms</div>
        <div class="float float--cert">${icon('award', 'i--sm')} CCNA 200-301</div>
        <div class="term" role="img" aria-label="Terminal showing a network command">
          <div class="term__bar"><i></i><i></i><i></i></div>
          <span><b>$</b> ping next-step</span><span>reply from <em>CCNA</em> · ttl=64</span><span><b>$</b> show pathway</span><span>networking → security → <em>you</em><i class="cur"></i></span>
        </div>
      </div>
    </div>
    <div class="hero__stats" data-reveal-group>
      <div class="hstat" data-reveal><strong>8 mo</strong><span>CCNA, three modules</span></div>
      <div class="hstat" data-reveal><strong>3</strong><span>Cisco NetAcad Verified badges</span></div>
      <div class="hstat" data-reveal><strong>2011</strong><span>NetAcad certified trainer since</span></div>
      <div class="hstat" data-reveal><strong>LKR 31,500</strong><span>instalments available</span></div>
    </div>
  </div></section>`;

  const ticker = `<div class="ticker" aria-label="Topics across our schools"><div class="ticker__track">${[...TOPICS, ...TOPICS].map(t => `<span>${t}</span>`).join('')}</div></div>`;

  const intro = `<section class="sec"><div class="wrap">
  <div class="split" data-reveal><div>${eyebrow('Empowered by education')}<h2>Real capability, <span class="hl">one hop</span> at a time.</h2></div>
  <div class="prose"><p class="lead">SLTSC is a practical, guided, online IT academy. Start at the level that fits you, practise with real tools, and always see the next step in your path.</p><p>Courses follow the Cisco Networking Academy curriculum, with live classes, structured labs and mentoring from someone who has done the work. ${demo('Delivery details — to be confirmed')}</p></div></div>
  <div class="features" data-reveal-group>
    ${[['laptop', 'Live online classes', 'Learn with a guided cohort from wherever you are.'], ['flask', 'Virtual labs', 'Practise concepts through structured, hands-on work.'], ['award', 'Exam preparation', 'Build confidence for recognised technology exams.'], ['globe', 'Sinhala & English support', `Language support ${demo('To be confirmed')}`]].map(([i, t, d]) => `<div class="feature" data-reveal><span class="feature__icon">${icon(i)}</span><h3>${t}</h3><p>${d}</p></div>`).join('')}
  </div></div></section>`;

  const schools = `<section class="sec"><div class="wrap">
  ${sectionHead({ eyebrow: 'Find your direction', title: 'Four schools. One <span class="hl">network</span> of skills.', text: 'Begin with the technology that interests you today, then keep building toward what comes next.' })}
  <div class="school-grid" data-reveal-group>
    ${data.schools.map(s => `<a class="scard" href="school-${s.id}.html" data-reveal>${img(s.image, { w: 640, h: 900, alt: '' })}<div class="scard__body"><span class="kicker">${s.future ? 'Future school' : 'Current pathway'}</span><h3>${esc(s.name)}</h3><span class="arrow-link">Explore ${icon('arrow')}</span></div></a>`).join('')}
  </div></div></section>`;

  const route = `<section class="sec sec--tight"><div class="wrap">${sectionHead({ eyebrow: 'Your pathway', title: 'Start at the core. Route to <span class="hl">anywhere</span>.', text: 'Every school connects to the next, so your skills compound instead of resetting.' })}${pathway()}</div></section>`;

  const spot = `<section class="sec"><div class="wrap"><div class="spot" data-reveal>
    <div class="spot__copy">${eyebrow('Flagship programme')}<h2>CCNA 200-301 v2</h2><p>The structured eight-month Cisco CCNA pathway through ITN, SRWE and ENSA, using the official NetAcad curriculum. Each module earns a Cisco NetAcad Verified badge.</p>
      <ul class="spot__facts"><li>8 months</li><li>3 modules</li><li>3 badges</li><li>LKR 31,500</li><li>Instalments</li></ul>
      <a class="btn btn--primary btn--lg" href="program-ccna.html">See the programme ${icon('arrow')}</a></div>
    <div class="spot__term" role="img" aria-label="Illustrative terminal output"><div class="term__bar"><i></i><i></i><i></i></div>
      <code><b>Router#</b> show ip interface brief
Interface        Status   Protocol
Gi0/0            <u>up</u>       <u>up</u>
Gi0/1            <u>up</u>       <u>up</u>
<b>Router#</b> <em>// you, after module 3</em></code></div></div></div></section>`;

  const programs = `<section class="sec sec--sand"><div class="wrap">
  ${sectionHead({ eyebrow: 'Start learning now', title: 'Explore our popular <span class="hl">programmes</span>.', text: 'From foundations to exam preparation, explore the current catalogue and future pathways.' })}
  <div class="tabs" role="group" aria-label="Filter programmes" data-filter-group="home-programs">
    <button type="button" class="tab is-active" data-filter="all" aria-pressed="true">All</button><button type="button" class="tab" data-filter="networking" aria-pressed="false">Networking</button><button type="button" class="tab" data-filter="cybersecurity" aria-pressed="false">Cybersecurity</button><button type="button" class="tab" data-filter="software" aria-pressed="false">Software</button>
  </div>
  <div class="grid grid--3" id="home-programs">${data.programs.filter(p => ['networking', 'cybersecurity', 'software'].includes(p.school)).map(p => programCard(p)).join('')}</div>
  <p class="center"><a class="btn btn--dark" href="programs.html">View all programmes</a></p></div></section>`;

  const steps = [['Join a live class', 'Meet the concept with a real instructor and cohort.'], ['Practise in a lab', 'Turn the lesson into a repeatable skill.'], ['Get mentored', 'Ask, review, and keep moving with support.'], ['Get exam-ready', 'Prepare with a clear view of your next milestone.']];
  const learn = `<section class="sec"><div class="wrap split split--media">
  <div class="duo" data-reveal>${img('online_class4', { w: 640, h: 800, alt: 'Learner with headphones in a live online class' })}${img('networking4', { w: 640, h: 800, alt: 'Fibre cables connected to a network switch' })}</div>
  <div data-reveal>${eyebrow('The online learning experience')}<h2>Learn the idea. Touch the tool. <span class="hl">Make it yours.</span></h2>
  <p class="lead" style="margin-top:1.2rem">Guided practice and clear momentum, from your first class to exam day. ${demo('Platforms & schedules — to be confirmed')}</p>
  <ol class="steps">${steps.map(([t, d], i) => `<li><span class="steps__n">0${i + 1}</span><div><h3>${t}</h3><p>${d}</p></div></li>`).join('')}</ol></div></div></section>`;

  const founder = `<section class="sec sec--sand"><div class="wrap split split--media">
  <figure class="portrait" data-reveal>${img('instructor2', { w: 800, h: 1000, alt: 'Instructor teaching a class' })}<figcaption>${demo('Demo photo')}</figcaption></figure>
  <div data-reveal>${eyebrow('The human behind the path')}<h2>Learn from someone who knows the work behind the screen.</h2>
  <p class="lead" style="margin-top:1.2rem">Yasiru Nirmala Herath is the founder and lead instructor of SLTSC Academy. A Cisco Networking Academy Certified Trainer since 2011, he brings 12+ years of industry experience into every class.</p>
  <blockquote class="pull">“The next step becomes possible when learning feels practical, guided, and close to real work.”</blockquote>
  <ul class="pills"><li>CCNP ×2</li><li>CCNA ×2</li><li>Cisco Academy Council Secretary</li></ul>
  <p><a class="btn btn--primary" href="founder.html">Meet the founder</a></p></div></div></section>`;

  const t = data.testimonials;
  const stories = `<section class="sec stories"><div class="wrap">
  <div class="quote-slider" data-slider>
    <div class="quote-slider__photos">${t.map((x, i) => `<div class="qs-photo${i ? '' : ' is-active'}" data-slide>${img(x.image, { w: 640, h: 640, alt: '' })}</div>`).join('')}</div>
    <div class="quote-slider__copy">${eyebrow('What a learner journey includes')}
      <div class="qs-quotes">${t.map((x, i) => `<figure class="qs-quote${i ? ' ' : ''}${i ? '' : ' is-active'}" data-slide><blockquote>“${esc(x.quote)}”</blockquote><figcaption><strong>${esc(x.name)}</strong><span>${esc(x.role)}</span></figcaption></figure>`).join('')}</div>
      <p style="margin-top:1.2rem">${demo('Demo testimonial — to be confirmed')}</p>
      <div class="slider-ctrl"><button type="button" class="round" data-prev aria-label="Previous story">${icon('arrow', 'i--flip')}</button><button type="button" class="round" data-next aria-label="Next story">${icon('arrow')}</button><span class="dots" data-dots aria-hidden="true">${t.map((_, i) => `<i${i ? '' : ' class="is-active"'}></i>`).join('')}</span></div>
    </div></div></div></section>`;

  const news = `<section class="sec"><div class="wrap">
  ${sectionHead({ eyebrow: 'Keep exploring', title: 'Ideas, events, and the next <span class="hl">conversation</span>.', action: `<a class="arrow-link" href="news.html">All insights ${icon('arrow')}</a>` })}
  <div class="grid grid--3" data-reveal-group>${data.articles.slice(0, 3).map(a => articleCard(a)).join('')}</div>
  <ul class="events" data-reveal-group>${data.events.map(e => `<li data-reveal><span class="events__type">${esc(e.type)}</span><strong>${esc(e.title)}</strong><time>${esc(e.date)}</time></li>`).join('')}</ul></div></section>`;

  const cta = ctaBand({ eyebrow: 'Your next step can start here', title: 'Find the path that fits where you are now.', actions: `<a class="btn btn--light btn--lg" href="admissions.html">Explore admissions</a><a class="btn btn--outline-light btn--lg" href="contact.html">Talk to us</a>` });

  return { title: 'SLTSC Academy', description: 'SLTSC Academy is an online-first IT academy for networking, cybersecurity and software. Official Cisco Networking Academy courses, taught live.', hero: true, body: hero + ticker + intro + schools + route + spot + programs + learn + founder + stories + news + cta };
};
