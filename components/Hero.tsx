"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero({ language }: { language: "en" | "ur" }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);
  const title3Ref = useRef<HTMLDivElement>(null);
  const title4Ref = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const [ctaText, setCtaText] = useState(language === "ur" ? "داخلِ دربار ہوں ↓" : "Enter the Darbar ↓");

  // Cycle CTA Text
  useEffect(() => {
    const urText = "داخلِ دربار ہوں ↓";
    const enText = "Enter the Darbar ↓";
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCtaText(language === "ur" ? urText : enText);

    const interval = setInterval(() => {
      setCtaText((prev) => (prev === enText ? urText : enText));
    }, 3000);
    return () => clearInterval(interval);
  }, [language]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Three.js Scene Setup
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
    camera.position.z = 6.5;

    // Create 2000 Particles
    const particleCount = 2000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    const starPositions: THREE.Vector3[] = [];
    const calligraphyPositions: THREE.Vector3[] = [];

    // Math formulas for morph shapes
    const getStarPoint = (t: number, i: number) => {
      if (i % 3 === 0) {
        // Edge points of 12-pointed star
        const edge = Math.floor(Math.random() * 24);
        const theta1 = (edge * Math.PI) / 12;
        const theta2 = ((edge + 1) * Math.PI) / 12;
        const r1 = edge % 2 === 0 ? 2.5 : 1.5;
        const r2 = (edge + 1) % 2 === 0 ? 2.5 : 1.5;
        const x1 = r1 * Math.cos(theta1);
        const y1 = r1 * Math.sin(theta1);
        const x2 = r2 * Math.cos(theta2);
        const y2 = r2 * Math.sin(theta2);
        return new THREE.Vector3(
          x1 + (x2 - x1) * t,
          y1 + (y2 - y1) * t,
          (Math.random() - 0.5) * 0.1
        );
      } else {
        // Interior glowing volume
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 1.5;
        return new THREE.Vector3(
          radius * Math.cos(angle),
          radius * Math.sin(angle),
          (Math.random() - 0.5) * 0.4
        );
      }
    };

    const getCalligraphyPoint = (t: number, strokeIndex: number) => {
      let x = 0;
      let y = 0;
      const z = (Math.random() - 0.5) * 0.1;
      switch (strokeIndex) {
        case 0: // Mim loop
          const angle = t * Math.PI * 2;
          x = -1.2 + Math.cos(angle) * 0.25;
          y = 0.4 + Math.sin(angle) * 0.25;
          break;
        case 1: // Ha sweeping connector
          x = -0.9 + t * 1.2;
          y = 0.4 - Math.sin(t * Math.PI) * 0.35 - t * 0.5;
          break;
        case 2: // Second Mim loop
          const angle2 = t * Math.PI * 2;
          x = 0.3 + Math.cos(angle2) * 0.22;
          y = -0.3 + Math.sin(angle2) * 0.22;
          break;
        case 3: // Dal curve
          x = 0.5 + t * 0.8;
          y = -0.3 + Math.sin(t * Math.PI * 0.5) * 0.7 - t * 0.4;
          break;
        case 4: // Salla Allahu Alayhi Wa Sallam blessing symbol
          x = -0.2 + Math.sin(t * Math.PI * 3) * 0.3;
          y = 1.0 + t * 0.3 + Math.cos(t * Math.PI) * 0.1;
          break;
      }
      return new THREE.Vector3(x * 2.2, y * 2.2, z * 2.2);
    };

    // Initialize shapes coordinates
    for (let i = 0; i < particleCount; i++) {
      const t = Math.random();
      const strokeIndex = i % 5;

      const starPt = getStarPoint(t, i);
      const calliPt = getCalligraphyPoint(t, strokeIndex);

      starPositions.push(starPt);
      calligraphyPositions.push(calliPt);

      positions[i * 3] = starPt.x;
      positions[i * 3 + 1] = starPt.y;
      positions[i * 3 + 2] = starPt.z;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Custom Particle Shader / Circle texture
    const pCanvas = document.createElement("canvas");
    pCanvas.width = 16;
    pCanvas.height = 16;
    const pCtx = pCanvas.getContext("2d");
    if (pCtx) {
      const gradient = pCtx.createRadialGradient(8, 8, 0, 8, 8, 8);
      gradient.addColorStop(0, "rgba(255, 230, 170, 1)");
      gradient.addColorStop(0.3, "rgba(200, 169, 110, 0.8)");
      gradient.addColorStop(1, "rgba(200, 169, 110, 0)");
      pCtx.fillStyle = gradient;
      pCtx.fillRect(0, 0, 16, 16);
    }
    const pTexture = new THREE.CanvasTexture(pCanvas);

    const material = new THREE.PointsMaterial({
      size: 0.08,
      map: pTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    // Animation & Morph loop variables
    let scrollDispersal = 0;

    const animateParams = { morphProgress: 0 };

    // Continuously cycle morph back and forth every few seconds
    const morphTimeline = gsap.timeline({ repeat: -1, delay: 1 });
    morphTimeline
      .to(animateParams, {
        morphProgress: 1, // Morph to Calligraphy
        duration: 3.0,
        ease: "power2.inOut",
        delay: 2.0,
      })
      .to(animateParams, {
        morphProgress: 0, // Morph back to Star
        duration: 3.0,
        ease: "power2.inOut",
        delay: 4.0,
      });

    // Scroll trigger for dispersal
    const scrollTriggerObj = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        scrollDispersal = self.progress;
        // Fade canvas as user scrolls down
        if (canvas) {
          canvas.style.opacity = `${1 - self.progress * 1.5}`;
        }
      },
    });

    // Resize listener
    const handleResize = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // Frame loops
    let animationFrameId: number;
    let lastTime = 0;

    const render = (time: number) => {
      const delta = (time - lastTime) * 0.001;
      lastTime = time;

      // Slow orbit rotation
      particleSystem.rotation.z += 0.03 * delta;
      particleSystem.rotation.y += 0.02 * delta;

      // Morph coordinates
      const posAttr = geometry.getAttribute("position") as THREE.BufferAttribute;
      const progress = animateParams.morphProgress;

      for (let i = 0; i < particleCount; i++) {
        const star = starPositions[i];
        const calli = calligraphyPositions[i];

        // Core morph calculation
        let targetX = star.x + (calli.x - star.x) * progress;
        let targetY = star.y + (calli.y - star.y) * progress;
        let targetZ = star.z + (calli.z - star.z) * progress;

        // Apply scroll-dispersal expansion physics
        if (scrollDispersal > 0) {
          const noiseX = (Math.sin(i * 10.5 + time * 0.002) * 2.0);
          const noiseY = (Math.cos(i * 5.2 + time * 0.002) * 2.0);
          targetX += noiseX * scrollDispersal * 3.0;
          targetY += noiseY * scrollDispersal * 3.0;
          targetZ += (Math.sin(i) * 3.0) * scrollDispersal;
        }

        posAttr.setXYZ(i, targetX, targetY, targetZ);
      }
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    // Entrance animations for Text elements
    gsap.timeline()
      .fromTo(title1Ref.current, { opacity: 0, y: 30 }, { opacity: 0.9, y: 0, duration: 1.0, delay: 0.5, ease: "power3.out" })
      .fromTo(title2Ref.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1.2, ease: "power4.out" }, "-=0.6")
      .fromTo(title3Ref.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.6")
      .fromTo(title4Ref.current, { opacity: 0 }, { opacity: 0.8, duration: 1.0, ease: "power1.out" }, "-=0.4")
      .fromTo(ctaRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.4");

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      scrollTriggerObj.kill();
      morphTimeline.kill();
      renderer.dispose();
      material.dispose();
      pTexture.dispose();
      geometry.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="hero"
      style={{
        position: "relative",
        width: "100%",
        height: "200vh", // Tall layout to support scroll pinning
        backgroundColor: "var(--midnight-navy)",
        overflow: "hidden",
      }}
    >
      {/* Scroll Pin container (Sticky viewport card) */}
      <div
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Background Canvas */}
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

        {/* Subtle CSS Arabesque Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0 C25 20 20 25 0 40 C20 55 25 60 40 80 C55 60 60 55 80 40 C60 25 55 20 40 0 Z' fill='none' stroke='%23C8A96E' stroke-width='0.5' stroke-opacity='0.08'/%3E%3C/svg%3E\")",
            pointerEvents: "none",
            zIndex: 2,
          }}
        />

        {/* Outer radial gradient vignette */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "radial-gradient(circle, rgba(5,11,26,0.3) 0%, rgba(5,11,26,0.95) 90%)",
            pointerEvents: "none",
            zIndex: 2,
          }}
        />

        {/* Central Text Content Card */}
        <div
          style={{
            position: "relative",
            zIndex: 3,
            textAlign: "center",
            maxWidth: "900px",
            padding: "0 20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "14px",
          }}
        >
          {/* Line 1: Bismillah */}
          <h2
            ref={title1Ref}
            className="arabic-text"
            style={{
              color: "var(--gold-light)",
              fontSize: "clamp(20px, 3.5vw, 32px)",
              letterSpacing: "0.25em",
              fontWeight: "normal",
              textShadow: "0 0 10px rgba(240, 217, 160, 0.3)",
              marginBottom: "5px",
            }}
          >
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </h2>

          {/* Line 2: Muhabbat Mission Urdu Title */}
          <h1
            ref={title2Ref}
            className="urdu-text"
            style={{
              color: "var(--gold-primary)",
              fontSize: "clamp(48px, 8vw, 108px)",
              fontWeight: "bold",
              lineHeight: "1.2",
              textShadow: "0 4px 15px rgba(0,0,0,0.6)",
              margin: "5px 0",
              fontFamily: "var(--font-noto-urdu), serif",
            }}
            data-cursor="eye"
          >
            محبت مشن انٹرنیشنل
          </h1>

          {/* Line 3: English Title */}
          <div
            ref={title3Ref}
            className="english-heading"
            style={{
              color: "var(--gold-light)",
              fontSize: "clamp(12px, 2.5vw, 20px)",
              letterSpacing: "0.45em",
              fontWeight: 500,
              textTransform: "uppercase",
              marginTop: "5px",
            }}
          >
            MUHABBAT MISSION INTERNATIONAL
          </div>

          {/* Line 4: Est & Founding details */}
          <div
            ref={title4Ref}
            className="meta-text"
            style={{
              color: "var(--text-secondary)",
              fontSize: "clamp(9px, 1.5vw, 11px)",
              letterSpacing: "0.22em",
              marginTop: "10px",
              opacity: 0.8,
            }}
          >
            Founded 1994 · Chakwal · Est. by Makhdoom Mastwaar Qalandar
          </div>
        </div>

        {/* Scroll CTA Indicator */}
        <div
          ref={ctaRef}
          style={{
            position: "absolute",
            bottom: "8%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
            zIndex: 4,
          }}
        >
          <div
            style={{
              height: "1px",
              width: "120px",
              background: "linear-gradient(90deg, transparent, var(--gold-dim), transparent)",
              position: "relative",
            }}
          >
            {/* Draw on dot indicator */}
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                backgroundColor: "var(--gold-primary)",
                top: "-1.5px",
                left: "50%",
                transform: "translateX(-50%)",
                animation: "horizontalGlide 2.5s ease-in-out infinite",
              }}
            />
          </div>

          {/* Crossfading Scroll Phrase */}
          <span
            className={ctaText.includes("داخلِ") ? "urdu-text" : "english-heading"}
            style={{
              fontFamily: ctaText.includes("داخلِ") ? "var(--font-noto-urdu)" : "var(--font-cormorant)",
              color: "var(--gold-light)",
              fontSize: ctaText.includes("داخلِ") ? "16px" : "13px",
              letterSpacing: ctaText.includes("داخلِ") ? "0" : "0.2em",
              textTransform: "uppercase",
              opacity: 0.8,
              transition: "all 0.5s ease",
            }}
          >
            {ctaText}
          </span>
        </div>
      </div>

    </div>
  );
}
