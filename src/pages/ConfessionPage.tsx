import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import PageLayout from "@/components/PageLayout";
import RomanticVideoPlayer from "@/components/RomanticVideoPlayer";

const heartfeltNote = `Every word in this video comes straight from my heart. I've rehearsed this a thousand times in my head, but no amount of practice could capture the depth of what I feel for you.

You are the reason I believe in love. The reason I smile at random moments. The reason my heart feels complete.

This confession is just a small glimpse into the infinite love I hold for you. I hope these words find their way to your heart, just as you found your way into mine.

Forever and always, I am yours.`;

const ConfessionPage = () => {
  const [displayedNote, setDisplayedNote] = useState("");
  const [noteComplete, setNoteComplete] = useState(false);
  const noteRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (noteRef.current) {
      observer.observe(noteRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < heartfeltNote.length) {
        setDisplayedNote(heartfeltNote.slice(0, index + 1));
        index++;
      } else {
        setNoteComplete(true);
        clearInterval(interval);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, hsla(340, 80%, 70%, 0.2) 0%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </div>

        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="font-display text-5xl md:text-7xl text-foreground mb-4 glow-text">
            My <span className="text-rose italic">Confession</span>
          </h1>
          <p className="font-body text-lg text-muted-foreground">
            Words I have been wanting to say...
          </p>
        </motion.div>
      </section>

      {/* Video Section */}
      <section className="relative py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="glass-card p-4 md:p-8 rounded-3xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <RomanticVideoPlayer
              src="/videos/confessions/confession-1.mp4"
              title="My Heart Speaks"
            />
          </motion.div>

          <motion.p
            className="text-center text-muted-foreground font-body text-sm mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Add your confession video as confession-1.mp4 in public/videos/confessions folder
          </motion.p>
        </div>
      </section>

      {/* Heartfelt Note Section */}
      <section ref={noteRef} className="relative py-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">
              A Note From My <span className="text-gold glow-gold">Heart</span>
            </h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"
              animate={{ scaleX: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>

          <motion.div
            className="glass-card p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="font-body text-lg md:text-xl leading-relaxed text-foreground/90 whitespace-pre-line">
              {displayedNote}
              {!noteComplete && (
                <motion.span
                  className="inline-block w-0.5 h-6 bg-rose ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
              )}
            </div>

            {noteComplete && (
              <motion.div
                className="mt-8 text-right"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p className="font-display text-2xl text-rose italic glow-text">
                  ~ With all my love
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ConfessionPage;
