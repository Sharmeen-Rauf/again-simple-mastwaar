"use client";

import React, { useState } from "react";

export default function Tours() {
  const [activeTab, setActiveTab] = useState<"pakistan" | "international">("pakistan");

  return (
    <section
      id="tours"
      style={{
        padding: "100px 5%",
        background: "linear-gradient(135deg, #f0f7ff, #fff5fb, #f0fff5)",
        position: "relative",
        zIndex: 3,
        borderBottom: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
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
            Sacred Journeys
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
            Annual Tours &amp; Retreats
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

        {/* Tour Tabs Switcher */}
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", marginBottom: "40px", flexWrap: "wrap" }}>
          <button
            onClick={() => setActiveTab("pakistan")}
            style={{
              padding: "12px 28px",
              borderRadius: "30px",
              cursor: "pointer",
              fontSize: "13px",
              fontWeight: "bold",
              letterSpacing: "1px",
              textTransform: "uppercase",
              border: activeTab === "pakistan" ? "none" : "2px solid rgba(21, 101, 192, 0.2)",
              color: activeTab === "pakistan" ? "#FFFFFF" : "#555555",
              background: activeTab === "pakistan" ? "linear-gradient(135deg, #1565C0, #0D47A1)" : "#FFFFFF",
              boxShadow: activeTab === "pakistan" ? "0 6px 20px rgba(21, 101, 192, 0.3)" : "none",
              transition: "all 0.3s ease",
            }}
          >
            🇵🇰 Pakistan Tour
          </button>
          <button
            onClick={() => setActiveTab("international")}
            style={{
              padding: "12px 28px",
              borderRadius: "30px",
              cursor: "pointer",
              fontSize: "13px",
              fontWeight: "bold",
              letterSpacing: "1px",
              textTransform: "uppercase",
              border: activeTab === "international" ? "none" : "2px solid rgba(21, 101, 192, 0.2)",
              color: activeTab === "international" ? "#FFFFFF" : "#555555",
              background: activeTab === "international" ? "linear-gradient(135deg, #1565C0, #0D47A1)" : "#FFFFFF",
              boxShadow: activeTab === "international" ? "0 6px 20px rgba(21, 101, 192, 0.3)" : "none",
              transition: "all 0.3s ease",
            }}
          >
            🌍 International Retreats
          </button>
        </div>

        {/* Tab 1: Pakistan Tour Panel */}
        {activeTab === "pakistan" && (
          <div>
            <div
              style={{
                background: "linear-gradient(135deg, #0A1628, #0D2B55)",
                borderRadius: "18px",
                padding: "32px 40px",
                marginBottom: "32px",
                color: "#FFFFFF",
                display: "flex",
                gap: "24px",
                alignItems: "center",
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              }}
            >
              <div style={{ fontSize: "40px", flexShrink: 0 }}>🗺️</div>
              <div>
                <h3 className="english-heading" style={{ fontSize: "20px", marginBottom: "12px", color: "#FF6EC7", fontWeight: "bold" }}>
                  Annual Pakistan Tour
                </h3>
                <p style={{ fontSize: "15px", lineHeight: "1.85", color: "rgba(255,255,255,0.8)" }}>
                  Makhdoom Mahmood Mastwaar Qalandar embarks on his annual tour across Pakistan — offering profound insights into self-recognition, closeness to Allah, and love for Prophet Muhammad ﷺ through the teachings of Tasawwuf. Each day features a sacred speech, Dhikr gatherings, and personal Q&A sessions.
                </p>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: "16px",
              }}
            >
              {[
                { icon: "🕌", name: "Lahore", detail: "8-Day Sittings" },
                { icon: "🌊", name: "Karachi", detail: "12-Day Sittings" },
                { icon: "⛰️", name: "Wah Cantt", detail: "3-Day Sittings" },
                { icon: "🏛️", name: "Islamabad", detail: "Blessed Sittings" },
                { icon: "🌾", name: "Mianchunnu", detail: "3-Day Sittings" },
                { icon: "📍", name: "Your City?", detail: "Contact Us", isAction: true },
              ].map((city, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    if (city.isAction) {
                      const el = document.getElementById("contact");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "14px",
                    padding: "24px",
                    border: "1px solid rgba(0,0,0,0.07)",
                    textAlign: "center",
                    cursor: city.isAction ? "pointer" : "default",
                    transition: "all 0.3s ease",
                    boxShadow: "0 2px 15px rgba(0,0,0,0.04)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 10px 30px rgba(233,30,140,0.13)";
                    e.currentTarget.style.borderColor = "rgba(233,30,140,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 2px 15px rgba(0,0,0,0.04)";
                    e.currentTarget.style.borderColor = "rgba(0,0,0,0.07)";
                  }}
                >
                  <div style={{ fontSize: "28px", marginBottom: "10px" }}>{city.icon}</div>
                  <div className="english-heading" style={{ fontSize: "16px", fontWeight: "bold", color: "#0A1628", marginBottom: "6px" }}>{city.name}</div>
                  <div style={{ fontSize: "13px", color: city.isAction ? "#E91E8C" : "#999999", fontWeight: city.isAction ? "bold" : "normal" }}>{city.detail}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: International Retreats Panel */}
        {activeTab === "international" && (
          <div>
            <div
              style={{
                background: "linear-gradient(135deg, #0A1628, #0D2B55)",
                borderRadius: "18px",
                padding: "32px 40px",
                marginBottom: "32px",
                color: "#FFFFFF",
                display: "flex",
                gap: "24px",
                alignItems: "center",
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              }}
            >
              <div style={{ fontSize: "40px", flexShrink: 0 }}>✈️</div>
              <div>
                <h3 className="english-heading" style={{ fontSize: "20px", marginBottom: "12px", color: "#FF6EC7", fontWeight: "bold" }}>
                  International Retreats
                </h3>
                <p style={{ fontSize: "15px", lineHeight: "1.85", color: "rgba(255,255,255,0.8)" }}>
                  Sacred retreats dedicated to divine connection, inner peace, and spiritual growth. Through Dhikr and muraqaba (meditation), seekers transcend daily anxieties and experience abiding peace. Makhdoom Sahib journeys yearly to UK, Europe, and Turkey. Contact:{" "}
                  <a href="https://wa.me/12247166575" target="_blank" rel="noopener noreferrer" style={{ color: "#00C853", fontWeight: "bold", textDecoration: "underline" }}>
                    WhatsApp +1 224-716-6575
                  </a>
                </p>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "32px",
              }}
            >
              {/* Region 1: Europe */}
              <div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "#1565C0",
                    marginBottom: "16px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    paddingBottom: "8px",
                    borderBottom: "2px solid rgba(21, 101, 192, 0.2)",
                  }}
                >
                  🌍 Europe
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    { icon: "🇳🇴", name: "Norway" },
                    { icon: "🇸🇪", name: "Sweden" },
                    { icon: "🇪🇸", name: "Spain" },
                    { icon: "🇮🇹", name: "Italy" },
                    { icon: "🇬🇷", name: "Greece" },
                  ].map((item, i) => (
                    <div key={i} style={{ backgroundColor: "#FFFFFF", borderRadius: "10px", padding: "16px 20px", border: "1px solid rgba(0,0,0,0.05)", display: "flex", alignItems: "center", gap: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
                      <span style={{ fontSize: "22px" }}>{item.icon}</span>
                      <span className="english-heading" style={{ fontWeight: "bold", color: "#0A1628" }}>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Region 2: United Kingdom */}
              <div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "#E91E8C",
                    marginBottom: "16px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    paddingBottom: "8px",
                    borderBottom: "2px solid rgba(233, 30, 140, 0.2)",
                  }}
                >
                  🇬🇧 United Kingdom
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    { icon: "🏙️", name: "Ilford" },
                    { icon: "🏙️", name: "Watford" },
                    { icon: "🏙️", name: "Manchester" },
                    { icon: "🏙️", name: "Derby" },
                    { icon: "🏴", name: "Glasgow" },
                  ].map((item, i) => (
                    <div key={i} style={{ backgroundColor: "#FFFFFF", borderRadius: "10px", padding: "16px 20px", border: "1px solid rgba(0,0,0,0.05)", display: "flex", alignItems: "center", gap: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
                      <span style={{ fontSize: "22px" }}>{item.icon}</span>
                      <span className="english-heading" style={{ fontWeight: "bold", color: "#0A1628" }}>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Region 3: Turkey */}
              <div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "#00897B",
                    marginBottom: "16px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    paddingBottom: "8px",
                    borderBottom: "2px solid rgba(0, 137, 123, 0.2)",
                  }}
                >
                  🇹🇷 Turkey
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    { icon: "🕌", name: "Istanbul", detail: "Bosphorus Blessings" },
                    { icon: "🌹", name: "Konya", detail: "City of Rumi" },
                  ].map((item, i) => (
                    <div key={i} style={{ backgroundColor: "#FFFFFF", borderRadius: "10px", padding: "16px 20px", border: "1px solid rgba(0,0,0,0.05)", display: "flex", alignItems: "center", justifyContent: "space-between", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <span style={{ fontSize: "22px" }}>{item.icon}</span>
                        <span className="english-heading" style={{ fontWeight: "bold", color: "#0A1628" }}>{item.name}</span>
                      </div>
                      <span style={{ fontSize: "11px", color: "#888888", fontStyle: "italic" }}>{item.detail}</span>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    marginTop: "24px",
                    background: "linear-gradient(135deg, rgba(233,30,140,0.07), rgba(0,200,83,0.07))",
                    border: "1px solid rgba(233,30,140,0.15)",
                    borderRadius: "14px",
                    padding: "20px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontWeight: "bold", color: "#0A1628", marginBottom: "8px", fontSize: "14px" }}>To Join These Retreats:</div>
                  <a href="https://wa.me/12247166575" target="_blank" rel="noopener noreferrer" style={{ color: "#00C853", fontWeight: "bold", textDecoration: "none", fontSize: "15px" }}>
                    WhatsApp: +1 224-716-6575 ✦
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
