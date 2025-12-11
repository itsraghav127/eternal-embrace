import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Play, X, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingHearts from "@/components/FloatingHearts";
import FallingPetals from "@/components/FallingPetals";

const confessionVideos = [
  { id: 1, src: "/videos/confession-1.mp4", title: "My First Words to You", caption: "The day I knew you were special..." },
  { id: 2, src: "/videos/confession-2.mp4", title: "Why I Love You", caption: "A thousand reasons, one heart..." },
  { id: 3, src: "/videos/confession-3.mp4", title: "Our Journey Together", caption: "Every step with you is magic..." },
  { id: 4, src: "/videos/confession-4.mp4", title: "My Promise to You", caption: "Forever isn't long enough..." },
  { id: 5, src: "/videos/confession-5.mp4", title: "When I Miss You", caption: "Distance means nothing when you mean everything..." },
  { id: 6, src: "/videos/confession-6.mp4", title: "Our Special Moments", caption: "Time stops when I'm with you..." },
  { id: 7, src: "/videos/confession-7.mp4", title: "My Heart Speaks", caption: "Words fail where love prevails..." },
  { id: 8, src: "/videos/confession-8.mp4", title: "Dreams of Us", caption: "You're my favorite dream come true..." },
  { id: 9, src: "/videos/confession-9.mp4", title: "Love Letters", caption: "Written in the stars, sealed with a kiss..." },
  { id: 10, src: "/videos/confession-10.mp4", title: "Forever Yours", caption: "My heart belongs to you, always..." },
];

const ConfessionsVideo = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-midnight via-midnight-light to-lavender/20 relative overflow-hidden">
      {/* Ambient animations */}
      <FloatingHearts />
      <FallingPetals />
      
      {/* Back navigation */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-6 left-6 z-50"
      >
        <Link
          to="/"
          className="flex items-center gap-2 px-4 py-2 bg-rose/20 backdrop-blur-md rounded-full border border-rose/30 text-rose-light hover:bg-rose/30 transition-all duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-quicksand text-sm">Back to Home</span>
        </Link>
      </motion.div>

      {/* Header */}
      <div className="pt-24 pb-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Heart className="w-12 h-12 text-rose mx-auto mb-4 animate-heartbeat" />
          <h1 className="font-playfair text-4xl md:text-6xl text-cream mb-4">
            Video <span className="text-rose">Confessions</span>
          </h1>
          <p className="font-quicksand text-cream/70 text-lg max-w-2xl mx-auto px-4">
            Every video holds a piece of my heart, a moment of love captured just for you
          </p>
        </motion.div>
      </div>

      {/* Video Grid */}
      <div className="container mx-auto px-4 pb-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {confessionVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div
                onClick={() => setSelectedVideo(video.id)}
                className="relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer bg-midnight-light border border-rose/20 hover:border-rose/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,182,193,0.3)]"
              >
                {/* Video thumbnail */}
                <video
                  src={video.src}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  muted
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-80" />
                
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-rose/30 backdrop-blur-sm flex items-center justify-center group-hover:bg-rose/50 group-hover:scale-110 transition-all duration-300">
                    <Play className="w-6 h-6 text-cream ml-1" fill="currentColor" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="w-4 h-4 text-rose animate-pulse" />
                    <span className="text-rose-light text-xs font-quicksand">Confession #{video.id}</span>
                  </div>
                  <h3 className="font-playfair text-cream text-lg mb-1">{video.title}</h3>
                  <p className="font-quicksand text-cream/60 text-sm italic">{video.caption}</p>
                </div>
                
                {/* Corner hearts */}
                <div className="absolute top-3 right-3 flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <Heart
                      key={i}
                      className="w-3 h-3 text-rose/50 group-hover:text-rose transition-colors duration-300"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Add more videos hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center text-cream/50 font-quicksand text-sm mt-12"
        >
          Add your confession videos as confession-1.mp4 through confession-10.mp4 in the public/videos folder
        </motion.p>
      </div>

      {/* Video Lightbox */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-midnight/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-rose/20 border border-rose/30 flex items-center justify-center text-cream hover:bg-rose/40 transition-colors"
              onClick={() => setSelectedVideo(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-lg w-full max-h-[80vh] rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(255,182,193,0.4)]"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={confessionVideos.find(v => v.id === selectedVideo)?.src}
                className="w-full h-full object-contain bg-black"
                controls
                autoPlay
              />
            </motion.div>
            
            {/* Caption below video */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-8 text-center"
            >
              <p className="font-playfair text-2xl text-rose mb-2">
                {confessionVideos.find(v => v.id === selectedVideo)?.title}
              </p>
              <p className="font-quicksand text-cream/70 italic">
                {confessionVideos.find(v => v.id === selectedVideo)?.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ConfessionsVideo;
