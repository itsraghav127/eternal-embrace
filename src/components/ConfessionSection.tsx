import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const confessionText = `From the moment I first saw you, my world changed forever. You walked into my life like a gentle breeze on a summer evening, and suddenly everything made sense. 

Every heartbeat whispers your name. Every dream paints your smile. You are not just the love of my life — you are my life itself.

In your eyes, I found my home. In your arms, I found my peace. In your heart, I found my forever.

I promise to love you through every sunrise and sunset, through every storm and rainbow, through every moment that life brings us. You are my today, my tomorrow, and my always.

Thank you for being you. Thank you for choosing me. Thank you for making my heart believe in magic again.`;

const ConfessionSection = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < confessionText.length) {
        setDisplayedText(confessionText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isInView]);

  const highlightWords = ["heart", "love", "forever", "always", "magic", "peace", "home"];

  const renderText = (text: string) => {
    const words = text.split(" ");
    return words.map((word, index) => {
      const cleanWord = word.toLowerCase().replace(/[.,!?]/g, "");
      const isHighlighted = highlightWords.includes(cleanWord);

      return (
        <span key={index}>
          {isHighlighted ? (
            <motion.span
              className="text-rose font-semibold"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {word}
            </motion.span>
          ) : (
            word
          )}
          {" "}
        </span>
      );
    });
  };

  return (
    <section
      id="confession"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-20 px-6"
    >
      {/* Background Blur Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsla(340, 80%, 70%, 0.15) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            My <span className="text-rose glow-text italic">Confession</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-rose to-transparent mx-auto"
            animate={{ scaleX: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>

        <motion.div
          className="glass-card p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="font-body text-lg md:text-xl leading-relaxed text-foreground/90 whitespace-pre-line">
            {renderText(displayedText)}
            {displayedText.length < confessionText.length && (
              <motion.span
                className="inline-block w-0.5 h-6 bg-rose ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
            )}
          </div>

          {displayedText.length === confessionText.length && (
            <motion.div
              className="mt-8 text-right"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="font-display text-2xl text-gold italic glow-gold">
                ~ With all my love, forever yours
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ConfessionSection;
