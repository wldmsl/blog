import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 6,
          background: "#16a34a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: "-0.5px",
          fontFamily: "sans-serif",
        }}
      >
        ojen
      </div>
    ),
    { width: 32, height: 32 }
  );
}
