const fs = require('fs');
const path = require('path');

function fixProperties(filepath) {
    let content = fs.readFileSync(filepath, 'utf8');

    // Replace usages like obj.en -> obj
    content = content.replace(/\.en\b/g, '');
    content = content.replace(/\.ur\b/g, '');

    // Specifically for map elements, we might have link.en, link.ur
    // Actually .en is used in many places. Let's do it file by file.
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
                fixProperties(file);
            }
        }
    });
}
directories.forEach(d => walk(d));
console.log("Fixed properties.");
