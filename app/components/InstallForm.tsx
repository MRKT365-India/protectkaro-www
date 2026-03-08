"use client";
import { useState } from "react";

export function InstallForm() {
  const [shop, setShop] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!shop.trim()) return;
    const domain = shop.includes(".myshopify.com") ? shop.trim() : `${shop.trim()}.myshopify.com`;
    window.location.href = `https://api.protectkaro.com/auth/install?shop=${encodeURIComponent(domain)}`;
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 480, margin: "0 auto" }}>
      <div style={{ display: "flex", gap: 8, background: "#1e293b", border: "1px solid #334155", borderRadius: 12, padding: 6 }}>
        <input
          type="text"
          value={shop}
          onChange={(e) => setShop(e.target.value)}
          placeholder="yourstore.myshopify.com"
          style={{
            flex: 1,
            background: "transparent",
            border: "none",
            outline: "none",
            color: "#f8fafc",
            fontSize: 15,
            padding: "10px 14px",
          }}
          autoComplete="off"
          spellCheck={false}
        />
        <button
          type="submit"
          style={{
            background: "#22c55e",
            color: "#000",
            border: "none",
            borderRadius: 8,
            padding: "10px 20px",
            fontWeight: 700,
            fontSize: 15,
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          Install Free →
        </button>
      </div>
      <p style={{ fontSize: 13, color: "#64748b", marginTop: 12, textAlign: "center" }}>
        No credit card required. Free forever.
      </p>
    </form>
  );
}
