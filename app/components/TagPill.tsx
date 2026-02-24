import { AppTag } from "../types/app";

const TAG_STYLES: Record<AppTag, { color: string; bg: string; border: string }> = {
  Metagame:   { color: "#a78bfa", bg: "rgba(167,139,250,0.1)",  border: "rgba(167,139,250,0.25)" },
  Analytics:  { color: "#4ade80", bg: "rgba(74,222,128,0.1)",   border: "rgba(74,222,128,0.25)" },
  Trading:    { color: "#F5C563", bg: "rgba(245,197,99,0.1)",   border: "rgba(245,197,99,0.25)" },
  Automation: { color: "#f472b6", bg: "rgba(244,114,182,0.1)",  border: "rgba(244,114,182,0.25)" },
  Tools:      { color: "#02C7D7", bg: "rgba(2,199,215,0.1)",    border: "rgba(2,199,215,0.25)" },
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
        border: `1px solid ${s.border}`,
        fontFamily: "'Fragment Mono', monospace",
        fontSize: small ? "9px" : "10px",
        fontWeight: 400,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        lineHeight: 1.5,
        whiteSpace: "nowrap",
      }}
    >
      {tag}
    </span>
  );
}
