const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/slides');
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // Replace padding and margins that take up too much vertical space on mobile
    content = content.replace(/mt-14/g, 'mt-8 md:mt-14');
    content = content.replace(/mt-12/g, 'mt-6 md:mt-12');
    content = content.replace(/mt-10/g, 'mt-6 md:mt-10');
    content = content.replace(/mt-8/g, 'mt-4 md:mt-8');
    
    // Replace giant gap sizes for grids
    content = content.replace(/gap-12/g, 'gap-6 md:gap-12');
    content = content.replace(/gap-10/g, 'gap-5 md:gap-10');
    content = content.replace(/gap-8/g, 'gap-4 md:gap-8');
    content = content.replace(/gap-6/g, 'gap-3 md:gap-6');

    // Make large internal paddings responsive
    content = content.replace(/p-8/g, 'p-4 md:p-8');
    content = content.replace(/p-6/g, 'p-3 md:p-6');
    content = content.replace(/p-12/g, 'p-6 md:p-12');
    content = content.replace(/p-10/g, 'p-5 md:p-10');

    fs.writeFileSync(filePath, content);
  }
});
console.log('Mobile spacing adjustments complete.');
