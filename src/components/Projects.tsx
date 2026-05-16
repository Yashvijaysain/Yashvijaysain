"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Mewar Masala",
      description: "Spice brand platform with product catalog, auth, and order management.",
      tags: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind"],
    },
    {
      id: 2,
      title: "YES Cart",
      description: "E-commerce platform featuring a cart system, orders, & seller portal.",
      tags: ["Next.js", "React", "Tailwind", "Node.js"],
    },
    {
      id: 3,
      title: "YVS Manager",
      description: "School management with role-based dashboards, GPA calculator, and email auth.",
      tags: ["MongoDB", "Express", "React", "Next.js", "Supabase"],
    },
    {
      id: 4,
      title: "ECS Attendance Manager",
      description: "Real-time attendance tracking with trend reports & student dashboards.",
      tags: ["React", "MySQL", "PostgreSQL", "MongoDB", "Kinde Auth", "Drizzle ORM"],
    },
    {
      id: 5,
      title: "BECL Esports",
      description: "Tournament platform with registration, schedules, and live results.",
      tags: ["React", "Netlify", "Tailwind", "Supabase", "MongoDB"],
    },
    {
      id: 6,
      title: "Water Quality Monitoring",
      description: "ESP32-based TDS & temperature monitor with OLED display & Wi-Fi cloud upload.",
      tags: ["ESP32", "Arduino", "Embedded C", "IoT"],
    },
    {
      id: 7,
      title: "Ad Hoc Network",
      description: "Peer-to-peer network among 5 laptops without central infrastructure.",
      tags: ["Networking", "Peer-to-Peer"],
    },
  ];

  return (
    <section className="relative z-20 bg-[#121212] px-8 py-24 sm:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-4xl font-bold tracking-tight text-white sm:text-5xl"
        >
          Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div>
                <h3 className="mb-2 text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
                  {project.title}
                </h3>
                <p className="mb-6 text-white/60 transition-colors duration-300 group-hover:text-white/80">
                  {project.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 transition-colors duration-300 group-hover:border-white/30 group-hover:bg-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
