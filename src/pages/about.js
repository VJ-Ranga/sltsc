'use strict';
const { data, esc, img, icon, demo, banner, sectionHead, ctaBand, eyebrow } = require('../lib');

function about() {
  const a = data.about;
  const body = banner({ eyebrow: 'About SLTSC Academy', title: 'A clearer way forward into technology.', crumbs: [['About', 'about.html']], image: 'hero3' }) + `
  <section class="sec"><div class="wrap split" data-reveal>
    <div>${eyebrow('Our story')}<h2>Make the next step into IT feel possible.</h2></div>
    <div class="prose"><p class="lead">SLTSC Academy is an online-first learning space for people building practical technology capability in Sri Lanka and beyond.</p><p>We bring together guided teaching, thoughtful structure, and the confidence that comes from practising with real tools. This is a demo expression of the academy’s direction, ready to be refined with client-approved proof.</p>${demo()}</div></div></section>

  <section class="sec sec--tight"><div class="wrap collage" data-reveal-group>
    <figure class="collage__main" data-reveal>${img('students1', { w: 1200, h: 800, alt: 'Learners collaborating around a laptop' })}<figcaption>Learning is a shared practice.</figcaption></figure>
    <figure class="collage__side" data-reveal>${img('online_class5', { w: 700, h: 760, alt: 'Online class on a laptop' })}</figure>
    <div class="collage__note" data-reveal><span>01</span><p>Learn with guidance.<br>Practise with real tools.<br>See your next step clearly.</p></div>
  </div></section>

  <section class="sec sec--sand"><div class="wrap">
    ${sectionHead({ eyebrow: 'The direction', title: 'Built around a learner’s real life.', text: 'Flexible enough for work and family. Structured enough to keep momentum. Human enough to make questions welcome.' })}
    <div class="grid grid--4" data-reveal-group>${a.values.map(v => `<article class="tile" data-reveal><span class="tile__n">${v[0]}</span><h3>${esc(v[1])}</h3><p>${esc(v[2])}</p></article>`).join('')}</div></div></section>

  <section class="sec"><div class="wrap">
    ${sectionHead({ eyebrow: 'Why online', title: 'Learning that travels with you.', text: 'Online-first does not have to mean learning alone. It can mean better access to guidance, replay, and the right pace for the season you are in.' })}
    <div class="grid grid--3" data-reveal-group>${[['Live when it matters', 'Join guided sessions and bring your real questions into the room.', 'laptop'], ['Replay the hard parts', 'Return to explanations and examples when you need a second pass.', 'play'], ['Practise beyond theory', 'Use labs, exercises, and projects to turn new language into capability.', 'flask']].map(([t, d, i]) => `<article class="tile tile--icon" data-reveal><span class="feature__icon">${icon(i)}</span><h3>${t}</h3><p>${d}</p></article>`).join('')}</div></div></section>

  <section class="band band--dark"><div class="wrap metrics" data-reveal-group>${a.metrics.map(m => `<div class="metric" data-reveal><strong>${esc(m[0])}<em>${esc(m[1])}</em></strong><span>${esc(m[2])}</span></div>`).join('')}</div><div class="wrap"><p class="band__note">${demo('Demo figures — to be confirmed')}</p></div></section>

  <section class="sec"><div class="wrap">
    ${sectionHead({ eyebrow: 'A growing story', title: 'Small steps, designed to compound.', text: 'Every chapter is a placeholder today: a clear place for confirmed history, dates and evidence to land tomorrow.' })}
    <ol class="timeline" data-reveal-group>${a.timeline.map(t => `<li data-reveal><span class="timeline__n">${esc(t.year)}</span><div><h3>${esc(t.title)}</h3><p>${esc(t.text)}</p></div></li>`).join('')}</ol></div></section>

  <section class="sec sec--sand"><div class="wrap">
    ${sectionHead({ eyebrow: 'Faculty & community', title: 'People make the pathway.', action: `<a class="arrow-link" href="faculty.html">All faculty ${icon('arrow')}</a>` })}
    <div class="grid grid--3" data-reveal-group>${data.faculty.slice(0, 3).map(f => facultyCard(f)).join('')}</div></div></section>` +
    ctaBand({ eyebrow: 'Your next chapter', title: 'Find a practical place to begin.', actions: `<a class="btn btn--light btn--lg" href="schools.html">Explore the schools</a>` });
  return { title: 'About', description: 'About SLTSC Academy — an online-first IT academy built around guided teaching, practical labs and a clear learning pathway.', body };
}

