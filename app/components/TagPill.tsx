import { AppTag } from "../types/app";

const TAG_STYLES: Record<AppTag, { color: string; bg: string; border: string }> = {
  Metagame:   { color: "#a78bfa", bg: "rgba(167,139,250,0.1)",  border: "rgba(167,139,250,0.25)" },
  Analytics:  { color: "#4ade80", bg: "rgba(74,222,128,0.1)",  border: "rgba(74,222,128,0.25)" },
  Trading:    { color: "#fbbf24", bg: "rgba(251,191,36,0.1)",  border: "rgba(251,191,36,0.25)" },
  Automation: { color: "#f472b6", bg: "rgba(244,114,182,0.1)", border: "rgba(244,114,182,0.25)" },
  Tools:      { color: "#00d4ff", bg: "rgba(0,212,255,0.1)",   border: "rgba(0,212,255,0.25)" },
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
        padding: small ? "2px 7px" : "3px 9px",
        borderRadius: "4px",
        border: `1px solid ${s.border}`,
        background: s.bg,
        color: s.color,
        fontFamily: "'Fragment Mono', monospace",
        fontSize: small ? "9px" : "10px",
        fontWeight: 400,
        letterSpacing: "0.6px",
        textTransform: "uppercase",
        lineHeight: 1.5,
        whiteSpace: "nowrap",
      }}
    >
      {tag}
    </span>
  );
}
