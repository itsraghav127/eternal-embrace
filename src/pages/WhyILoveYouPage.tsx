import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Heart, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const WhyILoveYouPage = () => {
  const verses = [
    {
      title: "Not for Looks",
      lines: [
        "I don't love you because of how you look —",
        "I love the way your eyes speak before words do,",
        "and how your smile feels honest, not rehearsed."
      ]
    },
    {
      title: "Just One of Many",
      lines: [
        "If thousands admire you, I'm just one of them —",
        "not louder, not better, just real.",
        "If hundreds like you, I'm still one.",
        "If only one person ever truly understands you,",
        "I hope I'm worthy of being that one."
      ]
    },
    {
      title: "My Quiet Choice",
      lines: [
        "I don't need to be special in the crowd.",
        "I just choose you — quietly, consistently,",
        "without conditions, without pressure."
      ]
    },
    {
      title: "The Truth",
      lines: [
        "That's it. That's the truth."
      ]
    }
  ];

  const [visibleVerses, setVisibleVerses] = useState<number[]>([]);

  useEffect(() => {
    verses.forEach((_, index) => {
      setTimeout(() => {
        setVisibleVerses((prev) => [...prev, index]);
      }, index * 600);
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
        </motion.div>

        {/* Verses */}
        <div className="max-w-3xl mx-auto space-y-8">
          {verses.map((verse, index) => (
            <motion.div
              key={index}
              className={`glass-card p-8 transition-all duration-700 ${
                visibleVerses.includes(index) ? "opacity-100" : "opacity-0"
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={
                visibleVerses.includes(index)
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                >
                  <Heart className="w-5 h-5 text-rose" fill="currentColor" />
                </motion.div>
                <h3 className="font-display text-xl text-rose/80">{verse.title}</h3>
              </div>
              
              <div className="space-y-2 pl-8">
                {verse.lines.map((line, lineIndex) => (
                  <p 
                    key={lineIndex} 
                    className="font-body text-lg text-foreground/90 leading-relaxed italic"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Message */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 3 }}
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
                Forever <span className="text-rose">yours</span>
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
