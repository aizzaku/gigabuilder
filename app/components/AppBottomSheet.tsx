"use client";

import { useEffect, useRef, useCallback } from "react";
import { GigaApp } from "../types/app";
import TagPill from "./TagPill";

interface AppBottomSheetProps {
  app: GigaApp;
  onClose: () => void;
}

const XSmallIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function AppBottomSheet({ app, onClose }: AppBottomSheetProps) {
  const sheetRef = useRef<HTMLDivElement>(null);
  const startYRef = useRef<number | null>(null);
  const currentYRef = useRef<number>(0);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.body.classList.add("modal-open");
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.classList.remove("modal-open");
    };
  }, [onClose]);

  const handleTouchStart = (e: React.TouchEvent) => {
    startYRef.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (startYRef.current === null) return;
    const delta = e.touches[0].clientY - startYRef.current;
    currentYRef.current = Math.max(0, delta);
    if (sheetRef.current) {
      sheetRef.current.style.transform = `translateY(${currentYRef.current}px)`;
    }
  };

  const handleTouchEnd = () => {
    if (currentYRef.current > 100) {
      onClose();
    } else if (sheetRef.current) {
      sheetRef.current.style.transform = "translateY(0)";
    }
    startYRef.current = null;
    currentYRef.current = 0;
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="animate-fade-in"
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.85)",
        zIndex: 1000,
        display: "flex",
        alignItems: "flex-end",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
      }}
      role="dialog"
      aria-modal="true"
      aria-label={`${app.name} details`}
    >
      <div
        ref={sheetRef}
        className="animate-slide-up-sheet card-giga"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          width: "100%",
          borderRadius: "12px 12px 0 0",
          maxHeight: "85vh",
          overflowY: "auto",
          boxShadow: "0 -4px 24px rgba(0,0,0,0.6), 0 0 0 1px #0f2a3a",
          borderBottom: "none",
        }}
      >
        {/* Drag handle */}
        <div style={{ display: "flex", justifyContent: "center", padding: "12px 0 6px", cursor: "grab" }}>
          <div style={{ width: "32px", height: "3px", background: "#0f2a3a", borderRadius: "2px" }} />
        </div>

        <div style={{ padding: "6px 20px 36px" }}>
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "12px",
              marginBottom: "14px",
            }}
          >
            <div>
              <h2
                style={{
                  margin: 0,
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: "11px",
                  fontWeight: 400,
                  color: "#ffffff",
                  letterSpacing: "0.5px",
                  lineHeight: 1.6,
                  textTransform: "uppercase",
                }}
              >
                {app.name}
              </h2>
              <p style={{ margin: "6px 0 0", fontSize: "12px", color: "#5a7080", fontFamily: "'Maven Pro', sans-serif", fontWeight: 500, letterSpacing: "0.2px" }}>
                {app.subtitle}
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", justifyContent: "flex-end", flexShrink: 0 }}>
              {app.tags.map((tag) => <TagPill key={tag} tag={tag} small />)}
            </div>
          </div>

          {/* Divider */}
          <div className="accent-line-teal" style={{ marginBottom: "14px" }} />

          {/* Description */}
          <p
            style={{
              margin: "0 0 16px",
              fontSize: "13px",
              color: "#5a7080",
              fontFamily: "'Maven Pro', sans-serif",
              fontWeight: 500,
              lineHeight: 1.7,
              letterSpacing: "0.3px",
            }}
          >
            {app.description}
          </p>

          {/* Builders */}
          <div style={{ marginBottom: "20px" }}>
            <p style={{ margin: "0 0 8px", fontFamily: "'Press Start 2P', monospace", fontSize: "7px", fontWeight: 400, letterSpacing: "0.15em", textTransform: "uppercase", color: "#5a7080" }}>
              Built by
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {app.builders.map((builder) => (
                <a
                  key={builder.handle}
                  href={builder.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    color: "#5a7080",
                    fontSize: "12px",
                    fontFamily: "'Maven Pro', sans-serif",
                    fontWeight: 600,
                    letterSpacing: "0.3px",
                    textDecoration: "none",
                    padding: "4px 10px",
                    border: "1px solid #0f2a3a",
                    borderRadius: "2px",
                    background: "#060b14",
                  }}
                >
                  <XSmallIcon />
                  {builder.handle}
                </a>
              ))}
            </div>
          </div>

          {/* Launch CTA */}
          <a
            href={app.launchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              width: "100%",
              padding: "13px 24px",
              textDecoration: "none",
              borderRadius: "2px",
            }}
          >
            Launch App
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
