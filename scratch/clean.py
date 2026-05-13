import os
import re

directories = ['app', 'components']

def clean_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace language object pairs: { en: "...", ur: "..." } -> "..."
    # Also handles multiline
    content = re.sub(r'\{\s*en:\s*("[^"]*"),\s*ur:\s*"[^"]*"\s*\}', r'\1', content)
    content = re.sub(r'\{\s*en:\s*("[^"]*"),\s*ur:\s*`[^`]*`\s*\}', r'\1', content)
    content = re.sub(r'\{\s*en:\s*(\'[^\']*\'),\s*ur:\s*\'[^\']*\'\s*\}', r'\1', content)

    # Replace ternary language checks: language === "en" ? "..." : "..." -> "..."
    content = re.sub(r'language\s*===\s*"en"\s*\?\s*("[^"]*")\s*:\s*"[^"]*"', r'\1', content)
    content = re.sub(r'language\s*===\s*"ur"\s*\?\s*"[^"]*"\s*:\s*("[^"]*")', r'\1', content)
    content = re.sub(r'language\s*\?\s*("[^"]*")\s*:\s*"[^"]*"', r'\1', content)

    # Replace direct Urdu strings in Hero
    content = content.replace('بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ', 'IN THE NAME OF GOD, THE MOST GRACIOUS, THE MOST MERCIFUL')
    content = content.replace('محبت مشن انٹرنیشنل', 'MUHABBAT MISSION INTERNATIONAL')
    content = content.replace('داخلِ دربار ہوں ↓', 'Enter the Darbar ↓')
    content = content.replace('const urText = "داخلِ دربار ہوں ↓";', '')

    # Replace in Footer
    content = content.replace('مکھدوم', 'Makhdoom')
    content = content.replace('چکوال، پاکستان سے ۱۹۹۴ سے انسانیت کی خدمت، سلسلہ معرفت کے تحفظ اور الٰہی محبت کے فروغ میں مصروفِ عمل۔', 'Serving humanity, preserving spiritual lineage, and promoting divine love from Chakwal, Pakistan since 1994.')
    content = content.replace('ای میل: connect@mastwaar.com', 'Email: connect@mastwaar.com')
    content = content.replace('فون: +92 300 1234567', 'Phone: +92 300 1234567')
    content = content.replace('تمام حقوق محفوظ ہیں۔', 'All rights reserved.')
    content = content.replace('شرائط و ضوابط', 'Terms & Conditions')
    content = content.replace('رازداری کی پالیسی', 'Privacy Policy')

    # Replace in Publications
    content = content.replace('کتب تصنیف', 'Publications')
    content = content.replace('محبت قلندر', 'Love of Qalandar')
    
    # Replace in QuoteMarquee
    content = content.replace('محبت کے بغیر دل کا کوئی وجود نہیں', 'A heart without love has no existence')
    content = content.replace('دل کا جھکاؤ ہی حقیقت کی طرف پہلا قدم ہے', 'The inclination of the heart is the first step towards truth')
    content = content.replace('عشق ہی کائنات کا واحد راز ہے', 'Love is the only secret of the universe')
    content = content.replace('روح کا سفر صرف سچائی کی تلاش ہے', 'The journey of the soul is only the search for truth')
    content = content.replace('— مکھدوم مستوار قلندر', '— Makhdoom Mastwaar Qalandar')

    # Replace in Stats
    content = content.replace('اعداد و شمار', 'Statistics')

    # Replace in Tasbih
    content = content.replace('text: "اللہ",', 'text: "ALLAH",')
    content = content.replace('ذِكْرُ اللَّه', 'REMEMBRANCE OF ALLAH')
    content = content.replace('ذکرِ الٰہی سے دل کو منور کریں', 'Illuminate the heart with the remembrance of God')
    content = content.replace('سُبْحَانَ اللَّهِ', 'SUBHANALLAH')
    content = content.replace('الْحَمْدُ لِلَّهِ', 'ALHAMDULILLAH')
    content = content.replace('اللَّهُ أَكْبَرُ', 'ALLAHU AKBAR')

    # Replace in Gallery
    content = content.replace('محراب', 'Arch')
    content = content.replace('عشق', 'Ishq')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

for d in directories:
    for root, dirs, files in os.walk(d):
        for file in files:
            if file.endswith(('.tsx', '.ts', '.jsx', '.js')):
                clean_file(os.path.join(root, file))

print("Cleanup script completed.")
