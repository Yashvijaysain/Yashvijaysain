"use client";

import { ArrowUpRight } from "lucide-react";
import React from "react";

interface LiveProjectButtonProps {
  href?: string;
  className?: string;
}

export default function LiveProjectButton({ href = "#", className = "" }: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#D7E2EA] text-center font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10 ${className}`}
    >
      Live Project
      <ArrowUpRight aria-hidden="true" className="h-[1em] w-[1em]" strokeWidth={2.4} />
    </a>
  );
}
