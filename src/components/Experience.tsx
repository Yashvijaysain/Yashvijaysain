"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const education = [
    {
      degree: "B.Tech, Electronics & Computer Science",
      institution: "Gurunanak Institute of Technology",
      year: "2026 (Currently Enrolled)",
      details: "Final-year student focusing on full-stack development and IoT.",
    },
    {
      degree: "Higher Secondary",
      institution: "Radhika Town High School",
      year: "May 2022",
      details: "Percentage: 84.4%",
    },
    {
      degree: "Secondary",
      institution: "Vardhman Vidya Vihar Sec. School",
      year: "Jun 2020",
      details: "Percentage: 75.67%",
    },
  ];

  const certifications = [
    { title: "Full Stack Web Dev (BCT)", issuer: "MTA Learning Pvt. Ltd.", date: "Feb 2025" },
    { title: "MERN Stack with AI Integration", issuer: "Euphoria GenX", date: "" },
    { title: "MERN Stack", issuer: "Apna College", date: "" },
    { title: "Python with Django (BCT)", issuer: "MTA Learning Pvt. Ltd.", date: "Feb 2024" },
    { title: "IoT & Smart Analytics", issuer: "Ardent Computech Pvt. Ltd.", date: "Jul 2024" },
  ];

  return (
    <section className="relative z-20 bg-[#121212] px-8 py-24 sm:px-16 lg:px-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 border-t border-white/10 pt-24 lg:grid-cols-2">
        
        {/* Education & Experience */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Education & Experience
          </motion.h2>
          
          <div className="space-y-8">
            {[
              { title: "Web Developer & Designer", company: "Eht Webaid", duration: "9 Months" },
              { title: "Web Developer", company: "Bionex Pvt. Ltd.", duration: "6 Months" },
              { title: "Marketing & Community Engagement", company: "BucketList", duration: "Internship" },
            ].map((job, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative pl-8 before:absolute before:bottom-0 before:left-[11px] before:top-2 before:w-[2px] before:bg-white/10"
              >
                <div className="absolute left-0 top-2 h-[24px] w-[24px] rounded-full border-4 border-[#121212] bg-white transition-transform duration-300 group-hover:scale-125 group-hover:bg-blue-400" />
                <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">{job.title}</h3>
                <p className="text-white/60">{job.duration} • {job.company}</p>
              </motion.div>
            ))}

            {education.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                className="group relative pl-8 before:absolute before:bottom-0 before:left-[11px] before:top-2 before:w-[2px] before:bg-white/10 last:before:hidden"
              >
                <div className="absolute left-0 top-2 h-[24px] w-[24px] rounded-full border-4 border-[#121212] bg-white/40 transition-transform duration-300 group-hover:scale-125 group-hover:bg-blue-400" />
                <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">{item.degree}</h3>
                <p className="text-white/80">{item.institution}</p>
                <p className="text-sm text-white/50">{item.year}</p>
                <p className="mt-2 text-white/60">{item.details}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications & Achievements */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Certifications & Achievements
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="mb-12 space-y-4"
          >
            <h3 className="text-2xl font-semibold text-white">Achievements</h3>
            <ul className="list-inside list-disc space-y-2 text-white/70">
              <li className="transition-colors duration-300 hover:text-white">Smart India Hackathon — Runner Up</li>
              <li className="transition-colors duration-300 hover:text-white">SBH — Finalist</li>
            </ul>
          </motion.div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">Certifications</h3>
            {certifications.map((cert, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-xl border border-white/5 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:shadow-lg"
              >
                <h4 className="text-lg font-medium text-white transition-colors duration-300 group-hover:text-blue-400">{cert.title}</h4>
                <div className="mt-2 flex justify-between text-sm text-white/50">
                  <span>{cert.issuer}</span>
                  <span>{cert.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
