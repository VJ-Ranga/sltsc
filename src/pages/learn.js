'use strict';
const { data, esc, img, icon, demo, schoolOf, banner, sectionHead, ctaBand, programCard, eyebrow } = require('../lib');

/* ---------- schools overview ---------- */
function schools() {
  const body = banner({ eyebrow: 'The academy map', title: 'Find the school that fits your next step.', crumbs: [['Schools', 'schools.html']], image: 'students1' }) + `
  <section class="sec"><div class="wrap">
    ${sectionHead({ eyebrow: 'Four directions', title: 'Choose a starting point, keep the pathway open.', text: 'Each school is a focused doorway into technology. The future school is clearly marked so today’s options stay honest.' })}
    <div class="rows">${data.schools.map((s, i) => {
      const n = data.programs.filter(p => p.school === s.id).length;
      return `<article class="row${i % 2 ? ' row--flip' : ''}" data-reveal><div class="row__media">${img(s.image, { w: 900, h: 700, alt: '' })}<span class="chip chip--float">${s.future ? 'Future school' : 'Current pathway'}</span></div>
      <div class="row__copy"><span class="eyebrow">0${i + 1} / School</span><h3>${esc(s.name)}</h3><p>${esc(s.description)}</p><p>${s.future ? demo() : `<span class="tag">${n} programmes</span>`}</p><a class="btn ${s.future ? 'btn--outline' : 'btn--primary'}" href="${s.future ? 'contact.html' : `school-${s.id}.html`}">${s.future ? 'Register interest' : 'Explore school'}</a></div></article>`;
    }).join('')}</div></div></section>

  <section class="sec sec--sand"><div class="wrap">
    ${sectionHead({ eyebrow: 'The academic structure', title: 'A ladder, not a dead end.', text: 'Start with a manageable course, build confidence through a certificate, and keep the next level visible.' })}
    <ol class="ladder" data-reveal-group>${[['01', 'Short course', 'A focused introduction to one practical capability.'], ['02', 'Certificate', 'A structured route through a broader skill set.'], ['03', 'Diploma', 'A deeper future pathway.'], ['04', 'Degree pathway', 'Future direction, subject to confirmation.']].map(([n, t, d], i) => `<li data-reveal><span>${n}</span><h3>${t}</h3><p>${d}</p>${i > 1 ? demo() : ''}</li>`).join('')}</ol></div></section>` +
    ctaBand({ eyebrow: 'Not sure where to start?', title: 'Tell us your goal and we’ll point you to a school.', actions: `<a class="btn btn--light btn--lg" href="contact.html">Ask the academy</a>` });
  return { title: 'Schools', description: 'Explore the schools at SLTSC Academy: networking, cybersecurity, software and a future data, cloud and AI school.', body };
}

/* ---------- single school ---------- */
function school(s) {
  const labs = data.schoolPage.labs[s.id] || [];
  const story = data.schoolPage.stories[s.id];
  const progs = data.programs.filter(p => p.school === s.id);
  const body = banner({ eyebrow: `School of ${esc(s.name)}`, title: esc(s.name), intro: esc(s.description), crumbs: [['Schools', 'schools.html'], [s.short, `school-${s.id}.html`]], image: s.image }) + `
  <section class="sec"><div class="wrap split split--media"><div data-reveal>${eyebrow(s.short)}<h2>${esc(s.description)}</h2><p class="lead">A practical school built around guided classes, hands-on practice and a visible next step. ${demo()}</p><p><a class="btn btn--primary" href="programs.html?school=${s.id}">Browse ${progs.length} programmes</a></p></div>
  <figure class="portrait portrait--wide" data-reveal>${img(s.image, { w: 900, h: 700, alt: '' })}</figure></div></section>

  <section class="sec sec--sand"><div class="wrap">
    ${sectionHead({ eyebrow: 'Career outcomes', title: 'Capability you can carry forward.', text: 'These are outcome directions, not employment promises. Final copy should reflect the confirmed curriculum.' })}
    <ol class="ladder" data-reveal-group>${['Understand the foundations', 'Build a practical portfolio', 'Explain your decisions', 'See the next learning step'].map((x, i) => `<li data-reveal><span>0${i + 1}</span><h3>${x}</h3>${demo()}</li>`).join('')}</ol></div></section>

  <section class="sec"><div class="wrap">
    ${sectionHead({ eyebrow: 'Programmes in this school', title: 'Choose the depth that fits.' })}
    <div class="grid grid--3" data-reveal-group>${progs.map(p => programCard(p)).join('')}</div></div></section>

  ${labs.length ? `<section class="band band--dark"><div class="wrap">
    ${sectionHead({ eyebrow: 'Learning labs & tools', title: 'Make room for practice.', text: 'Tool names and lab access are placeholders pending confirmation.' })}
    <ol class="ladder ladder--dark" data-reveal-group>${labs.map((l, i) => `<li data-reveal><span>0${i + 1}</span><h3>${esc(l.replace(' — demo info', ''))}</h3>${demo('Demo info')}</li>`).join('')}</ol></div></section>` : ''}

  ${story ? `<section class="sec"><div class="wrap split split--center" data-reveal><div>${eyebrow('Learner story')}<blockquote class="pull">${esc(story)}</blockquote>${demo('Demo story — to be confirmed')}</div><div class="prose"><p class="lead">Real learner stories will land here once confirmed by the academy.</p></div></div></section>` : ''}` +
    ctaBand({ eyebrow: 'Ready when you are', title: `Start your ${esc(s.short.toLowerCase())} journey.`, actions: `<a class="btn btn--light btn--lg" href="admissions.html">Apply now</a><a class="btn btn--outline-light btn--lg" href="contact.html">Ask a question</a>` });
  return { title: s.name, description: `${s.name} at SLTSC Academy. ${s.description}`, body };
}

