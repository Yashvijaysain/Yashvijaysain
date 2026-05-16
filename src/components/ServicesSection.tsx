"use client";

import { motion } from "framer-motion";
import { BarChart3, Code2, Database, Film, Server, Wifi } from "lucide-react";
import FadeIn from "./ui/FadeIn";

const techStacks = [
  {
    name: "Frontend",
    icon: Code2,
    skills: ["HTML", "CSS", "JS", "TypeScript", "React", "Next.js", "Tailwind CSS", "Figma"],
  },
  {
    name: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "Python", "Django"],
  },
  {
    name: "Database",
    icon: Database,
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    name: "Data Analytics",
    icon: BarChart3,
    skills: ["Power BI", "Data Visualization", "Dashboard Design", "MySQL Analytics"],
  },
  {
    name: "IoT",
    icon: Wifi,
    skills: ["ESP32", "Arduino IDE", "Tinkercad", "ThingSpeak", "Blynk"],
  },
  {
    name: "UI/UX & Video",
    icon: Film,
    skills: ["Figma", "Editing Tools", "Motion Graphics", "Content Production"],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="price"
      className="relative z-0 rounded-t-[40px] bg-white px-5 py-20 text-[#0C0C0C] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2 className="mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28">
          Tech Stacks
        </h2>
      </FadeIn>

      <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
        {techStacks.map((stack, index) => {
          const Icon = stack.icon;

          return (
            <FadeIn key={stack.name} delay={index * 0.08} y={30}>
              <motion.article
                whileHover={{ y: -10, scale: 1.015 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                className="group min-h-[220px] overflow-hidden rounded-3xl border border-[#0C0C0C]/15 bg-[#F6F6F3] p-6 transition-colors duration-500 hover:bg-[#0C0C0C] sm:p-8"
              >
                <div className="mb-8 flex items-center justify-between gap-4">
                  <h3 className="text-[clamp(1.4rem,3vw,2.75rem)] font-black uppercase leading-none tracking-tight transition-colors duration-500 group-hover:text-[#D7E2EA]">
                    {stack.name}
                  </h3>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#0C0C0C]/20 transition-colors duration-500 group-hover:border-[#D7E2EA]/40 group-hover:text-[#D7E2EA]">
                    <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {stack.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[#0C0C0C]/10 px-3 py-1.5 text-sm font-medium text-[#0C0C0C]/70 transition duration-500 group-hover:border-[#D7E2EA]/30 group-hover:text-[#D7E2EA]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            </FadeIn>
          );
        })}
      </div>

      <FadeIn delay={0.15} y={24}>
        <p className="mx-auto mt-16 max-w-3xl text-center text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed text-[#0C0C0C]/65">
          Full-stack development, IoT engineering, data analytics, UI/UX design, and content production brought together for practical, production-grade work.
        </p>
      </FadeIn>
    </section>
  );
}
