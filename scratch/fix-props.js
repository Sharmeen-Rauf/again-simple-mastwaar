const fs = require('fs');
const path = require('path');

const components = ['Hero', 'About', 'Stats', 'Events', 'Publications', 'SufiMap', 'Footer', 'Tasbih'];

components.forEach(comp => {
    const p = path.join('e:\\again-simple-mastwaar\\components', comp + '.tsx');
    if(fs.existsSync(p)) {
        let content = fs.readFileSync(p, 'utf8');
        content = content.replace(/\{ language \}: \{ \}/g, '');
        content = content.replace(/\{ language \}: \{\s*\}/g, '');
        content = content.replace(/function ([A-Za-z0-9_]+)\(\s*\)/g, 'function $1()');
        fs.writeFileSync(p, content, 'utf8');
    }
});
console.log("Fixed function signatures.");
