import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Play, Pause, X } from "lucide-react";

const galleryItems = [
  { id: 1, src: "/videos/1.mp4", caption: "Every moment reminds me of you." },
  { id: 2, src: "/videos/2.mp4", caption: "You live in my heart." },
  { id: 3, src: "/videos/3.mp4", caption: "Together is my favorite place." },
  { id: 4, src: "/videos/4.mp4", caption: "Forever starts with you." },
  { id: 5, src: "/videos/5.mp4", caption: "My heart found its home." },
  { id: 6, src: "/videos/6.mp4", caption: "Love is our greatest adventure." },
  { id: 7, src: "/videos/7.mp4", caption: "You are my sunshine." },
  { id: 8, src: "/videos/8.mp4", caption: "Every love story is beautiful." },
  { id: 9, src: "/videos/9.mp4", caption: "But ours is my favorite." },
  { id: 10, src: "/videos/10.mp4", caption: "You complete me." },
  { id: 11, src: "/videos/11.mp4", caption: "My heart beats for you." },
  { id: 12, src: "/videos/12.mp4", caption: "You are my forever." },
  { id: 13, src: "/videos/13.mp4", caption: "In your arms, I am home." },
  { id: 14, src: "/videos/14.mp4", caption: "Our love is timeless." },
  { id: 15, src: "/videos/15.mp4", caption: "Always and forever yours." },
];

const VideoCard = ({ 
  item, 
  index, 
  onSelect 
}: { 
  item: typeof galleryItems[0]; 
  index: number;
  onSelect: () => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current?.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onSelect}
    >
      <div className="relative overflow-hidden rounded-2xl romantic-border aspect-video">
        {/* Pink Ambient Glow */}
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: "radial-gradient(circle at center, hsla(340, 80%, 70%, 0.3) 0%, transparent 70%)",
          }}
        />

        {/* Video */}
        <video
          ref={videoRef}
          src={item.src}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          muted
          loop
          playsInline
          preload="metadata"
        />

        {/* Play Icon Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <motion.div
            className="w-16 h-16 rounded-full bg-rose/30 backdrop-blur-sm flex items-center justify-center border border-rose/50"
            animate={{ 
              opacity: isHovered ? 0 : 1,
              scale: isHovered ? 0.8 : 1 
            }}
            transition={{ duration: 0.3 }}
          >
            <Play className="w-8 h-8 text-foreground ml-1" fill="currentColor" />
          </motion.div>
        </div>

        {/* Caption Overlay */}
        <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-midnight-deep/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
          <motion.p
            className="text-foreground font-display text-lg italic p-6 text-center"
            initial={{ y: 20 }}
            whileHover={{ y: 0 }}
          >
            "{item.caption}"
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

const GallerySection = () => {
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const dialogVideoRef = useRef<HTMLVideoElement>(null);

  const handleSelect = (item: typeof galleryItems[0]) => {
    setSelectedItem(item);
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    if (dialogVideoRef.current) {
      if (isPlaying) {
        dialogVideoRef.current.pause();
      } else {
        dialogVideoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            Our <span className="text-rose glow-text">Memories</span>
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Captured moments of our beautiful journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <VideoCard
              key={item.id}
              item={item}
              index={index}
              onSelect={() => handleSelect(item)}
            />
          ))}
        </div>
      </div>

      {/* Video Lightbox Dialog */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-5xl bg-midnight-deep/95 border-rose/30 p-0 overflow-hidden">
          {selectedItem && (
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-30 p-2 rounded-full bg-midnight-deep/80 border border-rose/30 text-foreground hover:bg-rose/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Video Player */}
              <div className="relative aspect-video">
                <video
                  ref={dialogVideoRef}
                  src={selectedItem.src}
                  className="w-full h-full object-contain bg-midnight-deep"
                  autoPlay
                  loop
                  playsInline
                  onClick={togglePlayPause}
                />

                {/* Play/Pause Overlay */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  onClick={togglePlayPause}
                  initial={false}
                  animate={{ opacity: isPlaying ? 0 : 1 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-20 h-20 rounded-full bg-rose/30 backdrop-blur-sm flex items-center justify-center border border-rose/50">
                    {isPlaying ? (
                      <Pause className="w-10 h-10 text-foreground" fill="currentColor" />
                    ) : (
                      <Play className="w-10 h-10 text-foreground ml-1" fill="currentColor" />
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-midnight-deep to-transparent p-6">
                <p className="text-foreground font-display text-xl italic text-center">
                  "{selectedItem.caption}"
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
