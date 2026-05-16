"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Section 1: 0% to 29% (Since heading is fixed, we skip Name in overlay, or we can keep it empty if user wants. But user previously had "Yash Vijay Sain. Full-Stack Developer" here. Actually, we replaced it with logo. Let's keep a brief intro or just keep it blank since the logo is fixed. Wait, I should keep the first section empty or use it for the first part of the summary. 
  // The user said: "adjust the 0% to 29% scroll Yash Vijay Sain. Full-Stack Developer to left then vanish". But then later we removed the heading and put a logo at the top. The overlay still has "Yash Vijay Sain. Full-Stack Developer". I'll keep it as is, or maybe just remove it since the logo is there? The user specifically asked to use the summary. 
  // Let's use the summary across the 3 sections:
  // Section 1: "Final-year B.Tech student in Electronics & Computer Science."
  // Section 2: "Hands-on expertise in full-stack web development, data analytics, IoT engineering, and UI/UX design."
  // Section 3: "Experienced delivering production-grade applications using modern frameworks. Seeking a challenging entry-level role to apply and grow technical skills."

  const section1Opacity = useTransform(scrollYProgress, [0, 0.25, 0.29, 0.3], [1, 1, 0, 0]);
  const section1Y = useTransform(scrollYProgress, [0, 0.29], [0, -100]);

  const section2Opacity = useTransform(scrollYProgress, [0, 0.29, 0.3, 0.55, 0.59, 0.6], [0, 0, 1, 1, 0, 0]);
  const section2Y = useTransform(scrollYProgress, [0.3, 0.59], [100, -100]);

  const section3Opacity = useTransform(scrollYProgress, [0, 0.59, 0.6, 0.85, 0.9, 1], [0, 0, 1, 1, 0, 0]);
  const section3Y = useTransform(scrollYProgress, [0.6, 0.9], [100, -100]);

  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex h-full w-full flex-col justify-center text-white">
      
      {/* Section 1 */}
      <motion.div 
        style={{ opacity: section1Opacity, y: section1Y }}
        className="absolute inset-0 flex items-center justify-start pl-4 md:pl-12 pr-8 py-8"
      >
        <div className="max-w-xl text-left">
          <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Final-year B.Tech Student.
          </h2>
          <p className="mt-6 text-lg text-white/60">
            Electronics & Computer Science
          </p>
        </div>
      </motion.div>

      {/* Section 2 */}
      <motion.div 
        style={{ opacity: section2Opacity, y: section2Y }}
        className="absolute inset-0 flex items-center justify-start p-8 md:p-24"
      >
        <div className="max-w-xl text-left">
          <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Hands-on Expertise.
          </h2>
          <p className="mt-6 text-lg text-white/60">
            Specializing in full-stack web development, data analytics, IoT engineering, and UI/UX design.
          </p>
        </div>
      </motion.div>

      {/* Section 3 */}
      <motion.div 
        style={{ opacity: section3Opacity, y: section3Y }}
        className="absolute inset-0 flex items-center justify-start p-8 md:p-24"
      >
        <div className="max-w-2xl text-left">
          <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Experienced delivering production-grade applications using modern frameworks.
          </h2>
          <p className="mt-6 text-lg text-white/60">
            Seeking a challenging entry-level role to apply and grow technical skills.
          </p>
        </div>
      </motion.div>

    </div>
  );
}
