const fs = require('fs');

const p1 = fs.readFileSync('src/components/Packages_1.js', 'utf8');
const p2 = fs.readFileSync('src/components/Packages_2.js', 'utf8');

fs.writeFileSync('src/components/Packages.js', p1 + '\n' + p2, 'utf8');

console.log('Successfully combined Packages.js');
