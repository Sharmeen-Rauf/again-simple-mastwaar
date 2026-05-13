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

        {/* RIGHT (40% Width Container) - Introduction & Books */}
        <div
          ref={bioRef}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
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
            Who is Makhdoom Mahmood Mastwaar Qalandar?
          </h2>

          <h3
            className="english-heading"
            style={{
              color: "var(--gold-primary)",
              fontSize: "24px",
              fontWeight: "bold",
              textAlign: "right",
              margin: "5px 0",
              textShadow: "0 0 10px rgba(255, 20, 147, 0.5)",
            }}
          >
            Makhdoom Mahmood Mastwaar Qalandarؒ
          </h3>

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
              Makhdoom Mahmood Mastwaar Qalandar, the visionary behind Muhabbat Mission International, has dedicated his life to a profound mission—a mission that echoes the timeless teachings of the Prophet Muhammad ﷺ. At the heart of this mission lie the core principles of love for Allah, love for the Prophet Muhammad ﷺ, and love for humanity.
            </p>
            <p className="bio-line">
              He is a revered spiritual leader, a distinguished poet, a prolific author, and a renowned speaker whose eloquence and profound knowledge have captivated countless individuals.
            </p>
          </div>

          {/* Oceans of Wisdom - Books List */}
          <div style={{ marginTop: "10px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <h4 className="english-heading" style={{ fontSize: "20px", color: "var(--gold-primary)", fontWeight: "bold" }}>
              Oceans of Wisdom (Notable Treatises)
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { title: "Tafseer e Mastwaar", desc: "An exploration of several Quranic verses, offering deep spiritual insights." },
                { title: "Makeene Dil", desc: "A heartfelt narrative based on the love and teachings of the Prophet Muhammad ﷺ." },
                { title: "Asrar e Mastwaar", desc: "A translation of several excerpts from Hazrat Rumi's 'Masnavi,' consisting of spiritual and moral lessons interwoven with Sufi metaphors." },
                { title: "Azane Qalandar", desc: "Another remarkable collection of his divine poetry." },
                { title: "Maqame Mahmood", desc: "A beautiful collection of poetry centered on divine love." },
                { title: "Silsila e Dilbar", desc: "A guide for seekers, presenting life lessons of Tasawwuf including patience (sabr), loyalty (wafa), self-purification (tazkiyae nafs), love (ishq), and trust in Allah (tawakkul)." },
              ].map((book, i) => (
                <li key={i} style={{ display: "flex", alignItems: "baseline", gap: "10px", fontSize: "15px" }}>
                  <span style={{ color: "var(--gold-primary)" }}>✦</span>
                  <div>
                    <a href="#publications" className="english-heading" style={{ fontWeight: "bold", color: "var(--copper-accent)", textDecoration: "underline" }}>
                      {book.title}
                    </a>
                    <span style={{ color: "var(--text-muted)", marginLeft: "8px" }}>— {book.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: "10px", padding: "12px 20px", backgroundColor: "rgba(2, 132, 199, 0.1)", borderRadius: "6px", borderLeft: "4px solid var(--gold-primary)" }}>
              <a href="#publications" style={{ color: "var(--text-primary)", fontWeight: "bold", fontSize: "14px", textDecoration: "none" }}>
                To read Makhdoom Mahmood Mastwaar Qalandar&apos;s books, please <span style={{ color: "var(--gold-primary)", textDecoration: "underline" }}>click here</span> to visit the Sacred Literature Shelf.
              </a>
            </div>
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
              <circle cx="40" cy="40" r="36" fill="none" stroke="var(--emerald-glow)" strokeWidth="2" className="seal-stroke" />
              <circle cx="40" cy="40" r="31" fill="none" stroke="var(--gold-primary)" strokeWidth="1" strokeDasharray="4,4" className="seal-stroke" />
              <text x="40" y="46" fill="var(--gold-light)" fontSize="22" textAnchor="middle" className="arabic-text" style={{ fontFamily: "var(--font-amiri), serif", fontWeight: "bold" }}>
                Muhabbat
              </text>
            </svg>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span className="english-heading" style={{ fontSize: "13px", color: "var(--gold-primary)", letterSpacing: "0.1em", fontWeight: "bold" }}>
                SEAL OF LOVE
              </span>
              <span className="meta-text" style={{ fontSize: "10px", color: "var(--copper-accent)", letterSpacing: "0.1em", fontWeight: "bold" }}>
                SACRED COVENANT
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Golden Highlight Quote Box */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "80px auto",
          padding: "40px 60px",
          backgroundColor: "var(--card-bg)",
          border: "2px solid var(--gold-primary)",
          borderRadius: "12px",
          boxShadow: "0 20px 40px rgba(255, 20, 147, 0.2)",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <div style={{ fontSize: "36px", color: "var(--gold-primary)", lineHeight: "0.5" }}>✦</div>
        <blockquote className="english-heading" style={{ fontSize: "clamp(20px, 2.5vw, 32px)", color: "var(--gold-primary)", fontStyle: "italic", fontWeight: "bold" }}>
          &ldquo;O Seeker of Truth! Become so madly in love that every part of your being begins to reflect the image of your Beloved.&rdquo;
        </blockquote>
        <div className="english-heading" style={{ fontSize: "clamp(18px, 2vw, 24px)", color: "var(--text-secondary)", fontWeight: "bold" }}>
          &ldquo;Ae Talib-e-Haq! Muhabbat o ishq mein yun deewana ban ja ke tera ang ang yaar ka naqsha paish karne lage.&rdquo;
        </div>
        <div className="meta-text" style={{ fontSize: "12px", color: "var(--text-muted)" }}>
          — Makhdoom Mahmood Mastwaar Qalandar
        </div>
      </div>

      {/* Comprehensive Biographies Section */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "80px" }}>
        
        {/* BIOGRAPHY 1: Makhdoom Sahib */}
        <div style={{ backgroundColor: "rgba(255, 255, 255, 0.75)", border: "1px solid var(--border-color)", borderRadius: "12px", padding: "50px", boxShadow: "0 15px 35px rgba(2, 132, 199, 0.15)" }}>
          <h3 className="english-heading" style={{ fontSize: "32px", color: "var(--text-primary)", fontWeight: "bold", borderBottom: "2px solid var(--gold-primary)", paddingBottom: "16px", marginBottom: "30px" }}>
            Biography: Makhdoom Mahmood Mastwaar Qalandar
          </h3>
          <div className="english-body" style={{ fontSize: "16px", lineHeight: "1.8", color: "var(--text-muted)", display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              Shaykh Syed Mahmood ul Hassan Shah Khaki, famously known as Makhdoom Mahmood Mastwaar Qalandar, was born in Chakwal, Pakistan. He is a distinguished Sufi master and spiritual guide of Syed lineage, tracing his ancestry back to Hazrat Dawood Shah Khaki, a renowned Sufi mystic of Kashmir.
            </p>
            <p>
              The arrival of Makhdoom Sahib had been foretold by pious personalities. Syed Abdul Latif Kazmi, famously known as Imam Bari Sarkar, a revered 17th-century Sufi ascetic, appeared in the dream of his father, Syed Rasool Shah Khaki. In this divine encounter, Imam Bari Sarkar announced the birth of a son and named him &ldquo;Mahmood.&rdquo; Thus, he was named Mahmood ul Hassan Shah Khaki, later globally recognized as Makhdoom Mahmood Mastwaar Qalandar.
            </p>
            <p>
              Makhdoom Sahib received his spiritual training from his father and Shaykh, Syed Rasool Shah Khaki. Displaying a natural inclination toward spirituality from an early age, he demonstrated a deep thirst for knowledge and sincere devotion to the path of enlightenment.
            </p>
            <p>
              Syed Rasool Shah Khaki appointed him as Vicegerent, entrusting him with the leadership of the Sufi Orders. He is affiliated with the Qadriya, Makhdoomia, and Qalandariya orders. The Qadriya order connects to Hazrat Shaykh Abdul Qadir Jilani (Ghaus e Azam), while the Makhdoomia order traces back to Syed Jalaluddin Bukhari (Makhdoom Jahanian Jahangasht). Furthermore, Makhdoom Sahib has been spiritually blessed with the Qalandariya order directly by Imam Bari Sarkar.
            </p>
          </div>
        </div>

        {/* BIOGRAPHY 2: Syed Rasool Shah Khaki */}
        <div style={{ backgroundColor: "rgba(240, 249, 255, 0.8)", border: "1px solid var(--border-color)", borderRadius: "12px", padding: "50px", boxShadow: "0 15px 35px rgba(2, 132, 199, 0.2)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "2px solid var(--gold-primary)", paddingBottom: "16px", marginBottom: "30px" }}>
            <h3 className="english-heading" style={{ fontSize: "32px", color: "var(--text-primary)", fontWeight: "bold" }}>
              Biography: Syed Rasool Shah Khaki <span style={{ color: "var(--gold-primary)" }}>رحمة الله عليه</span>
            </h3>
            <span className="meta-text" style={{ fontSize: "11px", color: "var(--text-secondary)", fontWeight: "bold" }}>SPIRITUAL LINEAGE</span>
          </div>
          <div className="english-body" style={{ fontSize: "16px", lineHeight: "1.8", color: "var(--text-muted)", display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              Syed Rasool Shah Khaki was born on the 9th of Ramadan, on a Monday during Zuhar time, in Kupwara near Lolab, Kashmir. Born into a distinguished Syed family tracing back to Shaykh Dawood Shah Khaki, his father Pir Musa Shah was a revered Sufi mystic. He received his early education within the Makhdoomia (Suharwardiya) order under his grandfather Pir Abdullah Shah.
            </p>
            <p>
              At a young age, Syed Rasool Shah Khaki entered a state of jazb (profound spiritual absorption and divine attraction). Driven by this state, he embarked on a magnificent journey across the subcontinent visiting sacred sites in Delhi, Bombay, Amritsar, Bareilly Sharif, Lahore, Rawalpindi, Murree, and finally the dense, uninhabited jungle of Makhdum Pur Sharif.
            </p>
            <p>
              In Murree, he met Khwaja Qasim Mohrvi who honored him with the Khilafat of the Naqshbandi order. Near Pindi, he journeyed to Golra Sharif where he met the illustrious saint Pir Mehr Ali Shah, deeply blessed by his spiritual presence. In Bombay, he encountered Naqeeb ul Ashraaf Syed Ibrahim Saif ud Din Gilani (Sajjada Nasheen of Baghdad Shareef), who bestowed upon him the Khilafat of the Qadriya order, praying for him to transition from jazb to serve as a beacon for seekers.
            </p>
            <p>
              A prolific writer on Tasawwuf, his renowned works include Misbahul Hidayat, Asrar e Ramooz e Tareeqat, Ramooz e Haqeeqat, Zia ul Quloob, and Kashkol e Qalandari Dar Daman e Sikandari. Under his guidance, the dense jungle of Makhdum Pur Sharif transformed into a flourishing global sanctuary of divine love.
            </p>
            
            {/* Core Teachings Quotes */}
            <div style={{ marginTop: "20px", padding: "24px 32px", backgroundColor: "#FFFFFF", borderRadius: "8px", borderLeft: "4px solid var(--gold-primary)", boxShadow: "0 5px 15px rgba(0,0,0,0.05)" }}>
              <h5 className="english-heading" style={{ fontSize: "18px", color: "var(--gold-primary)", fontWeight: "bold", marginBottom: "10px" }}>
                Golden Precepts of Syed Rasool Shah Khaki:
              </h5>
              <blockquote style={{ fontStyle: "italic", color: "var(--text-primary)", marginBottom: "12px" }}>
                &ldquo;To contemplate is Noor (The Light) whereas neglect is darkness, and ignorance is misguidance.&rdquo;
              </blockquote>
              <blockquote style={{ fontStyle: "italic", color: "var(--text-primary)" }}>
                &ldquo;Love depends on spiritual awareness and spiritual awareness depends on love. Without spiritual awareness, love cannot be born and without love, one cannot progress in spiritual awareness.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
