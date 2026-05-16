"use client";

import { motion } from "framer-motion";
import {
  Award,
  BriefcaseBusiness,
  ExternalLink,
  GraduationCap,
  Mail,
  Medal,
  Phone,
  Rocket,
  Sparkles,
  GitBranch,
} from "lucide-react";
import FadeIn from "./ui/FadeIn";

const projects = [
  {
    name: "Mewar Masala",
    description: "Spice brand platform with product catalog, auth, and order management.",
    stack: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind", "Vercel"],
  },
  {
    name: "YES Cart",
    description: "E-commerce with cart, orders, and seller portal.",
    stack: ["Next.js", "React", "JS", "Tailwind", "Node.js", "Vercel"],
  },
  {
    name: "YVS Manager",
    description: "School management with role-based dashboards, GPA calculator, and email auth.",
    stack: ["MongoDB", "Express", "React", "Next.js", "Supabase", "Vercel"],
  },
  {
    name: "BECL Esports",
    description: "Tournament platform with registration, schedules, and results.",
    stack: ["React", "Netlify", "Tailwind", "Supabase", "MongoDB"],
  },
  {
    name: "ECS Attendance Manager",
    description: "Real-time attendance tracking with trend reports and student dashboards.",
    stack: ["React", "MySQL", "PostgreSQL", "MongoDB", "Kinde Auth", "Drizzle ORM"],
  },
  {
    name: "Water Quality Monitoring",
    description: "ESP32-based TDS and temperature monitor with OLED display and Wi-Fi cloud upload.",
    stack: ["ESP32", "Arduino", "Embedded C", "IoT"],
  },
  {
    name: "Ad Hoc Network",
    description: "Peer-to-peer network among 5 laptops without central infrastructure.",
    stack: ["Networking", "Peer-to-Peer"],
  },
];

const workExperience = [
  {
    role: "Web Developer and Web Designer",
    company: "Eht Webaid",
    duration: "9 months",
  },
  {
    role: "Web Developer",
    company: "Bionex Pvt. Ltd.",
    duration: "6 months",
  },
];

const education = [
  "B.Tech, Electronics & Computer Science -- Gurunanak Institute of Technology (2026, Currently Enrolled)",
  "Higher Secondary -- Radhika Town High School (May 2022, 84.4%)",
  "Secondary -- Vardhman Vidya Vihar Sec. School (Jun 2020, 75.67%)",
];

const certifications = [
  "Full Stack Web Dev (BCT) -- MTA Learning Pvt. Ltd. (Feb 2025)",
  "MERN Stack with AI Integration -- Euphoria GenX",
  "MERN Stack -- Apna College",
  "Python with Django (BCT) -- MTA Learning Pvt. Ltd. (Feb 2024)",
  "IoT & Smart Analytics -- Ardent Computech Pvt. Ltd. (Jul 2024)",
];

const infoCards = [
  {
    title: "Internship",
    icon: BriefcaseBusiness,
    items: ["Marketing & Community Engagement -- BucketList"],
  },
  {
    title: "Education",
    icon: GraduationCap,
    items: education,
  },
  {
    title: "Certifications",
    icon: Award,
    items: certifications,
  },
  {
    title: "Achievements",
    icon: Medal,
    items: ["Smart India Hackathon -- Runner Up", "SBH -- Finalist"],
  },
  {
    title: "Interests",
    icon: Sparkles,
    items: ["Formula 1 Racing", "Emerging Technologies"],
  },
];

const contacts = [
  { label: "+91 7742143317", href: "tel:+917742143317", icon: Phone },
  { label: "yashsain684@gmail.com", href: "mailto:yashsain684@gmail.com", icon: Mail },
  { label: "github.com/YashVijaySain", href: "https://github.com/YashVijaySain", icon: GitBranch },
  { label: "YashVijaySain.vercel.app", href: "https://YashVijaySain.vercel.app", icon: ExternalLink },
];

