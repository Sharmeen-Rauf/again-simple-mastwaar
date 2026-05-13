const fs = require('fs');
const path = require('path');

const directories = ['app', 'components'];

function cleanFile(filepath) {
    let content = fs.readFileSync(filepath, 'utf8');

    // Replace language object pairs: { en: "...", ur: "..." } -> "..."
    content = content.replace(/\{\s*en:\s*("[^"]*"),\s*ur:\s*"[^"]*"\s*\}/g, '$1');
    content = content.replace(/\{\s*en:\s*("[^"]*"),\s*ur:\s*`[^`]*`\s*\}/g, '$1');
    content = content.replace(/\{\s*en:\s*('[^']*'),\s*ur:\s*'[^']*'\s*\}/g, '$1');

    // Replace ternary language checks: language === "en" ? "..." : "..." -> "..."
    content = content.replace(/language\s*===\s*"en"\s*\?\s*("[^"]*")\s*:\s*"[^"]*"/g, '$1');
    content = content.replace(/language\s*===\s*"ur"\s*\?\s*"[^"]*"\s*:\s*("[^"]*")/g, '$1');
    content = content.replace(/language\s*\?\s*("[^"]*")\s*:\s*"[^"]*"/g, '$1');

    // Replace direct Urdu strings in Hero
    content = content.replace(/بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ/g, 'IN THE NAME OF GOD, THE MOST GRACIOUS, THE MOST MERCIFUL');
    content = content.replace(/محبت مشن انٹرنیشنل/g, 'MUHABBAT MISSION INTERNATIONAL');
    content = content.replace(/داخلِ دربار ہوں ↓/g, 'Enter the Darbar ↓');
    content = content.replace(/const urText = "داخلِ دربار ہوں ↓";/g, '');

    // Replace in Footer
    content = content.replace(/مکھدوم/g, 'Makhdoom');
    content = content.replace(/چکوال، پاکستان سے ۱۹۹۴ سے انسانیت کی خدمت، سلسلہ معرفت کے تحفظ اور الٰہی محبت کے فروغ میں مصروفِ عمل۔/g, 'Serving humanity, preserving spiritual lineage, and promoting divine love from Chakwal, Pakistan since 1994.');
    content = content.replace(/ای میل: connect@mastwaar\.com/g, 'Email: connect@mastwaar.com');
    content = content.replace(/فون: \+92 300 1234567/g, 'Phone: +92 300 1234567');
    content = content.replace(/تمام حقوق محفوظ ہیں۔/g, 'All rights reserved.');
    content = content.replace(/شرائط و ضوابط/g, 'Terms & Conditions');
    content = content.replace(/رازداری کی پالیسی/g, 'Privacy Policy');

    // Replace in Publications
    content = content.replace(/کتب تصنیف/g, 'Publications');
    content = content.replace(/محبت قلندر/g, 'Love of Qalandar');
    
    // Replace in QuoteMarquee
    content = content.replace(/محبت کے بغیر دل کا کوئی وجود نہیں/g, 'A heart without love has no existence');
    content = content.replace(/دل کا جھکاؤ ہی حقیقت کی طرف پہلا قدم ہے/g, 'The inclination of the heart is the first step towards truth');
    content = content.replace(/عشق ہی کائنات کا واحد راز ہے/g, 'Love is the only secret of the universe');
    content = content.replace(/روح کا سفر صرف سچائی کی تلاش ہے/g, 'The journey of the soul is only the search for truth');
    content = content.replace(/— مکھدوم مستوار قلندر/g, '— Makhdoom Mastwaar Qalandar');

    // Replace in Stats
    content = content.replace(/اعداد و شمار/g, 'Statistics');

    // Replace in Tasbih
    content = content.replace(/text: "اللہ",/g, 'text: "ALLAH",');
    content = content.replace(/ذِكْرُ اللَّه/g, 'REMEMBRANCE OF ALLAH');
    content = content.replace(/ذکرِ الٰہی سے دل کو منور کریں/g, 'Illuminate the heart with the remembrance of God');
    content = content.replace(/سُبْحَانَ اللَّهِ/g, 'SUBHANALLAH');
    content = content.replace(/الْحَمْدُ لِلَّهِ/g, 'ALHAMDULILLAH');
    content = content.replace(/اللَّهُ أَكْبَرُ/g, 'ALLAHU AKBAR');

    // Replace in Gallery
    content = content.replace(/محراب/g, 'Arch');
    content = content.replace(/عشق/g, 'Ishq');
    
    // Specific cleanup for navbar urdu language selector
    content = content.replace(/اردو/g, 'English (US)');

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
console.log("Cleanup script completed.");