/* ---------- programme listing ---------- */
function programs() {
  const body = banner({ eyebrow: 'Find your direction', title: 'Programmes built for your next capability.', intro: 'Start with foundations, prepare for a professional exam, or keep building toward the technology path that fits you.', crumbs: [['Programmes', 'programs.html']], image: 'students2' }) + `
  <section class="sec sec--tight"><div class="wrap">
    <form class="filters" data-programs-filter role="search" aria-label="Filter programmes" onsubmit="return false">
      <div class="filters__search">${icon('search')}<label class="sr-only" for="pf-q">Search programmes</label><input id="pf-q" type="search" placeholder="Search programmes" data-q></div>
      <label class="sr-only" for="pf-school">School</label><select id="pf-school" data-school><option value="all">All schools</option>${data.schools.map(s => `<option value="${s.id}">${esc(s.name)}</option>`).join('')}</select>
      <label class="sr-only" for="pf-dur">Duration</label><select id="pf-dur" data-dur><option value="all">Any duration</option><option value="short">Up to 8 weeks</option><option value="medium">9 weeks – 4 months</option><option value="long">6 months or more</option></select>
      <label class="sr-only" for="pf-sort">Sort</label><select id="pf-sort" data-sort><option value="az">Sort: A–Z</option><option value="short">Shortest first</option><option value="long">Longest first</option></select>
    </form>
    <p class="result-line" aria-live="polite"><span data-count>${data.programs.length}</span> programmes shown <span class="muted">· Catalogue to be confirmed</span></p>
    <div class="grid grid--3" id="program-list">${data.programs.map(p => programCard(p)).join('')}</div>
    <p class="empty" data-empty hidden><strong>No programmes match.</strong> <button type="button" class="arrow-link" data-reset>Clear filters</button></p></div></section>` +
    ctaBand({ eyebrow: 'Need help choosing?', title: 'Tell us your level and goal. We’ll suggest a start.', actions: `<a class="btn btn--light btn--lg" href="contact.html">Ask the academy</a>` });
  return { title: 'Programmes', description: 'Browse SLTSC Academy programmes in networking, cybersecurity and software, including the Cisco CCNA 200-301 v2.', body };
}

