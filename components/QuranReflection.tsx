"use client";

import React, { useState, useEffect } from "react";

const quotes = [
  { arabic: "وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ", translation: '"And He is with you wherever you are."', ref: "— Surah Al-Hadid, 57:4" },
  { arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا", translation: '"Indeed, with hardship comes ease."', ref: "— Surah Al-Inshirah, 94:6" },
  { arabic: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ", translation: '"And whoever relies upon Allah — then He is sufficient for him."', ref: "— Surah At-Talaq, 65:3" },
  { arabic: "فَاذْكُرُونِي أَذْكُرْكُمْ", translation: '"So remember Me; I will remember you."', ref: "— Surah Al-Baqarah, 2:152" },
  { arabic: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ", translation: '"And when My servants ask concerning Me — indeed I am near."', ref: "— Surah Al-Baqarah, 2:186" },
  { arabic: "اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ", translation: '"Allah is the Light of the heavens and the earth."', ref: "— Surah An-Nur, 24:35" },
  { arabic: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ", translation: '"Indeed, Allah is with the patient."', ref: "— Surah Al-Baqarah, 2:153" },
  { arabic: "وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ", translation: '"My success is not but through Allah."', ref: "— Surah Hud, 11:88" },
  { arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا اذْكُرُوا اللَّهَ ذِكْرًا كَثِيرًا", translation: '"O you who believe! Remember Allah with much remembrance."', ref: "— Surah Al-Ahzab, 33:41" },
];

export default function QuranReflection() {
  const [qIdx, setQIdx] = useState(0);
  const [animating, setAnimating] = useState(false);

  const refreshQuote = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setQIdx((prev) => (prev + 1) % quotes.length);
      setAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      refreshQuote();
    }, 9000);
    return () => clearInterval(timer);
  }, [animating]);

  const currentQuote = quotes[qIdx];

  return (
    <section
      id="quran-quote"
      style={{
        background: "linear-gradient(135deg, #0D47A1, #1565C0, #0A1628)",
        padding: "80px 20px",
        position: "relative",
        overflow: "hidden",
        zIndex: 3,
      }}
    >
      {/* SVG Background Geometry */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.05, pointerEvents: "none", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg width="400" height="400" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="20" fill="none" stroke="#00C853" strokeWidth="0.5" />
          <circle cx="30" cy="30" r="10" fill="none" stroke="#00C853" strokeWidth="0.5" />
          <line x1="10" y1="30" x2="50" y2="30" stroke="#00C853" strokeWidth="0.5" />
          <line x1="30" y1="10" x2="30" y2="50" stroke="#00C853" strokeWidth="0.5" />
        </svg>
      </div>

      <div
        style={{
          maxWidth: "780px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Quote Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "rgba(0, 200, 83, 0.15)",
            border: "1px solid rgba(0, 200, 83, 0.3)",
            borderRadius: "20px",
            padding: "6px 18px",
            marginBottom: "32px",
            fontSize: "12px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#00C853",
            fontWeight: "bold",
          }}
        >
          ✦ Daily Quranic Reflection ✦
        </div>

        {/* Flash Glass Container */}
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.06)",
            border: "1px solid rgba(255, 255, 255, 0.14)",
            backdropFilter: "blur(20px)",
            borderRadius: "24px",
            padding: "48px 40px",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          }}
        >
          <div
            style={{
              transition: "opacity 0.3s ease, transform 0.3s ease",
              opacity: animating ? 0 : 1,
              transform: animating ? "translateY(8px)" : "translateY(0)",
            }}
          >
            <div
              className="arabic-text"
              style={{
                fontFamily: "var(--font-amiri), serif",
                fontSize: "clamp(24px, 4vw, 38px)",
                color: "rgba(255, 255, 255, 0.95)",
                lineHeight: "1.9",
                marginBottom: "24px",
                fontWeight: "bold",
                textShadow: "0 2px 10px rgba(0, 200, 83, 0.4)",
              }}
            >
              {currentQuote.arabic}
            </div>
            <div
              className="english-heading"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(18px, 2.5vw, 24px)",
                color: "rgba(255, 255, 255, 0.85)",
                fontStyle: "italic",
                lineHeight: "1.8",
                marginBottom: "16px",
              }}
            >
              {currentQuote.translation}
            </div>
            <div
              style={{
                fontSize: "13px",
                color: "#00C853",
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              {currentQuote.ref}
            </div>
          </div>
        </div>

        {/* Refresh Button */}
        <button
          onClick={refreshQuote}
          style={{
            marginTop: "32px",
            backgroundColor: "transparent",
            border: "1px solid rgba(0, 200, 83, 0.4)",
            color: "#00C853",
            padding: "12px 28px",
            borderRadius: "25px",
            cursor: "pointer",
            fontSize: "13px",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            fontWeight: "bold",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(0, 200, 83, 0.15)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          ✦ New Reflection
        </button>
      </div>
    </section>
  );
}
