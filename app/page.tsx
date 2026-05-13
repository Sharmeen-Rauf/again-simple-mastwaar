"use client";

import React, { useState, useEffect } from "react";
import BismillahPreloader from "../components/BismillahPreloader";
import CustomCursor from "../components/CustomCursor";
import AudioEngine from "../components/AudioEngine";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import QuoteMarquee from "../components/QuoteMarquee";
import About from "../components/About";
import Stats from "../components/Stats";
import Events from "../components/Events";
import Publications from "../components/Publications";
import SufiMap from "../components/SufiMap";
import Footer from "../components/Footer";

export default function Home() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  // Sync theme state with DOM element attribute for theme-specific CSS selectors
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      {/* 1. Page Bismillah Stroke Drawing Preloader */}
      <BismillahPreloader onComplete={() => setPreloaderDone(true)} />

      {/* Render core app only after preloader finishes to avoid flashing layouts */}
      {preloaderDone && (
        <div
          style={{
            minHeight: "100vh",
            backgroundColor: "var(--bg-color)",
            color: "var(--text-color)",
            transition: "background-color 0.6s ease, color 0.6s ease",
            position: "relative",
          }}
        >
          {/* 2. Custom Spring trailing 'و' cursor */}
          <CustomCursor />

          {/* 3. Ambient Haronium/Tanpura Synth background player */}
          <AudioEngine />

          {/* 4. Global Navigation menu */}
          <Navbar
            
            
            theme={theme}
            setTheme={setTheme}
          />

          {/* 5. Main Content Assembly */}
          <main>
            {/* Section 1: WebGL 12-pointed Star Morpher */}
            <Hero  />

            {/* Section 2: Infinite momentum-reversing Quote Ticker */}
            <QuoteMarquee />

            {/* Section 3: Asymmetric biography and inertia timeline */}
            <About  />

            {/* Section 4: Twinkling Star Counter field */}
            <Stats  />

            {/* Section 5: Bento 3D Tilt Events calendar */}
            <Events  />

            {/* Section 6: 3D Perspective Publications Shelf */}
            <Publications  />

            {/* Section 7: Interactive SVG World Map centers */}
            <SufiMap  />
          </main>

          {/* Section 8: Inverted Parchment Manuscript Footer */}
          <Footer  />
        </div>
      )}
    </>
  );
}
