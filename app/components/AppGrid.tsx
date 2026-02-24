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
      <div style={{ marginBottom: "28px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
          <div
            style={{
              width: "4px",
              height: "20px",
              background: "linear-gradient(135deg, #F5C563 0%, #E89B0C 100%)",
              borderRadius: "2px",
              flexShrink: 0,
            }}
          />
          <p
            style={{
              margin: 0,
              fontFamily: "'Press Start 2P', monospace",
              fontSize: "10px",
              fontWeight: 400,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#F5C563",
              textShadow: "0 0 16px rgba(245,197,99,0.4)",
            }}
          >
            Community Apps
          </p>
        </div>
        <p
          style={{
            margin: "0 0 10px",
            fontSize: "13px",
            color: "#5a7080",
            fontFamily: "'Maven Pro', sans-serif",
            fontWeight: 500,
            letterSpacing: "0.3px",
          }}
        >
          Tools, trackers &amp; meta-games built by the Gigaverse community
        </p>
        <p
          style={{
            margin: 0,
            fontSize: "12px",
            color: "#0483AB",
            fontFamily: "'Maven Pro', sans-serif",
            fontWeight: 500,
            letterSpacing: "0.2px",
          }}
        >
          Are you a Gigaverse builder seeking feedback and looking to join this community hub board?{" "}
          <a
            href="https://discord.gg/glhfers"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#02C7D7",
              textDecoration: "underline",
              textDecorationColor: "rgba(2,199,215,0.4)",
              textUnderlineOffset: "3px",
              transition: "color 150ms ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F5C563")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#02C7D7")}
          >
            Reach out to us on Discord.
          </a>
        </p>
      </div>

      {/* Accent divider */}
      <div className="accent-line-gold" style={{ marginBottom: "28px" }} />

      {/* Grid */}
      <div className="grid-2col stagger-children">
        {activeApps.map((app) => (
          <AppCard key={app.slug} app={app} onClick={onAppClick} />
        ))}
      </div>
    </section>
  );
}
