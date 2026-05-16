"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative z-20 bg-[#121212] px-8 py-16 sm:px-16 lg:px-24">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-7xl border-t border-white/10 pt-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-white">
              Let&apos;s Build Together.
            </h2>
            <p className="max-w-md text-white/60">
              I am currently seeking entry-level opportunities. If you have a project in mind or just want to connect, feel free to reach out.
            </p>
          </div>

          <div className="flex flex-col md:items-end justify-center space-y-4">
            <a 
              href="mailto:yashsain684@gmail.com" 
              className="group relative inline-block text-lg font-medium text-white transition-colors hover:text-blue-400"
            >
              yashsain684@gmail.com
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="tel:+917742143317" 
              className="group relative inline-block text-lg font-medium text-white transition-colors hover:text-blue-400"
            >
              +91 7742143317
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <div className="flex gap-6 pt-4">
              <a 
                href="https://github.com/YashVijaySain" 
                target="_blank" 
                rel="noreferrer"
                className="text-white/60 transition-colors duration-300 hover:text-white hover:underline underline-offset-4"
              >
                GitHub
              </a>
              <a 
                href="https://YashVijaySain.vercel.app" 
                target="_blank" 
                rel="noreferrer"
                className="text-white/60 transition-colors duration-300 hover:text-white hover:underline underline-offset-4"
              >
                Portfolio
              </a>
            </div>
          </div>

        </div>
        
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-8 text-sm text-white/40">
          <p>© {new Date().getFullYear()} Yash Vijay Sain. All rights reserved.</p>
          <p className="mt-2 md:mt-0 transition-colors duration-300 hover:text-white/70">Interests: Formula 1 Racing • Emerging Technologies</p>
        </div>
      </motion.div>
    </footer>
  );
}
