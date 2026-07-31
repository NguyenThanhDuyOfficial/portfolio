import AboutMeSection from "@/components/landing/AboutMeSection";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ProjectsSection from "@/components/landing/ProjectsSection";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <main className="min-h-screen w-full px-8 md:px-20 flex-col bg-(--bg) text-(--text) ">
        <HeroSection />
        <ProjectsSection />
        {/* <AboutMeSection /> */}
        <Footer></Footer>
      </main>
      <Contact />
    </div>
  );
}
