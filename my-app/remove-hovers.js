const fs = require('fs');
const path = require('path');

function removeHovers(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      removeHovers(fullPath);
    } else if (fullPath.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const original = content;
      // Remove hover: classes
      content = content.replace(/hover:[\w-\/\[\]#%]+/g, '');
      // Remove group-hover: classes
      content = content.replace(/group-hover:[\w-\/\[\]#%]+/g, '');
      if (content !== original) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

removeHovers(path.join(__dirname, 'src'));
