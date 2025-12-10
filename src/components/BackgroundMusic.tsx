import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Romantic piano music (royalty-free)
  const musicUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3";

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          // Autoplay was prevented
        });
      }
      setIsPlaying(!isPlaying);
    }
    setShowPrompt(false);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.loop = true;
    }
  }, []);

  return (
    <>
      <audio ref={audioRef} src={musicUrl} preload="auto" />

      {/* Initial Prompt */}
      <AnimatePresence>
        {showPrompt && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-midnight-deep/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="glass-card p-8 max-w-md text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <motion.div
                className="text-6xl mb-4"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ♥
              </motion.div>
              <h3 className="font-display text-2xl text-foreground mb-4">
                A Love Letter For You
              </h3>
              <p className="text-muted-foreground font-body mb-6">
                This experience is best with music. Would you like to hear the melody of my heart?
              </p>
              <div className="flex gap-4 justify-center">
                <motion.button
                  onClick={toggleMusic}
                  className="px-6 py-3 bg-rose/20 border border-rose/50 rounded-full text-rose font-body hover:bg-rose/30 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Volume2 className="inline-block mr-2 w-5 h-5" />
                  Play Music
                </motion.button>
                <motion.button
                  onClick={() => setShowPrompt(false)}
                  className="px-6 py-3 bg-muted/50 border border-muted-foreground/30 rounded-full text-muted-foreground font-body hover:bg-muted/70 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Continue Quietly
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Music Control */}
      {!showPrompt && (
        <motion.button
          onClick={toggleMusic}
          className="fixed bottom-6 right-6 z-40 p-4 glass-card rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isPlaying ? (
            <Volume2 className="w-6 h-6 text-rose" />
          ) : (
            <VolumeX className="w-6 h-6 text-muted-foreground" />
          )}
          
          {/* Sound Waves Animation */}
          {isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-full h-full rounded-full border border-rose/30"
                  animate={{
                    scale: [1, 2],
                    opacity: [0.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.5,
                    repeat: Infinity,
                  }}
                />
              ))}
            </div>
          )}
        </motion.button>
      )}
    </>
  );
};

export default BackgroundMusic;