function facultyCard(f) {
  return `<article class="card fcard" data-reveal data-school="${f.school}"><div class="card__media">${img(f.image, { w: 640, h: 760, alt: f.name })}</div><div class="card__body"><h3>${esc(f.name)}</h3><p class="muted">${esc(f.role)}</p>${f.confirmed ? `<a class="arrow-link" href="founder.html">Full profile ${icon('arrow')}</a>` : demo(f.badge + ' — to be confirmed')}</div></article>`;
}

function founder() {
  const f = data.founder;
  const body = banner({ eyebrow: 'Founder & lead instructor', title: 'Yasiru Nirmala Herath', intro: 'Cisco Networking Academy Certified Trainer since 2011, with 12+ years across network operations, training and security.', crumbs: [['About', 'about.html'], ['Founder', 'founder.html']], image: 'instructor1' }) + `
  <section class="sec"><div class="wrap split split--media">
    <figure class="portrait" data-reveal>${img('instructor1', { w: 800, h: 1000, alt: 'Instructor teaching a class' })}<figcaption>${demo('Demo photo')}</figcaption></figure>
    <div data-reveal>${eyebrow('Profile')}<h2>Teaching networking the way it is practised.</h2><p class="lead">${esc(f.bio)}</p>
      <h3 class="mini">Focus areas</h3><ul class="pills">${f.areas.map(x => `<li>${esc(x)}</li>`).join('')}</ul>
      <h3 class="mini">Languages</h3><ul class="pills">${f.languages.map(x => `<li>${esc(x)}</li>`).join('')}</ul>
      <p class="links"><a class="btn btn--dark" href="${f.linkedin}" rel="noopener">LinkedIn ${icon('arrow-up-right', 'i--sm')}</a> <a class="btn btn--outline" href="${f.site}" rel="noopener">ynh.lk ${icon('arrow-up-right', 'i--sm')}</a></p></div></div></section>

  <section class="band band--dark"><div class="wrap split" data-reveal><div>${eyebrow('Cisco Academy Council')}<h2>${esc(f.council)}</h2></div><p class="lead">Official Cisco Networking Academy instructor, giving learners a direct line to the curriculum’s authors’ community.</p></div></section>

  <section class="sec"><div class="wrap">
    ${sectionHead({ eyebrow: 'Credentials & certifications', title: 'Evidence-led, always.' })}
    <ul class="creds" data-reveal-group>${f.credentials.map(c => `<li data-reveal>${icon('award')}<span>${esc(c)}</span></li>`).join('')}</ul>
    <h3 class="mini">Education</h3><ul class="plain">${f.education.map(e => `<li>${esc(e)}</li>`).join('')}</ul></div></section>

  <section class="sec sec--sand"><div class="wrap">
    ${sectionHead({ eyebrow: 'Experience', title: 'From the field to the classroom.' })}
    <ol class="career" data-reveal-group>${f.timeline.map(([y, r, o]) => `<li data-reveal><time>${esc(y)}</time><strong>${esc(r)}</strong><span>${esc(o)}</span></li>`).join('')}</ol></div></section>` +
    ctaBand({ eyebrow: 'Learn with Yasiru', title: 'Start with a conversation about your goals.', actions: `<a class="btn btn--light btn--lg" href="contact.html">Contact the academy</a><a class="btn btn--outline-light btn--lg" href="programs.html">View programmes</a>` });
  return { title: 'Founder', description: 'Meet Yasiru Nirmala Herath, founder and lead instructor of SLTSC Academy and Cisco Networking Academy Certified Trainer since 2011.', body };
}

function faculty() {
  const body = banner({ eyebrow: 'Faculty', title: 'The people behind the pathways.', intro: 'Meet the teaching voice behind the academy. Mentor profiles are placeholders until confirmed.', crumbs: [['About', 'about.html'], ['Faculty', 'faculty.html']], image: 'instructor3' }) + `
  <section class="sec"><div class="wrap">
    <div class="tabs" role="group" aria-label="Filter faculty" data-filter-group="faculty-grid"><button type="button" class="tab is-active" data-filter="all" aria-pressed="true">All</button><button type="button" class="tab" data-filter="networking" aria-pressed="false">Networking</button><button type="button" class="tab" data-filter="cybersecurity" aria-pressed="false">Cybersecurity</button><button type="button" class="tab" data-filter="software" aria-pressed="false">Software</button></div>
    <div class="grid grid--4" id="faculty-grid" data-keep="all">${data.faculty.map(f => facultyCard(f)).join('')}</div></div></section>` +
    ctaBand({ eyebrow: 'Join the faculty', title: 'Interested in teaching with SLTSC?', actions: `<a class="btn btn--light btn--lg" href="contact.html">Get in touch</a>` });
  return { title: 'Faculty', description: 'Faculty and mentors at SLTSC Academy.', body };
}

module.exports = { about, founder, faculty };
