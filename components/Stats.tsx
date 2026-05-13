"use client";

import React, { useEffect, useRef, useState } from "react";

// Reusable CountUp component with exponential easing & typewriter suffix
function StatCounter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const [typedSuffix, setTypedSuffix] = useState("");
  const elementRef = useRef<HTMLDivElement>(null);
  const hasTriggeredRef = useRef(false);

  function startCountUp() {
    const duration = 1500; // 1.5s
    // eslint-disable-next-line react-hooks/purity
    const startTime = performance.now();

    // Exponential Easing: easeOutExpo
    const easeOutExpo = (t: number) => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);

      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Complete count and trigger typewriter suffix
        setCount(target);
        triggerTypewriter();
      }
    };

    requestAnimationFrame(animate);
  }

  function triggerTypewriter() {
    let currentText = "";
    let i = 0;
    const interval = setInterval(() => {
      if (i < suffix.length) {
        currentText += suffix[i];
        setTypedSuffix(currentText);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 150);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasTriggeredRef.current) {
          hasTriggeredRef.current = true;
          startCountUp();
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={elementRef}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
        position: "relative",
      }}
    >
      {/* ✦ Icon decoration */}
      <span style={{ color: "var(--gold-dim)", fontSize: "14px", marginBottom: "10px", opacity: 0.7 }}>✦</span>

      {/* Number Display */}
      <div
        className="english-heading"
        style={{
          fontSize: "clamp(64px, 7vw, 96px)",
          color: "var(--gold-primary)",
          fontWeight: "bold",
          lineHeight: "1.0",
          display: "flex",
          alignItems: "baseline",
          textShadow: "0 0 15px rgba(200, 169, 110, 0.25)",
        }}
      >
        <span>{count}</span>
        <span style={{ color: "var(--gold-light)", fontSize: "clamp(32px, 4vw, 56px)" }}>{typedSuffix}</span>
      </div>

      {/* Label Text */}
      <span
        className="meta-text"
        style={{
          color: "var(--text-secondary)",
          fontSize: "13px",
          letterSpacing: "0.2em",
          marginTop: "12px",
          fontWeight: 600,
        }}
      >
        {label}
      </span>

      {/* Animated divider below */}
      <div
        className="stat-divider"
        style={{
          width: "0%",
          height: "1px",
          backgroundColor: "var(--gold-dim)",
          marginTop: "20px",
          opacity: 0.5,
          transition: "width 1s cubic-bezier(0.25, 1, 0.5, 1) 0.5s",
        }}
      />
    </div>
  );
}

export default function Stats({ language }: { language: "en" | "ur" }) {
  const [stars, setStars] = useState<{ id: number; x: number; y: number; delay: string; duration: string; size: number }[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Generate star coordinates on mount to avoid hydration mismatch
    const generatedStars = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 3 + 2}s`,
      size: Math.random() > 0.8 ? 2 : 1,
    }));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStars(generatedStars);

    // Expand dividers when stats are in view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const dividers = sectionRef.current?.querySelectorAll(".stat-divider");
          dividers?.forEach((div) => {
            (div as HTMLElement).style.width = "60px";
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const statsList = [
    { target: 70, suffix: "+", label: { en: "YEARS OF DEDICATION", ur: "۷۰ سالہ کلمہ حق" } },
    { target: 37, suffix: "", label: { en: "INSTITUTIONS", ur: "۳۷ تعلیمی مراکز" } },
    { target: 25, suffix: "+", label: { en: "SUFI CENTERS", ur: "۲۵+ تصوف خانے" } },
    { target: 100, suffix: "K+", label: { en: "DEVOTEES WORLDWIDE", ur: "۱ لاکھ+ مریدین" } },
  ];

  return (
    <section
      ref={sectionRef}
      id="stats"
      style={{
        width: "100%",
        backgroundColor: "var(--midnight-navy)",
        padding: "100px 5%",
        position: "relative",
        zIndex: 4,
        overflow: "hidden",
      }}
    >
      {/* 1. Twinkling CSS Star field background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        {stars.map((star) => (
          <div
            key={star.id}
            style={{
              position: "absolute",
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: "var(--gold-light)",
              borderRadius: "50%",
              opacity: 0.2,
              animation: `twinkle ${star.duration} ease-in-out infinite alternate`,
              animationDelay: star.delay,
              boxShadow: star.size > 1 ? "0 0 6px var(--gold-light)" : "none",
            }}
          />
        ))}
      </div>

      {/* 2. Arabesque Pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0 C40 30 30 40 0 60 C30 80 40 90 60 120 C80 90 90 80 120 60 C90 40 80 30 60 0 Z' fill='none' stroke='%23C8A96E' stroke-width='0.5' stroke-opacity='0.05'/%3E%3C/svg%3E\")",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* 3. Baseline-Tension Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          borderBottom: "1px solid rgba(200, 169, 110, 0.2)",
          paddingBottom: "20px",
          marginBottom: "60px",
          position: "relative",
          zIndex: 3,
        }}
      >
        <h4
          className="english-heading"
          style={{
            fontSize: "var(--t4)",
            fontWeight: "normal",
            color: "var(--text-primary)",
          }}
        >
          {language === "en" ? "By the Numbers" : "شماریاتی خاکہ"}
        </h4>
        <h4
          className="arabic-text"
          style={{
            fontSize: "clamp(24px, 4vw, 40px)",
            fontWeight: "normal",
            color: "var(--gold-primary)",
          }}
        >
          {language === "en" ? "اعداد و شمار" : "اعداد و شمار"}
        </h4>
      </div>

      {/* 4. Stat Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "40px",
          position: "relative",
          zIndex: 3,
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {statsList.map((stat, idx) => (
          <StatCounter
            key={idx}
            target={stat.target}
            suffix={stat.suffix}
            label={language === "en" ? stat.label.en : stat.label.ur}
          />
        ))}
      </div>
    </section>
  );
}
