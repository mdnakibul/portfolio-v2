import CustomCursor from "@/components/CustomCursor";
import ShaderBackground from "@/components/ShaderBackground";
import ThreeScene from "@/components/ThreeScene";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <CustomCursor />

      {/* Background shader layer */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <ShaderBackground className="absolute inset-0 w-full h-full opacity-60" />
      </div>

      {/* 3D floating MERN shapes — behind content, in front of background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ThreeScene className="absolute inset-0 w-full h-full opacity-70" />
      </div>

      <Navbar />

      <main className="flex-grow flex flex-col">
        <Hero />

        {/* About + Skills */}
        <div className="max-w-container-max mx-auto w-full px-margin-mobile md:px-gutter space-y-[128px] pb-32 relative z-10">
          <Services />
          <Projects />
          <About />
          <Skills />
          <Experience />
          <Contact />
        </div>
      </main>

      <Footer />
    </>
  );
}
