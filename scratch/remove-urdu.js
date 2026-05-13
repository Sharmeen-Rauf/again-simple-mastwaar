const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = [...walk('app'), ...walk('components')];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // 1. Remove Language State & Props
    content = content.replace(/language === "en" \? ([^:]+) : [^}]+}/g, '$1}'); // {language === "en" ? "Eng" : "Urdu"} -> {"Eng"}
    content = content.replace(/language === "ur" \? ([^:]+) : ([^}\n]+)/g, '$2'); // language === "ur" ? "Urdu" : "Eng" -> "Eng"
    content = content.replace(/language \? ([^:]+) : ([^}\n]+)/g, '$1'); 
    
    // 2. Remove { en: "Eng", ur: "Urdu" } in objects
    content = content.replace(/\{\s*en:\s*("[^"]*"),\s*ur:\s*"[^"]*"\s*\}/g, '$1');
    content = content.replace(/\{\s*en:\s*('[^']*'),\s*ur:\s*'[^']*'\s*\}/g, '$1');

    // 3. Remove language from props types
    content = content.replace(/language:\s*"en"\s*\|\s*"ur"/g, '');
    content = content.replace(/language,\s*/g, '');
    content = content.replace(/language: language,\s*/g, '');
    content = content.replace(/language={language}/g, '');
    content = content.replace(/setLanguage={setLanguage}/g, '');
    
    // 4. Remove Urdu text classes
    content = content.replace(/className="urdu-text"/g, 'className="english-heading"');
    content = content.replace(/className: ctaText.includes\("داخلِ"\) \? "urdu-text" : "english-heading"/g, 'className: "english-heading"');
    content = content.replace(/fontFamily: ctaText.includes\("داخلِ"\) \? "var\(--font-noto-urdu\)" : "var\(--font-cormorant\)"/g, 'fontFamily: "var(--font-cormorant)"');

    // 5. Hardcode English for CTA Text
    content = content.replace(/const \[ctaText, setCtaText\] = useState[^;]+;/g, 'const [ctaText, setCtaText] = useState("Enter the Darbar ↓");');
    
    fs.writeFileSync(file, content, 'utf8');
});

console.log('Refactoring complete.');
