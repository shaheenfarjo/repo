import { ImageResponse } from "next/og"
import { site } from "@/lib/site"

export const alt = `${site.name} — ${site.role}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 80,
        background: "radial-gradient(circle at 75% 40%, #1e293b 0%, #050505 55%)",
        color: "#fafafa",
        fontFamily: "serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 22, letterSpacing: 6, color: "#a3a3a3" }}>
        <div style={{ width: 14, height: 14, borderRadius: 7, background: "#2563eb" }} />
        {`${site.location.toUpperCase()} — ${site.coordinates}`}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 104, lineHeight: 1, letterSpacing: -3 }}>{site.name}</div>
        <div style={{ fontSize: 40, marginTop: 28, fontStyle: "italic", color: "#d4d4d4" }}>{site.tagline}</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, letterSpacing: 6, color: "#a3a3a3" }}>
        <span>{site.role.toUpperCase()}</span>
        <span>SHAHEENFARJO.COM</span>
      </div>
    </div>,
    size,
  )
}
