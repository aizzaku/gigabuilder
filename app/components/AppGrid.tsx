"use client";

import { GigaApp } from "../types/app";
import AppCard from "./AppCard";

interface AppGridProps {
  apps: GigaApp[];
  onAppClick: (app: GigaApp) => void;
}

export default function AppGrid({ apps, onAppClick }: AppGridProps) {
  const activeApps = apps.filter((a) => a.status === "active");

  return (
    <section
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "52px 24px 72px",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Section label */}
      <div style={{ marginBottom: "28px" }} className="animate-fade-up">
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
          <div
            style={{
              width: "2px",
              height: "16px",
              background: "linear-gradient(to bottom, #00d4ff, rgba(0,212,255,0.2))",
              borderRadius: "1px",
              flexShrink: 0,
            }}
          />
          <p
            style={{
              margin: 0,
              fontFamily: "'Fragment Mono', monospace",
              fontSize: "10px",
              fontWeight: 400,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#00d4ff",
            }}
          >
            Community Apps
          </p>
          <div
            style={{
              flex: 1,
              height: "1px",
              background: "linear-gradient(to right, rgba(255,255,255,0.06), transparent)",
            }}
          />
        </div>
        <p
          style={{
            margin: "0 0 0 12px",
            fontSize: "13px",
            color: "rgba(255,255,255,0.35)",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 400,
          }}
        >
          Tools, trackers &amp; meta-games built by the Gigaverse community
        </p>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "16px",
        }}
      >
        {activeApps.map((app, i) => (
          <div
            key={app.slug}
            className={`animate-scale-in stagger-${Math.min(i + 1, 4)}`}
          >
            <AppCard app={app} onClick={onAppClick} />
          </div>
        ))}
      </div>
    </section>
  );
}
