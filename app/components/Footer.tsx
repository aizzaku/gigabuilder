export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #1e3a5f",
        padding: "24px",
        background: "rgba(10,22,40,0.9)",
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
            color: "#8b9bb4",
            fontFamily: "'Rajdhani', sans-serif",
            fontWeight: 500,
            lineHeight: 1.65,
            maxWidth: "720px",
            letterSpacing: "0.2px",
          }}
        >
          <span style={{ color: "#ffffff", fontWeight: 700 }}>Disclaimer:</span>{" "}
          Gigaverse Hub is a community platform showcasing apps, tools, and content created by independent
          Gigaverse builders and creators. Please note, these are third-party initiatives and operate outside
          of our direct control. We do not endorse, audit, or guarantee their safety, reliability, or security.
          Please &ldquo;DYOR&rdquo; &amp; exercise your own judgement &amp; any necessary caution when engaging
          with 3rd party content.
        </p>
        <p
          style={{
            margin: 0,
            fontSize: "11px",
            color: "#1e3a5f",
            fontFamily: "'Orbitron', sans-serif",
            fontWeight: 600,
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
