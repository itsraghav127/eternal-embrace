import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Heart, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const WhyILoveYouPage = () => {
  const reasons = [
    "The way your eyes light up when you smile",
    "Your kindness that touches everyone around you",
    "How you make ordinary moments feel magical",
    "Your strength that inspires me every day",
    "The sound of your laughter, my favorite melody",
    "Your patience and understanding heart",
    "The way you believe in me when I don't believe in myself",
    "Your beautiful soul that shines so bright",
    "How you make me want to be a better person",
    "Every little thing that makes you, you",
  ];

  const [visibleReasons, setVisibleReasons] = useState<number[]>([]);

  useEffect(() => {
    reasons.forEach((_, index) => {
      setTimeout(() => {
        setVisibleReasons((prev) => [...prev, index]);
      }, index * 400);
    });
  }, []);

  return (
    <PageLayout>
      <div className="min-h-screen py-20 px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Heart className="w-8 h-8 text-rose" fill="currentColor" />
            <Sparkles className="w-6 h-6 text-gold" />
            <Heart className="w-8 h-8 text-rose" fill="currentColor" />
          </motion.div>

          <h1 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            Why I <span className="text-rose glow-text animate-heartbeat inline-block">Love</span> You
          </h1>
          <p className="font-body text-foreground/70 max-w-xl mx-auto">
            A million reasons could never be enough, but here are just a few...
          </p>
        </motion.div>

        {/* Reasons List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className={`glass-card p-6 flex items-center gap-4 transition-all duration-500 ${
                visibleReasons.includes(index) ? "opacity-100" : "opacity-0"
              }`}
              initial={{ opacity: 0, x: -30 }}
              animate={
                visibleReasons.includes(index)
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -30 }
              }
              whileHover={{ x: 10, scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="flex-shrink-0 w-8 h-8 rounded-full bg-rose/20 flex items-center justify-center"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              >
                <span className="font-display text-rose text-sm">
                  {index + 1}
                </span>
              </motion.div>
              
              <p className="font-body text-lg text-foreground/90">
                {reason}
              </p>

              <motion.div
                className="ml-auto"
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
              >
                <Heart className="w-5 h-5 text-rose/50" fill="currentColor" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Infinite Love Message */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 4 }}
        >
          <div className="inline-block relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-rose/20 via-gold/20 to-lavender/20 blur-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <div className="glass-card px-10 py-6 relative">
              <p className="font-display text-2xl md:text-3xl text-foreground">
                And <span className="text-rose">infinite</span> more reasons...
              </p>
              <p className="font-body text-foreground/70 mt-2">
                that words could never capture
              </p>
              <motion.div
                className="flex justify-center gap-2 mt-4"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {[...Array(5)].map((_, i) => (
                  <Heart
                    key={i}
                    className="w-4 h-4 text-rose"
                    fill="currentColor"
                    style={{ opacity: 0.3 + i * 0.15 }}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default WhyILoveYouPage;
