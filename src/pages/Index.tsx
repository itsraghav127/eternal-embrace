import HeroSection from "@/components/HeroSection";
import LoveTreeSection from "@/components/LoveTreeSection";
import ConfessionSection from "@/components/ConfessionSection";
import GallerySection from "@/components/GallerySection";
import FooterSection from "@/components/FooterSection";
import FloatingHearts from "@/components/FloatingHearts";
import FallingPetals from "@/components/FallingPetals";
import BackgroundMusic from "@/components/BackgroundMusic";
import ConfessionsNavLink from "@/components/ConfessionsNavLink";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <ConfessionsNavLink />
      
      {/* Background Music */}
      <BackgroundMusic />
      
      {/* Ambient Animations */}
      <FloatingHearts />
      <FallingPetals />

      {/* Main Content */}
      <main>
        <HeroSection />
        <LoveTreeSection />
        <ConfessionSection />
        <GallerySection />
        <FooterSection />
      </main>
    </div>
  );
};

export default Index;
