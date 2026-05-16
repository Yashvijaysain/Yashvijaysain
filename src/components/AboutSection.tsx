"use client";

import AnimatedText from "./ui/AnimatedText";
import ContactButton from "./ui/ContactButton";
import FadeIn from "./ui/FadeIn";

const decorations = [
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png",
    alt: "Moon 3D icon",
    className: "left-[1%] top-[4%] w-[120px] sm:left-[2%] sm:w-[160px] md:left-[4%] md:w-[210px]",
    delay: 0.1,
    x: -80,
  },
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png",
    alt: "Abstract 3D object",
    className: "bottom-[8%] left-[3%] w-[100px] sm:left-[6%] sm:w-[140px] md:left-[10%] md:w-[180px]",
    delay: 0.25,
    x: -80,
  },
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png",
    alt: "Lego 3D icon",
    className: "right-[1%] top-[4%] w-[120px] sm:right-[2%] sm:w-[160px] md:right-[4%] md:w-[210px]",
    delay: 0.15,
    x: 80,
  },
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png",
    alt: "3D object group",
    className: "bottom-[8%] right-[3%] w-[130px] sm:right-[6%] sm:w-[170px] md:right-[10%] md:w-[220px]",
    delay: 0.3,
    x: 80,
  },
];

const aboutText =
  "Final-year B.Tech student in Electronics & Computer Science with hands-on expertise in full-stack web development, data analytics, IoT engineering, and UI/UX design. Experienced delivering production-grade applications using modern frameworks. Seeking a challenging entry-level role to apply and grow technical skills.";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0C0C0C] px-5 py-20 sm:px-8 md:px-10"
    >
      {decorations.map((item) => (
        <FadeIn
          key={item.src}
          delay={item.delay}
          duration={0.9}
          x={item.x}
          y={0}
          className={`pointer-events-none absolute z-0 ${item.className}`}
        >
          <img
            src={item.src}
            alt={item.alt}
            className="h-auto w-full animate-[float_6s_ease-in-out_infinite] object-contain transition duration-700 hover:scale-110 hover:rotate-3 hover:drop-shadow-[0_24px_60px_rgba(215,226,234,0.18)]"
            loading="lazy"
          />
        </FadeIn>
      ))}

      <div className="relative z-10 flex max-w-4xl flex-col items-center gap-10 text-center sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight">
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText
            text={aboutText}
            className="max-w-[720px] text-center text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed text-[#D7E2EA]"
          />

          <FadeIn delay={0.2} y={20}>
            <ContactButton className="px-8 py-3 text-xs sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
