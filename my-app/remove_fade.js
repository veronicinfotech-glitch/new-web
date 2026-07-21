const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.endsWith('.js') || file.endsWith('.jsx')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace initial="hidden" with initial="visible"
    let newContent = content.replace(/initial="hidden"/g, 'initial="visible"');
    
    // Also handle inline initial={{ opacity: 0 ... }}
    newContent = newContent.replace(/initial={{[^{}]*opacity:\s*0[^{}]*}}/g, 'initial={{ opacity: 1 }}');
    
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Updated ${file}`);
    }
  }
});
