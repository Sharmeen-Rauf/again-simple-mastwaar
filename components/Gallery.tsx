"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoCard {
  id: number;
  title: string;
  duration: string;
  category: string;
  speaker: string;
  bgImage: string;
}

export default function Gallery() {
  const [activeVideo, setActiveVideo] = useState<VideoCard | null>(null);

  const videos: VideoCard[] = [
    {
      id: 1,
      title: "113th 3-Day Spiritual Retreat Assembly",
      category: "RETREAT",
      duration: "18:42",
      speaker: "Makhdoom Mastwaar Qalandar",
      bgImage: "/113-3day-spiritual-retreat-29jan2020-ft-img-68787027aaddf.jpg",
    },
    {
      id: 2,
      title: "Darbar Sharif Grand Illumination",
      category: "ILLUMINATION",
      duration: "45:10",
      speaker: "Chakwal Darbar Sharif",
      bgImage: "/12-darbar-lighting-08octo2022-ft-img.jpg",
    },
    {
      id: 3,
      title: "Milad Celebration Thoa Bahadur",
      category: "MILAD",
      duration: "32:15",
      speaker: "International Milad Circle",
      bgImage: "/13-milad-thoa-bahadur-07oct2022-ft-img-1.jpg",
    },
    {
      id: 4,
      title: "Lahore Spiritual Node Assembly",
      category: "GATHERING",
      duration: "24:50",
      speaker: "Lahore Circle Devotees",
      bgImage: "/14-lahore-visit-01oct2022-ft-img.jpg",
    },
    {
      id: 5,
      title: "National Milad Conference Broadcast",
      category: "CONFERENCE",
      duration: "58:30",
      speaker: "Muhabbat Mission Global",
      bgImage: "/17-national-milad-celebration-10sep2022-ft-img.jpg",
    },
    {
      id: 6,
      title: "Urs Grand Majlis Commemoration",
      category: "MAJLIS",
      duration: "41:05",
      speaker: "Makhdoom Mastwaar Qalandar",
      bgImage: "/27-majlis-mastwaar-23july2022-ft-img.jpg",
    },
  ];

  return (
    <section
      id="media"
      style={{
        width: "100%",
        backgroundColor: "var(--midnight-navy)",
        padding: "100px 5%",
        position: "relative",
        zIndex: 4,
        overflow: "hidden",
      }}
    >
      {/* Background grain texture overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "radial-gradient(rgba(0, 168, 232, 0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Section Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid rgba(255, 20, 147, 0.3)", paddingBottom: "20px", marginBottom: "60px", position: "relative", zIndex: 5 }}>
        <h4 className="english-heading" style={{ fontSize: "var(--t4)", color: "var(--text-primary)" }}>
          {"Cinematic Broadcasts & Visual Archives"}
        </h4>
        <span className="meta-text" style={{ fontSize: "10px", color: "var(--text-secondary)" }}>
          Broadcast Archives ✦
        </span>
      </div>

      {/* HORIZONTAL VIDEO CARDS SCROLLER */}
      <div
        style={{
          display: "flex",
          gap: "30px",
          overflowX: "auto",
          paddingBottom: "40px",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          scrollbarWidth: "none", // Hide default scrollbars
        }}
        className="hide-scrollbar"
      >
        {videos.map((vid) => (
          <div
            key={vid.id}
            onClick={() => setActiveVideo(vid)}
            data-cursor="explore"
            style={{
              minWidth: "350px",
              flex: "1 0 350px",
              height: "260px",
              borderRadius: "8px",
              border: "1px solid var(--gold-dim)",
              padding: "30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 15px 30px rgba(0,0,0,0.6)",
            }}
            className="video-archive-card"
          >
            {/* Background Image Cover */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `url('${vid.bgImage}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.45,
                transition: "all 0.5s ease",
                zIndex: 1,
              }}
              className="vid-bg-cover"
            />
            {/* Deep Cyber Vignette */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "linear-gradient(to top, rgba(4,8,18,0.98) 0%, rgba(15,23,42,0.7) 100%)",
                zIndex: 2,
              }}
            />

            {/* Top Row: Category and Duration */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 3, position: "relative" }}>
              <span
                className="meta-text"
                style={{
                  color: "var(--gold-primary)",
                  fontSize: "11px",
                  fontWeight: "bold",
                  letterSpacing: "0.15em",
                }}
              >
                {vid.category}
              </span>
              <span
                className="meta-text"
                style={{
                  color: "var(--copper-accent)",
                  fontSize: "10px",
                }}
              >
                {vid.duration}
              </span>
            </div>

            {/* Glowing Center Play icon & Waveform overlay on hover */}
            <div
              className="hover-play-icon"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(0.8)",
                opacity: 0,
                transition: "all 0.4s ease",
                zIndex: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  width: "55px",
                  height: "55px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 20, 147, 0.9)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 20px var(--gold-light)",
                }}
              >
                <svg viewBox="0 0 24 24" width="22" height="22" fill="var(--text-primary)">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="meta-text" style={{ fontSize: "10px", color: "var(--text-primary)", letterSpacing: "0.1em", fontWeight: "bold" }}>
                CLICK TO PLAY
              </span>
            </div>

            {/* Bottom Row: Title and Speaker */}
            <div style={{ zIndex: 3, display: "flex", flexDirection: "column", gap: "6px", position: "relative" }}>
              <h5
                className="english-heading"
                style={{
                  color: "var(--text-primary)",
                  fontSize: "20px",
                  fontWeight: "bold",
                  lineHeight: "1.3",
                }}
              >
                {vid.title}
              </h5>
              <span
                className="meta-text"
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                }}
              >
                {vid.speaker}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* SACRED MASONRY IMAGE/VECTOR GALLERY */}
      <div style={{ marginTop: "80px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "40px" }}>
          <h4 className="english-heading" style={{ fontSize: "20px", color: "var(--gold-primary)", fontWeight: "bold" }}>
            {"Sacred Geometry & Manuscripts"}
          </h4>
          <span className="meta-text" style={{ fontSize: "10px", color: "var(--text-muted)" }}>
            Hover to Illuminate ✦
          </span>
        </div>

        {/* CSS Masonry Grid */}
        <div
          className="masonry-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "30px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* MASONRY ITEM 1: Sacred Mughal Arch SVG */}
          <div className="masonry-item">
            <svg viewBox="0 0 300 400" className="masonry-svg">
              <rect width="300" height="400" fill="none" />
              {/* Outer border */}
              <rect x="10" y="10" width="280" height="380" fill="none" stroke="currentColor" strokeWidth="1" className="outline-stroke" />
              {/* Mughal Arch vector path */}
              <path
                d="M30 380 L30 180 Q30 110 90 90 Q150 70 150 30 Q150 70 210 90 Q270 110 270 180 L270 380 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="main-stroke"
              />
              <path
                d="M45 380 L45 185 Q45 120 100 102 Q150 85 150 45 Q150 85 200 102 Q255 120 255 185 L255 380 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeDasharray="4,4"
              />
              <text x="150" y="240" textAnchor="middle" className="arabic-text" fontSize="32">Arch</text>
            </svg>
            <span className="meta-text">Mughal Sanctuary Arch</span>
          </div>

          {/* MASONRY ITEM 2: Rub El Hizb Mandala SVG */}
          <div className="masonry-item">
            <svg viewBox="0 0 300 300" className="masonry-svg">
              <rect width="300" height="300" fill="none" />
              {/* Two interlocking squares forming 8-pointed star */}
              <g transform="translate(150, 150)">
                <rect x="-80" y="-80" width="160" height="160" fill="none" stroke="currentColor" strokeWidth="1.5" className="main-stroke" />
                <rect x="-80" y="-80" width="160" height="160" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(45)" className="main-stroke" />
                {/* Concentric rings and core points */}
                <circle cx="0" cy="0" r="50" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3,3" />
                <circle cx="0" cy="0" r="10" fill="currentColor" className="core-glow" />
                <path d="M-110 0 L110 0 M0 -110 L0 110" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
              </g>
            </svg>
            <span className="meta-text">8-Pointed Hizb Mandala</span>
          </div>

          {/* MASONRY ITEM 3: Calligraphic Ishq (Love) Scroll SVG */}
          <div className="masonry-item">
            <svg viewBox="0 0 300 400" className="masonry-svg">
              <rect width="300" height="400" fill="none" />
              <rect x="15" y="15" width="270" height="370" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3,3" />
              {/* Hand-drawn stylized calligraphy for 'Ishq' (Ishq) */}
              <g transform="translate(150, 200)">
                {/* Outer decorative halo */}
                <circle cx="0" cy="0" r="100" fill="none" stroke="currentColor" strokeWidth="1" className="outline-stroke" />
                <circle cx="0" cy="0" r="92" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
                {/* Calligraphy word in center */}
                <text x="0" y="15" textAnchor="middle" className="arabic-text core-glow" fontSize="64" fill="currentColor">
                  Ishq
                </text>
                <text x="0" y="50" textAnchor="middle" className="english-heading" fontSize="10" letterSpacing="0.2em" fill="currentColor">
                  SACRED ECSTASY
                </text>
              </g>
            </svg>
            <span className="meta-text">Calligraphic Love Scroll</span>
          </div>

          {/* MASONRY ITEM 4: Mughal Mystic Lantern SVG */}
          <div className="masonry-item">
            <svg viewBox="0 0 300 300" className="masonry-svg">
              <rect width="300" height="300" fill="none" />
              {/* Lantern wireframe */}
              <g transform="translate(150, 150)">
                {/* Cap */}
                <path d="M-30 -60 L30 -60 L50 -40 L-50 -40 Z" fill="none" stroke="currentColor" strokeWidth="1.5" className="main-stroke" />
                <path d="M0 -60 L0 -80" stroke="currentColor" strokeWidth="1" />
                <circle cx="0" cy="-84" r="4" fill="none" stroke="currentColor" strokeWidth="1" />
                {/* Glass Chamber */}
                <path d="M-50 -40 L-40 60 L40 60 L50 -40 Z" fill="none" stroke="currentColor" strokeWidth="1.5" className="main-stroke" />
                {/* Base */}
                <rect x="-30" y="60" width="60" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" className="main-stroke" />
                {/* Inner glowing flame */}
                <path d="M0 20 C-10 20 -15 0 0 -25 C15 0 10 20 0 20 Z" fill="currentColor" className="core-glow" />
              </g>
            </svg>
            <span className="meta-text">Illuminated Mystic Lantern</span>
          </div>
        </div>
      </div>

      {/* CINEMATIC VIDEO PLAYBACK MODAL (Glassmorphic Backdrop Blur) */}
      <AnimatePresence>
        {activeVideo !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(4, 8, 18, 0.92)",
              backdropFilter: "blur(15px)",
              zIndex: 999999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              style={{
                width: "100%",
                maxWidth: "750px",
                backgroundColor: "rgba(15, 23, 42, 0.9)",
                border: "2px solid var(--gold-primary)",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 25px 50px rgba(0,0,0,0.8)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Header: Title and Close button */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "20px 30px",
                  borderBottom: "1px solid rgba(255,20,147,0.3)",
                  backgroundColor: "rgba(4, 8, 18, 0.7)",
                }}
              >
                <div>
                  <span className="meta-text" style={{ fontSize: "10px", color: "var(--gold-primary)", fontWeight: "bold" }}>
                    NOW STREAMING ✦ {activeVideo.category}
                  </span>
                  <h5 className="english-heading" style={{ fontSize: "20px", color: "var(--text-primary)", marginTop: "4px", fontWeight: "bold" }}>
                    {activeVideo.title}
                  </h5>
                </div>
                <button
                  onClick={() => setActiveVideo(null)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--gold-light)",
                    fontSize: "24px",
                    cursor: "pointer",
                    padding: "10px",
                    lineHeight: "1",
                  }}
                >
                  ✕
                </button>
              </div>

              {/* Simulated Video Player Screen (Animated waveform and progress bar) */}
              <div
                style={{
                  width: "100%",
                  height: "350px",
                  backgroundImage: `url('${activeVideo.bgImage}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  gap: "20px",
                }}
              >
                {/* Floating particle/gradient background */}
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(rgba(4,8,18,0.7), rgba(4,8,18,0.95))" }} />

                {/* Animated Equalizer Waveform Bars */}
                <div style={{ display: "flex", gap: "6px", alignItems: "flex-end", height: "60px", zIndex: 2 }}>
                  {Array.from({ length: 24 }).map((_, i) => {
                    const duration = ((i * 7) % 5) / 10 + 0.4;
                    const delay = ((i * 3) % 4) / 10;
                    return (
                      <div
                        key={i}
                        style={{
                          width: "5px",
                          backgroundColor: "var(--gold-primary)",
                          borderRadius: "2px",
                          animation: `equalizerHeight ${duration}s ease-in-out infinite alternate`,
                          animationDelay: `${delay}s`,
                          boxShadow: "0 0 10px var(--gold-light)",
                        }}
                      />
                    );
                  })}
                </div>

                {/* Centered Large Play/Pause */}
                <div
                  style={{
                    width: "65px",
                    height: "65px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 20, 147, 0.2)",
                    border: "2px solid var(--gold-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    zIndex: 2,
                    boxShadow: "0 0 20px rgba(255,20,147,0.4)",
                  }}
                >
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="var(--text-primary)">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                </div>
              </div>

              {/* Control Bar: progress track, timers, volume */}
              <div
                style={{
                  padding: "24px 30px",
                  backgroundColor: "rgba(4, 8, 18, 0.95)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                {/* Custom glowing timeline rail */}
                <div style={{ position: "relative", width: "100%", height: "6px", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "3px" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, width: "35%", height: "100%", backgroundColor: "var(--gold-primary)", borderRadius: "3px", boxShadow: "0 0 10px var(--gold-light)" }} />
                  <div style={{ position: "absolute", top: "-4px", left: "35%", width: "14px", height: "14px", borderRadius: "50%", backgroundColor: "var(--text-primary)", boxShadow: "0 0 12px var(--gold-light)" }} />
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="meta-text" style={{ fontSize: "11px", color: "var(--text-secondary)", fontWeight: "bold" }}>
                    05:42 / {activeVideo.duration}
                  </span>
                  <span className="meta-text" style={{ fontSize: "10px", color: "var(--gold-primary)", letterSpacing: "0.15em", fontWeight: "bold" }}>
                    TRANSMISSION SECURE ✦ 1080P
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
