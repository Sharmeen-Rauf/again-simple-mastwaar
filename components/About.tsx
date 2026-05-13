"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const sealRef = useRef<SVGSVGElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // 1. Ken Burns Zoom triggered by scroll scrub
    if (imageRef.current && sectionRef.current) {
      gsap.fromTo(
        imageRef.current,
        { scale: 1.0 },
        {
          scale: 1.12,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }

    // 2. Line-by-line bio stagger fade-in
    if (bioRef.current) {
      const bioLines = bioRef.current.querySelectorAll(".bio-line");
      gsap.fromTo(
        bioLines,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bioRef.current,
            start: "top 80%",
          },
        }
      );
    }

    // 3. Seal Drawing Traces
    if (sealRef.current) {
      const paths = sealRef.current.querySelectorAll(".seal-stroke");
      paths.forEach((pathNode) => {
        const path = pathNode as SVGPathElement;
        const length = path.getTotalLength();
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;
      });

      gsap.to(paths, {
        strokeDashoffset: 0,
        duration: 2.0,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sealRef.current,
          start: "top 80%",
        },
      });
    }
  }, []);

  const milestones = [
    {
      year: "1994",
      title: "The Founding",
      desc: "Muhabbat Mission International is established in Chakwal, Pakistan, laying the foundation of divine love.",
    },
    {
      year: "2002",
      title: "Global Expansion",
      desc: "Spiritual and educational nodes expand to Europe, including hubs in the United Kingdom, Norway, and Germany.",
    },
    {
      year: "2011",
      title: "Divine Liturgies",
      desc: "Silsila-e-Dilbar and Tafseer-e-Mastwaar are published, providing structured guidance on Sufi path coordinates.",
    },
    {
      year: "2018",
      title: "Welfare Institutions",
      desc: "Over 35 educational institutes and centers are dedicated to offering free physical and spiritual shelter.",
    },
    {
      year: "2025",
      title: "Darbar Sharif Gathering",
      desc: "Modern digital portals connect over 100K devotees worldwide with live digital spiritual circles and streams.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{
        width: "100%",
        backgroundColor: "var(--midnight-navy)",
        padding: "120px 5%",
        position: "relative",
        zIndex: 4,
        overflow: "hidden",
      }}
    >
      {/* Background Subtle Calligraphy */}
      <div
        className="arabic-text"
        style={{
          position: "absolute",
          top: "10%",
          left: "-5%",
          fontSize: "12vw",
          color: "rgba(200, 169, 110, 0.02)",
          userSelect: "none",
          pointerEvents: "none",
          lineHeight: "1",
        }}
      >
        Love Makhdoom
      </div>

      {/* Grid: Asymmetric 60/40 Split */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr",
          gap: "8%",
          alignItems: "center",
          maxWidth: "1300px",
          margin: "0 auto",
        }}
        className="about-split-grid"
      >
        {/* LEFT (60% Width Container) - Portrait */}
        <div
          ref={portraitRef}
          className="portrait-container"
          data-cursor="eye"
          style={{
            position: "relative",
            width: "100%",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 25px 50px -12px rgba(255, 20, 147, 0.25)",
            border: "1px solid var(--gold-primary)",
            aspectRatio: "4/5",
            backgroundColor: "var(--midnight-navy)",
          }}
        >
          {/* Duotone Layer Image */}
          <img
            ref={imageRef}
            src="/peer-saab.png"
            alt="Makhdoom Mahmood Mastwaar Qalandar"
            className="portrait-image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.1) brightness(0.95)",
              mixBlendMode: "normal",
              opacity: 0.9,
              transition: "all 0.5s ease",
            }}
          />

          {/* Duotone Multiplier Cover (Cyber Pink to Cyan) */}
          <div
            className="duotone-overlay"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(to bottom, rgba(255, 20, 147, 0.25), rgba(0, 168, 232, 0.35))",
              mixBlendMode: "color",
              pointerEvents: "none",
              transition: "all 0.5s ease",
            }}
          />

          {/* Large Floating Calligraphy Name Overlay */}
          <div
            className="arabic-text"
            style={{
              position: "absolute",
              bottom: "15px",
              right: "20px",
              fontSize: "clamp(24px, 5vw, 64px)",
              color: "var(--gold-light)",
              opacity: 0.2,
              userSelect: "none",
              pointerEvents: "none",
              lineHeight: 1.1,
              textShadow: "0 0 15px rgba(255, 20, 147, 0.6)",
            }}
          >
            Mahmood Mastwaar Qalandar
          </div>
        </div>

        {/* RIGHT (40% Width Container) - Biography */}
        <div
          ref={bioRef}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {/* Eyebrow */}
          <span
            className="meta-text"
            style={{
              color: "var(--copper-accent)",
              fontSize: "12px",
              fontWeight: "bold",
              letterSpacing: "0.25em",
            }}
          >
            FOUNDED 1994
          </span>

          {/* English Headline */}
          <h2
            className="english-heading"
            style={{
              color: "var(--text-primary)",
              fontSize: "clamp(28px, 4vw, 42px)",
              lineHeight: "1.15",
              fontWeight: "bold",
              textShadow: "0 0 20px rgba(0, 168, 232, 0.4)",
            }}
          >
            Makhdoom Mahmood Mastwaar Qalandar
          </h2>

          {/* Urdu Subheading */}
          <h3
            className="english-heading"
            style={{
              color: "var(--gold-light)",
              fontSize: "24px",
              fontWeight: "bold",
              textAlign: "right",
              margin: "10px 0",
              textShadow: "0 0 10px rgba(255, 20, 147, 0.5)",
            }}
          >
            Makhdoom Mahmood Mastwaar Qalandarؒ
          </h3>

          {/* Bio Description */}
          <div
            className="english-body"
            style={{
              color: "var(--text-secondary)",
              fontSize: "16px",
              lineHeight: "1.7",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            <p className="bio-line">
              {"Makhdoom Mahmood Mastwaar Qalandar founded Muhabbat Mission International in 1994, aiming to spread the universal message of unconditional divine love and spiritual wisdom."}
            </p>
            <p className="bio-line">
              {"Rooted in the ancient heritage of Chakwal, Pakistan, the mission operates across multiple continents, offering sanctuary to seekers of Truth and love."}
            </p>
          </div>

          {/* Sufi Circular Seal Badge */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px", marginTop: "20px" }}>
            <svg
              ref={sealRef}
              viewBox="0 0 80 80"
              width="72"
              height="72"
              style={{ filter: "drop-shadow(0 0 12px rgba(0, 200, 83, 0.6))" }}
            >
              <circle
                cx="40"
                cy="40"
                r="36"
                fill="none"
                stroke="var(--emerald-glow)"
                strokeWidth="2"
                className="seal-stroke"
              />
              <circle
                cx="40"
                cy="40"
                r="31"
                fill="none"
                stroke="var(--gold-primary)"
                strokeWidth="1"
                strokeDasharray="4,4"
                className="seal-stroke"
              />
              {/* Calligraphy 'Muhabbat' inside Seal */}
              <text
                x="40"
                y="46"
                fill="var(--gold-light)"
                fontSize="22"
                textAnchor="middle"
                className="arabic-text"
                style={{ fontFamily: "var(--font-amiri), serif", fontWeight: "bold" }}
              >
                Muhabbat
              </text>
            </svg>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                className="english-heading"
                style={{ fontSize: "13px", color: "var(--gold-primary)", letterSpacing: "0.1em", fontWeight: "bold" }}
              >
                SEAL OF LOVE
              </span>
              <span
                className="meta-text"
                style={{ fontSize: "10px", color: "var(--copper-accent)", letterSpacing: "0.1em", fontWeight: "bold" }}
              >
                SACRED COVENANT
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Drag-Scroll Milestone Timeline */}
      <div
        style={{
          marginTop: "100px",
          width: "100%",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "40px" }}>
          <h4 className="english-heading" style={{ color: "var(--gold-primary)", fontSize: "20px", textTransform: "uppercase" }}>
            The Historical Journey
          </h4>
          <span className="meta-text" style={{ fontSize: "10px", color: "var(--text-muted)" }}>
            Drag to Navigate ✦
          </span>
        </div>

        {/* Inertia Draggable Track */}
        <div
          ref={timelineRef}
          style={{
            overflow: "hidden",
            width: "100%",
            cursor: "grab",
          }}
          data-cursor="explore"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -600 }}
            dragElastic={0.15}
            dragTransition={{ power: 0.25, timeConstant: 180 }}
            whileTap={{ cursor: "grabbing" }}
            style={{
              display: "flex",
              gap: "40px",
              paddingBottom: "30px",
              width: "max-content",
            }}
          >
            {milestones.map((card, idx) => (
              <div
                key={idx}
                style={{
                  width: "320px",
                  backgroundColor: "rgba(5, 11, 26, 0.6)",
                  border: "1px solid var(--gold-dim)",
                  borderRadius: "4px",
                  padding: "30px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                  position: "relative",
                }}
              >
                {/* Year Marker */}
                <span
                  className="english-heading"
                  style={{
                    color: "var(--gold-primary)",
                    fontSize: "48px",
                    lineHeight: "1",
                    fontWeight: "bold",
                    textShadow: "0 0 10px rgba(200, 169, 110, 0.2)",
                  }}
                >
                  {card.year}
                </span>

                {/* Connecting Dotted Line */}
                <div
                  style={{
                    position: "absolute",
                    top: "35px",
                    right: "-40px",
                    width: "40px",
                    height: "1px",
                    borderTop: "1.5px dotted var(--gold-dim)",
                    display: idx === milestones.length - 1 ? "none" : "block",
                  }}
                />

                {/* Mini SVG Islamic Ornament */}
                <svg viewBox="0 0 24 24" width="20" height="20" fill="var(--gold-dim)" opacity="0.6">
                  <path d="M12 0 L15 9 L24 12 L15 15 L12 24 L9 15 L0 12 L9 9 Z" />
                </svg>

                {/* Event Title */}
                <h5
                  className={"english-heading"}
                  style={{
                    color: "var(--gold-light)",
                    fontSize: "18px",
                    lineHeight: "1.3",
                  }}
                >
                  {card.title}
                </h5>

                {/* Card description */}
                <p
                  className={"english-body"}
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "13px"}}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
