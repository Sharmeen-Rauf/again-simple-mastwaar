"use client";

import React, { useEffect, useRef, useState } from "react";

// Web Audio Synth Drone Fallback
class EasternDroneSynth {
  private ctx: AudioContext | null = null;
  private oscillators: OscillatorNode[] = [];
  private gainNode: GainNode | null = null;
  private filterNode: BiquadFilterNode | null = null;

  start() {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioCtx();
      
      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(0, this.ctx.currentTime);

      this.filterNode = this.ctx.createBiquadFilter();
      this.filterNode.type = "lowpass";
      this.filterNode.frequency.setValueAtTime(320, this.ctx.currentTime); // Soft, warm filter

      // Base note A2 (110 Hz)
      const osc1 = this.ctx.createOscillator();
      osc1.type = "triangle";
      osc1.frequency.setValueAtTime(110, this.ctx.currentTime);

      // Fifth E3 (165 Hz) - tanpura resonance
      const osc2 = this.ctx.createOscillator();
      osc2.type = "sawtooth"; // Richer harmonics
      osc2.frequency.setValueAtTime(164.81, this.ctx.currentTime);

      // Octave A3 (220 Hz) - high drone
      const osc3 = this.ctx.createOscillator();
      osc3.type = "triangle";
      osc3.frequency.setValueAtTime(220, this.ctx.currentTime);

      osc1.connect(this.filterNode);
      osc2.connect(this.filterNode);
      osc3.connect(this.filterNode);
      this.filterNode.connect(this.gainNode);
      this.gainNode.connect(this.ctx.destination);

      osc1.start();
      osc2.start();
      osc3.start();

      this.oscillators = [osc1, osc2, osc3];

      // Fade in slowly
      this.gainNode.gain.linearRampToValueAtTime(0.04, this.ctx.currentTime + 3.0);
    } catch (e) {
      console.error("Web Audio Synth failed to start", e);
    }
  }

  stop() {
    if (this.gainNode && this.ctx) {
      this.gainNode.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 1.0);
      setTimeout(() => {
        this.oscillators.forEach((osc) => {
          try {
            osc.stop();
          } catch {}
        });
        if (this.ctx && this.ctx.state !== "closed") {
          this.ctx.close();
        }
      }, 1000);
    }
  }
}

export default function AudioEngine() {
  const [isPlaying, setIsPlaying] = useState(false);
  const synthRef = useRef<EasternDroneSynth | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const howlerRef = useRef<any>(null);

  useEffect(() => {
    // Dynamically load howler to support SSR safely
    import("howler").then(({ Howl }) => {
      const sound = new Howl({
        src: ["https://assets.mixkit.co/active_storage/sfx/123/123-100.wav"], // Fallback asset
        html5: true,
        loop: true,
        volume: 0.05,
        onloaderror: () => {
          console.warn("Howler load error, falling back to custom Synthesizer Drone");
        },
      });
      howlerRef.current = sound;
    });

    return () => {
      if (howlerRef.current) howlerRef.current.unload();
      if (synthRef.current) synthRef.current.stop();
    };
  }, []);

  const toggleAudio = () => {
    if (isPlaying) {
      // Mute/Stop
      if (howlerRef.current && howlerRef.current.playing()) {
        howlerRef.current.fade(0.05, 0, 500);
        setTimeout(() => howlerRef.current.pause(), 500);
      }
      if (synthRef.current) {
        synthRef.current.stop();
        synthRef.current = null;
      }
      setIsPlaying(false);
      // Dispatch global event for visualizer
      window.dispatchEvent(new CustomEvent("sufi-audio-state", { detail: { playing: false } }));
    } else {
      // Start ambient play
      setIsPlaying(true);
      window.dispatchEvent(new CustomEvent("sufi-audio-state", { detail: { playing: true } }));

      // Attempt standard play, else trigger our gorgeous Tanpura synth drone
      if (howlerRef.current) {
        howlerRef.current.play();
        howlerRef.current.fade(0, 0.05, 1500);
      } else {
        const synth = new EasternDroneSynth();
        synth.start();
        synthRef.current = synth;
      }
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      {/* Small Glowing Label */}
      <div
        style={{
          fontFamily: "var(--font-space-mono), monospace",
          fontSize: "9px",
          color: isPlaying ? "var(--gold-primary)" : "var(--text-secondary)",
          backgroundColor: "rgba(5, 11, 26, 0.8)",
          border: "1px solid var(--border-color)",
          padding: "4px 8px",
          borderRadius: "4px",
          letterSpacing: "0.15em",
          opacity: 0.8,
          pointerEvents: "none",
          transition: "all 0.3s ease",
        }}
      >
        {isPlaying ? "AMBIENT QAWWALI ACTIVE" : "LISTEN SILENTLY"}
      </div>

      {/* Main floating controller */}
      <button
        onClick={toggleAudio}
        data-cursor="crescent"
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          backgroundColor: "var(--midnight-navy)",
          border: `1.5px solid ${isPlaying ? "var(--gold-primary)" : "var(--gold-dim)"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          outline: "none",
          boxShadow: isPlaying
            ? "0 0 15px rgba(200, 169, 110, 0.4)"
            : "0 4px 10px rgba(0, 0, 0, 0.4)",
          transition: "all 0.3s ease",
        }}
        aria-label="Toggle spiritual music drone"
      >
        {isPlaying ? (
          /* Speaker Playing waves */
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="var(--gold-primary)"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M11 5L6 9H2v6h4l5 4V5z" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
        ) : (
          /* Speaker Muted */
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="var(--text-secondary)"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M11 5L6 9H2v6h4l5 4V5z" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        )}
      </button>
    </div>
  );
}
