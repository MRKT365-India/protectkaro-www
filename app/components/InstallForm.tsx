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
    <form onSubmit={handleSubmit} className="install-form">
      <div className="install-row">
        <input
          type="text"
          value={shop}
          onChange={(e) => setShop(e.target.value)}
          placeholder="yourstore.myshopify.com"
          className="install-input"
          autoComplete="off"
          spellCheck={false}
        />
        <button type="submit" className="install-btn">Install Free →</button>
      </div>
      <p className="install-hint">No credit card required · Free forever</p>
    </form>
  );
}
