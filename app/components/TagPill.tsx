import { AppTag } from "../types/app";

const TAG_STYLES: Record<AppTag, { color: string; bg: string }> = {
  Metagame:   { color: "#a78bfa", bg: "rgba(167,139,250,0.12)" },
  Analytics:  { color: "#4ade80", bg: "rgba(74,222,128,0.12)" },
  Trading:    { color: "#fbbf24", bg: "rgba(251,191,36,0.12)" },
  Automation: { color: "#f472b6", bg: "rgba(244,114,182,0.12)" },
  Tools:      { color: "#00d4ff", bg: "rgba(0,212,255,0.12)" },
};

interface TagPillProps {
  tag: AppTag;
  small?: boolean;
}

export default function TagPill({ tag, small = false }: TagPillProps) {
  const s = TAG_STYLES[tag];
  return (
    <span
      style={{
        display: "inline-block",
        padding: small ? "2px 6px" : "3px 8px",
        borderRadius: "2px",
        background: s.bg,
        color: s.color,
        fontFamily: "'Orbitron', sans-serif",
        fontSize: small ? "9px" : "10px",
        fontWeight: 600,
        letterSpacing: "0.8px",
        textTransform: "uppercase",
        lineHeight: 1.5,
        whiteSpace: "nowrap",
      }}
    >
      {tag}
    </span>
  );
}
