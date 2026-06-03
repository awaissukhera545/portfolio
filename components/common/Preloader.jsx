"use client";
import React, { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Wait for the window to fully load and animations to initialize
    const timer = setTimeout(() => {
      setLoading(false);
      // Wait for the CSS fade-out transition to finish before removing from DOM
      setTimeout(() => setVisible(false), 500); 
    }, 1200); // 1.2s delay to completely mask the hydration/scroll-trigger jumps

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <>
      <style>{`
        .portfolio-preloader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #0b0b0b; /* Match dark theme */
          z-index: 999999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 1;
          transition: opacity 0.5s ease-out, visibility 0.5s ease-out;
        }
        .portfolio-preloader.hide {
          opacity: 0;
          visibility: hidden;
        }
        .preloader-logo {
          width: 150px;
          height: auto;
          animation: pulseGlow 1.5s infinite alternate ease-in-out;
          filter: drop-shadow(0 0 10px rgba(248, 0, 47, 0.2));
        }
        @keyframes pulseGlow {
          0% {
            transform: scale(0.95);
            filter: drop-shadow(0 0 10px rgba(248, 0, 47, 0.2));
            opacity: 0.8;
          }
          100% {
            transform: scale(1.05);
            filter: drop-shadow(0 0 25px rgba(248, 0, 47, 0.8));
            opacity: 1;
          }
        }
        .preloader-text {
          margin-top: 30px;
          color: #fff;
          font-family: inherit;
          letter-spacing: 4px;
          font-size: 12px;
          text-transform: uppercase;
          opacity: 0.7;
          animation: fadeBlink 1.5s infinite alternate ease-in-out;
        }
        @keyframes fadeBlink {
          0% { opacity: 0.3; }
          100% { opacity: 1; }
        }
      `}</style>
      <div className={`portfolio-preloader ${!loading ? "hide" : ""}`}>
        <img 
          src="/assets/images/logo/logo-for-dark.png" 
          alt="MARS Logo" 
          className="preloader-logo" 
        />
        <div className="preloader-text">Loading Experience</div>
      </div>
    </>
  );
}
