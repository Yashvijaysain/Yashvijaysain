"use client";

import { Mail } from "lucide-react";
import React from "react";

interface ContactButtonProps {
  onClick?: () => void;
  className?: string;
}

export default function ContactButton({ onClick, className = "" }: ContactButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-medium uppercase tracking-widest text-white transition-transform hover:scale-105 active:scale-95 ${className}`}
      style={{
        background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
        outline: "2px solid white",
        outlineOffset: "-3px",
      }}
    >
      <Mail aria-hidden="true" className="h-[1em] w-[1em]" strokeWidth={2.4} />
      Contact Me
    </button>
  );
}
