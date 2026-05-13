"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BookData {
  id: number;
  title: string;
  spineTitle: string;
  sub: { en: string; ur: string };
  quote: string;
  translation: string;
  desc: { en: string; ur: string };
}

export default function Publications({ language }: { language: "en" | "ur" }) {
  const [activeBook, setActiveBook] = useState<number>(2); // Default to center book
  const [openedBook, setOpenedBook] = useState<number | null>(null);

  const books: BookData[] = [
    {
      id: 0,
      title: "Tafseer-e-Mastwaar",
      spineTitle: "TAFSEER-E-MASTWAAR",
      sub: { en: "Exegesis of Love", ur: "تفسیر مستوار" },
      quote: "الْقُرْآنُ هُوَ بَحْرُ الْمَحَبَّةِ",
      translation: "The Quran is the limitless ocean of divine love.",
      desc: {
        en: "A comprehensive spiritual commentary on the Holy Quran, unraveling the dimensions of love, unity, and Sufi coordinates woven into the sacred verses.",
        ur: "قرآن پاک کی ایک جامع روحانی تفسیر، جس میں الٰہی آیات میں پوشیدہ محبت، اتحاد اور تصوف کے لطیف اشارات کو واضح کیا گیا ہے۔",
      },
    },
    {
      id: 1,
      title: "Maqam-e-Mahmood",
      spineTitle: "MAQAM-E-MAHMOOD",
      sub: { en: "The Station of Praise", ur: "مقامِ محمود" },
      quote: "الْمَقَامُ الْأَعْلَى هُوَ الْفَنَاءُ",
      translation: "The highest spiritual station is absolute self-annihilation.",
      desc: {
        en: "An illuminating discourse on the ultimate stations of the spiritual journey and the sublime presence of the Beloved.",
        ur: "سفرِ سلوک کی آخری منزلوں اور محبوب حقیقی کے حضور سجدہ ہائے نیاز کے اسرار پر روشنی ڈالنے والی ایک ایمان افروز تصنیف۔",
      },
    },
    {
      id: 2,
      title: "Makeen-e-Dil",
      spineTitle: "MAKEEN-E-DIL",
      sub: { en: "The Dweller of the Heart", ur: "مکیںِ دل" },
      quote: "قَلْبُ الْمُؤْمِنِ عَرْشُ اللَّهِ",
      translation: "The heart of the lover is the throne of the Divine.",
      desc: {
        en: "Exploring the heart as the true compass of the soul, where the Divine resides in silent splendor, transcending all physical structures.",
        ur: "دل کو روح کا حقیقی قطب نما قرار دے کر اس حقیقت کی وضاحت کہ خدا کسی مکان میں نہیں بلکہ محبت بھرے دل میں بستا ہے۔",
      },
    },
    {
      id: 3,
      title: "Silsila-e-Dilbar",
      spineTitle: "SILSILA-E-DILBAR",
      sub: { en: "The Lineage of Beauty", ur: "سلسلہ دلبر" },
      quote: "سِلْسِلَةُ الْقُلُوبِ مُتَّصِلَةٌ بِالْحُبِّ",
      translation: "The chain of hearts is joined by golden links of love.",
      desc: {
        en: "Tracing the spiritual lineage of the path of beauty, demonstrating how light has passed from heart to heart through history.",
        ur: "سلسلہ محبت کے روحانی شجرہ نسب کا تذکرہ، جس میں بتایا گیا ہے کہ کس طرح صدیوں سے یہ نورِ الٰہی سینہ بہ سینہ منتقل ہوتا آیا ہے۔",
      },
    },
    {
      id: 4,
      title: "Asrar-e-Mastwaar",
      spineTitle: "ASRAR-E-MASTWAAR",
      sub: { en: "Secrets of the Ecstatic", ur: "اسرارِ مستوار" },
      quote: "الأَسْرَارُ تَظْهَرُ لأَهْلِ الصِّدْقِ",
      translation: "Sacred secrets reveal themselves only to the sincere.",
      desc: {
        en: "A compilation of ecstatic revelations, aphorisms, and profound mystical keys detailing the coordinates of the heart's alignment.",
        ur: "وجدانی کیفیات، اقوالِ زریں اور عمیق روحانی نکات کا مجموعہ جو مرید کے دل کو معرفتِ الٰہی سے منور کرتے ہیں۔",
      },
    },
  ];

  const handleBookClick = (id: number) => {
    if (activeBook !== id) {
      setActiveBook(id);
      setOpenedBook(null); // Close any open book when switching
    } else {
      // Toggle open state on the active book
      setOpenedBook(openedBook === id ? null : id);
    }
  };

  return (
    <section
      id="publications"
      style={{
        width: "100%",
        backgroundColor: "var(--midnight-navy)",
        padding: "120px 5%",
        position: "relative",
        zIndex: 4,
        overflow: "hidden",
      }}
    >
      {/* Background Star Overlay */}
      <div
        className="arabic-text"
        style={{
          position: "absolute",
          bottom: "10%",
          right: "-5%",
          fontSize: "12vw",
          color: "rgba(200, 169, 110, 0.015)",
          userSelect: "none",
          pointerEvents: "none",
          lineHeight: "1",
        }}
      >
        کتب تصنیف
      </div>

      {/* Section Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid rgba(200, 169, 110, 0.2)", paddingBottom: "20px", marginBottom: "80px", position: "relative", zIndex: 10 }}>
        <h4 className="english-heading" style={{ fontSize: "var(--t4)", color: "var(--text-primary)" }}>
          {language === "en" ? "The Sacred Bookshelf" : "کتبِ مکھدوم مستوار قلندرؒ"}
        </h4>
        <span className="meta-text" style={{ fontSize: "10px", color: "var(--text-muted)" }}>
          3D Perspective Scene ✦
        </span>
      </div>

      {/* Main 3D Scene Wrapper */}
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
          perspective: "1200px", // 3D Camera depth
          position: "relative",
          zIndex: 5,
          paddingBottom: "80px",
        }}
      >
        {/* Carousel Books Stand */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            gap: "clamp(10px, 3vw, 40px)",
            minHeight: "350px",
            transformStyle: "preserve-3d",
            transition: "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)",
          }}
        >
          {books.map((book) => {
            const isActive = activeBook === book.id;
            const isOpen = openedBook === book.id;
            
            // Calculate dynamic offsets for lazy-susan 3D arc layout
            const offset = book.id - activeBook;
            const rotateYVal = offset * 25; // Splay rotation
            const translateZVal = isActive ? (isOpen ? 120 : 50) : -40 - Math.abs(offset) * 30;
            const translateXVal = offset * 50;

            return (
              <div
                key={book.id}
                onClick={() => handleBookClick(book.id)}
                data-cursor="explore"
                style={{
                  position: "relative",
                  width: "180px",
                  height: "260px",
                  transformStyle: "preserve-3d",
                  transform: `translateX(${translateXVal}px) translateZ(${translateZVal}px) rotateY(${rotateYVal}deg)`,
                  transition: "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)",
                  cursor: "pointer",
                  zIndex: isActive ? 10 : 5 - Math.abs(offset),
                }}
              >
                {/* 3D BOOK STRUCTURE */}
                <div
                  className={`book-body ${isOpen ? "open" : ""}`}
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    transformStyle: "preserve-3d",
                    transition: "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)",
                  }}
                >
                  {/* 1. FRONT COVER (Rotates open) */}
                  <div
                    className="book-front"
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      backgroundColor: "var(--deep-maroon)",
                      backgroundImage: "linear-gradient(135deg, rgba(200, 169, 110, 0.15), transparent)",
                      border: "1px solid var(--gold-dim)",
                      borderRadius: "0 4px 4px 0",
                      transformStyle: "preserve-3d",
                      transformOrigin: "left center",
                      transform: isOpen ? "rotateY(-135deg) translateZ(1px)" : "rotateY(0deg) translateZ(1px)",
                      transition: "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)",
                      boxShadow: isActive ? "0 15px 30px rgba(0,0,0,0.6)" : "0 5px 15px rgba(0,0,0,0.4)",
                      zIndex: 4,
                    }}
                  >
                    {/* Golden Ornate manuscript border detail */}
                    <div
                      style={{
                        position: "absolute",
                        top: "8px",
                        left: "8px",
                        right: "8px",
                        bottom: "8px",
                        border: "1px solid var(--gold-dim)",
                        borderRadius: "2px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "16px 8px",
                      }}
                    >
                      {/* Top Corner Jewels */}
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="var(--gold-primary)">
                        <path d="M12 2 L22 12 L12 22 L2 12 Z" />
                      </svg>

                      {/* Cover Title */}
                      <div style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <h5
                          className="english-heading"
                          style={{
                            color: "var(--gold-light)",
                            fontSize: "14px",
                            fontWeight: "bold",
                            letterSpacing: "0.05em",
                            lineHeight: "1.2",
                          }}
                        >
                          {book.title.split("-")[0]}
                        </h5>
                        <span
                          className="arabic-text"
                          style={{
                            fontSize: "16px",
                            color: "var(--gold-primary)",
                            lineHeight: "1.2",
                          }}
                        >
                          {book.sub.ur}
                        </span>
                      </div>

                      {/* Bottom Ornate Crest */}
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="var(--gold-primary)" style={{ transform: "rotate(45deg)" }}>
                        <rect x="6" y="6" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </div>
                  </div>

                  {/* 2. INNER PAGES FAN (Visible only when open) */}
                  <div
                    className="book-page-fanned page-1"
                    style={{
                      position: "absolute",
                      width: "calc(100% - 10px)",
                      height: "calc(100% - 6px)",
                      top: "3px",
                      left: "5px",
                      backgroundColor: "var(--parchment)",
                      borderRadius: "0 3px 3px 0",
                      boxShadow: "inset 4px 0 10px rgba(0,0,0,0.2)",
                      transformOrigin: "left center",
                      transform: isOpen ? "rotateY(-25deg)" : "rotateY(0deg)",
                      transition: "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)",
                      zIndex: 3,
                    }}
                  />
                  <div
                    className="book-page-fanned page-2"
                    style={{
                      position: "absolute",
                      width: "calc(100% - 10px)",
                      height: "calc(100% - 6px)",
                      top: "3px",
                      left: "5px",
                      backgroundColor: "var(--parchment)",
                      borderRadius: "0 3px 3px 0",
                      boxShadow: "inset 4px 0 10px rgba(0,0,0,0.15)",
                      transformOrigin: "left center",
                      transform: isOpen ? "rotateY(-15deg)" : "rotateY(0deg)",
                      transition: "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)",
                      zIndex: 2,
                    }}
                  />
                  <div
                    className="book-page-fanned page-3"
                    style={{
                      position: "absolute",
                      width: "calc(100% - 10px)",
                      height: "calc(100% - 6px)",
                      top: "3px",
                      left: "5px",
                      backgroundColor: "var(--parchment-dark)",
                      borderRadius: "0 3px 3px 0",
                      boxShadow: "inset 4px 0 10px rgba(0,0,0,0.1)",
                      transformOrigin: "left center",
                      transform: isOpen ? "rotateY(-5deg)" : "rotateY(0deg)",
                      transition: "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 1,
                    }}
                  >
                    {/* Calligraphy sample inside pages */}
                    <div className="arabic-text" style={{ fontSize: "14px", color: "var(--deep-maroon)", opacity: 0.2, transform: "rotate(-10deg)" }}>
                      محبت قلندر
                    </div>
                  </div>

                  {/* 3. SPINE (Thinner edge) */}
                  <div
                    className="book-spine"
                    style={{
                      position: "absolute",
                      width: "24px",
                      height: "100%",
                      backgroundColor: "var(--deep-maroon)",
                      borderRight: "1px solid var(--gold-dim)",
                      transformOrigin: "left center",
                      transform: "rotateY(-90deg) translateZ(0px)",
                      zIndex: 5,
                      left: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      className="meta-text"
                      style={{
                        transform: "rotate(90deg)",
                        fontSize: "8px",
                        color: "var(--gold-primary)",
                        whiteSpace: "nowrap",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {book.spineTitle}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CSS walnut wood bookshelf plank shelf */}
        <div
          style={{
            width: "100%",
            height: "20px",
            background: "linear-gradient(to bottom, #1f1107 0%, #0d0602 100%)",
            borderBottom: "4px solid var(--gold-dim)",
            borderRadius: "4px",
            position: "relative",
            zIndex: 1,
            marginTop: "-10px",
            boxShadow: "0 20px 30px rgba(0,0,0,0.8), inset 0 2px 5px rgba(255,255,255,0.1)",
          }}
        />
      </div>

      {/* DETAILED CONTENT CARD WITH FLOATING QUOTE (Animate on open) */}
      <div
        style={{
          width: "100%",
          maxWidth: "750px",
          margin: "40px auto 0 auto",
          minHeight: "220px",
          position: "relative",
          zIndex: 10,
        }}
      >
        <AnimatePresence mode="wait">
          {openedBook !== null && (
            <motion.div
              key={openedBook}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{
                backgroundColor: "rgba(5, 11, 26, 0.75)",
                backdropFilter: "blur(12px)",
                border: "1.5px solid var(--gold-dim)",
                borderRadius: "4px",
                padding: "40px",
                boxShadow: "0 25px 50px rgba(0,0,0,0.7)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "20px",
              }}
            >
              {/* Floating Calligraphy Quote (Slow drifting glow) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{
                  opacity: [0.3, 0.9, 0.3],
                  y: [-5, -15, -5],
                  scale: 1,
                }}
                transition={{
                  y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
                  opacity: { repeat: Infinity, duration: 6, ease: "easeInOut" },
                  scale: { duration: 0.6 },
                }}
                className="arabic-text"
                style={{
                  fontSize: "clamp(24px, 4vw, 36px)",
                  color: "var(--gold-light)",
                  textShadow: "0 0 15px rgba(240, 217, 160, 0.6)",
                  lineHeight: "1.4",
                }}
              >
                {books[openedBook].quote}
              </motion.div>

              {/* Translation heading */}
              <div
                className="english-heading"
                style={{
                  fontSize: "15px",
                  color: "var(--gold-primary)",
                  fontStyle: "italic",
                  letterSpacing: "0.05em",
                }}
              >
                &ldquo;{books[openedBook].translation}&rdquo;
              </div>

              {/* Subtitles (Bilingual) */}
              <div style={{ display: "flex", gap: "14px", alignItems: "baseline", borderTop: "1px solid rgba(200,169,110,0.2)", paddingTop: "14px", width: "100%", justifyContent: "center" }}>
                <span className="urdu-text" style={{ fontSize: "18px", color: "var(--gold-light)", fontWeight: "bold" }}>
                  {books[openedBook].sub.ur}
                </span>
                <span style={{ color: "var(--gold-dim)" }}>✦</span>
                <span className="english-heading" style={{ fontSize: "14px", color: "var(--text-primary)", textTransform: "uppercase" }}>
                  {books[openedBook].sub.en}
                </span>
              </div>

              {/* Description body */}
              <p
                className={language === "en" ? "english-body" : "urdu-text"}
                style={{
                  color: "var(--text-muted)",
                  fontSize: language === "en" ? "14px" : "15px",
                  lineHeight: "1.7",
                }}
              >
                {language === "en" ? books[openedBook].desc.en : books[openedBook].desc.ur}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Instruction if no book is open */}
        {openedBook === null && (
          <div
            style={{
              textAlign: "center",
              fontFamily: "var(--font-cormorant), serif",
              fontStyle: "italic",
              color: "var(--text-secondary)",
              fontSize: "14px",
              opacity: 0.7,
              letterSpacing: "0.1em",
              marginTop: "20px",
            }}
          >
            ✦ Click on any active book on the shelf to swing its cover open and read its spiritual secrets ✦
          </div>
        )}
      </div>
    </section>
  );
}
