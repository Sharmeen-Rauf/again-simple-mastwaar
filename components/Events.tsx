"use client";

import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function TiltCard({ children, style, className }: { children: React.ReactNode; style?: React.CSSProperties; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(x, { damping: 20, stiffness: 150 });
  const rotateY = useSpring(y, { damping: 20, stiffness: 150 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Normalizing between -0.5 and 0.5
    const normX = mouseX / width - 0.5;
    const normY = mouseY / height - 0.5;

    x.set(-normY * 12); // Max 6 deg tilt on X
    y.set(normX * 12);  // Max 6 deg tilt on Y
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transition: "box-shadow 0.4s ease, border-color 0.4s ease",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Events({ language }: { language: "en" | "ur" }) {
  return (
    <section
      id="gallery"
      style={{
        width: "100%",
        backgroundColor: "var(--midnight-navy)",
        padding: "100px 5%",
        position: "relative",
        zIndex: 4,
        overflow: "hidden",
      }}
    >
      {/* Background Ornate Grid lines */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "linear-gradient(rgba(200, 169, 110, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(200, 169, 110, 0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid rgba(200, 169, 110, 0.2)", paddingBottom: "20px", marginBottom: "50px", position: "relative", zIndex: 2 }}>
        <h4 className="english-heading" style={{ fontSize: "var(--t4)", color: "var(--text-primary)" }}>
          {language === "en" ? "Sacred Gatherings" : "محافل اور روحانی اجتماعات"}
        </h4>
        <span className="meta-text" style={{ fontSize: "10px", color: "var(--text-muted)" }}>
          Featured Events ✦
        </span>
      </div>

      {/* Bento Grid: 2/3 and 1/3 layout */}
      <div
        className="bento-container"
        style={{
          display: "grid",
          gridTemplateColumns: "1.8fr 1fr",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* FEATURED CARD (2/3 width, tall height) */}
        <TiltCard
          className="bento-featured"
          style={{
            position: "relative",
            minHeight: "450px",
            borderRadius: "4px",
            border: "1px solid var(--gold-dim)",
            overflow: "hidden",
            boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
            cursor: "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          {/* Custom cursor target */}
          <div
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 5 }}
            data-cursor="explore"
          />

          {/* Background Image of gathering with gold particles */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: "url('/featured_gathering.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 1,
            }}
          />

          {/* Gold dust particle overlay animation */}
          <div
            className="gold-dust-particles"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: "radial-gradient(circle, rgba(240, 217, 160, 0.15) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              zIndex: 2,
              animation: "dustDrift 10s linear infinite",
              pointerEvents: "none",
            }}
          />

          {/* Vignette Overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(to top, rgba(5, 11, 26, 0.95) 0%, rgba(5, 11, 26, 0.4) 60%, transparent 100%)",
              zIndex: 3,
            }}
          />

          {/* Glassmorphism content layout card */}
          <div
            style={{
              position: "relative",
              zIndex: 4,
              padding: "40px",
              transform: "translateZ(20px)",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {/* Parallel Dates Block */}
            <div
              className="meta-text"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                alignItems: "center",
                fontSize: "11px",
                color: "var(--gold-primary)",
              }}
            >
              <span style={{ fontWeight: "bold" }}>12 Rabi ul Awwal</span>
              <span style={{ color: "var(--gold-dim)" }}>•</span>
              <span>Oct 30, 2025</span>
              <span style={{ color: "var(--gold-dim)" }}>•</span>
              <span className="arabic-text" style={{ fontSize: "12px", transform: "translateY(-1px)" }}>
                ۳۰ اکتوبر
              </span>
            </div>

            {/* Title */}
            <h3
              className="english-heading"
              style={{
                fontSize: "clamp(24px, 4vw, 36px)",
                color: "var(--text-primary)",
                fontWeight: "normal",
                lineHeight: "1.1",
              }}
            >
              {language === "en"
                ? "Annual Milad-un-Nabi Darbar"
                : "سالانہ میلاد النبیؐ دربار شریف"}
            </h3>

            {/* Description */}
            <p
              className="english-body"
              style={{
                color: "var(--text-muted)",
                fontSize: "14px",
                lineHeight: "1.6",
                maxWidth: "600px",
              }}
            >
              {language === "en"
                ? "Join our central congregation celebrating divine mercy. A transcendent assembly of classical Qawwali recitation, illuminated spiritual paths, and direct discourses."
                : "رحمتِ الٰہی کے جشن میں شرکت کریں۔ روایتی قوالی اور مکھدوم محمود کے روحانی ارشادات پر مشتمل ایک عظیم الشان اجتماع۔"}
            </p>

            {/* Tracing Perimeter CTA Button */}
            <div
              style={{
                marginTop: "10px",
                position: "relative",
                width: "180px",
                height: "44px",
                cursor: "pointer",
              }}
              className="tracing-btn"
            >
              <svg
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                <rect
                  x="1"
                  y="1"
                  width="178"
                  height="42"
                  fill="none"
                  stroke="var(--gold-primary)"
                  strokeWidth="1"
                  rx="22"
                  className="btn-outline-rect"
                />
              </svg>
              <div
                className="english-heading"
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "11px",
                  color: "var(--gold-light)",
                  letterSpacing: "0.2em",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                {language === "en" ? "Enter Darbar ✦" : "دربار میں داخل ہوں"}
              </div>
            </div>
          </div>
        </TiltCard>

        {/* SECONDARY SIDE PANEL (1/3 width, stacked cards) */}
        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          {/* Secondary Card 1 */}
          <TiltCard
            style={{
              flex: 1,
              backgroundColor: "rgba(5, 11, 26, 0.7)",
              backdropFilter: "blur(12px)",
              border: "1px solid var(--gold-dim)",
              borderRadius: "4px",
              padding: "30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "210px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
              position: "relative",
            }}
          >
            <div
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 5 }}
              data-cursor="explore"
            />
            {/* Top row with Date & Icon */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", transform: "translateZ(10px)" }}>
              <span className="meta-text" style={{ color: "var(--gold-primary)", fontSize: "10px" }}>
                15 September 2025
              </span>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--gold-primary)" strokeWidth="1">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2 L12 22 M2 12 L22 12" />
                <path d="M5 5 L19 19 M5 19 L19 5" />
              </svg>
            </div>

            {/* Bottom Content */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", transform: "translateZ(15px)" }}>
              <h4 className="english-heading" style={{ color: "var(--gold-light)", fontSize: "18px" }}>
                {language === "en" ? "Oslo Sufi Assembly" : "اوسلو صوفی اجتماع"}
              </h4>
              <p className="english-body" style={{ color: "var(--text-muted)", fontSize: "12px", lineHeight: "1.5" }}>
                {language === "en"
                  ? "Norway gathering bringing sacred light and chanting meditation to northern Europe seekers."
                  : "ناروے کا اجتماع جس کا مقصد شمالی یورپ کے متلاشیوں تک کلمہ حق پہنچانا ہے۔"}
              </p>
            </div>
          </TiltCard>

          {/* Secondary Card 2 */}
          <TiltCard
            style={{
              flex: 1,
              backgroundColor: "rgba(5, 11, 26, 0.7)",
              backdropFilter: "blur(12px)",
              border: "1px solid var(--gold-dim)",
              borderRadius: "4px",
              padding: "30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "210px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
              position: "relative",
            }}
          >
            <div
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 5 }}
              data-cursor="explore"
            />
            {/* Top row with Date & Icon */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", transform: "translateZ(10px)" }}>
              <span className="meta-text" style={{ color: "var(--gold-primary)", fontSize: "10px" }}>
                24 December 2025
              </span>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--gold-primary)" strokeWidth="1">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
              </svg>
            </div>

            {/* Bottom Content */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", transform: "translateZ(15px)" }}>
              <h4 className="english-heading" style={{ color: "var(--gold-light)", fontSize: "18px" }}>
                {language === "en" ? "London Spiritual Circle" : "لندن حلقہ ذکر"}
              </h4>
              <p className="english-body" style={{ color: "var(--text-muted)", fontSize: "12px", lineHeight: "1.5" }}>
                {language === "en"
                  ? "An evening of meditation, classical qawwali, and universal wisdom in central London."
                  : "وسطی لندن میں مراقبہ، روایتی قوالی اور عالمگیر حکمت کی ایک شام۔"}
              </p>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
