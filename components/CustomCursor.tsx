"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState<"default" | "crescent" | "eye" | "explore">("default");
  const [isVisible, setIsVisible] = useState(false);

  // Mouse position values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for trailing Waw letter
  const springConfig = { damping: 25, stiffness: 180, mass: 0.6 };
  const trailX = useSpring(mouseX, springConfig);
  const trailY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Attach mouse event listeners
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Global Hover Detectors
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverable = target.closest("[data-cursor]");
      if (hoverable) {
        const type = hoverable.getAttribute("data-cursor");
        if (type === "crescent" || type === "eye" || type === "explore") {
          setCursorType(type);
        }
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("[data-cursor]")) {
        setCursorType("default");
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [mouseX, mouseY, isVisible]);

  if (typeof window === "undefined" || !isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 999999,
      }}
    >
      {/* 1. Primary Gold Pointer Dot */}
      <motion.div
        style={{
          position: "fixed",
          width: 8,
          height: 8,
          backgroundColor: "var(--gold-primary)",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          left: mouseX,
          top: mouseY,
          boxShadow: "0 0 10px var(--gold-light)",
        }}
      />

      {/* 2. Trailing Morphing Element & Arabic 'Waw' Letter */}
      <motion.div
        style={{
          position: "fixed",
          left: trailX,
          top: trailY,
          transform: "translate(-50%, -50%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        animate={{
          width: cursorType === "default" ? 32 : cursorType === "explore" ? 80 : 48,
          height: cursorType === "default" ? 32 : cursorType === "explore" ? 40 : 48,
          borderRadius: cursorType === "explore" ? "20px" : "50%",
          borderWidth: cursorType === "default" ? "1px" : "2px",
          borderColor: "var(--gold-primary)",
          borderStyle: "solid",
          backgroundColor:
            cursorType === "explore"
              ? "rgba(200, 169, 110, 0.15)"
              : cursorType === "default"
              ? "rgba(200, 169, 110, 0)"
              : "rgba(5, 11, 26, 0.4)",
          backdropFilter: cursorType === "default" ? "none" : "blur(4px)",
        }}
        transition={{ type: "spring", damping: 20, stiffness: 150 }}
      >
        {/* Render Trailing Elements based on Cursor Morph State */}
        {cursorType === "default" && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.75, scale: 1 }}
            exit={{ opacity: 0 }}
            style={{
              fontFamily: "var(--font-amiri), serif",
              fontSize: "14px",
              color: "var(--gold-light)",
              transform: "translateY(-1px)",
              userSelect: "none",
            }}
          >
            و
          </motion.span>
        )}

        {cursorType === "crescent" && (
          <motion.svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="var(--gold-light)"
            initial={{ rotate: -45, scale: 0.5 }}
            animate={{ rotate: 0, scale: 1 }}
            style={{ filter: "drop-shadow(0 0 4px var(--gold-primary))" }}
          >
            <path d="M12 3a9 9 0 1 0 9 9 9.75 9.75 0 0 1-9-9Z" />
          </motion.svg>
        )}

        {cursorType === "eye" && (
          <motion.span
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.9 }}
            style={{
              fontFamily: "var(--font-amiri), serif",
              fontSize: "15px",
              color: "var(--gold-light)",
              fontWeight: "bold",
              userSelect: "none",
            }}
          >
            عين
          </motion.span>
        )}

        {cursorType === "explore" && (
          <motion.span
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: "10px",
              color: "var(--gold-light)",
              letterSpacing: "0.05em",
              fontWeight: "bold",
              textAlign: "center",
              whiteSpace: "nowrap",
            }}
          >
            ✦ EXPLORE
          </motion.span>
        )}
      </motion.div>
    </div>
  );
}
