import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, ChevronDown } from "lucide-react";
import ParticleField from "@/components/ParticleField";
import FloatingHearts from "@/components/FloatingHearts";
import FallingPetals from "@/components/FallingPetals";
import BackgroundMusic from "@/components/BackgroundMusic";

const WelcomePage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Music */}
      <BackgroundMusic />

      {/* Ambient Animations */}
      <FloatingHearts />
      <FallingPetals />

      {/* Hero Section with Video */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <video
            src="/videos/hero-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-midnight-deep/60 via-midnight-deep/40 to-midnight-deep" />

          {/* Lens Flare Effect */}
          <motion.div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full"
            style={{
              background:
                "radial-gradient(circle, hsla(45, 90%, 65%, 0.3) 0%, transparent 70%)",
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Particles */}
        <ParticleField />

        {/* Content */}
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div
              className="mb-6"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart
                className="w-16 h-16 text-rose mx-auto"
                fill="currentColor"
              />
            </motion.div>

            <motion.h1
              className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 glow-text"
              animate={{
                textShadow: [
                  "0 0 30px hsla(340, 80%, 70%, 0.5)",
                  "0 0 60px hsla(340, 80%, 70%, 0.8)",
                  "0 0 30px hsla(340, 80%, 70%, 0.5)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              My Heart Beats
              <br />
              <span className="text-rose italic">Only For You Axmi</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-blush font-body font-light tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              A love story written in the stars, destined to last forever
            </motion.p>

            <motion.div
              className="mt-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              <Link to="/gallery">
                <motion.span
                  className="inline-block px-8 py-4 bg-rose/20 backdrop-blur-sm border border-rose/50 rounded-full text-rose font-body font-medium text-lg hover:bg-rose/30 transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 30px hsla(340, 80%, 70%, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Enter Our Love Story
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-rose/60" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WelcomePage;
