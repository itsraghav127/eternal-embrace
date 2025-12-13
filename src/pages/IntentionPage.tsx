import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Heart, Sparkles } from "lucide-react";

const IntentionPage = () => {
  const intentions = [
    "To love you more deeply with each passing day",
    "To be your safe place in every storm",
    "To hold your hand through life's journey",
    "To make you smile even on your hardest days",
    "To choose you, again and again, forever",
    "To grow old together, creating endless memories",
  ];

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
            className="inline-flex items-center gap-2 mb-4"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-6 h-6 text-gold" />
            <span className="text-gold font-body text-sm uppercase tracking-widest">
              My Heart's Declaration
            </span>
            <Sparkles className="w-6 h-6 text-gold" />
          </motion.div>

          <h1 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            My <span className="text-rose glow-text">Intentions</span>
          </h1>
          <p className="font-body text-foreground/70 max-w-xl mx-auto">
            These are the promises my heart whispers to yours every single day
          </p>
        </motion.div>

        {/* Intentions Grid */}
        <div className="max-w-4xl mx-auto space-y-6">
          {intentions.map((intention, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 md:p-8 relative overflow-hidden group"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Decorative Heart */}
              <motion.div
                className="absolute -right-4 -top-4 text-rose/10"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Heart className="w-24 h-24" fill="currentColor" />
              </motion.div>

              <div className="flex items-start gap-4 relative z-10">
                <motion.div
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-rose/20 flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                >
                  <Heart className="w-5 h-5 text-rose" fill="currentColor" />
                </motion.div>
                <p className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed">
                  {intention}
                </p>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-rose/5 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Footer Message */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <p className="font-display text-2xl text-rose/80 italic">
            "Every intention leads back to you"
          </p>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default IntentionPage;
