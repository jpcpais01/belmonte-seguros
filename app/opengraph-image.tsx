import { ImageResponse } from "next/og";

export const alt = "Belmonte Seguros — Seguros e Benefícios";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #0c2740 0%, #143352 55%, #1d5070 100%)",
          color: "#faf7f1",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              background: "rgba(255,255,255,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <svg width="46" height="46" viewBox="0 0 40 40" fill="none">
              <path
                d="M9 22c0-6.075 4.925-11 11-11s11 4.925 11 11"
                stroke="#c0974a"
                strokeWidth="2.6"
                strokeLinecap="round"
              />
              <path
                d="M14 24c0-3.314 2.686-6 6-6s6 2.686 6 6"
                stroke="#7faaa4"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
              <circle cx="20" cy="27.5" r="3" fill="#faf7f1" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 34, fontWeight: 600 }}>Belmonte</span>
            <span
              style={{
                fontSize: 15,
                letterSpacing: 6,
                color: "#d8b878",
                textTransform: "uppercase",
              }}
            >
              Seguros
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 64, fontWeight: 600, lineHeight: 1.1 }}>
            Acima de tudo,
          </span>
          <span
            style={{
              fontSize: 64,
              fontWeight: 600,
              lineHeight: 1.1,
              color: "#d8b878",
              fontStyle: "italic",
            }}
          >
            as pessoas.
          </span>
          <span
            style={{
              marginTop: 24,
              fontSize: 26,
              color: "rgba(250,247,241,0.78)",
              maxWidth: 760,
            }}
          >
            Soluções de seguros à sua medida, para si, a sua família e a sua
            empresa.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            gap: 24,
            fontSize: 20,
            color: "rgba(250,247,241,0.7)",
          }}
        >
          <span>Mediação independente · Lisboa</span>
          <span style={{ color: "#c0974a" }}>+30 anos de experiência</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
