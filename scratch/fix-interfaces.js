const fs = require('fs');
const path = require('path');

function fixInterfaces(filepath) {
    let content = fs.readFileSync(filepath, 'utf8');

    // Replace { en: string; ur: string } with string
    content = content.replace(/\{\s*en:\s*string;\s*ur\??:\s*string;?\s*\}/g, 'string');
    content = content.replace(/\{\s*en:\s*string\s*\}/g, 'string');

    fs.writeFileSync(filepath, content, 'utf8');
}

const directories = ['components'];
function walk(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            walk(file);
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                fixInterfaces(file);
            }
        }
    });
}
directories.forEach(d => walk(d));
console.log("Fixed interfaces.");
