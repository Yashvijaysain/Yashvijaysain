import ScrollyCanvas from "@/components/ScrollyCanvas";
import Summary from "@/components/Summary";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212]">
      {/* 
        The ScrollyCanvas component contains the sticky 500vh scroll container
        that handles the HTML5 canvas scrubbing and the parallax overlay texts. 
      */}
      <ScrollyCanvas />
      
      {/* 
        The rest of the content sits below the scrollytelling section and
        provides a normal scrolling experience for the rest of the site.
      */}
      <Summary />
      <Projects />
      <Skills />
      <Experience />
      <Footer />
    </main>
  );
}