/* ---------- single programme ---------- */
function program(p) {
  const s = schoolOf(p.school);
  const det = data.programPage[p.id] || data.programPage.default;
  const isCcna = p.id === 'ccna';
  const title = det === data.programPage.default ? p.title : det.title;
  const intro = det === data.programPage.default ? data.programPage.default.intro : det.intro;
  const fee = det === data.programPage.default ? p.fee : det.fee;
  const next = det.next;
  const related = data.programs.filter(x => x.school === p.school && x.id !== p.id).slice(0, 3);
  const fx = [['Duration', p.duration], ['Level', p.level], ['Mode', p.mode], ['Next intake', next], ['Fee', fee]];

  const body = `<section class="banner banner--detail"><div class="banner__bg">${img(p.image, { w: 1800, h: 900, alt: '', eager: true })}</div><div class="wrap banner__in banner__in--split">
    <div><nav class="crumbs" aria-label="Breadcrumb"><ol><li><a href="index.html">Home</a></li><li><a href="programs.html">Programmes</a></li><li aria-current="page">${esc(s.short)}</li></ol></nav>${p.badge ? `<span class="tag tag--gold">${esc(p.badge)}</span>` : eyebrow(esc(det.eyebrow))}<h1>${esc(title)}</h1><p class="banner__intro">${esc(intro)}</p></div>
    <div class="banner__thumb">${img(p.image, { w: 700, h: 520, alt: '' })}</div></div></section>
  <section class="facts"><dl class="wrap facts__in">${fx.map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl></section>

  <section class="sec"><div class="wrap detail">
    <div class="detail__main">
      <section data-reveal><h2>Overview</h2><p class="lead">${esc(intro)}</p>${isCcna ? '' : demo('Programme detail — to be confirmed')}</section>
      <section data-reveal><h2>Who it’s for</h2><ul class="checks">${det.who.map(x => `<li>${esc(x)}</li>`).join('')}</ul></section>
      <section data-reveal><h2>What you’ll gain</h2><ul class="checks">${det.outcomes.map(x => `<li>${esc(x)}</li>`).join('')}</ul></section>
      <section data-reveal><h2>${isCcna ? 'Three modules, three badges' : 'Curriculum outline'}</h2>
        <ol class="modules">${det.modules.map(m => `<li><span class="modules__n">${esc(m[0])}</span><div><h3>${esc(m[1])}</h3><p>${esc(m[2])}</p>${m[3] ? `<span class="tag tag--gold">Cisco NetAcad ${esc(m[3])}</span>` : ''}</div></li>`).join('')}</ol></section>
      <section data-reveal><h2>Questions</h2><div class="accordion">${[['Is the schedule fixed?', 'Delivery mode and schedule are to be confirmed with the academy before each intake.'], ['Can I pay in instalments?', isCcna ? 'Yes. Instalments are available for the CCNA programme. Ask the academy for the current plan.' : 'Payment plans are discussed during admissions. Details are to be confirmed.'], ['Does enquiring guarantee a place?', 'No. An enquiry is not an acceptance. The academy reviews fit, timing and the next intake.']].map(([q, a]) => `<details><summary>${q}${icon('plus')}</summary><p>${a}</p></details>`).join('')}</div></section>
    </div>
    <aside class="detail__side" data-reveal><div class="sidecard">${eyebrow('Plan your next step')}<h3>${esc(isCcna ? 'CCNA 200-301 v2' : title)}</h3><p class="sidecard__price">${esc(fee)}</p><p class="muted">${esc(next)}</p><a class="btn btn--primary btn--block" href="admissions.html">Apply now</a><a class="btn btn--outline btn--block" href="contact.html">Ask a question</a><a class="btn btn--ghost btn--block" href="https://wa.me/${data.config.whatsapp}">${icon('chat', 'i--sm')} WhatsApp</a></div></aside>
  </div></section>

  ${related.length ? `<section class="sec sec--sand"><div class="wrap">${sectionHead({ eyebrow: 'Keep exploring', title: `More in ${esc(s.short)}.` })}<div class="grid grid--3" data-reveal-group>${related.map(r => programCard(r)).join('')}</div></div></section>` : ''}` +
    ctaBand({ eyebrow: 'Ready to begin?', title: 'Tell us where you are and we’ll help you start.', actions: `<a class="btn btn--light btn--lg" href="admissions.html">Apply now</a>` });
  return { title: title, description: `${title} at SLTSC Academy. ${intro}`, body };
}

