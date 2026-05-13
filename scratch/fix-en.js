const fs = require('fs');
const path = require('path');

function fixEn(filepath) {
    let content = fs.readFileSync(filepath, 'utf8');

    // Flatten { en: "..." } or { en: '...' } into "..."
    content = content.replace(/\{\s*en:\s*("[^"]*")\s*\}/g, '$1');
    content = content.replace(/\{\s*en:\s*('[^']*')\s*\}/g, '$1');
    content = content.replace(/\{\s*en:\s*`([^`]*)`\s*\}/g, '`$1`');
    
    // Also catch multiline if any
    content = content.replace(/\{\s*en:\s*("[^"]*")\s*,?\s*\}/g, '$1');

    fs.writeFileSync(filepath, content, 'utf8');
}

const directories = ['app', 'components'];
function walk(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            walk(file);
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                fixEn(file);
            }
        }
    });
}
directories.forEach(d => walk(d));
console.log("Fixed { en: ... } properties.");
