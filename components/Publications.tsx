"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BookData {
  id: number;
  title: string;
  spineTitle: string;
  sub: string;
  quote: string;
  translation: string;
  desc: string;
  coverImg: string;
}

export default function Publications() {
  const [activeBook, setActiveBook] = useState<number>(2); // Default to center book
  const [openedBook, setOpenedBook] = useState<number | null>(null);

  const books: BookData[] = [
    {
      id: 0,
      title: "Tafseer-e-Mastwaar",
      spineTitle: "TAFSEER-E-MASTWAAR",
      sub: "Exegesis of Love",
      quote: "الْقُرْآنُ هُوَ بَحْرُ الْمَحَبَّةِ",
      translation: "The Quran is the limitless ocean of divine love.",
      desc: "A comprehensive spiritual commentary on the Holy Quran, unraveling the dimensions of love, unity, and Sufi coordinates woven into the sacred verses.",
      coverImg: "/Tafseer-e-Mastwaar.jpg",
    },
    {
      id: 1,
      title: "Maqam-e-Mahmood",
      spineTitle: "MAQAM-E-MAHMOOD",
      sub: "The Station of Praise",
      quote: "الْمَقَامُ الْأَعْلَى هُوَ الْفَنَاءُ",
      translation: "The highest spiritual station is absolute self-annihilation.",
      desc: "An illuminating discourse on the ultimate stations of the spiritual journey and the sublime presence of the Beloved.",
      coverImg: "/maqame-mahmood.png",
    },
    {
      id: 2,
      title: "Makeen-e-Dil",
      spineTitle: "MAKEEN-E-DIL",
      sub: "The Dweller of the Heart",
      quote: "قَلْبُ الْمُؤْمِنِ عَرْشُ اللَّهِ",
      translation: "The heart of the lover is the throne of the Divine.",
      desc: "Exploring the heart as the true compass of the soul, where the Divine resides in silent splendor, transcending all physical structures.",
      coverImg: "/makeen-e-dil.png",
    },
    {
      id: 3,
      title: "Silsila-e-Dilbar",
      spineTitle: "SILSILA-E-DILBAR",
      sub: "The Lineage of Beauty",
      quote: "سِلْسِلَةُ الْقُلُوبِ مُتَّصِلَةٌ بِالْحُبِّ",
      translation: "The chain of hearts is joined by golden links of love.",
      desc: "Tracing the spiritual lineage of the path of beauty, demonstrating how light has passed from heart to heart through history.",
      coverImg: "/silsila-dilbar-book (1).png",
    },
    {
      id: 4,
      title: "Asrar-e-Mastwaar",
      spineTitle: "ASRAR-E-MASTWAAR",
      sub: "Secrets of the Ecstatic",
      quote: "الأَسْرَارُ تَظْهَرُ لأَهْلِ الصِّدْقِ",
      translation: "Sacred secrets reveal themselves only to the sincere.",
      desc: "A compilation of ecstatic revelations, aphorisms, and profound mystical keys detailing the coordinates of the heart's alignment.",
      coverImg: "/asraar-e-mastwaar-book.png",
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
      id="shelf"
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
          color: "rgba(0, 168, 232, 0.02)",
          userSelect: "none",
          pointerEvents: "none",
          lineHeight: "1",
        }}
      >
        Publications
      </div>

      {/* Section Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid rgba(255, 20, 147, 0.3)", paddingBottom: "20px", marginBottom: "80px", position: "relative", zIndex: 10 }}>
        <h4 className="english-heading" style={{ fontSize: "var(--t4)", color: "var(--text-primary)" }}>
          {"The Sacred Bookshelf & Treatises"}
        </h4>
        <span className="meta-text" style={{ fontSize: "10px", color: "var(--text-secondary)" }}>
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
                      backgroundColor: "var(--parchment)",
                      backgroundImage: `url('${book.coverImg}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      border: "1px solid var(--gold-dim)",
                      borderRadius: "0 4px 4px 0",
                      transformStyle: "preserve-3d",
                      transformOrigin: "left center",
                      transform: isOpen ? "rotateY(-135deg) translateZ(1px)" : "rotateY(0deg) translateZ(1px)",
                      transition: "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)",
                      boxShadow: isActive ? "0 15px 30px rgba(0,0,0,0.8)" : "0 5px 15px rgba(0,0,0,0.5)",
                      zIndex: 4,
                    }}
                  >
                    {/* Dark gradient overlay to ensure spine border visibility */}
                    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(90deg, rgba(4,8,18,0.4) 0%, transparent 20%)" }} />
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
                      boxShadow: "inset 4px 0 10px rgba(0,0,0,0.5)",
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
                      boxShadow: "inset 4px 0 10px rgba(0,0,0,0.4)",
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
                      boxShadow: "inset 4px 0 10px rgba(0,0,0,0.3)",
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
                    <div className="english-heading" style={{ fontSize: "14px", color: "var(--gold-primary)", opacity: 0.4, transform: "rotate(-10deg)" }}>
                      Muhabbat Mission
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

        {/* CSS Cyber Walnut wood bookshelf plank shelf */}
        <div
          style={{
            width: "100%",
            height: "20px",
            background: "linear-gradient(to bottom, #0f172a 0%, #040812 100%)",
            borderBottom: "4px solid var(--gold-primary)",
            borderRadius: "4px",
            position: "relative",
            zIndex: 1,
            marginTop: "-10px",
            boxShadow: "0 20px 30px rgba(0,0,0,0.9), inset 0 2px 5px rgba(255,20,147,0.3)",
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
                backgroundColor: "rgba(15, 23, 42, 0.85)",
                backdropFilter: "blur(12px)",
                border: "1.5px solid var(--gold-primary)",
                borderRadius: "8px",
                padding: "40px",
                boxShadow: "0 25px 50px rgba(0,0,0,0.8)",
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
                  textShadow: "0 0 20px rgba(255, 20, 147, 0.8)",
                  lineHeight: "1.4",
                }}
              >
                {books[openedBook].quote}
              </motion.div>

              {/* Translation heading */}
              <div
                className="english-heading"
                style={{
                  fontSize: "16px",
                  color: "var(--copper-accent)",
                  fontStyle: "italic",
                  letterSpacing: "0.05em",
                  fontWeight: "bold",
                }}
              >
                &ldquo;{books[openedBook].translation}&rdquo;
              </div>

              {/* Subtitles (Bilingual) */}
              <div style={{ display: "flex", gap: "14px", alignItems: "baseline", borderTop: "1px solid rgba(255,20,147,0.3)", paddingTop: "14px", width: "100%", justifyContent: "center" }}>
                <span className="english-heading" style={{ fontSize: "18px", color: "var(--gold-light)", fontWeight: "bold" }}>
                  {books[openedBook].sub}
                </span>
                <span style={{ color: "var(--gold-primary)" }}>✦</span>
                <span className="english-heading" style={{ fontSize: "14px", color: "var(--text-primary)", textTransform: "uppercase" }}>
                  {books[openedBook].sub}
                </span>
              </div>

              {/* Description body */}
              <p
                className={"english-body"}
                style={{
                  color: "var(--text-muted)",
                  fontSize: "15px",
                  lineHeight: "1.6",
                }}
              >
                {books[openedBook].desc}
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
              fontSize: "15px",
              opacity: 0.8,
              letterSpacing: "0.1em",
              marginTop: "20px",
            }}
          >
            ✦ Click on any treatise on the cyber-shelf to swing its cover open and immerse in its divine wisdom ✦
          </div>
        )}
      </div>
    </section>
  );
}
