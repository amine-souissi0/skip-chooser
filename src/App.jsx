import React from "react";
import SkipSelector from "./SkipSelector";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "linear-gradient(180deg, #f8fbff 0%, #eef2fa 100%)",
        boxSizing: "border-box",
        padding: 0,
        margin: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <SkipSelector />
    </div>
  );
}
