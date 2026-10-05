(function () {
  const site = window.SLTSC;
  const page = document.body.dataset.page;
  const root = document.querySelector('#main-content');
  if (!site || !root || !page) return;

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const esc = x => String(x).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
  const arrow = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  const diag = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>';
  const WA = `https://wa.me/${site.config.whatsapp}`;
  const small = (key, kind = 'card') => window.photo(key, kind);
  const school = id => site.schools.find(s => s.id === id);
  const demo = (t = 'Demo info — to be confirmed') => `<span class="demo-note">${t}</span>`;

  /* ---------- building blocks ---------- */
  const hero = ({ crumbs, eyebrow, title, lead, img, cta = '' }) => `
    <section class="ph"><div class="nx-c ph-grid ${img ? '' : 'no-img'}">
      <div>
        <nav class="crumb" aria-label="Breadcrumb"><a href="index.html">Home</a>${crumbs.map(c => `<span>/</span>${c[1] ? `<a href="${c[1]}">${c[0]}</a>` : `<span>${c[0]}</span>`}`).join('')}</nav>
        <span class="eyebrow">${eyebrow}</span>
        <h1>${title}</h1>
        ${lead ? `<p class="lead">${lead}</p>` : ''}
        ${cta ? `<div class="ph-cta">${cta}</div>` : ''}
      </div>
      ${img ? `<div class="ph-img"><img src="${img.url}" alt="${esc(img.alt)}" fetchpriority="high"></div>` : ''}
    </section>`;

  const head = (eyebrow, title, text) => `<div class="sec-head rv"><span class="eyebrow">${eyebrow}</span><h2>${title}</h2>${text ? `<p>${text}</p>` : ''}</div>`;
  const sec = (inner, cls = '') => `<section class="sec ${cls}"><div class="nx-c">${inner}</div></section>`;
  const cta = (title, text, label, href, secondary) => `
    <section class="sec cta-sec"><div class="nx-c"><div class="cta rv"><div><h2>${title}</h2>${text ? `<p>${text}</p>` : ''}</div><div class="cta-side"><a class="nx-btn nx-btn--light" href="${href}">${label}</a>${secondary || ''}</div></div></div></section>`;
  const checks = list => `<ul class="checks">${list.map(x => `<li>${x}</li>`).join('')}</ul>`;
  const boxes = (items, cols = 3) => `<div class="grid-${cols}">${items.map((x, i) => `<article class="box rv" style="--i:${i}"><span class="num">${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join('')}</div>`;
  const acc = items => `<div class="acc">${items.map((x, i) => `<details${i === 0 && items.length < 6 ? ' open' : ''}><summary>${x[0]}</summary><p>${x[1]}</p></details>`).join('')}</div>`;
  const programCard = p => {
    const sc = school(p.school);
    return `<a class="pcard" href="program.html?id=${p.id}"><div class="pcard-img"><img src="${p.image.url}" alt="${esc(p.image.alt)}" loading="lazy"><span class="chip">${sc ? sc.short : ''}</span></div><div class="pcard-body"><h3>${p.title}</h3><div class="meta"><span>${p.level}</span><span>${p.duration}</span></div><span class="pcard-link">View programme ${arrow}</span></div></a>`;
  };
  const articleCard = (x, i = 0) => `<a class="ncard rv" style="--i:${i}" href="article.html?id=${encodeURIComponent(x.id)}"><div class="ncard-img"><img src="${x.image.url}" alt="${esc(x.image.alt)}" loading="lazy"></div><small>${esc(x.category)} · ${esc(x.read)}</small><h3>${esc(x.title)}</h3></a>`;

  /* ---------- pages ---------- */
  const pages = {};

  pages.about = () => {
    const a = site.about;
    return hero({ crumbs: [['About']], eyebrow: 'About SLTSC Academy', title: 'A clearer way forward into <span class="grad-text">technology.</span>', lead: 'An online-first learning space for people building practical technology capability in Sri Lanka and beyond.', img: small('students1') })
      + sec(`<div class="split"><div class="rv"><span class="eyebrow">Our story</span><h2>Make the next step into IT feel possible.</h2><p>We bring together guided teaching, thoughtful structure, and the confidence that comes from practising with real tools.</p><p>Flexible enough for work and family. Structured enough to keep momentum. Human enough to make questions welcome.</p>${demo()}</div><div class="img-frame rv"><img src="${small('online_class1').url}" alt="Learner on an online class" loading="lazy"></div></div>`)
      + sec(head('What we stand for', 'Four ideas behind every class.') + boxes(a.values.map(v => [v[0], v[1], v[2]]), 4), 'sec--soft')
      + sec(head('Why online', 'Learning that travels with you.', 'Online-first doesn’t mean learning alone. It means better access to guidance, replay, and the right pace for the season you’re in.') + boxes([['01', 'Live when it matters', 'Join guided sessions and bring your real questions into the room.'], ['02', 'Replay the hard parts', 'Return to explanations and examples when you need a second pass.'], ['03', 'Practise beyond theory', 'Use labs, exercises and projects to turn new language into capability.']]))
      + sec(head('A growing story', 'Small steps, designed to compound.') + `<div class="tl">${a.timeline.map(t => `<div class="tl-item rv"><span class="tl-n">${t.year}</span><div><h3>${t.title}</h3><p>${t.text}</p></div></div>`).join('')}</div>`, 'sec--soft')
      + cta('Find a practical place to begin.', 'Explore the schools and pick a direction.', 'Explore the schools', 'schools.html');
  };

  pages.founder = () => {
    const f = site.founder;
    return hero({ crumbs: [['About', 'about.html'], ['Founder']], eyebrow: 'Founder & lead instructor', title: 'Yasiru Nirmala <span class="grad-text">Herath.</span>', lead: f.bio, img: small('instructor1'), cta: `<a class="nx-btn nx-btn--grad" href="${WA}">WhatsApp Yasiru</a><a class="nx-btn nx-btn--ghost" href="${f.linkedin}" target="_blank" rel="noopener">LinkedIn</a>` })
      + sec(`<div class="split split--top"><div class="rv"><span class="eyebrow">Credentials</span><h2>Evidence-led, always.</h2><p>${f.council}. SLTSC Academy is an official Cisco Networking Academy using Cisco NetAcad curriculum.</p><div class="chips">${f.credentials.map(c => `<span>${c}</span>`).join('')}</div></div><div class="rv"><span class="eyebrow">Focus areas</span><h2>What he teaches.</h2>${checks(f.areas)}<p style="margin-top:1.5rem">Languages: ${f.languages.join(' · ')}</p></div></div>`)
      + sec(head('Career', 'Twelve years across networks, training and security.') + `<div class="tl">${f.timeline.map(t => `<div class="tl-item rv"><time>${t[0]}</time><div><h3>${t[1]}</h3><p>${t[2]}</p></div></div>`).join('')}</div>`, 'sec--soft')
      + sec(head('Education', 'Where he studied.') + checks(f.education))
      + cta('Bring your next question.', 'Yasiru answers learners directly.', 'WhatsApp Yasiru', WA);
  };

  pages.schools = () => hero({ crumbs: [['Schools']], eyebrow: 'The academy map', title: 'Find the school that fits your <span class="grad-text">next step.</span>', lead: 'Each school is a focused doorway into technology. The future school is clearly marked so today’s options stay honest.' })
    + sec(`<div class="bento">${site.schools.map(s => `<a class="school rv" href="${s.future ? 'school-data.html' : `school-${s.id}.html`}"><img src="${s.image.url}" alt="${esc(s.image.alt)}" loading="lazy"><span class="school-tag">${s.future ? 'Future school' : `${site.programs.filter(p => p.school === s.id).length} programmes`}</span><span class="school-go">${diag}</span><h3>${s.name}</h3><p>${s.description}</p></a>`).join('')}</div>`)
    + sec(head('How progress works', 'A ladder, not a dead end.', 'Start with a manageable course, build confidence through a certificate, and keep the next level visible.') + boxes([['01', 'Short course', 'A focused introduction to one practical capability.'], ['02', 'Certificate', 'A structured route through a broader skill set.'], ['03', 'Diploma', 'A deeper future pathway — demo info.'], ['04', 'Degree pathway', 'Future direction — subject to confirmation.']], 4), 'sec--soft')
    + cta('Not sure yet? Start with a conversation.', '', 'Talk to the academy', 'contact.html');

  pages.school = () => {
    const id = document.body.dataset.school;
    const sc = school(id);
    const labs = site.schoolPage.labs[id];
    const story = site.schoolPage.stories[id];
    const progs = site.programs.filter(p => p.school === id);
    document.title = `${sc.name} — SLTSC Academy`;
    return hero({ crumbs: [['Schools', 'schools.html'], [sc.short]], eyebrow: `School of ${sc.short}`, title: sc.name, lead: sc.description, img: sc.image })
      + sec(head('Programmes', 'Choose the depth that fits.') + `<div class="cards">${progs.map(programCard).join('')}</div>`)
      + sec(head('Outcomes', 'Capability you can carry forward.', 'Demo outcome directions — not employment promises.') + boxes([['01', 'Understand the foundations', 'Build the core vocabulary and mental models.'], ['02', 'Build a practical portfolio', 'Make small things you can show and explain.'], ['03', 'Explain your decisions', 'Learn to reason out loud, not just follow steps.'], ['04', 'See the next step', 'Always know where to go after this course.']], 4), 'sec--soft')
      + sec(head('Labs & tools', 'Make room for practice.', 'Tool names and lab access are demo content pending confirmation.') + boxes(labs.map((l, i) => [`0${i + 1}`, l.replace(' — demo info', ''), 'Hands-on practice tied to the curriculum.'])), 'sec--dark')
      + sec(`<div class="split"><div class="rv"><span class="eyebrow">Learner story</span><h2>One learner, one next step.</h2>${demo('Demo story')}</div><blockquote class="quote rv">“${story}”</blockquote></div>`)
      + sec(head('Questions', 'Before you begin.') + acc([['Who is this school for?', `Learners exploring a practical route into ${sc.name} — beginners, career switchers and working IT learners.`], ['What does the learning format include?', 'Live online classes, guided labs and mentor touchpoints. Details to be confirmed.'], ['What should I know before I start?', 'Curiosity and a reliable internet connection are a good start. Prerequisites vary by programme.'], ['How do I choose a programme?', 'Start with a foundation course, or talk to the academy and we’ll help you pick.']]), 'sec--soft')
      + cta('Talk through your next step.', '', 'Ask about this school', 'admissions.html');
  };

  pages.schoolData = () => {
    const sc = school('data');
    return hero({ crumbs: [['Schools', 'schools.html'], ['Data, Cloud & AI']], eyebrow: 'Future school', title: 'Data, Cloud &amp; <span class="grad-text">AI.</span>', lead: sc.description, img: sc.image })
      + sec(`<div class="split split--top"><div class="rv"><span class="eyebrow">Coming soon</span><h2>Keep this direction in sight.</h2><p>This school isn’t open for enrolment yet. Register your interest and we’ll let you know when it opens.</p>${demo()}<p style="margin-top:1.5rem">Planned: Cloud &amp; Data Foundations, Applied AI for IT Learners.</p></div>
        <form class="form rv" id="interest-form" novalidate><h3>Register interest</h3><div class="fields"><div class="field"><label for="i-name">Full name</label><input id="i-name" name="name" required></div><div class="field"><label for="i-email">Email</label><input id="i-email" type="email" name="email" required></div><div class="field field--full"><label for="i-int">What interests you?</label><textarea id="i-int" name="interest" required></textarea></div></div><button class="nx-btn nx-btn--grad" type="submit" style="margin-top:1.2rem">Register interest</button><p class="form-msg" role="status"></p></form></div>`);
  };

  pages.programs = () => hero({ crumbs: [['Programmes']], eyebrow: 'Find your direction', title: 'Programmes built for your <span class="grad-text">next capability.</span>', lead: 'Start with foundations, prepare for a professional exam, or keep building toward the technology path that fits you.' })
    + sec(`<div class="bar-in"><input id="q" type="search" placeholder="Search programmes" aria-label="Search programmes"><select id="f-school" aria-label="School"><option value="all">All schools</option>${site.schools.map(s => `<option value="${s.id}">${s.short}</option>`).join('')}</select><select id="f-level" aria-label="Level"><option value="all">All levels</option><option value="foundation">Foundation</option><option value="professional">Professional</option><option value="advanced">Advanced</option><option value="cisco">Cisco course</option><option value="future">Future</option></select><select id="f-sort" aria-label="Sort"><option value="title">A–Z</option><option value="duration">Shortest first</option></select></div><p class="count" id="count"></p><div class="cards" id="results"></div>`, 'sec--tight');

  pages.program = () => {
    const id = new URLSearchParams(location.search).get('id') || 'ccna';
    const p = site.programs.find(x => x.id === id);
    if (!p) return hero({ crumbs: [['Programmes', 'programs.html']], eyebrow: 'Not found', title: 'That programme isn’t in the catalogue.', cta: '<a class="nx-btn nx-btn--grad" href="programs.html">Browse programmes</a>' });
    const d = site.programPage[id] || site.programPage.default;
    const sc = school(p.school);
    const ccna = id === 'ccna';
    document.title = `${p.title} — SLTSC Academy`;
    return hero({ crumbs: [['Programmes', 'programs.html'], [p.title]], eyebrow: d.eyebrow, title: p.title, lead: d.intro, img: p.image })
      + `<div class="nx-c"><div class="facts"><div class="fact"><small>Duration</small><strong>${p.duration}</strong></div><div class="fact"><small>Level</small><strong>${p.level}</strong></div><div class="fact"><small>Mode</small><strong>${p.mode}</strong></div><div class="fact"><small>Next intake</small><strong>${d.next || p.intake}</strong></div><div class="fact"><small>Fee</small><strong>${d.fee || p.fee}</strong></div></div></div>`
      + sec(`<div class="detail"><div class="detail-main">
          <section><span class="eyebrow">Who it’s for</span><h2>Meet the path at the right level.</h2>${checks(d.who)}</section>
          <section><span class="eyebrow">Outcomes</span><h2>Capabilities, not vague promises.</h2>${checks(d.outcomes)}</section>
          <section><span class="eyebrow">Curriculum</span><h2>A sequence you can see.</h2><div class="acc">${d.modules.map((m, i) => `<details${i === 0 ? ' open' : ''}><summary><span><i>${m[0]}</i>${m[1]}</span></summary><p>${m[2]}</p></details>`).join('')}</div></section>
          <section><span class="eyebrow">Instructor</span><h2>A human guide for the journey.</h2><div class="person"><img src="${small('instructor1', 'square').url}" alt="Instructor"><div><h3>Yasiru Nirmala Herath</h3><p>Founder &amp; Lead Instructor · Cisco NetAcad trainer since 2011 · CCNP ×2 · CCNA ×2</p><a class="pcard-link" href="founder.html" style="margin-top:.6rem">Meet the founder ${arrow}</a></div></div></section>
          ${ccna ? `<section><span class="eyebrow">Exam information</span><h2>Prepare with accurate expectations.</h2><p>This is a preparation course for the Cisco CCNA (200-301) exam, taken separately at Pearson VUE. SLTSC Academy does not certify, and the exam voucher is separate from tuition.</p></section>` : ''}
          <section><span class="eyebrow">Questions</span><h2>Frequently asked.</h2>${acc([['Is fee and date information final?', 'No. All dates, fees and delivery details are demo info until confirmed.'], ['Do I get a certificate?', ccna ? 'You earn a Cisco NetAcad Verified badge per module. The CCNA certification itself is taken externally.' : 'Certification wording is to be confirmed for each pathway.']])}</section>
        </div>
        <aside class="aside"><span class="eyebrow" style="background:rgba(255,255,255,.12);color:#fff">${sc ? sc.short : 'Programme'}</span><h3>${p.title}</h3><p class="price">${d.fee || p.fee}</p><a class="nx-btn nx-btn--grad" href="admissions.html">Apply / enquire</a><a class="nx-btn nx-btn--ghost-light" href="${WA}?text=${encodeURIComponent('Hi, I would like to know about ' + p.title)}">WhatsApp about this</a></aside></div>`);
  };

  pages.admissions = () => hero({ crumbs: [['Admissions']], eyebrow: 'Start here', title: 'Make your next step feel <span class="grad-text">clear.</span>', lead: 'Understand the journey, see the requirements, and send an enquiry when you’re ready.', img: small('online_class2') })
    + sec(head('How to apply', 'A simple path into the conversation.') + boxes([['01', 'Explore', 'Choose a programme or ask us to help you find a starting point.'], ['02', 'Enquire', 'Share your background, goals and preferred pathway.'], ['03', 'Review', 'We review fit, timing and the next available intake.'], ['04', 'Begin', 'Receive confirmed joining details before committing.']], 4) + demo('Admissions process — to be confirmed'))
    + sec(`<div class="split split--top"><div class="rv"><span class="eyebrow">Entry requirements</span><h2>Start from where you are.</h2><div class="acc" style="margin-top:1.4rem">${[['Foundation pathways', 'Interest in technology and willingness to practise.'], ['Professional pathways', 'Relevant foundations or experience may be recommended.'], ['Future pathways', 'Demo info — to be confirmed.']].map((x, i) => `<details${i === 0 ? ' open' : ''}><summary>${x[0]}</summary><p>${x[1]}</p></details>`).join('')}</div></div>
      <div class="rv"><span class="eyebrow">Fees</span><h2>Know what’s still to be confirmed.</h2><table class="tbl" style="margin-top:1.4rem"><thead><tr><th>Item</th><th>Info</th></tr></thead><tbody><tr><td>CCNA tuition</td><td>LKR 31,500 · instalments available</td></tr><tr><td>Other programmes</td><td>Demo fee — to be confirmed</td></tr><tr><td>Exam voucher</td><td>Separate where applicable</td></tr><tr><td>Scholarships</td><td>To be confirmed</td></tr></tbody></table></div></div>`, 'sec--soft')
    + sec(`<div class="split split--top" id="apply"><div class="rv"><span class="eyebrow">Apply / enquire</span><h2>Tell us where you want to go.</h2><p>Have these nearby: your education or experience, preferred programme and intake, and contact details.</p>${demo('Demo form — nothing is sent')}</div>
      <form class="form rv" id="apply-form" novalidate><div class="fields"><div class="field"><label for="a-name">Full name</label><input id="a-name" name="name" required autocomplete="name"></div><div class="field"><label for="a-email">Email</label><input id="a-email" type="email" name="email" required autocomplete="email"></div><div class="field"><label for="a-phone">Phone</label><input id="a-phone" name="phone" required autocomplete="tel"></div><div class="field"><label for="a-lang">Preferred language</label><select id="a-lang" name="language" required><option value="">Choose</option><option>English</option><option>Sinhala</option><option>Both</option></select></div><div class="field field--full"><label for="a-prog">Programme</label><select id="a-prog" name="programme" required><option value="">Choose a programme</option>${site.programs.map(p => `<option>${p.title}</option>`).join('')}</select></div><div class="field field--full"><label for="a-goal">Your goals</label><textarea id="a-goal" name="goal" required></textarea></div><input class="hp" tabindex="-1" autocomplete="off" name="website" aria-hidden="true"></div><label class="consent"><input type="checkbox" required> I consent to being contacted about this enquiry.</label><button class="nx-btn nx-btn--grad" type="submit">Send enquiry</button><p class="form-msg" role="status"></p></form></div>`);

  pages.online = () => hero({ crumbs: [['How it works']], eyebrow: 'How it works', title: 'Online learning that feels close to <span class="grad-text">the work.</span>', lead: 'A guided rhythm of live classes, practical activities, replay and support — designed to make the screen feel more tangible.', img: small('online_class3') })
    + sec(head('The journey', 'Four moments that keep you moving.') + boxes([['01', 'Meet live', 'Join a structured class with an instructor and cohort.'], ['02', 'Practise', 'Work through a lab, exercise or guided project.'], ['03', 'Ask and review', 'Bring questions to mentor and community touchpoints.'], ['04', 'See next', 'Review progress and choose your next capability.']], 4) + demo('Delivery details — to be confirmed'))
    + sec(`<div class="split"><div class="rv"><span class="eyebrow">Your learning home</span><h2>A learning space built around momentum.</h2><p>A styled preview so you can picture the rhythm. The final platform and access rules are to be confirmed.</p></div><div class="lms rv"><div class="lms-top"><strong>SLTSC / My pathway</strong><span>Preview</span></div><div class="lms-body"><nav class="lms-nav"><span>Overview</span><span>Modules</span><span>Labs</span><span>Community</span></nav><div class="lms-main"><span class="eyebrow">This week</span><h3>IP connectivity</h3><p class="muted">Watch · practise · reflect</p><div class="bar"><i></i></div><small>62% pathway progress · Demo display</small></div></div></div></div>`, 'sec--soft')
    + sec(`<div class="split"><div class="img-frame rv"><img src="${small('networking3').url}" alt="Network lab equipment" loading="lazy"></div><div class="rv"><span class="eyebrow">Virtual labs</span><h2>Practice needs a place to happen.</h2>${checks(['Structured lab tasks tied to each module', 'Repeatable practice with guided checkpoints', 'Reflection and troubleshooting prompts'])}${demo('Platform details — to be confirmed')}</div></div>`)
    + sec(head('A week in the cohort', 'Example live schedule.') + `<table class="tbl"><thead><tr><th>Day</th><th>Session</th><th>Format</th></tr></thead><tbody><tr><td>Tuesday</td><td>Concept class</td><td>Live online</td></tr><tr><td>Thursday</td><td>Lab walkthrough</td><td>Guided practice</td></tr><tr><td>Saturday</td><td>Q&amp;A / review</td><td>Support touchpoint</td></tr></tbody></table>${demo('Demo schedule — to be confirmed')}`, 'sec--soft')
    + sec(`<div class="split"><div class="rv"><span class="eyebrow">Support around you</span><h2>You don’t have to learn alone.</h2></div>${checks(['Instructor and mentor touchpoints', 'Cohort community and questions', 'Replay library where available', 'Progress prompts and next-step guidance'])}</div>`)
    + cta('Find a programme that fits your starting point.', '', 'Explore programmes', 'programs.html');

  pages.community = () => {
    const c = site.community;
    return hero({ crumbs: [['Community']], eyebrow: 'Student life', title: 'Learn together. Find your <span class="grad-text">people.</span>', lead: 'Connect with fellow learners, bring questions into the room, and keep your momentum between live sessions.', img: small('students3') })
      + sec(head('Three pillars', 'Online learning feels better when the work is shared.') + `<div class="cards">${c.pillars.map((p, i) => `<article class="pcard rv" style="--i:${i}"><div class="pcard-img"><img src="${p.image.url}" alt="${esc(p.image.alt)}" loading="lazy"><span class="chip">0${i + 1}</span></div><div class="pcard-body"><h3>${esc(p.title)}</h3><p class="muted" style="color:var(--nx-ink-2)">${esc(p.text)}</p></div></article>`).join('')}</div>`)
      + sec(head('Learner stories', 'Small moments of progress.', 'Demo stories — to be replaced with approved learner evidence.') + `<div class="stories">${c.stories.map((x, i) => `<figure class="story rv" style="--i:${i};margin:0"><q>${esc(x.quote)}</q><figcaption class="who"><img src="${x.image.url}" alt="${esc(x.image.alt)}" loading="lazy"><div><b>${esc(x.name)}</b><span>${esc(x.role)}</span></div></figcaption></figure>`).join('')}</div>`, 'sec--soft')
      + sec(head('Events', 'Make space for the next conversation.', 'Orientation, labs and Q&A sessions — dates to be confirmed.') + `<div class="events">${site.events.map(e => `<div class="event"><span class="event-ico"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M8 3v4M16 3v4M3 10h18"/></svg></span><div><b>${e.title}</b><span>${e.type} · ${e.date}</span></div></div>`).join('')}</div>`)
      + sec(head('Gallery', 'Learning in motion.') + `<div class="gal">${c.gallery.map(g => `<figure class="rv"><img src="${g.url}" alt="${esc(g.alt)}" loading="lazy"></figure>`).join('')}</div>`, 'sec--soft')
      + cta('Join the conversation.', 'Chat with the academy on WhatsApp.', 'WhatsApp the academy', WA);
  };

  pages.news = () => {
    const a = site.articles;
    const f = a[0];
    return hero({ crumbs: [['Insights']], eyebrow: 'News · learning notes · events', title: 'Ideas for <span class="grad-text">what’s next.</span>', lead: 'Useful context for your next step in IT — learning paths, practical work, and the people around the academy.' })
      + sec(`<a class="split rv" href="article.html?id=${encodeURIComponent(f.id)}" style="text-decoration:none"><div class="img-frame"><img src="${f.image.url}" alt="${esc(f.image.alt)}"></div><div><span class="eyebrow">Featured · ${esc(f.category)}</span><h2>${esc(f.title)}</h2><p>${esc(f.excerpt)}</p><span class="pcard-link" style="margin-top:1.2rem;display:inline-flex">Read the insight ${arrow}</span></div></a>`, 'sec--tight')
      + sec(`<div class="tabs" id="tabs">${['All', 'Learning paths', 'Online learning', 'Student experience', 'Networking', 'Cybersecurity'].map((t, i) => `<button class="tab${i ? '' : ' is-active'}" data-f="${t}">${t}</button>`).join('')}</div><div class="news" id="articles"></div>`, 'sec--soft');
  };

  pages.article = () => {
    const id = new URLSearchParams(location.search).get('id');
    const x = site.articles.find(i => i.id === id);
    if (!x) return hero({ crumbs: [['Insights', 'news.html']], eyebrow: 'Not found', title: 'We couldn’t find that article.', cta: '<a class="nx-btn nx-btn--grad" href="news.html">Back to insights</a>' });
    document.title = `${x.title} — SLTSC Academy`;
    return hero({ crumbs: [['Insights', 'news.html'], [esc(x.category)]], eyebrow: esc(x.category), title: esc(x.title), lead: esc(x.excerpt), img: x.image })
      + sec(`<article class="art"><div class="art-meta"><span>By ${esc(x.author)}</span><span>${esc(x.date)}</span><span>${esc(x.read)}</span></div><p class="lead" style="margin-top:2rem">Technology becomes easier to approach when ideas are connected to a real practice loop: learn, try, reflect, and try again.</p><h2>Start with a useful question</h2><p>Good learning content gives you enough context to make a decision, then enough room to test it.</p><blockquote>“Progress is easier to see when the next action is concrete.”</blockquote><h2>Make practice repeatable</h2><p>Keep your examples small. Name what you are testing. Write down what changed.</p><pre><code>Router&gt; enable\nRouter# show ip interface brief\nRouter# show running-config</code></pre><h2>Leave with a next step</h2><ul><li>Choose one concept to revisit.</li><li>Practise it in a controlled environment.</li><li>Share the question you still have.</li></ul>${demo('Demo article — editorial copy to be confirmed')}</article>`)
      + cta('Keep exploring.', '', 'More insights', 'news.html');
  };

  const FAQ = [
    ['Admissions', 'Who are the programmes designed for?', 'Beginners, career switchers and working IT learners. Entry requirements for each programme are demo information.'],
    ['Online learning', 'How does online learning work?', 'Live online classes, replay resources, guided practice and community touchpoints. Platforms and schedules are to be confirmed.'],
    ['Payments', 'Can I pay in instalments?', 'Payment plans are an admissions conversation. Current fees and terms are demo information.'],
    ['Certifications', 'Will I receive a certification?', 'Certification language is confirmed per pathway before publication. No accreditation claim is made here.'],
    ['Technical', 'What do I need to join a class?', 'A reliable internet connection and a suitable device. Exact requirements are demo information.'],
    ['Online learning', 'Are recordings available?', 'Replay access is part of the proposed model; availability and retention are to be confirmed.']
  ];
  pages.faq = () => hero({ crumbs: [['FAQ']], eyebrow: 'Answers, clearly', title: 'Questions before your <span class="grad-text">next step?</span>', lead: 'Search the answers below. Final admissions, payment and certification details are to be confirmed.' })
    + sec(`<div class="bar-in" style="grid-template-columns:1fr"><input id="faq-q" type="search" placeholder="Search your question" aria-label="Search FAQs"></div><div class="tabs" id="tabs">${['All', 'Admissions', 'Online learning', 'Payments', 'Certifications', 'Technical'].map((t, i) => `<button class="tab${i ? '' : ' is-active'}" data-f="${t}">${t}</button>`).join('')}</div><div class="acc" id="faq-list" style="max-width:860px"></div>`, 'sec--tight')
    + cta('Still have a question?', 'Talk to a human about your next step.', 'Contact the academy', 'contact.html');

  pages.contact = () => hero({ crumbs: [['Contact']], eyebrow: 'Start a conversation', title: 'Tell us what you want to learn <span class="grad-text">next.</span>', lead: 'A clear answer starts with a good question.' })
    + sec(`<div class="split split--top"><div class="rv"><span class="eyebrow">Contact the academy</span><h2>We’d love to hear from you.</h2><div class="cinfo"><div><small>Call or WhatsApp</small><strong><a href="tel:+94718000849">${site.config.phone}</a></strong><span class="muted">Availability to be confirmed</span></div><div><small>Email</small><strong><a href="mailto:hello@sltsc.academy">hello@sltsc.academy</a></strong><span class="muted">Placeholder inbox</span></div><div><small>Office hours</small><strong>Monday – Friday</strong><span class="muted">Demo hours — to be confirmed</span></div></div></div>
      <form class="form rv" id="enquiry-form" novalidate><h2 style="font-size:1.8rem">Send an enquiry</h2><div class="fields"><div class="field"><label for="c-name">Name</label><input id="c-name" name="name" required autocomplete="name"></div><div class="field"><label for="c-phone">Phone</label><input id="c-phone" name="phone" required autocomplete="tel"></div><div class="field"><label for="c-email">Email</label><input id="c-email" type="email" name="email" required autocomplete="email"></div><div class="field"><label for="c-prog">Programme</label><select id="c-prog" name="programme" required><option value="">Choose a programme</option>${site.programs.map(p => `<option value="${p.id}">${p.title}</option>`).join('')}</select></div><div class="field field--full"><label for="c-msg">Message</label><textarea id="c-msg" name="message" required></textarea></div><input class="hp" tabindex="-1" autocomplete="off" name="website" aria-hidden="true"></div><label class="consent"><input type="checkbox" required> I understand this is a demo form and contact details are placeholders.</label><button class="nx-btn nx-btn--grad" type="submit">Send enquiry</button><p class="form-msg" role="status"></p></form></div>`, 'sec--tight')
    + cta('Looking for corporate training for your team?', 'Let’s talk about a practical programme.', 'Enquire for your team', 'mailto:hello@sltsc.academy');

  pages.faculty = () => hero({ crumbs: [['Faculty']], eyebrow: 'People behind the pathway', title: 'Meet the <span class="grad-text">faculty.</span>', lead: 'Guidance that keeps learning human.' })
    + sec(`<div class="tabs" id="tabs"><button class="tab is-active" data-f="all">All schools</button>${['networking', 'cybersecurity', 'software'].map(s => `<button class="tab" data-f="${s}">${school(s).short}</button>`).join('')}</div><div class="people" id="people"></div>${demo('Demo faculty — to be confirmed')}`, 'sec--tight');

  /* ---------- render ---------- */
  const key = page === 'school' && document.body.dataset.school === 'data' ? 'schoolData' : page;
  root.innerHTML = (pages[key] || (() => ''))();

  /* ---------- behaviour ---------- */
  const flash = (form, text) => { const m = $('.form-msg', form); if (m) m.textContent = text; };
  const validate = form => {
    $$('.field-error', form).forEach(x => x.remove());
    $$('[aria-invalid]', form).forEach(x => x.removeAttribute('aria-invalid'));
    const bad = $$('[required]', form).find(x => x.type === 'checkbox' ? !x.checked : !x.checkValidity());
    if (bad) {
      bad.setAttribute('aria-invalid', 'true');
      if (bad.type !== 'checkbox') { const e = document.createElement('span'); e.className = 'field-error'; e.textContent = bad.validationMessage || 'Please complete this field.'; bad.closest('.field')?.append(e); }
      bad.focus();
      return false;
    }
    return !form.website?.value;
  };
  const form = (sel, msg) => { const f = $(sel); if (!f) return; f.addEventListener('submit', e => { e.preventDefault(); if (!validate(f)) return; flash(f, msg); f.reset(); }); };
  form('#interest-form', 'Thanks — demo only, nothing was sent.');
  form('#apply-form', 'Thanks — demo only, nothing was sent. In production the confirmed enquiry flow continues here.');
  form('#enquiry-form', 'Thanks — demo only, nothing was sent. The team can follow up once contact details are confirmed.');

  if (page === 'programs') {
    const levelBucket = d => { const w = parseInt(d, 10); return w <= 8 ? 0 : w <= 16 ? 1 : 2; };
    const q = $('#q'), fs = $('#f-school'), fl = $('#f-level'), so = $('#f-sort');
    const fromUrl = new URLSearchParams(location.search).get('school');
    if (fromUrl && school(fromUrl)) fs.value = fromUrl;
    const draw = () => {
      const t = q.value.trim().toLowerCase();
      const list = site.programs.filter(p => (fs.value === 'all' || p.school === fs.value) && (fl.value === 'all' || p.level.toLowerCase().includes(fl.value)) && `${p.title} ${p.school} ${p.level}`.toLowerCase().includes(t));
      list.sort((a, b) => so.value === 'duration' ? parseInt(a.duration, 10) - parseInt(b.duration, 10) || levelBucket(a.duration) - levelBucket(b.duration) : a.title.localeCompare(b.title));
      $('#count').textContent = `${list.length} programme${list.length === 1 ? '' : 's'}`;
      $('#results').innerHTML = list.length ? list.map(programCard).join('') : '<div class="empty"><h3>No exact match yet.</h3><p>Try a broader filter, or ask the academy to help you choose a starting point.</p></div>';
    };
    [q, fs, fl, so].forEach(c => c.addEventListener(c === q ? 'input' : 'change', draw));
    draw();
  }

  const tabs = (onPick) => { $$('#tabs .tab').forEach(b => b.addEventListener('click', () => { $$('#tabs .tab').forEach(x => x.classList.remove('is-active')); b.classList.add('is-active'); onPick(b.dataset.f); })); };

  if (page === 'news') {
    const draw = f => { $('#articles').innerHTML = site.articles.filter(x => f === 'All' || x.category === f).map((x, i) => articleCard(x, i)).join('') || '<div class="empty"><h3>Nothing here yet.</h3></div>'; $$('#articles .rv').forEach(e => e.classList.add('in')); };
    tabs(draw); draw('All');
  }

  if (page === 'faq') {
    let cat = 'All';
    const draw = () => {
      const t = $('#faq-q').value.trim().toLowerCase();
      const list = FAQ.filter(x => (cat === 'All' || x[0] === cat) && `${x[1]} ${x[2]}`.toLowerCase().includes(t));
      $('#faq-list').innerHTML = list.length ? list.map(x => `<details><summary>${x[1]}</summary><p>${x[2]}</p></details>`).join('') : '<div class="empty"><h3>No matching questions.</h3><p>Try another word, or contact the academy.</p></div>';
    };
    tabs(f => { cat = f; draw(); });
    $('#faq-q').addEventListener('input', draw);
    draw();
  }

  if (page === 'faculty') {
    const draw = f => { $('#people').innerHTML = site.faculty.filter(p => f === 'all' || p.school === f || p.school === 'all').map(p => `<article class="pcard2"><div class="im"><img src="${p.image.url}" alt="${esc(p.image.alt)}" loading="lazy"></div><div class="t"><h3>${p.name}</h3><p>${p.role}</p></div></article>`).join(''); };
    tabs(draw); draw('all');
  }

  /* reveal on scroll */
  const items = $$('.rv');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .08, rootMargin: '0px 0px -40px' });
    items.forEach(el => io.observe(el));
  } else items.forEach(el => el.classList.add('in'));
}());
