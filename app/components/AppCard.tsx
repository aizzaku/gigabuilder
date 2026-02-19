"use client";

import Image from "next/image";
import { GigaApp } from "../types/app";
import TagPill from "./TagPill";

interface AppCardProps {
  app: GigaApp;
  onClick: (app: GigaApp) => void;
}

export default function AppCard({ app, onClick }: AppCardProps) {
  const previewImage = app.screenshots[0] ?? null;
  const displayFeatures = app.keyFeatures.slice(0, 3);

  return (
    <button
      onClick={() => onClick(app)}
      aria-label={`View ${app.name} details`}
      className="card-hover pixel-border"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        background: "#162942",
        borderRadius: "2px",
        overflow: "hidden",
        cursor: "pointer",
        textAlign: "left",
        padding: 0,
      }}
    >
      {/* Screenshot thumbnail */}
      <div
        style={{
          width: "100%",
          aspectRatio: "16/9",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #0d1f3c 0%, #0a1628 100%)",
          flexShrink: 0,
        }}
      >
        {previewImage ? (
          <Image
            src={previewImage}
            alt={`${app.name} screenshot`}
            fill
            style={{ objectFit: "cover", transition: "transform 300ms ease" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: 0.15,
            }}
          >
            <Image src="/logo.png" alt="" width={48} height={48} />
          </div>
        )}

        {/* Bottom gradient fade */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "48px",
            background: "linear-gradient(to top, #162942, transparent)",
            pointerEvents: "none",
          }}
        />

        {/* App logo — bottom-left overlay */}
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "12px",
            width: "32px",
            height: "32px",
            borderRadius: "2px",
            overflow: "hidden",
            border: "1px solid #1e3a5f",
            background: "#0a1628",
          }}
        >
          <Image
            src={app.logo}
            alt={`${app.name} logo`}
            width={32}
            height={32}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          padding: "14px 16px 18px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          flex: 1,
        }}
      >
        {/* Name + subtitle */}
        <div>
          <h3
            style={{
              margin: 0,
              fontFamily: "'Orbitron', sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "0.5px",
              lineHeight: 1.3,
              textTransform: "uppercase",
            }}
          >
            {app.name}
          </h3>
          <p
            style={{
              margin: "4px 0 0",
              fontSize: "12px",
              color: "#8b9bb4",
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 500,
              letterSpacing: "0.2px",
            }}
          >
            {app.subtitle}
          </p>
        </div>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
          {app.tags.map((tag) => (
            <TagPill key={tag} tag={tag} small />
          ))}
        </div>

        {/* Key features */}
        <ul
          style={{
            margin: 0,
            padding: 0,
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          {displayFeatures.map((feature, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "8px",
                fontSize: "12px",
                color: "#8b9bb4",
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 500,
                lineHeight: 1.5,
                letterSpacing: "0.2px",
              }}
            >
              <span
                style={{
                  color: "#00d4ff",
                  flexShrink: 0,
                  marginTop: "2px",
                  fontSize: "8px",
                  lineHeight: 1.5,
                }}
              >
                ◆
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </button>
  );
}
