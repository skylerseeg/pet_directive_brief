import { ImageResponse } from "next/og";

import { SITE } from "@/lib/constants";

export const alt = SITE.ogAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#0A0A0B";
const BONE = "#F2EDE6";
const SAGE = "#A3BCA7";
const MUTED = "#8C857E";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: INK,
          color: BONE,
          padding: 80,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 18,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: SAGE,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              backgroundColor: SAGE,
              display: "flex",
            }}
          />
          <div style={{ display: "flex" }}>Pet Directive</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 92,
              lineHeight: 1.04,
              fontWeight: 300,
              letterSpacing: "-0.035em",
              color: BONE,
            }}
          >
            <div style={{ display: "flex" }}>From collar tag</div>
            <div style={{ display: "flex" }}>to lifetime pet</div>
            <div style={{ display: "flex" }}>platform.</div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: MUTED,
              letterSpacing: "-0.005em",
            }}
          >
            A walkthrough for Cody.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 16,
            color: MUTED,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          <div style={{ display: "flex" }}>A Platform Brief</div>
          <div style={{ display: "flex" }}>Skyler · 2026</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
