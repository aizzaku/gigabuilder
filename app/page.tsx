"use client";

import { useState, useEffect, useCallback } from "react";
import { GigaApp } from "./types/app";
import appsData from "./data/apps.json";
import Header from "./components/Header";
import AppGrid from "./components/AppGrid";
import AppModal from "./components/AppModal";
import AppBottomSheet from "./components/AppBottomSheet";
import Footer from "./components/Footer";

const apps = appsData as GigaApp[];

export default function HomePage() {
  const [selectedApp, setSelectedApp] = useState<GigaApp | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleAppClick = useCallback((app: GigaApp) => {
    setSelectedApp(app);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedApp(null);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: "#060b14",
      }}
    >
      {/* Ambient background glow */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "300px",
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(4,131,171,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", flex: 1 }}>
        <Header />
        <main style={{ flex: 1 }}>
          <AppGrid apps={apps} onAppClick={handleAppClick} />
        </main>
        <Footer />
      </div>

      {selectedApp && (
        isMobile ? (
          <AppBottomSheet app={selectedApp} onClose={handleClose} />
        ) : (
          <AppModal app={selectedApp} onClose={handleClose} />
        )
      )}
    </div>
  );
}
