"use client";

import { motion } from "framer-motion";

export default function Summary() {
  return (
    <section className="relative z-20 bg-[#121212] px-8 py-24 sm:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 md:p-16"
        >
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            About Me
          </h2>
          <p className="text-xl leading-relaxed text-white/80 md:text-2xl">
            Final-year B.Tech student in Electronics & Computer Science with hands-on expertise in full-stack web development, data analytics, IoT engineering, and UI/UX design. Experienced delivering production-grade applications using modern frameworks. Seeking a challenging entry-level role to apply and grow technical skills.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
