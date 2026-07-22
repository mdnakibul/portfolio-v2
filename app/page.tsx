import CustomCursor from "@/components/CustomCursor";
import ShaderBackground from "@/components/ShaderBackground";
import ThreeScene from "@/components/ThreeScene";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

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
      <Hero />
    </>
  );
}
