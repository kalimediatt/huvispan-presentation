const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/slides');
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // Make text-5xl md:text-6xl -> text-4xl sm:text-5xl md:text-6xl
    // text-4xl md:text-5xl -> text-3xl sm:text-4xl md:text-5xl
    content = content.replace(/text-5xl (md|sm):text-6xl/g, 'text-4xl sm:text-5xl md:text-6xl');
    content = content.replace(/text-4xl md:text-5xl/g, 'text-3xl sm:text-4xl md:text-5xl');
    content = content.replace(/text-5xl md:text-7xl/g, 'text-4xl sm:text-5xl md:text-7xl');
    content = content.replace(/text-4xl md:text-6xl/g, 'text-3xl sm:text-4xl md:text-6xl');
    content = content.replace(/text-5xl md:text-\[5rem\] lg:text-\[6rem\]/g, 'text-4xl sm:text-5xl md:text-[5rem] lg:text-[6rem]');
    
    // Some slides just have text-5xl
    content = content.replace(/className="(.*)text-5xl(?! sm:| md:| lg:)(.*)"/g, 'className="$1text-4xl sm:text-5xl$2"');

    fs.writeFileSync(filePath, content);
  }
});
console.log('Mobile text adjustments complete.');
