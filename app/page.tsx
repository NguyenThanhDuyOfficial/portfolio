import AboutMeSection from "@/components/landing/AboutMeSection";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ProjectsSection from "@/components/landing/ProjectsSection";


export default function Home() {
  return (
    <>
      <Header></Header>
      <main className="min-h-screen w-full flex flex-col
bg-[#1e1e2e] [background-image:radial-gradient(rgba(100,_116,_139,_0.2)_2px,_transparent_2px)] [background-size:16px_16px]
      text-[#cdd6f4]
        ">
        <HeroSection />
        <ProjectsSection />
        <AboutMeSection />
        <Footer></Footer>
      </main>
    </>
  );
}
