"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function QuoteMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  const quotes = [
    {
      ar: "A heart without love has no existence",
      en: "Without love, the heart has no existence",
    },
    {
      ar: "The inclination of the heart is the first step towards truth",
      en: "The turning of the heart is the first step toward Truth",
    },
    {
      ar: "Love is the only secret of the universe",
      en: "Love is the sole secret of the universe",
    },
    {
      ar: "The journey of the soul is only the search for truth",
      en: "The journey of the soul is purely the search for Truth",
    },
  ];

  useEffect(() => {
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;
    if (!row1 || !row2) return;

    // We animate both rows moving left. Row2 is placed inline.
    // By animating xPercent: -100, we get a seamless continuous scrolling loop.
    const tween = gsap.to([row1, row2], {
      xPercent: -100,
      ease: "none",
      duration: 50,
      repeat: -1,
    });

    tweenRef.current = tween;

    return () => {
      tween.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    // Smoothly decelerate and reverse direction to timeScale: -1
    if (tweenRef.current) {
      gsap.to(tweenRef.current, {
        timeScale: -1,
        duration: 1.5,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    // Smoothly return to positive scrolling direction
    if (tweenRef.current) {
      gsap.to(tweenRef.current, {
        timeScale: 1,
        duration: 1.5,
        ease: "power2.out",
      });
    }
  };

  // Render a quote block structure
  const renderQuoteBlock = (index: number) => (
    <div
      key={index}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "24px",
        padding: "0 24px",
      }}
    >
      {/* 1. Arabic Quote */}
      <span
        className="arabic-text"
        style={{
          fontSize: "var(--marquee-arabic, 22px)",
          color: "var(--gold-light)",
          fontWeight: 400,
          whiteSpace: "nowrap",
        }}
      >
        {quotes[index % quotes.length].ar}
      </span>

      {/* 2. Gold Divider */}
      <span
        style={{
          color: "var(--gold-primary)",
          fontSize: "18px",
          textShadow: "0 0 6px var(--gold-light)",
        }}
      >
        ✦
      </span>

      {/* 3. English Quote */}
      <span
        className="english-heading"
        style={{
          fontSize: "var(--marquee-english, 18px)",
          color: "var(--text-primary)",
          fontStyle: "italic",
          whiteSpace: "nowrap",
        }}
      >
        &ldquo;{quotes[index % quotes.length].en}&rdquo;
      </span>

      {/* 4. Urdu Attribution */}
      <span
        className="english-heading"
        style={{
          fontSize: "var(--marquee-attribution, 14px)",
          color: "var(--text-secondary)",
          whiteSpace: "nowrap",
          opacity: 0.8,
        }}
      >
        — Makhdoom Mastwaar Qalandar
      </span>

      {/* 5. Gold Divider */}
      <span
        style={{
          color: "var(--gold-primary)",
          fontSize: "18px",
          textShadow: "0 0 6px var(--gold-light)",
        }}
      >
        ✦
      </span>
    </div>
  );

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-cursor="explore"
      style={{
        width: "100%",
        backgroundColor: "var(--deep-maroon)",
        borderTop: "1.5px solid var(--gold-dim)",
        borderBottom: "1.5px solid var(--gold-dim)",
        padding: "16px 0",
        overflow: "hidden",
        display: "flex",
        position: "relative",
        zIndex: 5,
        userSelect: "none",
      }}
    >
      {/* Scrollable Tracks */}
      <div
        ref={row1Ref}
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          flexShrink: 0,
        }}
      >
        {quotes.map((_, idx) => renderQuoteBlock(idx))}
        {quotes.map((_, idx) => renderQuoteBlock(idx))}
      </div>
      <div
        ref={row2Ref}
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          flexShrink: 0,
        }}
      >
        {quotes.map((_, idx) => renderQuoteBlock(idx))}
        {quotes.map((_, idx) => renderQuoteBlock(idx))}
      </div>
    </div>
  );
}
