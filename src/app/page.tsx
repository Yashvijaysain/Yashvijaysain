import ScrollyCanvas from "@/components/ScrollyCanvas";
import MarqueeSection from "@/components/MarqueeSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#0C0C0C]">
      <ScrollyCanvas />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <Projects />
    </main>
  );
}
