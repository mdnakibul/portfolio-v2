import { ImageResponse } from "next/og";

// Shared 1200×630 social preview image, used by both the Open Graph and
// Twitter image routes so they never drift.
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_ALT = "Md Nakibul Hosen Nahid — MERN Stack Developer";
export const OG_CONTENT_TYPE = "image/png";

export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0b1326",
          backgroundImage:
            "radial-gradient(circle at 18% 22%, rgba(183,109,255,0.30), transparent 45%), radial-gradient(circle at 88% 85%, rgba(74,225,118,0.14), transparent 42%)",
          color: "#dae2fd",
          fontFamily: "sans-serif",
        }}
      >
        {/* Availability */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "9999px",
              backgroundColor: "#4ae176",
            }}
          />
          <div
            style={{
              fontSize: "24px",
              color: "#4ae176",
              letterSpacing: "3px",
              fontWeight: 700,
            }}
          >
            AVAILABLE FOR FULL-TIME & FREELANCE
          </div>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 800,
            lineHeight: 1.05,
            marginBottom: "18px",
            letterSpacing: "-1px",
          }}
        >
          Md Nakibul Hosen Nahid
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: "46px",
            fontWeight: 700,
            color: "#ddb7ff",
            marginBottom: "30px",
          }}
        >
          MERN Stack Developer
        </div>

        {/* Sub */}
        <div style={{ fontSize: "28px", color: "#cfc2d6" }}>
          Full-stack web apps & SaaS — React · Node.js · Express · MongoDB
        </div>

        {/* Brand */}
        <div
          style={{
            position: "absolute",
            bottom: "56px",
            left: "80px",
            display: "flex",
            fontSize: "30px",
            fontWeight: 800,
          }}
        >
          <span style={{ color: "#ddb7ff" }}>Nakibul</span>
          <span style={{ color: "#dae2fd" }}>.Dev</span>
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
