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
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex gap-2 bg-navy-light border border-navy-border rounded-xl p-1.5">
        <input
          type="text"
          value={shop}
          onChange={(e) => setShop(e.target.value)}
          placeholder="yourstore.myshopify.com"
          className="flex-1 bg-transparent border-none outline-none text-slate-100 text-sm px-3 py-2 placeholder:text-slate-500"
          autoComplete="off"
          spellCheck={false}
        />
        <button
          type="submit"
          className="bg-brand text-black font-bold text-sm px-5 py-2 rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap cursor-pointer border-none"
        >
          Install Free →
        </button>
      </div>
      <p className="text-xs text-slate-500 mt-3 text-center">No credit card required. Free forever.</p>
    </form>
  );
}
