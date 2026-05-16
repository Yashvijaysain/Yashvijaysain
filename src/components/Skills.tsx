"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JS", "TypeScript", "React", "Next.js", "Tailwind CSS", "Figma"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Python", "Django"]
    },
    {
      title: "Database",
      skills: ["MongoDB", "MySQL", "PostgreSQL"]
    },
    {
      title: "Data Analytics",
      skills: ["Power BI", "Data Visualization", "Dashboard Design", "MySQL Analytics"]
    },
    {
      title: "IoT & Embedded",
      skills: ["ESP32", "Arduino IDE", "Tinkercad", "ThingSpeak", "Blynk"]
    },
    {
      title: "Other",
      skills: ["Video Editing", "Motion Graphics", "Content Production"]
    }
  ];

  return (
    <section className="relative z-20 bg-[#121212] px-8 py-24 sm:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl border-t border-white/10 pt-24">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-4xl font-bold tracking-tight text-white sm:text-5xl"
        >
          Tech Stack
        </motion.h2>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-white/5 bg-white/5 p-8 transition-colors duration-300 hover:border-white/20 hover:bg-white/10"
            >
              <h3 className="mb-6 text-xl font-semibold text-white">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="rounded-lg bg-white/10 px-3 py-1.5 text-sm font-medium text-white/90 transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:text-white hover:shadow-lg"
                  >
                    {skill}
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
