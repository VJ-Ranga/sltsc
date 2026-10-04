'use strict';
// node src/verify.js — static checks on the generated site in ./demo-v2
const fs = require('fs');
const path = require('path');
const OUT = path.join(__dirname, '..', 'demo-v2');
const files = fs.readdirSync(OUT).filter(f => f.endsWith('.html'));
const fails = [];
const fail = m => fails.push(m);
const ids = f => [...f.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]);

for (const f of files) {
  const h = fs.readFileSync(path.join(OUT, f), 'utf8');
  const h1 = (h.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) fail(`${f}: expected 1 <h1>, found ${h1}`);
  if (!/<title>[^<]{5,}<\/title>/.test(h)) fail(`${f}: missing <title>`);
  if (!/<meta name="description" content="[^"]{20,}"/.test(h)) fail(`${f}: missing meta description`);
  const all = ids(h), dup = all.filter((x, i) => all.indexOf(x) !== i);
  if (dup.length) fail(`${f}: duplicate ids ${[...new Set(dup)].join(', ')}`);
  for (const m of h.matchAll(/<img\b[^>]*>/g)) {
    if (!/\salt="/.test(m[0])) fail(`${f}: <img> without alt`);
    if (!/\swidth="/.test(m[0]) || !/\sheight="/.test(m[0])) fail(`${f}: <img> without width/height`);
  }
  for (const m of h.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const t = m[1];
    if (/^(https?:|mailto:|tel:|data:)/.test(t)) continue;
    if (t.startsWith('#')) { if (t.length > 1 && !all.includes(t.slice(1))) fail(`${f}: missing anchor ${t}`); continue; }
    const p = t.split(/[?#]/)[0];
    if (!fs.existsSync(path.join(OUT, p))) fail(`${f}: broken reference ${t}`);
  }
  for (const m of h.matchAll(/<use href="#(i-[^"]+)"/g)) if (!h.includes(`id="${m[1]}"`)) fail(`${f}: unknown icon ${m[1]}`);
  if (/href="#"/.test(h)) fail(`${f}: dead href="#"`);
}
try { new Function(fs.readFileSync(path.join(OUT, 'assets/js/site.js'), 'utf8')); } catch (e) { fail('site.js syntax: ' + e.message); }

if (fails.length) { console.error(fails.join('\n')); process.exit(1); }
console.log(`Verified ${files.length} pages: structure, titles, alt text, links, icons, script syntax.`);
