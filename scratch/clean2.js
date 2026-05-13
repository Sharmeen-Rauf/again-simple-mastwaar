const fs = require('fs');
const path = require('path');

const directories = ['app', 'components'];

function cleanFile(filepath) {
    let content = fs.readFileSync(filepath, 'utf8');

    // General JSON/Object { en: "...", ur: "..." }
    content = content.replace(/\{\s*en:\s*("[^"]*"),\s*ur:\s*"[^"]*"\s*\}/g, '$1');
    content = content.replace(/\{\s*id:\s*"([^"]*)",\s*en:\s*"([^"]*)",\s*ur:\s*"[^"]*"\s*\}/g, '{ id: "$1", en: "$2" }');

    // Remaining specific strings
    content = content.replace(/className=\{ctaText\.includes\("داخلِ"\) \? "urdu-text" : "english-heading"\}/g, 'className="english-heading"');
    content = content.replace(/fontSize: ctaText\.includes\("داخلِ"\) \? "16px" : "13px",/g, 'fontSize: "13px",');
    content = content.replace(/letterSpacing: ctaText\.includes\("داخلِ"\) \? "0" : "0.2em",/g, 'letterSpacing: "0.2em",');
    content = content.replace(/const bismillahSource = "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ";/g, 'const bismillahSource = "IN THE NAME OF GOD";');
    content = content.replace(/۳۰ اکتوبر/g, 'October 30');
    content = content.replace(/"و"/g, '"Waw"');
    content = content.replace(/"عين"/g, '"Ayn"');
    content = content.replace(/محبت Makhdoom/g, 'Love Makhdoom');
    content = content.replace(/محمود مستوار قلندر/g, 'Mahmood Mastwaar Qalandar');
    content = content.replace(/Makhdoom محمود مستوار قلندرؒ/g, 'Makhdoom Mahmood Mastwaar Qalandar');
    content = content.replace(/محبت/g, 'Muhabbat');
    
    // Remaining Nav/Publications/About urdu strings (since we removed the prop)
    content = content.replace(/ur:\s*"[^"]*",/g, '');
    
    // Specific Nav translations
    content = content.replace(/ur: "صفحہ اول"/g, '');
    content = content.replace(/ur: "سوانح حیات"/g, '');
    content = content.replace(/ur: "کتب خانہ"/g, '');
    content = content.replace(/ur: "تسبیح کاؤنٹر"/g, '');
    content = content.replace(/ur: "نقشہ"/g, '');
    content = content.replace(/ur: "تصاویر"/g, '');

    fs.writeFileSync(filepath, content, 'utf8');
}

function walk(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            walk(file);
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
                cleanFile(file);
            }
        }
    });
}

directories.forEach(d => walk(d));
console.log("Cleanup script 2 completed.");
