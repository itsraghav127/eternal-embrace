import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Petal {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
}

const FallingPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const newPetals: Petal[] = [];
    for (let i = 0; i < 30; i++) {
      newPetals.push({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 15 + 8,
        duration: Math.random() * 8 + 10,
        delay: Math.random() * 8,
        rotation: Math.random() * 360,
      });
    }
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-5">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.x}%`,
            top: "-30px",
          }}
          animate={{
            y: [0, window.innerHeight + 100],
            x: [0, Math.sin(petal.id) * 100, Math.cos(petal.id) * 50],
            rotate: [petal.rotation, petal.rotation + 720],
            opacity: [0, 1, 1, 0.5, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 20 20"
            className="text-rose-light drop-shadow-[0_0_5px_currentColor]"
          >
            <ellipse
              cx="10"
              cy="10"
              rx="8"
              ry="5"
              fill="currentColor"
              opacity="0.8"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default FallingPetals;
