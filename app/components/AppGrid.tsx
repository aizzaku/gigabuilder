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
        padding: "48px 24px 72px",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Section label */}
      <div style={{ marginBottom: "24px" }}>
        <p
          style={{
            margin: "0 0 4px",
            fontFamily: "'Orbitron', sans-serif",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#00d4ff",
          }}
        >
          ◆ Community Apps
        </p>
        <p
          style={{
            margin: 0,
            fontSize: "13px",
            color: "#8b9bb4",
            fontFamily: "'Rajdhani', sans-serif",
            fontWeight: 500,
            letterSpacing: "0.3px",
          }}
        >
          Tools, trackers &amp; meta-games built by the Gigaverse community
        </p>
      </div>

      {/* Grid */}
      <div
        className="stagger-children"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "16px",
        }}
      >
        {activeApps.map((app) => (
          <AppCard key={app.slug} app={app} onClick={onAppClick} />
        ))}
      </div>
    </section>
  );
}
