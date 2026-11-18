// Recopie la dernière entrée de PATCHNOTE.md dans README.md
// (entre <!-- PATCHNOTE:START --> et <!-- PATCHNOTE:END -->).
// Usage : npm run patchnote
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const patchFile = path.join(root, 'PATCHNOTE.md');
const readmeFile = path.join(root, 'README.md');

const patch = fs.readFileSync(patchFile, 'utf8')
  .replace(/\r\n/g, '\n')
  .replace(/<!--[\s\S]*?-->/g, ''); // ignore le modèle en commentaire

const lines = patch.split('\n');
const first = lines.findIndex((l) => /^## v\d/.test(l));
if (first === -1) {
  console.error('Aucune entrée "## vX.Y.Z" trouvée dans PATCHNOTE.md');
  process.exit(1);
}
let end = lines.findIndex((l, i) => i > first && /^## v\d/.test(l));
if (end === -1) end = lines.length;

const entry = lines.slice(first, end).join('\n').trim().replace(/^## /, '### ');

const readme = fs.readFileSync(readmeFile, 'utf8');
const re = /(<!-- PATCHNOTE:START -->)[\s\S]*?(<!-- PATCHNOTE:END -->)/;
if (!re.test(readme)) {
  console.error('Marqueurs PATCHNOTE:START / PATCHNOTE:END introuvables dans README.md');
  process.exit(1);
}
fs.writeFileSync(readmeFile, readme.replace(re, (_, a, b) => `${a}\n\n${entry}\n\n${b}`));
console.log('README.md mis à jour avec : ' + entry.split('\n')[0].replace('### ', ''));
