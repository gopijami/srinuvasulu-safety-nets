"use client";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <div className="fixed right-4 top-[70vh] z-50 flex flex-col items-end gap-4">

      {/* CALL BUTTON */}
      <a href="tel:+919908233314" className="group relative">
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#071f18] bg-gradient-to-br from-emerald-500/90 via-teal-500/75 to-cyan-500/65 border border-white/10 shadow-[0_18px_50px_rgba(16,185,129,0.22)] ring-1 ring-emerald-400/15 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_22px_60px_rgba(16,185,129,0.32)]">
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
          <span className="absolute -inset-3 rounded-full border border-emerald-300/20 opacity-60 blur-xl" />
          <Phone className="relative h-6 w-6 text-white drop-shadow-[0_4px_18px_rgba(255,255,255,0.18)]" />
        </div>
      </a>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/918790518724?text=Hello%20Srinuvasulu%20Safety%20Nets%2C%20I%20need%20balcony%20safety%20nets."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
      >
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#071f18] bg-gradient-to-br from-emerald-400/90 via-emerald-500/75 to-cyan-500/65 border border-white/10 shadow-[0_18px_50px_rgba(16,185,129,0.22)] ring-1 ring-emerald-400/15 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_22px_60px_rgba(16,185,129,0.32)]">
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
          <span className="absolute -inset-3 rounded-full border border-emerald-300/20 opacity-60 blur-xl" />
          <FaWhatsapp className="relative h-6 w-6 text-white drop-shadow-[0_4px_18px_rgba(255,255,255,0.18)]" />
        </div>
      </a>

    </div>
  );
}