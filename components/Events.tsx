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

export default function Events() {
  return (
    <section
      id="events"
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
          backgroundImage: "linear-gradient(rgba(0, 168, 232, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 168, 232, 0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid rgba(255, 20, 147, 0.3)", paddingBottom: "20px", marginBottom: "50px", position: "relative", zIndex: 2 }}>
        <h4 className="english-heading" style={{ fontSize: "var(--t4)", color: "var(--text-primary)" }}>
          {"Sacred Gatherings & Ecstatic Circles"}
        </h4>
        <span className="meta-text" style={{ fontSize: "10px", color: "var(--text-secondary)" }}>
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
            minHeight: "480px",
            borderRadius: "8px",
            border: "1px solid var(--gold-dim)",
            overflow: "hidden",
            boxShadow: "0 20px 40px rgba(0,0,0,0.8)",
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

          {/* Background Image of gathering */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: "url('/32nd-ors-peer-khaki-shah-ra-2025.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "contrast(1.1) brightness(0.9)",
              zIndex: 1,
            }}
          />

          {/* Pink Cyber Gradient Overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(to top, rgba(4, 8, 18, 0.98) 0%, rgba(15, 23, 42, 0.6) 50%, rgba(255, 20, 147, 0.2) 100%)",
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
              <span style={{ fontWeight: "bold", color: "var(--gold-light)" }}>32nd Annual Urs</span>
              <span style={{ color: "var(--text-secondary)" }}>•</span>
              <span style={{ color: "var(--text-primary)" }}>Chakwal Sharif</span>
              <span style={{ color: "var(--text-secondary)" }}>•</span>
              <span className="arabic-text" style={{ fontSize: "14px", color: "var(--gold-light)", transform: "translateY(-1px)" }}>
                عرس مبارک
              </span>
            </div>

            {/* Title */}
            <h3
              className="english-heading"
              style={{
                fontSize: "clamp(24px, 4vw, 38px)",
                color: "var(--text-primary)",
                fontWeight: "bold",
                lineHeight: "1.1",
                textShadow: "0 0 15px rgba(255, 20, 147, 0.5)",
              }}
            >
              {"Urs Peer Khaki Shah (R.A)"}
            </h3>

            {/* Description */}
            <p
              className="english-body"
              style={{
                color: "var(--text-muted)",
                fontSize: "15px",
                lineHeight: "1.6",
                maxWidth: "650px",
              }}
            >
              {"Join our central congregation celebrating the luminous life and spiritual heritage of Peer Khaki Shah. A transcendent assembly featuring classical ecstatic Qawwali, silent meditations, and divine wisdom."}
            </p>

            {/* Tracing CTA Button */}
            <div
              style={{
                marginTop: "10px",
                position: "relative",
                width: "200px",
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
                  width="198"
                  height="42"
                  fill="none"
                  stroke="var(--gold-primary)"
                  strokeWidth="1.5"
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
                  fontSize: "12px",
                  color: "var(--gold-light)",
                  letterSpacing: "0.2em",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                {"Explore Sanctuary ✦"}
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
              borderRadius: "8px",
              border: "1px solid var(--gold-dim)",
              overflow: "hidden",
              padding: "30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "225px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
              position: "relative",
            }}
          >
            <div
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 5 }}
              data-cursor="explore"
            />
            {/* Background Image */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: "url('/milad-march-06sep2025-ft-img-400x500.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.4,
                zIndex: 1,
              }}
            />
            {/* Dark Cyber Vignette */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "linear-gradient(to top, rgba(4,8,18,0.95) 0%, rgba(15,23,42,0.7) 100%)",
                zIndex: 2,
              }}
            />

            {/* Top row with Date & Icon */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative", zIndex: 3, transform: "translateZ(10px)" }}>
              <span className="meta-text" style={{ color: "var(--copper-accent)", fontSize: "10px", fontWeight: "bold" }}>
                06 September 2025
              </span>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--gold-primary)" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2 L12 22 M2 12 L22 12" />
                <path d="M5 5 L19 19 M5 19 L19 5" />
              </svg>
            </div>

            {/* Bottom Content */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", position: "relative", zIndex: 3, transform: "translateZ(15px)" }}>
              <h4 className="english-heading" style={{ color: "var(--gold-light)", fontSize: "20px", fontWeight: "bold" }}>
                {"London Milad March"}
              </h4>
              <p className="english-body" style={{ color: "var(--text-muted)", fontSize: "13px", lineHeight: "1.5" }}>
                {"A magnificent spiritual parade through Ilford, London, radiating peace, ecstatic chanting, and global brotherhood."}
              </p>
            </div>
          </TiltCard>

          {/* Secondary Card 2 */}
          <TiltCard
            style={{
              flex: 1,
              borderRadius: "8px",
              border: "1px solid var(--gold-dim)",
              overflow: "hidden",
              padding: "30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "225px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
              position: "relative",
            }}
          >
            <div
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 5 }}
              data-cursor="explore"
            />
            {/* Background Image */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: "url('/75th-Urs-Imam-Hussain-RA-upcoming-jul2025-400x500.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.4,
                zIndex: 1,
              }}
            />
            {/* Dark Cyber Vignette */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "linear-gradient(to top, rgba(4,8,18,0.95) 0%, rgba(15,23,42,0.7) 100%)",
                zIndex: 2,
              }}
            />

            {/* Top row with Date & Icon */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative", zIndex: 3, transform: "translateZ(10px)" }}>
              <span className="meta-text" style={{ color: "var(--copper-accent)", fontSize: "10px", fontWeight: "bold" }}>
                July 2025
              </span>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--gold-primary)" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
              </svg>
            </div>

            {/* Bottom Content */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", position: "relative", zIndex: 3, transform: "translateZ(15px)" }}>
              <h4 className="english-heading" style={{ color: "var(--gold-light)", fontSize: "20px", fontWeight: "bold" }}>
                {"75th Urs Imam Hussain (R.A)"}
              </h4>
              <p className="english-body" style={{ color: "var(--text-muted)", fontSize: "13px", lineHeight: "1.5" }}>
                {"An extraordinary gathering commemorating the supreme sacrifice, unwavering devotion, and eternal truth of Karbala."}
              </p>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