/* ---------- admissions ---------- */
function admissions() {
  const body = banner({ eyebrow: 'Start here', title: 'Make your next step feel clear.', intro: 'Understand the journey, see the entry requirements, and send an enquiry when you’re ready.', crumbs: [['Admissions', 'admissions.html']], image: 'online_class2' }) + `
  <section class="sec"><div class="wrap">
    ${sectionHead({ eyebrow: 'How to apply', title: 'A simple path into the conversation.', action: demo('Admissions process — to be confirmed') })}
    <ol class="stepper" data-reveal-group>${[['Explore', 'Choose a programme or ask the team to help you find a starting point.'], ['Enquire', 'Share your background, goals, and preferred pathway.'], ['Review', 'The academy reviews fit, timing, and next available intake.'], ['Begin', 'Receive confirmed joining details before committing.']].map(([t, d], i) => `<li data-reveal><span>0${i + 1}</span><h3>${t}</h3><p>${d}</p></li>`).join('')}</ol></div></section>

  <section class="sec sec--sand"><div class="wrap grid grid--2 grid--gap">
    <div data-reveal>${eyebrow('Entry requirements')}<h2>Start from where you are.</h2><p class="muted">Requirements below are placeholders. Final eligibility, language support and documentation are to be confirmed per programme.</p>
      <ul class="plainrows">${[['Foundation pathways', 'Interest in technology and willingness to practise.'], ['Professional pathways', 'Relevant foundations or experience may be recommended.'], ['Future pathways', 'To be confirmed.']].map(([t, d]) => `<li><strong>${t}</strong><span>${d}</span></li>`).join('')}</ul></div>
    <div data-reveal>${eyebrow('Fees and payment plans')}<h2>What is confirmed, and what is not.</h2>
      <table class="table"><thead><tr><th scope="col">Item</th><th scope="col">Status</th></tr></thead><tbody>
        <tr><th scope="row">CCNA 200-301 v2 tuition</th><td>LKR 31,500, instalments available</td></tr>
        <tr><th scope="row">Other programme tuition</th><td>${demo('Demo fee')}</td></tr>
        <tr><th scope="row">Exam voucher</th><td>Separate where applicable</td></tr>
        <tr><th scope="row">Scholarships</th><td>${demo('Demo opportunity')}</td></tr></tbody></table></div></div></section>

  <section class="sec"><div class="wrap grid grid--2 grid--gap grid--start">
    <div data-reveal>${eyebrow('Before you enquire')}<h2>Have these details nearby.</h2><ul class="checks"><li>National ID or passport details when requested</li><li>Highest completed education or relevant experience</li><li>Preferred programme and intake</li><li>Contact details for follow-up</li></ul></div>
    <div data-reveal><form class="form" id="apply" data-wizard novalidate aria-labelledby="apply-title"><h2 id="apply-title">Tell us where you want to go.</h2><p class="muted">${demo('No real submission — demo only')}</p>
      <ol class="progress" aria-hidden="true"><li class="is-active"></li><li></li><li></li><li></li></ol>
      <fieldset class="step is-active"><legend>About you</legend><div class="fields">
        <label>Full name<input name="name" required autocomplete="name"></label><label>Email<input type="email" name="email" required autocomplete="email"></label>
        <label>Phone<input name="phone" required autocomplete="tel"></label><label>Preferred language<select name="language" required><option value="">Choose</option><option>English</option><option>Sinhala</option><option>Both</option></select></label></div></fieldset>
      <fieldset class="step"><legend>Choose a programme</legend><div class="fields"><label class="full">Programme<select name="programme" required><option value="">Choose a programme</option>${data.programs.map(p => `<option>${esc(p.title)}</option>`).join('')}</select></label><label class="full">Preferred intake<input name="intake" placeholder="e.g. next available"></label></div></fieldset>
      <fieldset class="step"><legend>Your background</legend><div class="fields"><label class="full">Tell us about your goals<textarea name="background" rows="5" required></textarea></label></div></fieldset>
      <fieldset class="step"><legend>Review and consent</legend><p class="muted">We’ll use these details to respond to your enquiry. This is a demo form and does not send data.</p><label class="check"><input type="checkbox" name="consent" required> I consent to being contacted about this enquiry.</label></fieldset>
      <p class="form-note" role="status" data-note></p>
      <div class="form__actions"><button type="button" class="btn btn--outline" data-back hidden>Back</button><button type="button" class="btn btn--primary" data-next>Continue</button></div>
      <div class="success" data-success hidden><h3>Thanks — your demo enquiry is ready.</h3><p>No information was submitted. In production, the confirmed contact flow would continue here.</p><a class="btn btn--primary" href="programs.html">Explore programmes</a></div></form></div></div></section>

  <section class="sec sec--sand"><div class="wrap narrow">${sectionHead({ eyebrow: 'Questions', title: 'Admissions FAQ.' })}<div class="accordion">${[['Are the fees shown final?', 'The CCNA fee is confirmed. Other fees, instalments, scholarships and intakes are placeholders pending confirmation.'], ['Can I ask for help choosing?', 'Yes. Use the form or WhatsApp and share your current level and goal.'], ['Does applying guarantee a place?', 'No. An enquiry is not an acceptance or a guarantee of admission.']].map(([q, a]) => `<details><summary>${q}${icon('plus')}</summary><p>${a}</p></details>`).join('')}</div></div></section>`;
  return { title: 'Admissions', description: 'How to apply to SLTSC Academy: process, entry requirements, fees and an enquiry form.', body };
}

