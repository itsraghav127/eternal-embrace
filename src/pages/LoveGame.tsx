import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Heart, Instagram, Phone, Sparkles } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const LoveGame = () => {
  const [answer, setAnswer] = useState<"yes" | "no" | null>(null);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noClickCount, setNoClickCount] = useState(0);

  const handleNoHover = () => {
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 100 - 50;
    setNoButtonPosition({ x: randomX, y: randomY });
  };

  const handleNoClick = () => {
    setNoClickCount((prev) => prev + 1);
    handleNoHover();
  };

  const noMessages = [
    "Are you sure? 🥺",
    "Think again... 💕",
    "Please reconsider! 💖",
    "My heart can't take it! 💔",
    "One more chance? 🌹",
  ];

  return (
    <PageLayout>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, hsla(340, 80%, 70%, 0.15) 0%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </div>

        <AnimatePresence mode="wait">
          {answer === null && (
            <motion.div
              key="question"
              className="relative z-10 text-center max-w-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              {/* Floating Hearts Around */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-rose/40"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [-20, 20, -20],
                    rotate: [0, 360],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                >
                  <Heart className="w-6 h-6" fill="currentColor" />
                </motion.div>
              ))}

              <motion.div
                className="mb-8"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart
                  className="w-24 h-24 text-rose mx-auto"
                  fill="currentColor"
                />
              </motion.div>

              <h1 className="font-display text-4xl md:text-6xl text-foreground mb-6 glow-text">
                Will You Be <span className="text-rose italic">Mine</span>?
              </h1>

              <p className="font-body text-xl text-muted-foreground mb-12">
                I have something important to ask you...
              </p>

              {noClickCount > 0 && (
                <motion.p
                  className="font-display text-lg text-gold mb-6"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {noMessages[Math.min(noClickCount - 1, noMessages.length - 1)]}
                </motion.p>
              )}

              <div className="flex flex-wrap items-center justify-center gap-6">
                {/* Yes Button */}
                <motion.button
                  className="px-12 py-4 bg-rose/20 backdrop-blur-sm border-2 border-rose rounded-full text-rose font-display text-2xl hover:bg-rose hover:text-midnight-deep transition-all duration-300"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 40px hsla(340, 80%, 70%, 0.6)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setAnswer("yes")}
                >
                  Yes! 💕
                </motion.button>

                {/* No Button (runs away) */}
                <motion.button
                  className="px-12 py-4 bg-muted/20 backdrop-blur-sm border border-muted-foreground/30 rounded-full text-muted-foreground font-display text-2xl hover:border-rose/50 transition-all duration-300"
                  animate={{ x: noButtonPosition.x, y: noButtonPosition.y }}
                  onMouseEnter={handleNoHover}
                  onClick={handleNoClick}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  No
                </motion.button>
              </div>
            </motion.div>
          )}

          {answer === "yes" && (
            <motion.div
              key="yes-answer"
              className="relative z-10 text-center max-w-2xl"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              {/* Celebration Hearts */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-rose"
                  style={{
                    left: `${Math.random() * 100}%`,
                    bottom: 0,
                  }}
                  initial={{ y: 0, opacity: 1 }}
                  animate={{
                    y: -800,
                    opacity: 0,
                    rotate: Math.random() * 360,
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  <Heart
                    className="w-6 h-6"
                    fill="currentColor"
                  />
                </motion.div>
              ))}

              <motion.div
                className="mb-8"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Sparkles className="w-20 h-20 text-gold mx-auto" />
              </motion.div>

              <motion.h1
                className="font-display text-5xl md:text-7xl text-foreground mb-4 glow-text"
                animate={{
                  textShadow: [
                    "0 0 20px hsla(340, 80%, 70%, 0.5)",
                    "0 0 60px hsla(340, 80%, 70%, 0.8)",
                    "0 0 20px hsla(340, 80%, 70%, 0.5)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                You Made Me The{" "}
                <span className="text-rose italic">Happiest!</span>
              </motion.h1>

              <p className="font-body text-xl text-muted-foreground mb-12">
                I knew you would say yes! Here is how you can reach me...
              </p>

              {/* Contact Info */}
              <motion.div
                className="glass-card p-8 space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.a
                  href="tel:+1234567890"
                  className="flex items-center justify-center gap-4 p-4 bg-rose/10 rounded-2xl border border-rose/30 hover:bg-rose/20 transition-all"
                  whileHover={{ scale: 1.02 }}
                >
                  <Phone className="w-6 h-6 text-rose" />
                  <span className="font-body text-lg text-foreground">
                    +1 (234) 567-890
                  </span>
                </motion.a>

                <motion.a
                  href="https://instagram.com/your_username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-4 p-4 bg-lavender/10 rounded-2xl border border-lavender/30 hover:bg-lavender/20 transition-all"
                  whileHover={{ scale: 1.02 }}
                >
                  <Instagram className="w-6 h-6 text-lavender" />
                  <span className="font-body text-lg text-foreground">
                    @your_username
                  </span>
                </motion.a>
              </motion.div>

              <motion.p
                className="font-display text-2xl text-gold italic mt-8 glow-gold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                "I cannot wait to start this journey with you" 💕
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </PageLayout>
  );
};

export default LoveGame;
