import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Heart } from "lucide-react";

const ConfessionMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Different romantic track for confessions page
  const musicUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3";

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
      audioRef.current.volume = 0.25;
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
            className="fixed inset-0 z-[60] flex items-center justify-center bg-midnight-deep/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="p-8 max-w-md text-center bg-midnight-light/50 backdrop-blur-xl rounded-3xl border border-rose/30 shadow-[0_0_60px_rgba(255,182,193,0.2)]"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
            >
              <motion.div
                className="flex justify-center gap-2 mb-4"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-8 h-8 text-rose fill-rose" />
                <Heart className="w-10 h-10 text-rose fill-rose" />
                <Heart className="w-8 h-8 text-rose fill-rose" />
              </motion.div>
              <h3 className="font-playfair text-2xl text-cream mb-4">
                My Video Confessions
              </h3>
              <p className="text-cream/70 font-quicksand mb-6">
                These are the moments where my heart speaks... Let the music set the mood for my deepest confessions.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <motion.button
                  onClick={toggleMusic}
                  className="px-6 py-3 bg-rose/30 border border-rose/50 rounded-full text-rose-light font-quicksand hover:bg-rose/40 transition-colors flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Volume2 className="w-5 h-5" />
                  Play Music
                </motion.button>
                <motion.button
                  onClick={() => setShowPrompt(false)}
                  className="px-6 py-3 bg-midnight/50 border border-cream/20 rounded-full text-cream/60 font-quicksand hover:bg-midnight/70 transition-colors"
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
          className="fixed bottom-6 right-6 z-40 p-4 bg-midnight-light/80 backdrop-blur-md rounded-full border border-rose/30"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isPlaying ? (
            <Volume2 className="w-6 h-6 text-rose" />
          ) : (
            <VolumeX className="w-6 h-6 text-cream/50" />
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

export default ConfessionMusic;
