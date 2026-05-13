"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Footer() {
  const [bismillah, setBismillah] = useState("");
  const bismillahRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  const hasTriggeredRef = useRef(false);

  const bismillahSource = "IN THE NAME OF GOD";

  function startTypewriter() {
    let current = "";
    let i = 0;
    const interval = setInterval(() => {
      if (i < bismillahSource.length) {
        current += bismillahSource[i];
        setBismillah(current);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 100);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasTriggeredRef.current) {
          hasTriggeredRef.current = true;
          startTypewriter();
        }
      },
      { threshold: 0.1 }
    );

    if (bismillahRef.current) {
      observer.observe(bismillahRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      ref={footerRef}
      style={{
        backgroundColor: "var(--parchment)",
        color: "var(--deep-maroon)",
        padding: "80px 5% 40px 5%",
        position: "relative",
        zIndex: 5,
        borderTop: "2px solid var(--gold-primary)",
        overflow: "hidden",
      }}
    >
      {/* 1. Scrolling Typewriter Bismillah Header */}
      <div
        ref={bismillahRef}
        style={{
          width: "100%",
          textAlign: "center",
          marginBottom: "60px",
          position: "relative",
        }}
      >
        <span
          className="arabic-text"
          style={{
            fontSize: "clamp(24px, 4vw, 44px)",
            color: "var(--deep-maroon)",
            fontWeight: "bold",
            letterSpacing: "0.05em",
            textShadow: "0 1px 3px rgba(139, 110, 58, 0.2)",
            display: "inline-block",
            minHeight: "50px",
          }}
        >
          {bismillah}
        </span>
        <div
          style={{
            width: "120px",
            height: "1px",
            backgroundColor: "var(--gold-primary)",
            margin: "15px auto 0 auto",
            opacity: 0.4,
          }}
        />
      </div>

      {/* 2. Main Footer Navigation Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr repeat(3, 1fr)",
          gap: "40px",
          maxWidth: "1200px",
          margin: "0 auto",
          borderBottom: "1px solid rgba(139, 110, 58, 0.2)",
          paddingBottom: "50px",
        }}
        className="footer-grid"
      >
        {/* COLUMN 1: Calligraphic Tughra Logo & Address */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ width: "100px", height: "100px", color: "var(--deep-maroon)" }}>
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M20 90 Q30 40 40 10" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M25 90 Q37 35 48 10" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M30 90 Q44 30 56 10" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M40 10 Q70 45 65 60 Q60 75 40 70 Q10 65 15 50 Q20 35 40 35 Q65 35 85 55 Q95 70 85 85" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path d="M48 10 Q75 45 70 60 Q65 72 48 68 C30 65 20 58 24 48 C28 38 48 38 70 42 Q88 44 90 60" stroke="currentColor" strokeWidth="1" fill="none" />
              <text x="45" y="80" className="arabic-text" fontSize="15" fontWeight="bold">Makhdoom</text>
            </svg>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <h5 className="english-heading" style={{ fontSize: "12px", letterSpacing: "0.1em", fontWeight: "bold" }}>
              MUHABBAT MISSION INTERNATIONAL
            </h5>
            <p className="english-body" style={{ fontSize: "13px", color: "rgba(45, 10, 10, 0.7)", lineHeight: "1.5" }}>
              Serving humanity, preserving sacred lineage, and spreading divine love from Chakwal, Pakistan since 1994.
            </p>
          </div>
        </div>

        {/* COLUMN 2: Navigation links */}
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <h6 className="meta-text" style={{ fontSize: "10px", color: "var(--gold-primary)", letterSpacing: "0.15em", fontWeight: "bold" }}>
            NAVIGATION
          </h6>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }} className="footer-links">
            <li><a href="#hero" className="english-heading" style={{ fontSize: "13px", color: "var(--deep-maroon)", textDecoration: "none" }}>Home Core</a></li>
            <li><a href="#about" className="english-heading" style={{ fontSize: "13px", color: "var(--deep-maroon)", textDecoration: "none" }}>About Us</a></li>
            <li><a href="#mission" className="english-heading" style={{ fontSize: "13px", color: "var(--deep-maroon)", textDecoration: "none" }}>Our Mission</a></li>
            <li><a href="#publications" className="english-heading" style={{ fontSize: "13px", color: "var(--deep-maroon)", textDecoration: "none" }}>Sacred Books</a></li>
          </ul>
        </div>

        {/* COLUMN 3: Timings & Schedule */}
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <h6 className="meta-text" style={{ fontSize: "10px", color: "var(--gold-primary)", letterSpacing: "0.15em", fontWeight: "bold" }}>
            VISIT &amp; TIMINGS
          </h6>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px", color: "rgba(45, 10, 10, 0.8)", lineHeight: "1.6" }}>
            <span style={{ fontWeight: "bold", color: "var(--copper-accent)" }}>Darbar Makhdoom Pur Shareef Murid</span>
            <span>Chakwal 48800, Pakistan</span>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold-primary)", fontWeight: "bold", textDecoration: "underline", fontSize: "12px" }}>
              [Open in Google Maps]
            </a>
            <div style={{ marginTop: "8px", borderTop: "1px solid rgba(0,0,0,0.05)", paddingTop: "8px" }}>
              <strong style={{ color: "var(--text-primary)" }}>SAT-THU:</strong> 1:30 PM - 3:30 PM<br/>
              <strong style={{ color: "var(--text-primary)" }}>Friday:</strong><br/>
              • Jummah Prayer: 1:30 PM<br/>
              • Dhikr &amp; Lecture: 2:00 PM
            </div>
          </div>
        </div>

        {/* COLUMN 4: Contact Coordinates */}
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <h6 className="meta-text" style={{ fontSize: "10px", color: "var(--gold-primary)", letterSpacing: "0.15em", fontWeight: "bold" }}>
            COORDINATES
          </h6>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "13px", color: "rgba(45, 10, 10, 0.8)" }}>
            <span><strong>Call:</strong> +92 333-500-6899</span>
            <span><strong>WhatsApp:</strong> +1 224-716-6575</span>
            <span><strong>Email:</strong> mastwaar@gmail.com</span>
            
            {/* Social icons */}
            <div style={{ display: "flex", gap: "15px", marginTop: "10px", alignItems: "center" }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--deep-maroon)" }} title="Facebook">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z" />
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--deep-maroon)" }} title="YouTube">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.388.555A3.003 3.003 0 0 0 .502 6.163C0 8.018 0 12 0 12s0 3.982.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.47 20.5 12 20.5 12 20.5s7.53 0 9.388-.555a3.003 3.003 0 0 0 2.11-2.108C24 15.982 24 12 24 12s0-3.982-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href="https://instagram.com/mastwaarqalandar" target="_blank" rel="noopener noreferrer" style={{ color: "var(--deep-maroon)" }} title="Instagram">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Credits Row (Color reverted) */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "40px auto 0 auto",
          fontSize: "11px",
          color: "rgba(45, 10, 10, 0.5)",
        }}
        className="footer-bottom"
      >
        <span>
          © {new Date().getFullYear()} Muhabbat Mission International. All rights reserved.
        </span>
        <button
          onClick={handleScrollToTop}
          className="meta-text"
          style={{
            background: "none",
            border: "none",
            color: "var(--deep-maroon)",
            cursor: "pointer",
            fontSize: "10px",
            letterSpacing: "0.15em",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          RETURN TO TOP ✦
        </button>
      </div>
    </footer>
  );
}
