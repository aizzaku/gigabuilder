export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "24px",
        background: "rgba(8,13,20,0.9)",
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
            color: "rgba(255,255,255,0.25)",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 400,
            lineHeight: 1.65,
            maxWidth: "720px",
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.4)", fontWeight: 500 }}>Disclaimer:</span>{" "}
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
            color: "rgba(255,255,255,0.2)",
            fontFamily: "'Fragment Mono', monospace",
            fontWeight: 400,
            letterSpacing: "0.3px",
          }}
        >
          © {new Date().getFullYear()} Gigaverse
        </p>
      </div>
    </footer>
  );
}
