"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

export default function BismillahPreloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const path1Ref = useRef<SVGPathElement>(null);
  const path2Ref = useRef<SVGPathElement>(null);
  const path3Ref = useRef<SVGPathElement>(null);
  const path4Ref = useRef<SVGPathElement>(null);
  const bloomRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Lock scroll during preloader
    document.body.style.overflow = "hidden";

    const paths = [path1Ref.current, path2Ref.current, path3Ref.current, path4Ref.current];
    
    // Setup initial stroke state
    paths.forEach((path) => {
      if (path) {
        const length = path.getTotalLength();
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;
      }
    });

    const tl = gsap.timeline({
      onComplete: () => {
        // Core drawing finished, trigger bloom and fade out
        gsap.timeline({
          onComplete: () => {
            document.body.style.overflow = "";
            setIsDone(true);
            onComplete();
          }
        })
        .to(bloomRef.current, {
          scale: 15,
          opacity: 0.15,
          duration: 1.2,
          ease: "power2.out",
        })
        .to(textRef.current, {
          opacity: 0,
          scale: 0.95,
          duration: 0.5,
          delay: 0.2,
        })
        .to(containerRef.current, {
          opacity: 0,
          yPercent: -100,
          duration: 0.8,
          ease: "power4.inOut",
        });
      }
    });

    // 1. Draw strokes stroke-by-stroke
    tl.to(paths, {
      strokeDashoffset: 0,
      duration: 2.2,
      stagger: 0.25,
      ease: "power1.inOut",
    });

    // 2. Fade in sub-translation label during final drawing phase
    tl.to(".preloader-subtext", {
      opacity: 0.8,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
    }, "-=1.0");

    return () => {
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  if (isDone) return null;

  return (
    <div
      ref={containerRef}
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
        overflow: "hidden",
      }}
    >
      {/* Background Radial Gold Bloom Glow */}
      <div
        ref={bloomRef}
        style={{
          position: "absolute",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--gold-primary) 0%, rgba(200, 169, 110, 0) 70%)",
          opacity: 0,
          transform: "scale(1)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div
        ref={textRef}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 2,
          padding: "20px",
          width: "100%",
          maxWidth: "800px",
        }}
      >
        {/* Beautiful Ornate Bismillah SVG Calligraphy */}
        <svg
          viewBox="0 0 600 200"
          style={{
            width: "90%",
            height: "auto",
            maxWidth: "600px",
            filter: "drop-shadow(0 0 8px rgba(200, 169, 110, 0.4))",
          }}
        >
          {/* Detailed decorative borders */}
          <g stroke="var(--gold-dim)" strokeWidth="0.5" fill="none" opacity="0.3">
            <rect x="10" y="10" width="580" height="180" rx="4" />
            <rect x="14" y="14" width="572" height="172" rx="2" />
          </g>
          
          <g
            fill="none"
            stroke="var(--gold-primary)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Calligraphy Strokes representing Bismillah */}
            {/* Stroke 1: Ba & Sin & Mim (بِسْمِ) */}
            <path
              ref={path1Ref}
              d="M 50,110 C 65,100 85,90 95,95 C 105,100 100,115 110,115 C 120,115 125,95 135,95 C 145,95 140,110 150,110 C 160,110 170,75 165,60 C 160,50 145,85 140,115 C 135,135 155,145 175,135 C 190,125 195,100 190,85 C 185,75 175,85 180,105"
            />
            {/* Stroke 2: Allah (اللهِ) */}
            <path
              ref={path2Ref}
              d="M 230,110 L 230,55 M 245,105 L 245,65 C 245,60 255,60 255,75 L 255,100 C 255,105 265,105 265,90 L 265,70 C 265,60 275,60 275,80 L 275,105 C 275,115 295,115 290,95 M 260,45 Q 260,35 255,40"
            />
            {/* Stroke 3: Ar-Rahman (الرَّحْمَنِ) */}
            <path
              ref={path3Ref}
              d="M 320,115 L 320,55 M 335,110 L 335,65 C 335,60 345,65 350,75 C 360,95 355,115 375,115 C 385,115 395,100 395,85 C 395,75 385,65 375,70 M 360,50 L 375,45"
            />
            {/* Stroke 4: Ar-Rahim (الرَّحِيمِ) */}
            <path
              ref={path4Ref}
              d="M 430,115 L 430,55 M 445,110 C 455,95 460,85 470,85 C 480,85 480,100 490,100 C 500,100 505,80 515,80 C 525,80 535,115 550,115 M 510,135 Q 515,145 520,135"
            />
          </g>

          {/* Diacritics & Accents */}
          <g fill="var(--gold-light)" opacity="0.8">
            <circle cx="58" cy="130" r="3" /> {/* Ba dot */}
            <path d="M 120,65 L 128,55" stroke="var(--gold-light)" strokeWidth="2.5" />
            <path d="M 345,130 Q 350,140 355,130" fill="none" stroke="var(--gold-light)" strokeWidth="2" />
            <circle cx="480" cy="118" r="2.5" />
            <circle cx="490" cy="118" r="2.5" /> {/* Ya dots */}
          </g>
        </svg>

        {/* Dynamic Editorial Subtext */}
        <div
          className="preloader-subtext"
          style={{
            marginTop: "30px",
            opacity: 0,
            transform: "translateY(15px)",
            textAlign: "center",
          }}
        >
          <p
            className="meta-text"
            style={{
              color: "var(--gold-light)",
              fontSize: "var(--t8)",
              letterSpacing: "0.4em",
              marginBottom: "6px",
            }}
          >
            MUHABBAT MISSION INTERNATIONAL
          </p>
          <p
            className="english-heading"
            style={{
              color: "var(--text-secondary)",
              fontSize: "var(--t7)",
              fontStyle: "italic",
            }}
          >
            Entering the Sacred Space of Love & Grace
          </p>
        </div>
      </div>
    </div>
  );
}
