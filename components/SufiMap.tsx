"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";

interface CenterNode {
  id: string;
  name: string;
  city: string;
  x: number; // SVG X Coord
  y: number; // SVG Y Coord
  desc: string;
  zoomBox: string; // ViewBox string for focus zoom
}

export default function SufiMap() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [selectedCenter, setSelectedCenter] = useState<string>("pakistan");

  const centers: CenterNode[] = [
    {
      id: "pakistan",
      name: "Darbar Sharif (Chakwal)",
      city: "Chakwal, Pakistan",
      x: 630,
      y: 260,
      desc: "The global anchor of Muhabbat Mission International, founded in 1994. Hosts the central shrine, free community kitchens, and global spiritual assemblies.",
      zoomBox: "500 160 260 180", // Zoomed-in crop
    },
    {
      id: "uk",
      name: "London Sufi Circle",
      city: "London, United Kingdom",
      x: 460,
      y: 180,
      desc: "Established in 2002 to serve seekers in Western Europe. Conducts weekly multilingual assemblies, silent meditations, and study groups.",
      zoomBox: "340 100 240 160",
    },
    {
      id: "norway",
      name: "Oslo Spiritual Node",
      city: "Oslo, Norway",
      x: 485,
      y: 140,
      desc: "Bringing classical Sufi wisdom to Scandinavia. Oversees local welfare initiatives and distributes Scandinavian translations of Makhdoom's treatises.",
      zoomBox: "360 80 240 160",
    },
    {
      id: "germany",
      name: "Frankfurt Research Center",
      city: "Frankfurt, Germany",
      x: 480,
      y: 190,
      desc: "An active research repository compiling translations of Silsila-e-Dilbar and coordinating welfare initiatives across mainland Europe.",
      zoomBox: "360 100 240 160",
    },
  ];

  const defaultViewBox = "200 60 600 320"; // Standard wide view showing Europe/Asia

  const handleCenterSelect = (id: string) => {
    setSelectedCenter(id);
    const targetCenter = centers.find((c) => c.id === id);
    if (targetCenter && svgRef.current) {
      // Zoom to node viewbox
      gsap.to(svgRef.current, {
        attr: { viewBox: targetCenter.zoomBox },
        duration: 1.5,
        ease: "power3.out",
      });
    }
  };

  const handleResetMap = () => {
    setSelectedCenter("all");
    if (svgRef.current) {
      gsap.to(svgRef.current, {
        attr: { viewBox: defaultViewBox },
        duration: 1.5,
        ease: "power3.out",
      });
    }
  };

  useEffect(() => {
    // Initial zoom to Pakistan on mount (deferred to avoid synchronous setState cascading renders)
    const timer = setTimeout(() => {
      handleCenterSelect("pakistan");
    }, 100);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      id="centers"
      style={{
        width: "100%",
        backgroundColor: "var(--midnight-navy)",
        padding: "100px 5%",
        position: "relative",
        zIndex: 4,
        overflow: "hidden",
      }}
    >
      {/* Dynamic Background Grid */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "radial-gradient(var(--gold-dim) 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
          opacity: 0.1,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Section Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid rgba(200, 169, 110, 0.2)", paddingBottom: "20px", marginBottom: "50px", position: "relative", zIndex: 10 }}>
        <h4 className="english-heading" style={{ fontSize: "var(--t4)", color: "var(--text-primary)" }}>
          {"Illuminated Global Presence"}
        </h4>
        <span className="meta-text" style={{ fontSize: "10px", color: "var(--text-muted)" }}>
          Interactive Map Navigation ✦
        </span>
      </div>

      {/* Main Split Grid (Left Panel 35%, Map SVG 65%) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.8fr",
          gap: "50px",
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 5,
        }}
        className="map-split-grid"
      >
        {/* LEFT COLUMN: CENTERS SELECTOR */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <span className="meta-text" style={{ fontSize: "10px", color: "var(--gold-primary)", letterSpacing: "0.15em" }}>
              SELECT SANCTUARY
            </span>
            <button
              onClick={handleResetMap}
              style={{
                background: "none",
                border: "none",
                color: "var(--text-secondary)",
                fontSize: "10px",
                cursor: "pointer",
                textDecoration: "underline",
                letterSpacing: "0.1em",
              }}
            >
              Reset Map
            </button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {centers.map((center) => {
              const isActive = selectedCenter === center.id;
              return (
                <div
                  key={center.id}
                  onClick={() => handleCenterSelect(center.id)}
                  data-cursor="explore"
                  style={{
                    backgroundColor: isActive ? "rgba(200, 169, 110, 0.08)" : "rgba(5, 11, 26, 0.4)",
                    border: isActive ? "1px solid var(--gold-primary)" : "1px solid var(--gold-dim)",
                    borderRadius: "4px",
                    padding: "20px",
                    cursor: "pointer",
                    transition: "all 0.4s ease",
                    boxShadow: isActive ? "0 10px 20px rgba(0,0,0,0.3)" : "none",
                  }}
                >
                  <h5
                    className={"english-heading"}
                    style={{
                      fontSize: "16px",
                      color: isActive ? "var(--gold-light)" : "var(--text-primary)",
                      fontWeight: isActive ? "bold" : "normal",
                      marginBottom: "6px",
                    }}
                  >
                    {center.name}
                  </h5>
                  <span
                    className="meta-text"
                    style={{
                      fontSize: "10px",
                      color: "var(--gold-dim)",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {center.city}
                  </span>

                  {/* Expand description if active */}
                  {isActive && (
                    <p
                      className={"english-body"}
                      style={{
                        color: "var(--text-muted)",
                        fontSize: "13px"}}
                    >
                      {center.desc}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: ILLUMINATED VINTAGE SVG MAP */}
        <div
          style={{
            border: "1.5px solid var(--gold-dim)",
            borderRadius: "4px",
            backgroundColor: "rgba(5, 11, 26, 0.6)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
            aspectRatio: "1.6/1",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Compass Rose Overlay Decal */}
          <div
            style={{
              position: "absolute",
              bottom: "15px",
              left: "15px",
              width: "70px",
              height: "70px",
              opacity: 0.3,
              pointerEvents: "none",
              zIndex: 3,
            }}
          >
            <svg viewBox="0 0 100 100" fill="var(--gold-primary)">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3,3" />
              <path d="M50 5 L53 45 L95 50 L53 53 L50 95 L47 53 L5 50 L47 45 Z" />
              <path d="M50 20 L51 45 L80 50 L51 51 L50 80 L49 51 L20 50 L49 45 Z" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="50" cy="50" r="2" fill="white" />
            </svg>
          </div>

          <svg
            ref={svgRef}
            viewBox={defaultViewBox}
            style={{
              width: "100%",
              height: "100%",
              transition: "all 0.3s ease",
            }}
          >
            {/* 1. Latitude / Longitude lines */}
            <g opacity="0.15">
              {/* Horizontals */}
              <line x1="0" y1="100" x2="1000" y2="100" stroke="var(--gold-dim)" strokeWidth="0.5" strokeDasharray="2,2" />
              <line x1="0" y1="200" x2="1000" y2="200" stroke="var(--gold-dim)" strokeWidth="0.5" strokeDasharray="2,2" />
              <line x1="0" y1="300" x2="1000" y2="300" stroke="var(--gold-dim)" strokeWidth="0.5" strokeDasharray="2,2" />
              {/* Verticals */}
              <line x1="300" y1="0" x2="300" y2="500" stroke="var(--gold-dim)" strokeWidth="0.5" strokeDasharray="2,2" />
              <line x1="500" y1="0" x2="500" y2="500" stroke="var(--gold-dim)" strokeWidth="0.5" strokeDasharray="2,2" />
              <line x1="700" y1="0" x2="700" y2="500" stroke="var(--gold-dim)" strokeWidth="0.5" strokeDasharray="2,2" />
            </g>

            {/* 2. Concentric Wave Propagation rings centered on Chakwal, Pakistan (x=630, y=260) */}
            <g opacity="0.1">
              <circle cx="630" cy="260" r="80" fill="none" stroke="var(--gold-primary)" strokeWidth="1" strokeDasharray="4,4" className="prop-ring" />
              <circle cx="630" cy="260" r="180" fill="none" stroke="var(--gold-primary)" strokeWidth="1" strokeDasharray="4,4" className="prop-ring-slow" />
              <circle cx="630" cy="260" r="280" fill="none" stroke="var(--gold-primary)" strokeWidth="0.5" strokeDasharray="4,4" />
            </g>

            {/* 3. Highly stylized vector projection of continents (drawn as golden lines / land polygons) */}
            {/* Europe projection */}
            <path
              d="M380 120 L400 110 L440 90 L490 80 L520 100 L500 150 L470 170 L440 180 L420 190 L400 170 L380 150 Z"
              fill="rgba(200, 169, 110, 0.03)"
              stroke="var(--gold-dim)"
              strokeWidth="0.5"
              opacity="0.5"
            />
            {/* Middle East & Asia projection */}
            <path
              d="M480 190 L520 200 L560 210 L600 230 L630 260 L680 270 L730 250 L780 220 L800 180 L750 160 L700 150 L600 130 L550 150 Z"
              fill="rgba(200, 169, 110, 0.03)"
              stroke="var(--gold-dim)"
              strokeWidth="0.5"
              opacity="0.5"
            />
            {/* Africa projection */}
            <path
              d="M380 190 L430 210 L470 230 L490 280 L460 330 L440 370 L420 350 L390 290 L360 250 L350 210 Z"
              fill="rgba(200, 169, 110, 0.03)"
              stroke="var(--gold-dim)"
              strokeWidth="0.5"
              opacity="0.4"
            />

            {/* 4. Nodes and Glowing Markers */}
            {centers.map((center) => {
              const isActive = selectedCenter === center.id;
              return (
                <g
                  key={center.id}
                  onClick={() => handleCenterSelect(center.id)}
                  style={{ cursor: "pointer" }}
                >
                  {/* Outer pulsing ring */}
                  <circle
                    cx={center.x}
                    cy={center.y}
                    r={isActive ? 16 : 8}
                    fill="none"
                    stroke="var(--gold-primary)"
                    strokeWidth="1"
                    opacity={isActive ? 0.7 : 0.3}
                    className="pulse-circle"
                  />

                  {/* Inner golden dot node */}
                  <circle
                    cx={center.x}
                    cy={center.y}
                    r={isActive ? 5 : 3.5}
                    fill={isActive ? "var(--gold-light)" : "var(--gold-primary)"}
                    style={{ filter: isActive ? "drop-shadow(0 0 6px var(--gold-light))" : "none" }}
                  />

                  {/* Rotating Crescent symbol above the active node */}
                  {isActive && (
                    <g transform={`translate(${center.x - 6}, ${center.y - 18}) scale(0.6)`}>
                      <path
                        d="M12 2 C6.48 2 2 6.48 2 12 C2 17.52 6.48 22 12 22 C14.04 22 15.91 21.39 17.47 20.35 C13.71 19.9 10.8 16.76 10.8 12.92 C10.8 9.08 13.71 5.94 17.47 5.49 C15.91 4.45 14.04 4.16 12 2 Z"
                        fill="var(--gold-primary)"
                        className="spinning-crescent"
                      />
                    </g>
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}
