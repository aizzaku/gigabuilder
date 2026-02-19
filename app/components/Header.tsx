"use client";

import Image from "next/image";

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const DiscordIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.03.053a19.9 19.9 0 0 0 5.993 3.03.077.077 0 0 0 .084-.028 13.995 13.995 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

export default function Header() {
  return (
    <header
      style={{
        borderBottom: "1px solid #1e3a5f",
        background: "linear-gradient(180deg, rgba(10,22,40,1) 0%, rgba(10,22,40,0.95) 100%)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
          <Image
            src="/logo.png"
            alt="Gigaverse"
            width={36}
            height={36}
            style={{ borderRadius: "4px" }}
          />
          <span
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Gigabuilder
          </span>
        </div>

        {/* Description */}
        <p
          style={{
            color: "#8b9bb4",
            fontSize: "13px",
            fontFamily: "'Rajdhani', sans-serif",
            fontWeight: 500,
            letterSpacing: "0.3px",
            margin: 0,
            display: "none",
          }}
          className="header-desc"
        >
          Community-built tools for Gigaverse
        </p>

        {/* External links */}
        <nav style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <a
            href="https://gigaverse.io"
            target="_blank"
            rel="noopener noreferrer"
            title="Gigaverse"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "#8b9bb4",
              padding: "6px 10px",
              borderRadius: "2px",
              fontSize: "12px",
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.5px",
              textDecoration: "none",
              transition: "color 150ms ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#00d4ff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#8b9bb4")}
          >
            <GlobeIcon />
            <span>Website</span>
          </a>

          <a
            href="https://x.com/playgigaverse"
            target="_blank"
            rel="noopener noreferrer"
            title="X / Twitter"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "#8b9bb4",
              padding: "6px 10px",
              borderRadius: "2px",
              fontSize: "12px",
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.5px",
              textDecoration: "none",
              transition: "color 150ms ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#00d4ff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#8b9bb4")}
          >
            <XIcon />
            <span>X</span>
          </a>

          <a
            href="https://discord.gg/glhfers"
            target="_blank"
            rel="noopener noreferrer"
            title="Discord"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "#8b9bb4",
              padding: "6px 10px",
              borderRadius: "2px",
              fontSize: "12px",
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.5px",
              textDecoration: "none",
              transition: "color 150ms ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#7289da")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#8b9bb4")}
          >
            <DiscordIcon />
            <span>Discord</span>
          </a>
        </nav>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .header-desc { display: block !important; }
        }
      `}</style>
    </header>
  );
}
