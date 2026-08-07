"use client";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

// 1.2s on cold load to completely mask the hydration/scroll-trigger jumps.
// Route changes have no hydration to mask, so they get a shorter beat.
const FIRST_LOAD_DURATION = 1200;
const ROUTE_CHANGE_DURATION = 700;
// Must match the CSS opacity transition below.
const FADE_DURATION = 500;

export default function Preloader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);
  const [renderedPath, setRenderedPath] = useState(pathname);
  const isFirstLoad = useRef(true);

  // Replay the preloader whenever the route changes. Resetting during render
  // (rather than in an effect) means the overlay is already in place on the
  // first commit of the new page, so its content never flashes through.
  if (pathname !== renderedPath) {
    setRenderedPath(pathname);
    setLoading(true);
    setVisible(true);
  }

  useEffect(() => {
    const duration = isFirstLoad.current
      ? FIRST_LOAD_DURATION
      : ROUTE_CHANGE_DURATION;
    isFirstLoad.current = false;

    let fadeTimer: ReturnType<typeof setTimeout>;
    const timer = setTimeout(() => {
      setLoading(false);
      // Wait for the CSS fade-out transition to finish before removing from DOM
      fadeTimer = setTimeout(() => setVisible(false), FADE_DURATION);
    }, duration);

    return () => {
      clearTimeout(timer);
      clearTimeout(fadeTimer);
    };
  }, [pathname]);

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
