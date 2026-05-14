"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function UpcomingEvents() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const upcomingGatherings = [
    {
      title: "75th Annual Urs Mubarak of Imam Hussain (A.S.)",
      date: "July 5 - 6, 2025 (9th & 10th Muharram)",
      location: "Darbar Makhdoom Pur Sharif, Mureed, Chakwal",
      image: "/ors-imam-hussain-6jul2025-ft-img.jpg",
      color: "#10B981",
      badge: "Main Upcoming Gathering",
      desc: "Under the spiritual guidance of Pir Syed Rasool Shah Khaki (R.A.) and patronage of Hazrat Makhdoom Mahmood Mastwaar Qalandar. Includes Mehfil-e-Shabina after Isha prayers and the Main Urs Gathering at 10:00 AM. Featuring Naat recitation by Al-Haaj Muhammad Shehbaz Qamar Fareedi and special address by Allama Sahibzada Abid Hussain Shakoori Al-Hussaini.",
      highlights: ["Mehfil-e-Shabina: 9th Muharram", "Main Congregation: 10th Muharram, 10:00 AM"],
    },
    {
      title: "32nd Annual Urs Mubarak of Hazrat Peer Khaki Shah (R.A.)",
      date: "October 30, 2025",
      location: "Darbar Makhdoom Pur Sharif, Chakwal",
      image: "/02-ors-khaki-shah-29sep2024.jpg",
      color: "var(--gold-primary)",
      badge: "Annual Commemoration",
      desc: "The grand annual gathering honoring the Murshid of Majzooban, Qalandaran, and Salikaan, Huzoor Syed Rasool Shah Khaki (R.A.). Thousands of seekers gather for soulful Mehfil-e-Samaa (Qawwali), special discourses by Makhdoom Mahmood Mastwaar Qalandar, and heartfelt communal prayers.",
      highlights: ["Soulful Mehfil-e-Samaa", "Makhdoom Sahib Discourse & Mass Prayers"],
    },
    {
      title: "Seh Roza Chilla (Three-Day Spiritual Retreat)",
      date: "October 30 - November 2, 2025",
      location: "Darbar Makhdoom Pur Sharif, Chakwal",
      image: "/3-day-spirtual-retreart.jpg",
      color: "#3B82F6",
      badge: "Spiritual Chilla",
      desc: "Commencing immediately after the Urs of Hazrat Peer Khaki Shah (R.A.). A dedicated 3-day sanctuary for self-purification, fasting, deep meditation (Muraqaba), and nightly spiritual training lectures by Hazrat Makhdoom Mahmood Mastwaar Qalandar.",
      highlights: ["3 Days of Meditative Isolation", "Exclusive Nightly Spiritual Training"],
    },
    {
      title: "UK & Europe Spiritual Awakening Retreats",
      date: "August - September 2025",
      location: "United Kingdom, Norway, Spain, Italy & Turkey",
      image: "/ilford-london-visit-06sep2025-ft-img.jpg",
      color: "#E91E8C",
      badge: "International Itinerary",
      desc: "Annual international journey uniting seekers from diverse cultures. Features youth self-realization meditation workshops, weekly online Darse Tasawwuf, and grand gatherings in London (Ilford, Watford), Oslo, Istanbul, and Konya.",
      highlights: ["Youth Self-Realization Seminars", "Rumi Heritage Teachings in Konya"],
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
        transition: "background-color 0.6s ease, color 0.6s ease",
        position: "relative",
      }}
    >
      <Navbar theme={theme} setTheme={setTheme} />

      <main style={{ padding: "180px 5% 100px 5%", maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              display: "inline-block",
              padding: "6px 24px",
              borderRadius: "20px",
              border: "1px solid #E91E8C",
              color: "#E91E8C",
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            ✦ Mark Your Calendars
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="english-heading"
            style={{ fontSize: "3rem", marginBottom: "20px", color: "var(--gold-primary)" }}
          >
            Upcoming <span style={{ color: "#E91E8C" }}>Gatherings</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.3rem", color: "var(--text-muted)", maxWidth: "700px", margin: "0 auto" }}
          >
            Join thousands of seekers worldwide in our upcoming annual commemorations, international spiritual retreats, and weekly assemblies.
          </motion.p>
        </div>

        {/* List of Events */}
        <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
          {upcomingGatherings.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                backgroundColor: theme === "dark" ? "rgba(10, 18, 38, 0.6)" : "rgba(255, 255, 255, 0.6)",
                border: `1px solid ${theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"}`,
                borderRadius: "30px",
                padding: "40px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "40px",
                alignItems: "center",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              }}
            >
              <div>
                <div style={{ borderRadius: "20px", overflow: "hidden", aspectRatio: "16/10", border: "1px solid var(--gold-primary)" }}>
                  <img src={g.image} alt={g.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  <span style={{ padding: "4px 14px", borderRadius: "15px", fontSize: "10px", textTransform: "uppercase", fontWeight: "bold", border: `1px solid ${g.color}`, color: g.color }}>
                    {g.badge}
                  </span>
                  <span style={{ padding: "4px 14px", borderRadius: "15px", fontSize: "10px", textTransform: "uppercase", fontWeight: "bold", border: "1px solid var(--border-color)", color: "var(--text-muted)" }}>
                    📅 {g.date}
                  </span>
                </div>

                <h2 className="english-heading" style={{ fontSize: "2rem", color: "var(--gold-primary)" }}>
                  {g.title}
                </h2>

                <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.1rem", lineHeight: 1.6, color: "var(--text-color)" }}>
                  {g.desc}
                </p>

                <div style={{ backgroundColor: theme === "dark" ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.03)", padding: "16px 24px", borderRadius: "15px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {g.highlights.map((h, hIdx) => (
                    <div key={hIdx} style={{ fontSize: "14px", fontFamily: "var(--font-cormorant), serif", color: "var(--gold-light)" }}>
                      ✦ {h}
                    </div>
                  ))}
                </div>

                <div style={{ fontSize: "13px", fontWeight: "bold", color: "#E91E8C", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  📍 {g.location}
                </div>

                <div style={{ marginTop: "10px" }}>
                  <a
                    href="https://wa.me/12247166575"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      backgroundColor: "var(--gold-primary)",
                      color: "#000",
                      padding: "12px 28px",
                      borderRadius: "25px",
                      fontWeight: "bold",
                      textDecoration: "none",
                      fontSize: "12px",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      boxShadow: "0 4px 15px rgba(200, 169, 110, 0.4)",
                    }}
                  >
                    Inquire / Attend Gathering ✦
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Help Banner */}
        <div style={{ marginTop: "80px", padding: "60px", borderRadius: "30px", border: "1px solid #E91E8C", textAlign: "center", background: theme === "dark" ? "linear-gradient(135deg, rgba(233,30,140,0.1), rgba(21,101,192,0.1))" : "linear-gradient(135deg, rgba(233,30,140,0.05), rgba(21,101,192,0.05))" }}>
          <h3 className="english-heading" style={{ fontSize: "2.2rem", color: "var(--gold-primary)", marginBottom: "20px" }}>
            Need Travel & Accommodation Assistance?
          </h3>
          <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.2rem", color: "var(--text-muted)", maxWidth: "600px", margin: "0 auto 30px auto" }}>
            Darbar Makhdoom Pur Sharif welcomes all visitors. Our management committee provides complete guidance for international and national attendees regarding lodging, meals, and local transit.
          </p>
          <a
            href="https://wa.me/12247166575"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "#10B981",
              color: "#FFF",
              padding: "14px 32px",
              borderRadius: "30px",
              fontWeight: "bold",
              textDecoration: "none",
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              boxShadow: "0 4px 15px rgba(16, 185, 129, 0.4)",
            }}
          >
            Inquire on WhatsApp ✦
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
