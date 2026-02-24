export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #0f2a3a",
        padding: "24px",
        background: "rgba(6,11,20,0.95)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "11px",
            color: "#5a7080",
            fontFamily: "'Maven Pro', sans-serif",
            fontWeight: 500,
            lineHeight: 1.65,
            letterSpacing: "0.2px",
          }}
        >
          <span style={{ color: "#e0e0e0", fontWeight: 700 }}>Disclaimer:</span>{" "}
          Gigaverse Hub is a community platform showcasing apps, tools, and content created by independent
          Gigaverse builders and creators. Please note, these are third-party initiatives and operate outside
          of our direct control. We do not endorse, audit, or guarantee their safety, reliability, or security.
          Please &ldquo;DYOR&rdquo; &amp; exercise your own judgement &amp; any necessary caution when engaging
          with 3rd party content.
        </p>
        <p
          style={{
            margin: 0,
            fontSize: "9px",
            color: "#333",
            fontFamily: "'Press Start 2P', monospace",
            fontWeight: 400,
            letterSpacing: "0.3px",
            textTransform: "uppercase",
          }}
        >
          © {new Date().getFullYear()} Gigaverse
        </p>
      </div>
    </footer>
  );
}