/* ---------- online learning ---------- */
function online() {
  const body = banner({ eyebrow: 'How it works', title: 'Online learning that feels close to the work.', intro: 'A guided rhythm of live classes, practical activities, replay and support, designed to make the screen feel more tangible.', crumbs: [['How it works', 'online-learning.html']], image: 'online_class3' }) + `
  <section class="sec"><div class="wrap">
    ${sectionHead({ eyebrow: 'The journey', title: 'Four moments that keep you moving.', action: demo('Delivery details — to be confirmed') })}
    <ol class="stepper" data-reveal-group>${[['Meet live', 'Join a structured online class with an instructor and cohort.'], ['Practise', 'Work through a lab, exercise, or guided project.'], ['Ask and review', 'Bring questions to mentor and community touchpoints.'], ['See next', 'Review your progress and choose the next capability.']].map(([t, d], i) => `<li data-reveal><span>0${i + 1}</span><h3>${t}</h3><p>${d}</p></li>`).join('')}</ol></div></section>

  <section class="sec sec--sand"><div class="wrap split split--media">
    <div data-reveal>${eyebrow('Your learning home')}<h2>An LMS view designed around momentum.</h2><p class="lead">Shown as a styled mock-up so learners can picture the rhythm. The final platform, features and access rules are to be confirmed.</p></div>
    <div class="lms" data-reveal aria-label="Illustrative learning platform mock-up"><div class="lms__top"><strong>SLTSC / My pathway</strong><span>${demo('Demo display')}</span></div>
      <div class="lms__body"><ul class="lms__nav"><li class="is-active">Overview</li><li>Modules</li><li>Labs</li><li>Community</li></ul><div class="lms__main"><span class="kicker">This week</span><h3>IP connectivity</h3><p class="muted">Watch · practise · reflect</p><div class="bar"><span style="width:62%"></span></div><small>62% pathway progress</small></div></div></div></div></section>

  <section class="sec"><div class="wrap split split--media">
    <figure class="portrait portrait--wide" data-reveal>${img('networking5', { w: 900, h: 760, alt: 'Patch panel with network cables' })}</figure>
    <div data-reveal>${eyebrow('Virtual labs')}<h2>Practice needs a place to happen.</h2><p class="muted">Lab access, platforms and device requirements are shown as placeholders until the academy confirms its production setup.</p>
      <ul class="checks"><li>Structured lab tasks tied to each module</li><li>Repeatable practice with guided checkpoints</li><li>Reflection and troubleshooting prompts</li><li>Platform details ${demo('To be confirmed')}</li></ul></div></div></section>

  <section class="sec sec--sand"><div class="wrap narrow">
    ${sectionHead({ eyebrow: 'A week in the cohort', title: 'Example live schedule.', action: demo('Demo schedule — to be confirmed') })}
    <table class="table" data-reveal><thead><tr><th scope="col">Day</th><th scope="col">Session</th><th scope="col">Format</th></tr></thead><tbody><tr><th scope="row">Tuesday</th><td>Concept class</td><td>Live online</td></tr><tr><th scope="row">Thursday</th><td>Lab walkthrough</td><td>Guided practice</td></tr><tr><th scope="row">Saturday</th><td>Q&amp;A / review</td><td>Support touchpoint</td></tr></tbody></table></div></section>

  <section class="sec"><div class="wrap split split--center" data-reveal><div>${eyebrow('Support around you')}<h2>You don’t have to learn alone.</h2></div>
    <ul class="checks"><li>Instructor and mentor touchpoints</li><li>Cohort community and questions</li><li>Replay library where available</li><li>Progress prompts and next-step guidance</li></ul></div></section>` +
    ctaBand({ eyebrow: 'Ready to explore?', title: 'Find a programme that fits your starting point.', actions: `<a class="btn btn--light btn--lg" href="programs.html">Explore programmes</a>` });
  return { title: 'How it works', description: 'How online learning works at SLTSC Academy: live classes, labs, mentoring and replay.', body };
}

module.exports = { schools, school, programs, program, admissions, online };