function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-[#D7E2EA]/15 bg-[#D7E2EA]/5 px-3 py-1 text-xs font-medium text-[#D7E2EA]/75 transition duration-300 group-hover:border-[#D7E2EA]/35 group-hover:text-[#D7E2EA]">
      {children}
    </span>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 text-[#D7E2EA] sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading mb-8 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight">
            Projects
          </h2>
        </FadeIn>

        <FadeIn delay={0.08} y={24}>
          <p className="mx-auto mb-16 max-w-3xl text-center text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed text-[#D7E2EA]/70 md:mb-24">
            Final-year B.Tech (Electronics & Computer Science) student skilled in full-stack dev, IoT, data analytics, and UI/UX. Seeking an entry-level role.
          </p>
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn key={project.name} delay={index * 0.06} y={35}>
              <motion.article
                whileHover={{ y: -10, scale: 1.015 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                className="group flex min-h-[300px] flex-col justify-between overflow-hidden rounded-[32px] border border-[#D7E2EA]/18 bg-[#D7E2EA]/5 p-6 shadow-[0_28px_90px_rgba(0,0,0,0.35)] transition duration-500 hover:border-[#D7E2EA]/45 hover:bg-[#D7E2EA]/10 sm:p-7"
              >
                <div>
                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/45">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <Rocket className="h-5 w-5 text-[#D7E2EA]/45 transition duration-500 group-hover:rotate-45 group-hover:text-[#D7E2EA]" />
                  </div>
                  <h3 className="mb-4 text-[clamp(1.6rem,3vw,2.6rem)] font-black uppercase leading-none tracking-tight">
                    {project.name}
                  </h3>
                  <p className="text-base font-light leading-relaxed text-[#D7E2EA]/70">
                    {project.description}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>

        <div className="mt-20 grid gap-4 lg:grid-cols-[0.9fr_1.1fr] md:mt-28">
          <FadeIn delay={0.05} y={35}>
            <motion.article
              whileHover={{ y: -8 }}
              className="rounded-[32px] border border-[#D7E2EA]/18 bg-[#D7E2EA]/5 p-6 transition duration-500 hover:border-[#D7E2EA]/45 hover:bg-[#D7E2EA]/10 sm:p-8"
            >
              <h3 className="mb-8 text-[clamp(1.8rem,4vw,3.8rem)] font-black uppercase leading-none tracking-tight">
                Contact
              </h3>
              <div className="grid gap-3">
                {contacts.map((contact) => {
                  const Icon = contact.icon;
                  return (
                    <a
                      key={contact.label}
                      href={contact.href}
                      target={contact.href.startsWith("http") ? "_blank" : undefined}
                      rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                      className="group/link flex items-center gap-3 rounded-2xl border border-[#D7E2EA]/10 px-4 py-3 text-sm font-medium text-[#D7E2EA]/75 transition duration-300 hover:border-[#D7E2EA]/35 hover:text-[#D7E2EA] sm:text-base"
                    >
                      <Icon className="h-4 w-4 shrink-0 transition group-hover/link:scale-110" />
                      <span className="break-all">{contact.label}</span>
                    </a>
                  );
                })}
              </div>
            </motion.article>
          </FadeIn>

          <FadeIn delay={0.12} y={35}>
            <motion.article
              whileHover={{ y: -8 }}
              className="rounded-[32px] border border-[#D7E2EA]/18 bg-[#D7E2EA]/5 p-6 transition duration-500 hover:border-[#D7E2EA]/45 hover:bg-[#D7E2EA]/10 sm:p-8"
            >
              <h3 className="mb-8 text-[clamp(1.8rem,4vw,3.8rem)] font-black uppercase leading-none tracking-tight">
                Work Experience
              </h3>
              <div className="grid gap-5">
                {workExperience.map((work) => (
                  <div key={work.company} className="border-l border-[#D7E2EA]/25 pl-5">
                    <p className="text-xl font-semibold uppercase leading-tight">{work.role}</p>
                    <p className="mt-2 text-[#D7E2EA]/65">
                      {work.company} -- {work.duration}
                    </p>
                  </div>
                ))}
              </div>
            </motion.article>
          </FadeIn>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {infoCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <FadeIn key={card.title} delay={index * 0.06} y={35}>
                <motion.article
                  whileHover={{ y: -8 }}
                  className="group min-h-[260px] rounded-[32px] border border-[#D7E2EA]/18 bg-[#D7E2EA]/5 p-6 transition duration-500 hover:border-[#D7E2EA]/45 hover:bg-[#D7E2EA]/10 sm:p-8"
                >
                  <div className="mb-7 flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-black uppercase tracking-tight">{card.title}</h3>
                    <Icon className="h-5 w-5 text-[#D7E2EA]/50 transition duration-500 group-hover:text-[#D7E2EA]" />
                  </div>
                  <ul className="space-y-4 text-sm leading-relaxed text-[#D7E2EA]/70 sm:text-base">
                    {card.items.map((item) => (
                      <li key={item} className="border-t border-[#D7E2EA]/10 pt-4 first:border-t-0 first:pt-0">
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
