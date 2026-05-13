"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About({ language }: { language: "en" | "ur" }) {
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
      title: { en: "The Founding", ur: "بنیاد" },
      desc: {
        en: "Muhabbat Mission International is established in Chakwal, Pakistan, laying the foundation of divine love.",
        ur: "محبت مشن انٹرنیشنل کا قیام چکوال، پاکستان میں ہوا، جس نے الٰہی محبت کی بنیاد رکھی۔",
      },
    },
    {
      year: "2002",
      title: { en: "Global Expansion", ur: "بین الاقوامی وسعت" },
      desc: {
        en: "Spiritual and educational nodes expand to Europe, including hubs in the United Kingdom, Norway, and Germany.",
        ur: "روحانی اور تعلیمی مراکز کا دائرہ کار یورپ، بشمول برطانیہ، ناروے اور جرمنی تک بڑھایا گیا۔",
      },
    },
    {
      year: "2011",
      title: { en: "Divine Liturgies", ur: "تصانیف و تحریر" },
      desc: {
        en: "Silsila-e-Dilbar and Tafseer-e-Mastwaar are published, providing structured guidance on Sufi path coordinates.",
        ur: "سلسلہ دلبر اور تفسیر مستوار کی اشاعت ہوئی، جس نے تصوف کی راہ پر چلنے والوں کی رہنمائی کی۔",
      },
    },
    {
      year: "2018",
      title: { en: "Welfare Institutions", ur: "فلاحی ادارے" },
      desc: {
        en: "Over 35 educational institutes and centers are dedicated to offering free physical and spiritual shelter.",
        ur: "۳۵ سے زائد تعلیمی ادارے اور مراکز مفت جسمانی اور روحانی پناہ گاہ فراہم کرنے کے لیے وقف کیے گئے۔",
      },
    },
    {
      year: "2025",
      title: { en: "Darbar Sharif Gathering", ur: "عظیم الشان اجتماعات" },
      desc: {
        en: "Modern digital portals connect over 100K devotees worldwide with live digital spiritual circles and streams.",
        ur: "جدید ڈیجیٹل پورٹلز نے دنیا بھر میں ایک لاکھ سے زائد عقیدت مندوں کو لائیو روحانی حلقوں سے جوڑا۔",
      },
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
        محبت مکھدوم
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
            borderRadius: "4px",
            overflow: "hidden",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7)",
            border: "1px solid var(--gold-dim)",
            aspectRatio: "4/5",
            backgroundColor: "var(--deep-maroon)",
          }}
        >
          {/* Duotone Layer Image */}
          <img
            ref={imageRef}
            src="/sufi_portrait.png"
            alt="Makhdoom Mahmood Mastwaar Qalandar"
            className="portrait-image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.1) brightness(0.95)",
              mixBlendMode: "luminosity",
              opacity: 0.85,
              transition: "all 0.5s ease",
            }}
          />

          {/* Duotone Multiplier Cover (Maroon to Gold) */}
          <div
            className="duotone-overlay"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(to bottom, rgba(45, 10, 10, 0.3), rgba(200, 169, 110, 0.5))",
              mixBlendMode: "multiply",
              pointerEvents: "none",
              transition: "all 0.5s ease",
            }}
          />

          {/* Large Floating Calligraphy Name Overlay (12% Opacity) */}
          <div
            className="arabic-text"
            style={{
              position: "absolute",
              bottom: "15px",
              right: "20px",
              fontSize: "clamp(24px, 5vw, 64px)",
              color: "var(--gold-light)",
              opacity: 0.12,
              userSelect: "none",
              pointerEvents: "none",
              lineHeight: 1.1,
            }}
          >
            محمود مستوار قلندر
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
              color: "var(--gold-dim)",
              fontSize: "var(--t8)",
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
              fontSize: "var(--t3)",
              lineHeight: "1.15",
              fontWeight: "normal",
            }}
          >
            Makhdoom Mahmood Mastwaar Qalandar
          </h2>

          {/* Urdu Subheading (RTL Right Aligned) */}
          <h3
            className="urdu-text"
            style={{
              color: "var(--gold-light)",
              fontSize: "var(--t4)",
              fontWeight: "bold",
              textAlign: "right",
              margin: "10px 0",
            }}
          >
            مکھدوم محمود مستوار قلندرؒ
          </h3>

          {/* Bio Description (Each paragraph treated as a stagger line) */}
          <div
            className="english-body"
            style={{
              color: "var(--text-secondary)",
              fontSize: "15px",
              lineHeight: "1.7",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            <p className="bio-line">
              {language === "en"
                ? "Makhdoom Mahmood Mastwaar Qalandar founded Muhabbat Mission International in 1994, aiming to spread the universal message of unconditional divine love and spiritual wisdom."
                : "مکھدوم محمود مستوار قلندر نے ۱۹۹۴ میں محبت مشن انٹرنیشنل کی بنیاد رکھی، جس کا مقصد غیر مشروط الٰہی محبت اور روحانی حکمت کے آفاقی پیغام کو پھیلانا تھا۔"}
            </p>
            <p className="bio-line">
              {language === "en"
                ? "Rooted in the ancient heritage of Chakwal, Pakistan, the mission operates across multiple continents, offering sanctuary to seekers of Truth and love."
                : "پاکستان کے قدیم تاریخی قصبے چکوال کی جڑوں سے شروع ہونے والا یہ مشن اب متعدد براعظموں میں کام کر رہا ہے، جو سچائی اور محبت کے متلاشیوں کو پناہ گاہیں فراہم کرتا ہے۔"}
            </p>
          </div>

          {/* Sufi Circular Seal Badge */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px", marginTop: "20px" }}>
            <svg
              ref={sealRef}
              viewBox="0 0 80 80"
              width="72"
              height="72"
              style={{ filter: "drop-shadow(0 0 8px rgba(200, 169, 110, 0.4))" }}
            >
              <circle
                cx="40"
                cy="40"
                r="36"
                fill="none"
                stroke="var(--gold-primary)"
                strokeWidth="1.5"
                className="seal-stroke"
              />
              <circle
                cx="40"
                cy="40"
                r="31"
                fill="none"
                stroke="var(--gold-dim)"
                strokeWidth="0.5"
                strokeDasharray="2,2"
                className="seal-stroke"
              />
              {/* Calligraphy 'Muhabbat' inside Seal */}
              <text
                x="40"
                y="46"
                fill="var(--gold-primary)"
                fontSize="22"
                textAnchor="middle"
                className="arabic-text"
                style={{ fontFamily: "var(--font-amiri), serif", fontWeight: "bold" }}
              >
                محبت
              </text>
            </svg>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                className="english-heading"
                style={{ fontSize: "12px", color: "var(--gold-primary)", letterSpacing: "0.1em" }}
              >
                SEAL OF LOVE
              </span>
              <span
                className="meta-text"
                style={{ fontSize: "9px", color: "var(--text-muted)", letterSpacing: "0.1em" }}
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
                  className={language === "en" ? "english-heading" : "urdu-text"}
                  style={{
                    color: "var(--gold-light)",
                    fontSize: "18px",
                    lineHeight: "1.3",
                  }}
                >
                  {language === "en" ? card.title.en : card.title.ur}
                </h5>

                {/* Card description */}
                <p
                  className={language === "en" ? "english-body" : "urdu-text"}
                  style={{
                    color: "var(--text-muted)",
                    fontSize: language === "en" ? "13px" : "14px",
                    lineHeight: "1.6",
                  }}
                >
                  {language === "en" ? card.desc.en : card.desc.ur}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
