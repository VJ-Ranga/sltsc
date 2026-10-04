const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { execFileSync } = require('child_process');

const root = __dirname;
const htmlFiles = fs.readdirSync(root).filter(file => file.endsWith('.html'));
const jsFiles = [];
const failures = [];
const localReference = /(?:href|src)\s*=\s*["']([^"']+)["']/gi;

function fail(message) {
  failures.push(message);
}

for (const directory of ['.', 'assets/js']) {
  for (const file of fs.readdirSync(path.join(root, directory))) {
    if (file.endsWith('.js')) jsFiles.push(path.join(directory, file));
  }
}

for (const file of jsFiles) {
  try {
    execFileSync(process.execPath, ['--check', file], { cwd: root, stdio: 'pipe' });
  } catch (error) {
    fail(`JavaScript syntax: ${file}\n${error.stdout?.toString() || error.stderr?.toString() || error.message}`);
  }
}

const sandbox = { window: {}, document: {}, console, URLSearchParams, location: { search: '' } };
sandbox.window = sandbox;
vm.createContext(sandbox);
for (const file of ['assets/js/data.js', ...jsFiles.filter(file => file.startsWith('assets/js/data-'))]) {
  try {
    vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), sandbox, { filename: file });
  } catch (error) {
    fail(`Data runtime: ${file} - ${error.message}`);
  }
}
const photoIds = (sandbox.SLTSC?.photoAssignments || []).map(photo => photo.id);
if (new Set(photoIds).size !== photoIds.length) fail('Duplicate photo IDs in photoAssignments');

for (const file of htmlFiles) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  for (const match of html.matchAll(localReference)) {
    const target = match[1];
    if (target.startsWith('#') || target.includes('${') || /^(?:https?:|mailto:|tel:|data:|javascript:)/i.test(target)) continue;
    const targetPath = target.split(/[?#]/, 1)[0];
    if (!fs.existsSync(path.join(root, targetPath))) fail(`Missing local reference: ${file} -> ${target}`);
  }
  for (const match of html.matchAll(/(?:href|action)\s*=\s*["']#["']/gi)) {
    if (!html.slice(Math.max(0, match.index - 50), match.index).includes('skip-link')) fail(`Dead placeholder link: ${file}`);
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Verified ${htmlFiles.length} HTML pages and ${jsFiles.length} JavaScript files.`);
}
