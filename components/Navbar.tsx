"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface NavbarProps {
  theme: "dark" | "light";
  setTheme: (theme: "dark" | "light") => void;
}

export default function Navbar({ theme, setTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "hero", en: "Home" },
    { id: "about", en: "About Us" },
    { id: "mission", en: "Our Mission" },
    { id: "publications", en: "Books" },
    { id: "gallery", en: "Gallery" },
    { id: "contact", en: "Contact Us" },
  ];

  return (
    <>
      {/* Top Bar with Socials and Upcoming Events CTA */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "36px",
          zIndex: 10000,
          backgroundColor: theme === "dark" ? "rgba(5, 11, 26, 0.95)" : "rgba(245, 237, 216, 0.95)",
          borderBottom: theme === "dark" ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 5%",
          fontSize: "12px",
          fontFamily: "var(--font-cormorant), serif",
          color: "var(--gold-primary)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <a href="tel:+12247166575" style={{ color: "inherit", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ color: "#E91E8C" }}>📞</span> +1 224-716-6575
          </a>
          <a href="mailto:mastwaar@gmail.com" style={{ color: "inherit", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ color: "#E91E8C" }}>✉</span> mastwaar@gmail.com
          </a>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a href="https://instagram.com/mastwaarqalandar" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>
              📸 Instagram
            </a>
            <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
              🌐 Facebook
            </a>
            <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
              ▶ YouTube
            </a>
          </div>

          <a
            href="/upcoming-events"
            style={{
              backgroundColor: "#E91E8C",
              color: "#FFFFFF",
              padding: "4px 14px",
              borderRadius: "15px",
              fontWeight: "bold",
              textDecoration: "none",
              textTransform: "uppercase",
              fontSize: "10px",
              letterSpacing: "0.1em",
              boxShadow: "0 2px 10px rgba(233, 30, 140, 0.4)",
            }}
          >
            📅 Upcoming Events
          </a>
        </div>
      </div>

      {/* 0. Top Fixed Bismillah Bar */}
      <div
        className="bismillah-bar arabic-text"
        style={{
          position: "fixed",
          top: "121px",
          left: 0,
          width: "100%",
          zIndex: 9990,
          background: "linear-gradient(90deg, #B0156A, #0D47A1, #1B5E20)",
          padding: "6px 2rem",
          textAlign: "center",
          fontFamily: "var(--font-amiri), serif",
          fontSize: "15px",
          color: "rgba(255,255,255,0.95)",
          letterSpacing: "4px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
        }}
      >
        بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
      </div>

      <nav
        style={{
          position: "fixed",
          top: "36px",
          left: 0,
          width: "100%",
          height: "85px",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 5%",
          transition: "var(--transition-smooth)",
          backgroundColor: isScrolled
            ? theme === "dark"
              ? "rgba(5, 11, 26, 0.92)"
              : "rgba(245, 237, 216, 0.92)"
            : "rgba(5, 11, 26, 0.4)",
          borderBottom: isScrolled
            ? `1px solid ${theme === "dark" ? "rgba(200, 169, 110, 0.2)" : "rgba(139, 110, 58, 0.2)"}`
            : "1px solid rgba(255,255,255,0.05)",
          backdropFilter: isScrolled ? "blur(16px)" : "blur(8px)",
        }}
      >
        {/* 1. Left: Calligraphy Emblem Logo */}
        <a
          href="/"
          style={{ display: "flex", alignItems: "center", color: "var(--gold-primary)", textDecoration: "none" }}
          data-cursor="crescent"
        >
          <div
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              boxShadow: "0 0 20px rgba(233, 30, 140, 0.4)",
              overflow: "hidden",
              border: "2px solid var(--gold-primary)",
              backgroundColor: "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src="/logo-updated.jpeg" alt="Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </div>
        </a>

      {/* 2. Center: Nav Links */}
      <div
        className="nav-links-desktop"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "14px",
              fontWeight: 500,
              letterSpacing: "0.15em",
              color: "var(--text-color)",
              textTransform: "uppercase",
              position: "relative",
              padding: "6px 0",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              const underline = e.currentTarget.querySelector(".nav-underline");
              if (underline) {
                (underline as HTMLElement).style.width = "100%";
              }
            }}
            onMouseLeave={(e) => {
              const underline = e.currentTarget.querySelector(".nav-underline");
              if (underline) {
                (underline as HTMLElement).style.width = "0%";
              }
            }}
          >
            {link.en}
            {/* Elegant Hover Underline sliding from left */}
            <span
              className="nav-underline"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "0%",
                height: "1.5px",
                backgroundColor: "var(--gold-primary)",
                transition: "width 0.3s ease",
              }}
            />
          </a>
        ))}
      </div>

      {/* 3. Right: Language & Theme Toggles */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        {/* Parchment/Dark Theme Toggle Button */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          data-cursor="crescent"
          style={{
            background: "none",
            border: "none",
            color: "var(--gold-primary)",
            cursor: "pointer",
            outline: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "4px",
            transition: "all 0.3s ease",
          }}
          aria-label="Toggle parchment paper light mode"
        >
          {theme === "dark" ? (
            /* Parchment sun */
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
          ) : (
            /* Mystic Moon */
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 3a9 9 0 1 0 9 9 9.75 9.75 0 0 1-9-9Z" />
            </svg>
          )}
        </button>

        {/* Language Slider Toggle */}
        <div
          data-cursor="crescent"
          style={{
            width: "80px",
            height: "30px",
            borderRadius: "15px",
            backgroundColor: theme === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
            border: "1px solid var(--border-color)",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 10px",
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          {/* Animated Sliding Background Indicator */}
          <motion.div
            style={{
              position: "absolute",
              width: "36px",
              height: "24px",
              borderRadius: "12px",
              backgroundColor: "var(--gold-primary)",
              top: "2px",
            }}
            animate={{
              left: "3px"}}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />
          <span
            className="meta-text"
            style={{
              fontSize: "9px",
              zIndex: 1,
              fontWeight: "bold",
              color: "var(--midnight-navy)"}}
          >
            EN
          </span>
          <span
            className="arabic-text"
            style={{
              fontSize: "10px",
              zIndex: 1,
              fontWeight: "bold",
              color: "var(--text-muted)",
              transition: "color 0.3s ease",
              transform: "translateY(-1px)",
            }}
          >
            English (US)
          </span>
        </div>

        {/* Mobile menu hamburger toggle */}
        <button
          className="mobile-hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: "none",
            flexDirection: "column",
            gap: "5px",
            background: "none",
            border: "none",
            cursor: "pointer",
            outline: "none",
          }}
        >
          <span style={{ width: "24px", height: "2px", backgroundColor: "var(--gold-primary)" }} />
          <span style={{ width: "18px", height: "2px", backgroundColor: "var(--gold-primary)" }} />
          <span style={{ width: "24px", height: "2px", backgroundColor: "var(--gold-primary)" }} />
        </button>
      </div>

      {/* 4. Full-screen Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "var(--midnight-navy)",
            zIndex: 100000,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            style={{
              position: "absolute",
              top: "30px",
              right: "30px",
              background: "none",
              border: "none",
              color: "var(--gold-primary)",
              fontSize: "32px",
              cursor: "pointer",
            }}
          >
            ✦
          </button>

          {/* Background spinning Rub El Hizb star */}
          <div
            style={{
              position: "absolute",
              width: "300px",
              height: "300px",
              opacity: 0.05,
              animation: "spin 30s linear infinite",
              pointerEvents: "none",
              color: "var(--gold-primary)",
            }}
          >
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 0 L65 35 L100 50 L65 65 L50 100 L35 65 L0 50 L35 35 Z" />
              <path d="M50 0 L65 35 L100 50 L65 65 L50 100 L35 65 L0 50 L35 35 Z" transform="rotate(45 50 50)" />
            </svg>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className="arabic-text"
              style={{
                fontFamily: "var(--font-amiri), serif",
                fontSize: "28px",
                color: "var(--gold-light)",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <span></span>
              <span
                className="english-heading"
                style={{ fontSize: "14px", color: "var(--text-secondary)", letterSpacing: "0.2em", textTransform: "uppercase" }}
              >
                {link.en}
              </span>
            </a>
          ))}
        </div>
      )}
    </nav>
    </>
  );
}
