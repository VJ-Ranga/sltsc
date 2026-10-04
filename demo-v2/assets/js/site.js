/* SLTSC Academy — site.js (vanilla, no dependencies). All content is server-rendered; this adds behaviour only. */
(function () {
  'use strict';
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ----- header: stuck state + mobile drawer ----- */
  var header = $('[data-header]');
  var burger = $('[data-burger]');
  var drawer = $('[data-drawer]');
  function stick() { if (header) header.classList.toggle('is-stuck', window.scrollY > 24); }
  stick();
  window.addEventListener('scroll', stick, { passive: true });
  function setDrawer(open) {
    if (!drawer || !burger) return;
    drawer.hidden = !open;
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.classList.toggle('no-scroll', open);
    if (header && open) header.classList.add('is-stuck'); else stick();
  }
  if (burger) {
    burger.addEventListener('click', function () { setDrawer(drawer.hidden); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !drawer.hidden) { setDrawer(false); burger.focus(); } });
    $$('a', drawer).forEach(function (a) { a.addEventListener('click', function () { setDrawer(false); }); });
    window.matchMedia('(min-width: 961px)').addEventListener('change', function (m) { if (m.matches) setDrawer(false); });
  }
  // Escape closes the desktop mega menu while it holds focus.
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    var a = document.activeElement;
    if (a && a.closest && a.closest('.nav__has-mega')) a.blur();
  });

  /* ----- reveal on scroll ----- */
  var reveals = $$('[data-reveal]');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        var sibs = el.parentElement ? $$('[data-reveal]', el.parentElement).filter(function (s) { return s.parentElement === el.parentElement; }) : [];
        el.style.transitionDelay = Math.min(sibs.indexOf(el), 5) * 70 + 'ms';
        el.classList.add('is-in');
        io.unobserve(el);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ----- simple tab filters (home programmes, faculty, news) ----- */
  $$('[data-filter-group]').forEach(function (group) {
    var target = document.getElementById(group.getAttribute('data-filter-group'));
    if (!target) return;
    var attr = target.getAttribute('data-attr') || 'school';
    var items = $$(':scope > *', target);
    var skipFirst = target.hasAttribute('data-keep-first');
    $$('[data-filter]', group).forEach(function (btn) {
      btn.addEventListener('click', function () {
        var v = btn.getAttribute('data-filter');
        $$('[data-filter]', group).forEach(function (b) { var on = b === btn; b.classList.toggle('is-active', on); b.setAttribute('aria-pressed', String(on)); });
        items.forEach(function (it) {
          var val = it.getAttribute('data-' + attr);
          it.hidden = !(v === 'all' || val === v || val === 'all');
        });
      });
    });
  });

  /* ----- programmes listing: search + selects + sort ----- */
  var pf = $('[data-programs-filter]');
  var list = $('#program-list');
  if (pf && list) {
    var cards = $$(':scope > .pcard', list);
    var q = $('[data-q]', pf), sch = $('[data-school]', pf), dur = $('[data-dur]', pf), sort = $('[data-sort]', pf);
    var count = $('[data-count]'), empty = $('[data-empty]'), reset = $('[data-reset]');
    var params = new URLSearchParams(location.search);
    if (params.get('school') && sch.querySelector('option[value="' + params.get('school') + '"]')) sch.value = params.get('school');
    var bucket = function (w) { return w <= 8 ? 'short' : w <= 17 ? 'medium' : 'long'; };
    function apply() {
      var term = q.value.trim().toLowerCase(), shown = 0;
      cards.forEach(function (c) {
        var ok = (sch.value === 'all' || c.dataset.school === sch.value) &&
          (dur.value === 'all' || bucket(+c.dataset.weeks) === dur.value) &&
          (!term || c.textContent.toLowerCase().indexOf(term) > -1);
        c.hidden = !ok; if (ok) shown++;
      });
      var sorted = cards.slice().sort(function (a, b) {
        if (sort.value === 'short') return a.dataset.weeks - b.dataset.weeks;
        if (sort.value === 'long') return b.dataset.weeks - a.dataset.weeks;
        return a.dataset.title.localeCompare(b.dataset.title);
      });
      sorted.forEach(function (c) { list.appendChild(c); });
      count.textContent = shown;
      empty.hidden = shown !== 0;
    }
    [q, sch, dur, sort].forEach(function (el) { el.addEventListener('input', apply); el.addEventListener('change', apply); });
    if (reset) reset.addEventListener('click', function () { q.value = ''; sch.value = 'all'; dur.value = 'all'; sort.value = 'az'; apply(); q.focus(); });
    apply();
  }

  /* ----- testimonial slider ----- */
  $$('[data-slider]').forEach(function (root) {
    var photos = $$('.qs-photo', root), quotes = $$('.qs-quote', root), dots = $$('[data-dots] i', root);
    var i = 0, timer;
    function show(n) {
      i = (n + quotes.length) % quotes.length;
      [photos, quotes, dots].forEach(function (set) { set.forEach(function (el, k) { el.classList.toggle('is-active', k === i); }); });
    }
    function play() { if (!reduce) { clearInterval(timer); timer = setInterval(function () { show(i + 1); }, 7000); } }
    $('[data-prev]', root).addEventListener('click', function () { show(i - 1); play(); });
    $('[data-next]', root).addEventListener('click', function () { show(i + 1); play(); });
    root.addEventListener('mouseenter', function () { clearInterval(timer); });
    root.addEventListener('mouseleave', play);
    root.addEventListener('focusin', function () { clearInterval(timer); });
    play();
  });

  /* ----- FAQ: tabs + search ----- */
  var faqItems = $('[data-faq-items]');
  if (faqItems) {
    var details = $$('details', faqItems), tabs = $$('[data-cat]', $('[data-faq-tabs]'));
    var fq = $('[data-faq-search]'), fe = $('[data-faq-empty]'), cat = 'All';
    function faqRender() {
      var term = fq.value.trim().toLowerCase(), n = 0;
      details.forEach(function (d) {
        var ok = (cat === 'All' || d.dataset.cat === cat) && d.textContent.toLowerCase().indexOf(term) > -1;
        d.hidden = !ok; if (ok) n++;
      });
      fe.hidden = n !== 0;
    }
    tabs.forEach(function (t) {
      t.addEventListener('click', function () {
        cat = t.getAttribute('data-cat');
        tabs.forEach(function (b) { var on = b === t; b.classList.toggle('is-active', on); b.setAttribute('aria-pressed', String(on)); });
        faqRender();
      });
    });
    fq.addEventListener('input', faqRender);
    $('[data-faq-clear]').addEventListener('click', function () { fq.value = ''; tabs[0].click(); fq.focus(); });
  }

  /* ----- demo forms (nothing is sent) ----- */
  function fail(form, field, msg) {
    var note = $('[data-note]', form);
    field.setAttribute('aria-invalid', 'true');
    if (note) { note.textContent = msg; note.classList.add('is-error'); }
    field.focus();
  }
  function clearInvalid(form) { $$('[aria-invalid]', form).forEach(function (f) { f.removeAttribute('aria-invalid'); }); var n = $('[data-note]', form); if (n) { n.textContent = ''; n.classList.remove('is-error'); } }
  $$('form[data-demo-form]').forEach(function (form) {
    form.addEventListener('input', function (e) { if (e.target.hasAttribute('aria-invalid') && e.target.checkValidity()) e.target.removeAttribute('aria-invalid'); });
    form.addEventListener('submit', function (e) {
      e.preventDefault(); clearInvalid(form);
      var bad = $$('[required]', form).filter(function (f) { return !f.checkValidity(); })[0];
      if (bad) return fail(form, bad, bad.validationMessage || 'Please complete this field.');
      var note = $('[data-note]', form);
      if (note) note.textContent = 'Demo only: nothing was sent. In production this would reach the academy.';
      form.reset();
    });
  });

  /* ----- admissions wizard ----- */
  $$('[data-wizard]').forEach(function (form) {
    var steps = $$('.step', form), bars = $$('.progress li', form);
    var back = $('[data-back]', form), next = $('[data-next]', form), success = $('[data-success]', form), actions = $('.form__actions', form);
    var n = 0;
    function render() {
      steps.forEach(function (s, k) { s.classList.toggle('is-active', k === n); });
      bars.forEach(function (b, k) { b.classList.toggle('is-active', k <= n); });
      back.hidden = n === 0;
      next.textContent = n === steps.length - 1 ? 'Submit demo enquiry' : 'Continue';
    }
    next.addEventListener('click', function () {
      clearInvalid(form);
      var bad = $$('[required]', steps[n]).filter(function (f) { return !f.checkValidity(); })[0];
      if (bad) return fail(form, bad, bad.validationMessage || 'Please complete this field.');
      if (n < steps.length - 1) { n++; render(); steps[n].scrollIntoView({ block: 'nearest' }); return; }
      steps.forEach(function (s) { s.classList.remove('is-active'); });
      actions.hidden = true; success.hidden = false; form.reset();
      success.scrollIntoView({ block: 'nearest' });
    });
    back.addEventListener('click', function () { if (n > 0) { n--; render(); clearInvalid(form); } });
    render();
  });
})();
