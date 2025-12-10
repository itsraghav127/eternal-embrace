import { motion } from "framer-motion";
import { useState } from "react";
import loveTree from "@/assets/love-tree.png";

const FallingLeaf = ({ delay, x }: { delay: number; x: number }) => (
  <motion.div
    className="absolute"
    style={{ left: `${x}%`, top: "20%" }}
    initial={{ opacity: 0, y: 0, rotate: 0 }}
    animate={{
      opacity: [0, 1, 1, 0],
      y: [0, 300],
      x: [0, Math.sin(delay) * 50],
      rotate: [0, 360],
    }}
    transition={{
      duration: 8,
      delay: delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4 text-rose drop-shadow-[0_0_8px_currentColor]"
      fill="currentColor"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  </motion.div>
);

const LoveTreeSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const leaves = Array.from({ length: 15 }, (_, i) => ({
    delay: i * 0.8,
    x: 30 + Math.random() * 40,
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, hsla(340, 80%, 70%, 0.1) 0%, transparent 60%)",
        }}
        animate={{
          opacity: isHovered ? 0.3 : 0.15,
        }}
        transition={{ duration: 0.5 }}
      />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            Our <span className="text-rose glow-text">Love Tree</span>
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Each leaf represents a moment we have shared together
          </p>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          {/* Falling Leaves */}
          {leaves.map((leaf, i) => (
            <FallingLeaf key={i} delay={leaf.delay} x={leaf.x} />
          ))}

          {/* Tree Image */}
          <motion.div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={loveTree}
              alt="Magical love tree with glowing heart-shaped leaves"
              className="w-full h-auto rounded-3xl"
              animate={{
                filter: isHovered
                  ? "drop-shadow(0 0 40px hsla(340, 80%, 70%, 0.6))"
                  : "drop-shadow(0 0 20px hsla(340, 80%, 70%, 0.3))",
              }}
              style={{
                animation: "sway 6s ease-in-out infinite",
              }}
            />

            {/* Firefly Effect on Hover */}
            {isHovered && (
              <div className="absolute inset-0">
                {Array.from({ length: 20 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-gold"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${10 + Math.random() * 50}%`,
                      boxShadow: "0 0 10px hsl(var(--gold))",
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.1,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </div>
            )}
          </motion.div>

          {/* Caption */}
          <motion.p
            className="text-center mt-8 text-rose-light font-display text-xl italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            "Under this tree, our love grows eternal"
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default LoveTreeSection;
