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
      className="card-elevated card-hover border-gradient-hover"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        borderRadius: "10px",
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
          background: "linear-gradient(135deg, #0d1521 0%, #080d14 100%)",
          flexShrink: 0,
        }}
      >
        {previewImage ? (
          <Image
            src={previewImage}
            alt={`${app.name} screenshot`}
            fill
            style={{ objectFit: "cover", transition: "transform 400ms ease" }}
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
              opacity: 0.2,
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
            background: "linear-gradient(to top, #111925, transparent)",
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
            borderRadius: "6px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
            background: "#080d14",
            boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
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
              fontFamily: "'Sora', sans-serif",
              fontSize: "15px",
              fontWeight: 600,
              color: "#ffffff",
              letterSpacing: "-0.2px",
              lineHeight: 1.3,
            }}
          >
            {app.name}
          </h3>
          <p
            style={{
              margin: "3px 0 0",
              fontSize: "12px",
              color: "rgba(255,255,255,0.45)",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
            }}
          >
            {app.subtitle}
          </p>
        </div>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
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
                color: "rgba(255,255,255,0.5)",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400,
                lineHeight: 1.5,
              }}
            >
              <span
                style={{
                  color: "#00d4ff",
                  flexShrink: 0,
                  marginTop: "4px",
                  fontSize: "5px",
                  lineHeight: 1,
                }}
              >
                ●
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </button>
  );
}
