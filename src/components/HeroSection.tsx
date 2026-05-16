"use client";

import React from "react";
import Magnet from "./ui/Magnet";
import FadeIn from "./ui/FadeIn";
import ContactButton from "./ui/ContactButton";

export default function HeroSection() {
  return (
    <section className="relative flex h-screen w-full flex-col overflow-x-clip bg-[#0C0C0C]">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="w-full">
        <nav className="flex w-full items-center justify-between px-6 pt-6 md:px-10 md:pt-8">
          {["About", "Price", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
            >
              {item}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Hero Content Wrapper */}
      <div className="relative flex flex-1 flex-col justify-between overflow-hidden">
        
        {/* Top: Massive Heading */}
        <FadeIn delay={0.15} y={40} className="w-full overflow-hidden">
          <h1 className="hero-heading mt-6 w-full whitespace-nowrap text-center font-black uppercase leading-none tracking-tight text-[14vw] sm:mt-4 sm:text-[15vw] md:-mt-5 md:text-[16vw] lg:text-[17.5vw]">
            Hi, i&apos;m jack
          </h1>
        </FadeIn>

        {/* Bottom Bar */}
        <div className="relative z-20 flex w-full items-end justify-between px-6 pb-7 sm:px-10 sm:pb-8 md:pb-10">
          <FadeIn delay={0.35} y={20} className="max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
            <p className="text-[clamp(0.75rem,1.4vw,1.5rem)] font-light leading-snug tracking-wide text-[#D7E2EA] uppercase">
              a 3d creator driven by crafting striking and unforgettable projects
            </p>
          </FadeIn>

          <FadeIn delay={0.5} y={20}>
            <ContactButton className="px-8 py-3 text-xs sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base" />
          </FadeIn>
        </div>

        {/* Hero Portrait with Magnet Effect */}
        <div className="absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[360px] sm:translate-y-0 md:w-[440px] lg:w-[520px]">
          <FadeIn delay={0.6} y={30}>
            <Magnet
              padding={150}
              strength={3}
              activeTransition="transform 0.3s ease-out"
              inactiveTransition="transform 0.6s ease-in-out"
            >
              <img
                src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
                alt="Jack 3D Portrait"
                className="h-auto w-full object-contain drop-shadow-2xl"
              />
            </Magnet>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
