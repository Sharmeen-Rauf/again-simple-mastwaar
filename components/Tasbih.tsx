"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CalligraphyParticle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  opacity: number;
  size: number;
  text: string;
}

export default function Tasbih({ language }: { language: "en" | "ur" }) {
  const [count, setCount] = useState<number>(0);
  const [milestone, setMilestone] = useState<"none" | "subhanallah" | "alhamdulillah" | "allahuakbar">("none");
  const [spinActive, setSpinActive] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<CalligraphyParticle[]>([]);
  const particleIdRef = useRef<number>(0);

  // Restore session count on mount
  useEffect(() => {
    const savedCount = localStorage.getItem("sufi_tasbih_count");
    if (savedCount) {
      const timer = setTimeout(() => {
        setCount(parseInt(savedCount, 10));
      }, 50);
      return () => clearTimeout(timer);
    }
  }, []);

  // Particle Canvas Render Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const handleResize = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const update = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy -= 0.05; // Gentle float acceleration
        p.vx += Math.sin(p.y * 0.02 + p.id) * 0.15; // Soft waving float
        p.opacity -= 0.012; // Smooth fade

        if (p.opacity <= 0) {
          particles.splice(i, 1);
          continue;
        }

        // Draw Glow
        ctx.shadowColor = "rgba(240, 217, 160, 0.4)";
        ctx.shadowBlur = 10;

        ctx.fillStyle = `rgba(240, 217, 160, ${p.opacity})`;
        ctx.font = `bold ${p.size}px var(--font-amiri), serif`;
        ctx.textAlign = "center";
        ctx.fillText(p.text, p.x, p.y);
      }

      ctx.shadowBlur = 0; // Reset shadow

      animId = requestAnimationFrame(update);
    };
    animId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Spawn particle handler
  const spawnParticles = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2 + 30; // Centered inside teardrop

    const newParticles = [...particlesRef.current];

    // Spawn 3-5 calligraphy particles
    const spawnCount = Math.floor(Math.random() * 3) + 3;
    for (let i = 0; i < spawnCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 2 + 1;
      
      newParticles.push({
        id: particleIdRef.current++,
        x: centerX + Math.cos(angle) * 30,
        y: centerY + Math.sin(angle) * 30,
        vx: Math.cos(angle) * speed,
        vy: -speed - 1, // Drifts upward
        opacity: 0.9,
        size: Math.floor(Math.random() * 12) + 20, // Font sizes
        text: "اللہ",
      });
    }

    particlesRef.current = newParticles;
  };

  const handleIncrement = () => {
    if (spinActive) return;

    const nextCount = count + 1;

    if (nextCount > 99) {
      // Rotate 360 & Reset
      setSpinActive(true);
      setCount(0);
      localStorage.setItem("sufi_tasbih_count", "0");
      setTimeout(() => {
        setSpinActive(false);
      }, 1200);
      return;
    }

    setCount(nextCount);
    localStorage.setItem("sufi_tasbih_count", `${nextCount}`);
    spawnParticles();

    // Milestones checks
    if (nextCount === 33) {
      setMilestone("subhanallah");
    } else if (nextCount === 66) {
      setMilestone("alhamdulillah");
    } else if (nextCount === 99) {
      setMilestone("allahuakbar");
    }
  };

  const handleReset = () => {
    setSpinActive(true);
    setCount(0);
    localStorage.setItem("sufi_tasbih_count", "0");
    setMilestone("none");
    setTimeout(() => {
      setSpinActive(false);
    }, 1200);
  };

  const closeMilestone = () => {
    setMilestone("none");
  };

  // Generate 99 Beads parametric positions
  const totalBeads = 99;
  const beadsCoords = Array.from({ length: totalBeads }, (_, i) => {
    // Teardrop formula
    const t = (i / totalBeads) * Math.PI * 2;
    const scale = 140; // Size
    
    // pointed top at t = 0 or 2PI
    const x = scale * Math.sin(t) * Math.pow(Math.sin(t / 2), 1.2);
    const y = -scale * Math.cos(t) - 30; // Slightly shifted up
    
    return { x: x + 250, y: y + 250 }; // SVG center offset
  });

  return (
    <section
      id="tasbih"
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "var(--midnight-navy)",
        padding: "100px 5%",
        position: "relative",
        zIndex: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Canvas Particles */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Ornate Background Vignette */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle, rgba(5, 11, 26, 0) 40%, rgba(5, 11, 26, 0.9) 95%)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* Header Titles */}
      <div style={{ textAlign: "center", zIndex: 3, marginBottom: "40px" }}>
        <h3
          className="arabic-text"
          style={{
            fontSize: "clamp(36px, 6vw, 56px)",
            color: "var(--gold-primary)",
            lineHeight: "1.2",
            textShadow: "0 0 10px rgba(200, 169, 110, 0.3)",
          }}
        >
          ذِكْرُ اللَّه
        </h3>
        <p
          className="english-heading"
          style={{
            fontSize: "clamp(16px, 2.5vw, 24px)",
            color: "var(--text-secondary)",
            fontStyle: "italic",
            letterSpacing: "0.15em",
            marginTop: "8px",
          }}
        >
          {language === "en" ? "Remember Allah" : "ذکرِ الٰہی سے دل کو منور کریں"}
        </p>
      </div>

      {/* CENTRAL TASBIH STRUCTURE */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "500px",
          aspectRatio: "1/1",
          zIndex: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Clickable Overlay Trigger */}
        <div
          onClick={handleIncrement}
          style={{
            position: "absolute",
            width: "70%",
            height: "70%",
            borderRadius: "50%",
            cursor: "pointer",
            zIndex: 10,
          }}
          data-cursor="explore"
        />

        {/* SVG Prayer Loop */}
        <motion.svg
          viewBox="0 0 500 500"
          style={{
            width: "100%",
            height: "100%",
            filter: "drop-shadow(0 15px 35px rgba(0,0,0,0.8))",
          }}
          animate={{
            rotate: spinActive ? 360 : 0,
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
        >
          {/* Central Counter Display inside Teardrop */}
          <g transform="translate(0, 30)">
            {/* Soft inner glow circle */}
            <circle
              cx="250"
              cy="250"
              r="75"
              fill="rgba(5, 11, 26, 0.6)"
              stroke="rgba(200, 169, 110, 0.15)"
              strokeWidth="1.5"
            />
            {/* 99 Divider line ring */}
            <circle
              cx="250"
              cy="250"
              r="70"
              fill="none"
              stroke="var(--gold-dim)"
              strokeWidth="0.5"
              strokeDasharray="4,4"
              opacity="0.3"
            />
          </g>

          {/* Beads elements */}
          {beadsCoords.map((coord, idx) => {
            const isBeadActive = idx === (count - 1) % totalBeads;
            const isCompleted = idx < count;

            return (
              <g key={idx}>
                <motion.circle
                  cx={coord.x}
                  cy={coord.y}
                  r={isBeadActive ? 7.5 : 4.5}
                  fill={
                    isBeadActive
                      ? "var(--gold-light)"
                      : isCompleted
                      ? "var(--gold-primary)"
                      : "rgba(139, 110, 58, 0.25)"
                  }
                  stroke={isBeadActive ? "var(--gold-primary)" : "var(--gold-dim)"}
                  strokeWidth={isBeadActive ? 1.5 : 0.5}
                  animate={
                    isBeadActive
                      ? { scale: [1, 1.4, 1], filter: "drop-shadow(0 0 8px var(--gold-light))" }
                      : { scale: 1, filter: "none" }
                  }
                  transition={{ duration: 0.3 }}
                />
                {/* Tiny inner jewel reflection */}
                <circle
                  cx={coord.x - (isBeadActive ? 1.5 : 1)}
                  cy={coord.y - (isBeadActive ? 1.5 : 1)}
                  r={isBeadActive ? 2 : 1}
                  fill="white"
                  opacity={0.6}
                />
              </g>
            );
          })}
        </motion.svg>

        {/* Core Counter Numbers over SVG center */}
        <div
          style={{
            position: "absolute",
            top: "53%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 4,
          }}
        >
          <span
            className="english-heading"
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              color: "var(--gold-light)",
              lineHeight: "1.0",
              textShadow: "0 0 10px rgba(240, 217, 160, 0.4)",
            }}
          >
            {count}
          </span>
          <span
            className="meta-text"
            style={{
              fontSize: "10px",
              color: "var(--text-secondary)",
              letterSpacing: "0.2em",
              marginTop: "4px",
            }}
          >
            BEAD COUNT
          </span>
        </div>
      </div>

      {/* Manual Reset anchor */}
      <button
        onClick={handleReset}
        className="meta-text"
        style={{
          background: "none",
          border: "none",
          color: "var(--text-secondary)",
          cursor: "pointer",
          fontSize: "11px",
          letterSpacing: "0.15em",
          marginTop: "40px",
          zIndex: 5,
          opacity: 0.6,
          transition: "opacity 0.3s ease, color 0.3s ease",
          textDecoration: "underline",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-primary)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
      >
        Reset Counter
      </button>

      {/* MILESTONE CLINEMATIC MODAL OVERLAYS */}
      <AnimatePresence>
        {milestone !== "none" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMilestone}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(5, 11, 26, 0.95)",
              zIndex: 999999,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            {/* Cinematic light bloom */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{
                scale: [1, 30],
                opacity: [0.6, 0],
              }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              style={{
                position: "absolute",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background:
                  milestone === "alhamdulillah"
                    ? "radial-gradient(circle, var(--emerald-sufi) 0%, transparent 70%)"
                    : "radial-gradient(circle, var(--gold-primary) 0%, transparent 70%)",
              }}
            />

            {/* Massive Calligraphy overlay */}
            <motion.h2
              initial={{ scale: 0.8, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: -20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="arabic-text"
              style={{
                fontSize: "clamp(64px, 12vw, 140px)",
                color: milestone === "alhamdulillah" ? "#14cf8a" : "var(--gold-light)",
                textShadow:
                  milestone === "alhamdulillah"
                    ? "0 0 30px rgba(20, 207, 138, 0.4)"
                    : "0 0 35px rgba(240, 217, 160, 0.4)",
                lineHeight: "1.2",
                textAlign: "center",
                padding: "0 20px",
              }}
            >
              {milestone === "subhanallah" && "سُبْحَانَ اللَّهِ"}
              {milestone === "alhamdulillah" && "الْحَمْدُ لِلَّهِ"}
              {milestone === "allahuakbar" && "اللَّهُ أَكْبَرُ"}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 0.5 }}
              className="english-heading"
              style={{
                color: "var(--text-secondary)",
                fontSize: "14px",
                letterSpacing: "0.2em",
                marginTop: "20px",
                textTransform: "uppercase",
              }}
            >
              {milestone === "subhanallah" && "Glory be to Allah ✦ Click to continue"}
              {milestone === "alhamdulillah" && "Praise be to Allah ✦ Click to continue"}
              {milestone === "allahuakbar" && "Allah is the Greatest ✦ Click to continue"}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
