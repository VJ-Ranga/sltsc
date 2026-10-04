'use strict';
// Static site generator: node src/build.js  ->  writes ./demo-v2
const fs = require('fs');
const path = require('path');
const { data, layout } = require('./lib');
const home = require('./pages/home');
const { about, founder, faculty } = require('./pages/about');
const learn = require('./pages/learn');
const more = require('./pages/more');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'demo-v2');

const pages = [];
const add = (file, page) => pages.push({ file, ...page });

add('index.html', home());
add('about.html', about());
add('founder.html', founder());
add('faculty.html', faculty());
add('schools.html', learn.schools());
data.schools.forEach(s => add(`school-${s.id}.html`, learn.school(s)));
add('programs.html', learn.programs());
data.programs.forEach(p => add(`program-${p.id}.html`, learn.program(p)));
add('admissions.html', learn.admissions());
add('online-learning.html', learn.online());
add('community.html', more.community());
add('news.html', more.news());
data.articles.forEach(a => add(`article-${a.id}.html`, more.article(a)));
add('faq.html', more.faq());
add('contact.html', more.contact());

// fresh output directory
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(path.join(OUT, 'assets/css'), { recursive: true });
fs.mkdirSync(path.join(OUT, 'assets/js'), { recursive: true });

for (const p of pages) {
  fs.writeFileSync(path.join(OUT, p.file), layout({ file: p.file, title: p.title, description: p.description, body: p.body, hero: !!p.hero }));
}
fs.copyFileSync(path.join(__dirname, 'css/site.css'), path.join(OUT, 'assets/css/site.css'));
fs.copyFileSync(path.join(__dirname, 'js/site.js'), path.join(OUT, 'assets/js/site.js'));
fs.copyFileSync(path.join(__dirname, 'favicon.svg'), path.join(OUT, 'assets/favicon.svg'));

console.log(`Built ${pages.length} pages -> demo-v2/`);
