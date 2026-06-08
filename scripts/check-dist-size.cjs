const fs = require('fs');
const path = require('path');
function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap(e => {
    const res = path.join(dir, e.name);
    return e.isDirectory() ? walk(res) : [{ path: res, size: fs.statSync(res).size }];
  });
}
const files = walk('dist');
const total = files.reduce((sum, f) => sum + f.size, 0);
console.log('TOTAL_MB', (total / 1024 / 1024).toFixed(2));
files.sort((a, b) => b.size - a.size).slice(0, 20).forEach(f => console.log((f.size / 1024).toFixed(2) + ' KB', f.path));
