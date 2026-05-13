import type { Metadata } from "next";
import { Amiri, Cormorant_Garamond, Noto_Nastaliq_Urdu, DM_Serif_Display, Space_Mono } from "next/font/google";
import "./globals.css";

const amiri = Amiri({
  weight: ["400", "700"],
  subsets: ["arabic", "latin"],
  variable: "--font-amiri",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

// Noto Nastaliq Urdu is imported with subsets: arabic and weight: 400 or 700.
// In Google fonts, Noto Nastaliq Urdu has weight 400 and 700. We can load them.
const notoUrdu = Noto_Nastaliq_Urdu({
  weight: ["400", "700"],
  subsets: ["arabic"],
  variable: "--font-noto-urdu",
});

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Mastwaar.com — Muhabbat Mission International",
  description: "Awwwards-level cinematic portal for Muhabbat Mission International. Founded in 1994, Chakwal, Pakistan. Reimagined by Makhdoom Mastwaar Qalandar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${amiri.variable} ${cormorant.variable} ${notoUrdu.variable} ${dmSerif.variable} ${spaceMono.variable}`}
    >
      <body
        style={{
          fontFamily: "var(--font-cormorant), serif",
          margin: 0,
          padding: 0,
        }}
      >
        {children}
      </body>
    </html>
  );
}
