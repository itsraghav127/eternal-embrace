import { ReactNode } from "react";
import Navigation from "./Navigation";
import FloatingHearts from "./FloatingHearts";
import FallingPetals from "./FallingPetals";
import BackgroundMusic from "./BackgroundMusic";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Background Music */}
      <BackgroundMusic />

      {/* Ambient Animations */}
      <FloatingHearts />
      <FallingPetals />

      {/* Main Content */}
      <main className="pt-20">{children}</main>
    </div>
  );
};

export default PageLayout;
