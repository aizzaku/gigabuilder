"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { GigaApp } from "../types/app";
import TagPill from "./TagPill";

interface AppModalProps {
  app: GigaApp;
  onClose: () => void;
}

const XSmallIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function AppModal({ app, onClose }: AppModalProps) {
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const hasMultiple = app.screenshots.length > 1;

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  useEffect(() => {
    closeButtonRef.current?.focus();
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.classList.add("modal-open");
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.classList.remove("modal-open");
    };
  }, [onClose]);

  return (
    <div
      onClick={handleBackdropClick}
      className="animate-fade-in"
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.75)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
      role="dialog"
      aria-modal="true"
      aria-label={`${app.name} details`}
    >
      <div
        ref={dialogRef}
        className="animate-scale-in card-glass"
        style={{
          width: "100%",
          maxWidth: "740px",
          maxHeight: "90vh",
          overflowY: "auto",
          position: "relative",
          borderRadius: "12px",
          boxShadow:
            "0 0 0 1px rgba(0,212,255,0.1), 0 32px 80px rgba(0,0,0,0.7)",
        }}
      >
        {/* Close button */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            width: "30px",
            height: "30px",
            background: "rgba(8,13,20,0.85)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "6px",
            color: "rgba(255,255,255,0.5)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
            fontSize: "18px",
            lineHeight: 1,
            transition: "all 200ms ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#ffffff";
            e.currentTarget.style.borderColor = "rgba(0,212,255,0.4)";
            e.currentTarget.style.background = "rgba(0,212,255,0.08)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "rgba(255,255,255,0.5)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
            e.currentTarget.style.background = "rgba(8,13,20,0.85)";
          }}
        >
          ×
        </button>

        {/* Screenshot area */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16/9",
            background: "linear-gradient(135deg, #0d1521 0%, #080d14 100%)",
            overflow: "hidden",
            borderRadius: "12px 12px 0 0",
          }}
        >
          <Image
            src={app.screenshots[activeScreenshot]}
            alt={`${app.name} screenshot ${activeScreenshot + 1}`}
            fill
            style={{ objectFit: "cover" }}
            sizes="740px"
            priority
          />

          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "80px",
              background: "linear-gradient(to top, rgba(13,21,33,0.95), transparent)",
              pointerEvents: "none",
            }}
          />

          {hasMultiple && (
            <>
              {[
                { dir: "prev", pos: "left", char: "‹", label: "Previous screenshot" },
                { dir: "next", pos: "right", char: "›", label: "Next screenshot" },
              ].map(({ dir, pos, char, label }) => (
                <button
                  key={dir}
                  onClick={() =>
                    setActiveScreenshot((i) =>
                      dir === "prev"
                        ? i === 0 ? app.screenshots.length - 1 : i - 1
                        : i === app.screenshots.length - 1 ? 0 : i + 1
                    )
                  }
                  aria-label={label}
                  style={{
                    position: "absolute",
                    [pos]: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "32px",
                    height: "32px",
                    background: "rgba(8,13,20,0.8)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "6px",
                    color: "rgba(255,255,255,0.8)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                    lineHeight: 1,
                    transition: "all 200ms ease",
                    backdropFilter: "blur(4px)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,212,255,0.4)";
                    e.currentTarget.style.color = "#00d4ff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.8)";
                  }}
                >
                  {char}
                </button>
              ))}

              {/* Dot indicators */}
              <div
                style={{
                  position: "absolute",
                  bottom: "14px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  gap: "6px",
                }}
              >
                {app.screenshots.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveScreenshot(i)}
                    aria-label={`Screenshot ${i + 1}`}
                    style={{
                      width: i === activeScreenshot ? "20px" : "6px",
                      height: "4px",
                      borderRadius: "2px",
                      background: i === activeScreenshot ? "#00d4ff" : "rgba(255,255,255,0.3)",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      transition: "all 250ms cubic-bezier(0.4,0,0.2,1)",
                      boxShadow: i === activeScreenshot ? "0 0 8px rgba(0,212,255,0.5)" : "none",
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content */}
        <div style={{ padding: "22px 26px 28px" }}>
          {/* Header row */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "12px",
              marginBottom: "14px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "8px",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.08)",
                  flexShrink: 0,
                }}
              >
                <Image src={app.logo} alt={`${app.name} logo`} width={42} height={42} style={{ objectFit: "cover" }} />
              </div>
              <div>
                <h2
                  style={{
                    margin: 0,
                    fontFamily: "'Sora', sans-serif",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#ffffff",
                    letterSpacing: "-0.3px",
                    lineHeight: 1.2,
                  }}
                >
                  {app.name}
                </h2>
                <p
                  style={{
                    margin: "3px 0 0",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.45)",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 400,
                  }}
                >
                  {app.subtitle}
                </p>
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", justifyContent: "flex-end", flexShrink: 0 }}>
              {app.tags.map((tag) => <TagPill key={tag} tag={tag} />)}
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              height: "1px",
              background: "linear-gradient(to right, rgba(255,255,255,0.07), transparent)",
              marginBottom: "16px",
            }}
          />

          {/* Description */}
          <p
            style={{
              margin: "0 0 20px",
              fontSize: "13px",
              color: "rgba(255,255,255,0.65)",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
              lineHeight: 1.75,
            }}
          >
            {app.description}
          </p>

          {/* Key features */}
          <div style={{ marginBottom: "22px" }}>
            <p
              style={{
                margin: "0 0 10px",
                fontFamily: "'Fragment Mono', monospace",
                fontSize: "10px",
                fontWeight: 400,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#00d4ff",
              }}
            >
              Key Features
            </p>
            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: "none",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: "6px",
              }}
            >
              {app.keyFeatures.map((f, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "8px",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.5)",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 400,
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ color: "#00d4ff", fontSize: "5px", flexShrink: 0, marginTop: "5px" }}>●</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <div
            style={{
              height: "1px",
              background: "linear-gradient(to right, rgba(255,255,255,0.07), transparent)",
              marginBottom: "18px",
            }}
          />

          {/* Builders + launch */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <p
                style={{
                  margin: "0 0 8px",
                  fontFamily: "'Fragment Mono', monospace",
                  fontSize: "10px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.3)",
                }}
              >
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
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "12px",
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 500,
                      textDecoration: "none",
                      padding: "4px 10px",
                      border: "1px solid rgba(255,255,255,0.07)",
                      borderRadius: "6px",
                      background: "rgba(255,255,255,0.03)",
                      transition: "all 200ms ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#00d4ff";
                      e.currentTarget.style.borderColor = "rgba(0,212,255,0.3)";
                      e.currentTarget.style.background = "rgba(0,212,255,0.06)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                      e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                    }}
                  >
                    <XSmallIcon />
                    {builder.handle}
                  </a>
                ))}
              </div>
            </div>

            <a
              href={app.launchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "11px 22px",
                textDecoration: "none",
                borderRadius: "7px",
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
    </div>
  );
}
