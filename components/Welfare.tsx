"use client";

import React from "react";

export default function Welfare() {
  const items = [
    { icon: "🤝", title: "Humanitarian Events", desc: "Social welfare initiatives assisting those in need, regardless of caste, creed, or background." },
    { icon: "🍽️", title: "COVID-19 Relief", desc: "Active food distribution during the pandemic — ensuring no one went hungry during the crisis." },
    { icon: "⚕️", title: "Free Medical Camps", desc: "Doctor's camps providing free health services and checkups to underserved communities." },
    { icon: "🆘", title: "Catastrophe Relief", desc: "Ready to serve in natural disasters and emergencies, offering aid wherever possible." },
    { icon: "🕐", title: "24/7 Open Doors", desc: "Makhdoom Sahib's doors are always open — no one is left without help, whatever the time." },
    { icon: "💚", title: "Counseling & Healing", desc: "Daily spiritual healing sessions offered freely — guiding seekers through life's deepest struggles." },
  ];

  return (
    <section
      id="welfare"
      style={{
        padding: "100px 5%",
        backgroundColor: "#FFFFFF",
        position: "relative",
        zIndex: 3,
        borderBottom: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span
            style={{
              display: "inline-block",
              fontSize: "11px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              fontWeight: "bold",
              color: "#E91E8C",
              marginBottom: "12px",
            }}
          >
            Serving Humanity
          </span>
          <h2
            className="english-heading"
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: "bold",
              color: "#0A1628",
              lineHeight: "1.2",
              marginBottom: "16px",
            }}
          >
            Welfare &amp; Community
          </h2>
          <div
            style={{
              width: "70px",
              height: "3px",
              margin: "0 auto",
              background: "linear-gradient(90deg, #E91E8C, #00C853)",
              borderRadius: "2px",
            }}
          />
        </div>

        {/* Central Quote */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "680px",
            margin: "0 auto 56px auto",
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(18px, 2vw, 22px)",
            fontStyle: "italic",
            color: "#333333",
            lineHeight: "1.85",
            padding: "0 20px",
          }}
        >
          &ldquo;Dignity is received through service. One who serves others achieves greatness.&rdquo;
          <div
            style={{
              fontSize: "12px",
              color: "#E91E8C",
              fontFamily: "var(--font-raleway), sans-serif",
              fontStyle: "normal",
              marginTop: "12px",
              fontWeight: "bold",
              letterSpacing: "1.5px",
            }}
          >
            — MAKHDOOM MAHMOOD MASTWAAR QALANDAR
          </div>
        </div>

        {/* Welfare Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "flex-start",
                background: "#FAFAFA",
                borderRadius: "14px",
                padding: "28px 24px",
                border: "1px solid rgba(0,0,0,0.05)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, rgba(233,30,140,0.04), rgba(0,200,83,0.04))";
                e.currentTarget.style.borderColor = "rgba(233,30,140,0.14)";
                e.currentTarget.style.transform = "translateX(4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#FAFAFA";
                e.currentTarget.style.borderColor = "rgba(0,0,0,0.05)";
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  flexShrink: 0,
                  background: "linear-gradient(135deg, rgba(233,30,140,0.12), rgba(233,30,140,0.05))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  border: "1px solid rgba(233,30,140,0.1)",
                }}
              >
                {item.icon}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <h4 className="english-heading" style={{ fontSize: "18px", color: "#0A1628", fontWeight: "bold" }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: "14px", lineHeight: "1.75", color: "#666666" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
