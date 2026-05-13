"use client";

import React from "react";

export default function Mission() {
  return (
    <section
      id="mission"
      style={{
        padding: "100px 5%",
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        borderTop: "1px solid var(--border-color)",
        borderBottom: "1px solid var(--border-color)",
        position: "relative",
        zIndex: 3,
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "80px" }}>
        
        {/* Section Header */}
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: "16px", maxWidth: "800px", margin: "0 auto" }}>
          <span className="meta-text" style={{ color: "var(--gold-primary)", fontSize: "12px", fontWeight: "bold", letterSpacing: "0.25em" }}>
            TAB 3 — CORE CHARTER
          </span>
          <h2 className="english-heading" style={{ color: "var(--text-primary)", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: "bold", lineHeight: "1.1" }}>
            Our Mission &amp; Global Vision
          </h2>
          <div style={{ width: "80px", height: "3px", backgroundColor: "var(--gold-primary)", margin: "0 auto" }} />
        </div>

        {/* 1. VISION STATEMENT */}
        <div style={{ backgroundColor: "var(--card-bg)", borderRadius: "12px", padding: "50px", boxShadow: "0 15px 35px rgba(2, 132, 199, 0.15)", border: "1px solid var(--border-color)" }}>
          <h3 className="english-heading" style={{ fontSize: "28px", color: "var(--gold-primary)", fontWeight: "bold", marginBottom: "24px" }}>
            Our Vision: Love as a Way of Life
          </h3>
          <div className="english-body" style={{ fontSize: "16px", lineHeight: "1.8", color: "var(--text-muted)", display: "flex", flexDirection: "column", gap: "16px" }}>
            <p className="english-heading" style={{ fontSize: "20px", color: "var(--text-primary)", fontWeight: "bold" }}>
              Welcome to Muhabbat Mission International - where LOVE is not just a word, but a way of life.
            </p>
            <p>
              Founded in 1994 by Makhdoom Mahmood Mastwaar Qalandar, Muhabbat (Love) Mission International is dedicated to a vision free of sectarianism and politics. Our mission is rooted in love—love for Allah Almighty, love for His Messenger ﷺ, and love for each other. We pray that Allah blesses all human beings to love one another unconditionally.
            </p>
            <p>
              Makhdoom Mahmood Mastwaar Qalandar envisioned unity in diversity, aiming to achieve love, peace, and harmony among all people. Muhabbat Mission International strives to bring happiness, prosperity, and spiritual discovery through the mystical path toward oneness.
            </p>
            <p>
              The Darbar Shareef, Astana e Aliya Qadriya Makhdoomia, welcomes everyone, regardless of caste, creed, or religion. We offer a space for advice, guidance, and training in self-realization and self-improvement, helping individuals achieve happiness and well-being.
            </p>
            <p>
              Muhabbat Mission International, originally founded in Pakistan, has grown to encompass Asia and beyond, with established chapters in the USA, UK, Europe and South Africa. Today, our teachings inspire over 100,000 students worldwide, supported by more than 100 centers and institutions. Join us in our mission to promote love and unity across borders and cultures. Together, we can create a more compassionate and harmonious world.
            </p>
          </div>
        </div>

        {/* 2. EDUCATION */}
        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          <h3 className="english-heading" style={{ fontSize: "32px", color: "var(--text-primary)", fontWeight: "bold", borderBottom: "2px solid var(--gold-primary)", paddingBottom: "12px" }}>
            Education &amp; Academic Enlightenment
          </h3>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "30px" }}>
            {/* Jamia-tul-Mastwaar */}
            <div style={{ backgroundColor: "#FFFFFF", borderRadius: "12px", padding: "40px", boxShadow: "0 10px 30px rgba(0,0,0,0.08)", border: "1px solid rgba(2, 132, 199, 0.2)", display: "flex", flexDirection: "column", gap: "16px" }}>
              <h4 className="english-heading" style={{ fontSize: "22px", color: "var(--copper-accent)", fontWeight: "bold" }}>
                Jamia-tul-Mastwaar (Girls &amp; Boys Campus)
              </h4>
              <span className="meta-text" style={{ fontSize: "11px", color: "var(--gold-primary)" }}>A Beacon of Knowledge, Spirituality, and Human Excellence</span>
              <p className="english-body" style={{ fontSize: "15px", lineHeight: "1.7", color: "var(--text-muted)" }}>
                On February 18, 2018, Makhdoom Mahmood Mastwaar Qalandar founded Jamia-tul-Mastwaar, a pioneering educational institution that stands at the intersection of academic rigor and spiritual growth. It uniquely integrates Tasawwuf with both religious and worldly education.
              </p>
              <p className="english-body" style={{ fontSize: "15px", lineHeight: "1.7", color: "var(--text-muted)" }}>
                A key aspect of the curriculum includes Darse-Tasawwuf—weekly sessions where students explore deeper dimensions of self-awareness, closeness to Allah, and cultivation of positivity.
              </p>
              <a href="mailto:info@jamiatulmastwaar.com" style={{ marginTop: "10px", color: "var(--gold-primary)", fontWeight: "bold", fontSize: "14px", textDecoration: "none" }}>
                Contact: info@jamiatulmastwaar.com ✦
              </a>
            </div>

            {/* SNAMS */}
            <div style={{ backgroundColor: "#FFFFFF", borderRadius: "12px", padding: "40px", boxShadow: "0 10px 30px rgba(0,0,0,0.08)", border: "1px solid rgba(2, 132, 199, 0.2)", display: "flex", flexDirection: "column", gap: "16px" }}>
              <h4 className="english-heading" style={{ fontSize: "22px", color: "var(--copper-accent)", fontWeight: "bold" }}>
                SNAMS – Syeda Tun Nisa Al Mastwaar School
              </h4>
              <span className="meta-text" style={{ fontSize: "11px", color: "var(--gold-primary)" }}>Montessori to Grade 5 Progressive Education</span>
              <p className="english-body" style={{ fontSize: "15px", lineHeight: "1.7", color: "var(--text-muted)" }}>
                A progressive educational institution in Chakwal dedicated to redefining learning through a balanced blend of global academic standards and holistic child development. SNAMS nurtures intellectual growth alongside confidence, leadership, creativity, and strong communication skills.
              </p>
              <p className="english-body" style={{ fontSize: "15px", lineHeight: "1.7", color: "var(--text-muted)" }}>
                Guided by a vision to shape responsible, capable, and future-ready individuals prepared to thrive in an evolving world.
              </p>
              <a href="https://www.snamsschool.com" target="_blank" rel="noopener noreferrer" style={{ marginTop: "10px", color: "var(--gold-primary)", fontWeight: "bold", fontSize: "14px", textDecoration: "none" }}>
                Visit: https://www.snamsschool.com ✦
              </a>
            </div>
          </div>
        </div>

        {/* 3. WELFARE */}
        <div style={{ backgroundColor: "rgba(240, 249, 255, 0.85)", borderRadius: "12px", padding: "50px", boxShadow: "0 15px 35px rgba(2, 132, 199, 0.15)", border: "1px solid var(--border-color)" }}>
          <h3 className="english-heading" style={{ fontSize: "32px", color: "var(--text-primary)", fontWeight: "bold", marginBottom: "16px" }}>
            Welfare: Serving Humanity with Love and Compassion
          </h3>
          
          <blockquote className="english-heading" style={{ fontSize: "22px", color: "var(--gold-primary)", fontStyle: "italic", fontWeight: "bold", marginBottom: "24px" }}>
            &ldquo;Dignity is received through service. One who serves others achieves greatness.&rdquo;
            <span style={{ display: "block", fontSize: "14px", color: "var(--text-muted)", fontStyle: "normal", marginTop: "4px" }}>— Makhdoom Mahmood Mastwaar Qalandar</span>
          </blockquote>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginTop: "30px" }}>
            {[
              { title: "Humanitarian Welfare Events", desc: "Organizes social welfare initiatives to assist those in need, regardless of caste, creed, or background." },
              { title: "COVID-19 Relief Efforts", desc: "Played an active role in food distribution to the needy, ensuring no one went hungry during the crisis." },
              { title: "Free Medical Camps", desc: "Organizes doctor camps for those who cannot afford medical checkups, providing free healthcare." },
              { title: "Catastrophe Relief", desc: "Ready to serve in times of natural disasters or emergencies, offering aid and support." },
              { title: "24/7 Support", desc: "Doors are always open to those in need, ensuring no one is left without help anytime." },
              { title: "Counseling & Spiritual Healing", desc: "Daily counseling and spiritual healing sessions offered without any cost." },
            ].map((srv, i) => (
              <div key={i} style={{ backgroundColor: "#FFFFFF", padding: "24px", borderRadius: "8px", borderLeft: "3px solid var(--gold-primary)", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
                <h5 className="english-heading" style={{ fontSize: "18px", color: "var(--copper-accent)", fontWeight: "bold", marginBottom: "8px" }}>{srv.title}</h5>
                <p className="english-body" style={{ fontSize: "14px", color: "var(--text-muted)" }}>{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. EVENTS */}
        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          <h3 className="english-heading" style={{ fontSize: "32px", color: "var(--text-primary)", fontWeight: "bold", borderBottom: "2px solid var(--gold-primary)", paddingBottom: "12px" }}>
            Events &amp; Sacred Gatherings
          </h3>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
            {[
              {
                title: "Weekly Darse Tasawwuf & Dhikr",
                desc: "Every Friday, featuring Mehfil of Dhikr and a profound discourse by Makhdoom Sahib exploring the timeless wisdom in Hazrat Maulana Rumi's Masnavi.",
              },
              {
                title: "Weekly Online Youth Sessions",
                desc: "Every Saturday, transformative youth self-realization meditation workshops addressing modern challenges, ego, needs, and finding true purpose.",
              },
              {
                title: "Urs of Imam Hussain (Alayhi Salam)",
                desc: "Held annually on the 10th of Muharram, commemorating the supreme sacrifice and unparalleled legacy of courage and justice.",
              },
              {
                title: "Urs of Syed Rasool Shah Khaki",
                desc: "Soulful Qawwali sessions, inspiring speech by Makhdoom Sahib, attended annually by over 100,000 seekers globally.",
                linkText: "Read Syed Rasool Shah Khaki's Biography",
                linkHref: "#about",
              },
              {
                title: "Seh Roza Chilla (3-Day Retreat)",
                desc: "Begins the day after the Urs. Three days of self-purification, fasting, meditating, and nightly sermons free from worldly distractions.",
              },
              {
                title: "Eid Prayers",
                desc: "Sacred gatherings led by Makhdoom Sahib celebrating the joyous conclusion of Ramadan and Hajj pilgrimage.",
                linkText: "Contact Us for Timings",
                linkHref: "#contact",
              },
            ].map((evt, i) => (
              <div key={i} style={{ backgroundColor: "var(--card-bg)", padding: "30px", borderRadius: "8px", border: "1px solid rgba(2, 132, 199, 0.2)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <h4 className="english-heading" style={{ fontSize: "20px", color: "var(--gold-primary)", fontWeight: "bold", marginBottom: "12px" }}>{evt.title}</h4>
                  <p className="english-body" style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: "1.6" }}>{evt.desc}</p>
                </div>
                {evt.linkText && (
                  <a href={evt.linkHref} style={{ marginTop: "16px", display: "inline-block", fontSize: "13px", color: "var(--copper-accent)", fontWeight: "bold", textDecoration: "underline" }}>
                    {evt.linkText} ✦
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 5. ANNUAL PAKISTAN TOURS & INTERNATIONAL RETREATS */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "40px" }}>
          
          {/* Pakistan Tours */}
          <div style={{ backgroundColor: "#FFFFFF", borderRadius: "12px", padding: "40px", boxShadow: "0 10px 30px rgba(0,0,0,0.08)", border: "1px solid var(--border-color)" }}>
            <h4 className="english-heading" style={{ fontSize: "26px", color: "var(--text-primary)", fontWeight: "bold", marginBottom: "16px" }}>
              Annual Pakistan Tours
            </h4>
            <p className="english-body" style={{ fontSize: "15px", color: "var(--text-muted)", marginBottom: "20px", lineHeight: "1.7" }}>
              Makhdoom Sahib embarks on his annual tour across Pakistan, offering profound insights into sacred topics such as self-recognition, closeness to Allah, and nurturing love for Prophet Muhammad ﷺ.
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
              {[
                { city: "Lahore", sit: "8-Day Sittings" },
                { city: "Karachi", sit: "12-Day Sittings" },
                { city: "Wah Cantt", sit: "3-Day Sittings" },
                { city: "Islamabad", sit: "Blessed Sittings" },
                { city: "Mianchunnu", sit: "3-Day Sittings" },
              ].map((tour, i) => (
                <li key={i} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(0,0,0,0.05)", paddingBottom: "8px" }}>
                  <span className="english-heading" style={{ fontWeight: "bold", color: "var(--copper-accent)", fontSize: "16px" }}>{tour.city}</span>
                  <span className="meta-text" style={{ fontSize: "12px", color: "var(--gold-primary)" }}>{tour.sit}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="english-heading" style={{ color: "var(--gold-primary)", fontWeight: "bold", textDecoration: "underline", fontSize: "14px" }}>
              Inquire about your city ✦
            </a>
          </div>

          {/* International Retreats */}
          <div style={{ backgroundColor: "#FFFFFF", borderRadius: "12px", padding: "40px", boxShadow: "0 10px 30px rgba(0,0,0,0.08)", border: "1px solid var(--border-color)" }}>
            <h4 className="english-heading" style={{ fontSize: "26px", color: "var(--text-primary)", fontWeight: "bold", marginBottom: "16px" }}>
              International Retreats
            </h4>
            <p className="english-body" style={{ fontSize: "15px", color: "var(--text-muted)", marginBottom: "20px", lineHeight: "1.7" }}>
              Yearly, Makhdoom Sahib journeys to the UK, Europe, and Turkey, bringing seekers together from diverse backgrounds to share in the blessings of Sufi teachings.
            </p>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "24px" }}>
              <div>
                <h5 className="meta-text" style={{ fontSize: "11px", color: "var(--gold-primary)", fontWeight: "bold", marginBottom: "8px" }}>EUROPE</h5>
                <div style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: "1.6" }}>Norway<br/>Sweden<br/>Spain<br/>Italy<br/>Greece</div>
              </div>
              <div>
                <h5 className="meta-text" style={{ fontSize: "11px", color: "var(--gold-primary)", fontWeight: "bold", marginBottom: "8px" }}>UK</h5>
                <div style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: "1.6" }}>Ilford<br/>Watford<br/>Manchester<br/>Derby<br/>Glasgow</div>
              </div>
              <div>
                <h5 className="meta-text" style={{ fontSize: "11px", color: "var(--gold-primary)", fontWeight: "bold", marginBottom: "8px" }}>TURKEY</h5>
                <div style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: "1.6" }}>Istanbul<br/>Konya</div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <a href="https://api.whatsapp.com/send?phone=12247166575" target="_blank" rel="noopener noreferrer" style={{ color: "var(--copper-accent)", fontWeight: "bold", fontSize: "14px", textDecoration: "none" }}>
                WhatsApp: +1 224-716-6575 ✦
              </a>
              <a href="https://instagram.com/mastwaarqalandar" target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold-primary)", fontWeight: "bold", fontSize: "14px", textDecoration: "none" }}>
                Instagram: @mastwaarqalandar ✦
              </a>
            </div>
          </div>

        </div>

        {/* 6. BOOKS/LITERATURE LIST */}
        <div style={{ backgroundColor: "var(--card-bg)", borderRadius: "12px", padding: "40px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", border: "1px solid var(--border-color)" }}>
          <h4 className="english-heading" style={{ fontSize: "24px", color: "var(--gold-primary)", fontWeight: "bold", marginBottom: "20px" }}>
            Official Published Treatises (English &amp; Urdu)
          </h4>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
            {[
              { ur: "Maqam-e-Mahmood", en: "The Exalted Station" },
              { ur: "Makeen-e-Dil", en: "Dweller of the Heart" },
              { ur: "Tafseer-e-Mastwaar", en: "Interpretation of specific verses of Qur'an" },
              { ur: "Asrar-e-Mastwaar", en: "Mysteries of Mastwaar" },
              { ur: "Silsala-e-Dilbar", en: "The Divine Connection to the Beloved" },
            ].map((bk, i) => (
              <div key={i} style={{ padding: "16px", backgroundColor: "#FFFFFF", borderRadius: "8px", border: "1px solid rgba(0,0,0,0.05)" }}>
                <div className="english-heading" style={{ fontSize: "16px", fontWeight: "bold", color: "var(--text-primary)" }}>{i + 1}. {bk.ur}</div>
                <div className="meta-text" style={{ fontSize: "11px", color: "var(--copper-accent)", marginTop: "4px" }}>{bk.en}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
