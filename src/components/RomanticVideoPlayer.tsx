import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Play, Pause, Volume2, VolumeX, Maximize, SkipBack, SkipForward } from "lucide-react";

interface RomanticVideoPlayerProps {
  src: string;
  title?: string;
  caption?: string;
  onClose?: () => void;
}

const RomanticVideoPlayer = ({ src, title, caption, onClose }: RomanticVideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const controlsTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
      setProgress((video.currentTime / video.duration) * 100);
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setVolume(value);
    if (videoRef.current) {
      videoRef.current.volume = value;
      setIsMuted(value === 0);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = (clickX / rect.width) * 100;
    if (videoRef.current) {
      videoRef.current.currentTime = (percentage / 100) * duration;
    }
  };

  const skip = (seconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime += seconds;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="relative w-full max-w-2xl rounded-3xl overflow-hidden bg-midnight-deep shadow-[0_0_80px_rgba(255,182,193,0.3)]"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isPlaying && setShowControls(false)}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={src}
        className="w-full aspect-video object-contain bg-black"
        onClick={togglePlay}
      />

      {/* Heart overlay when paused */}
      {!isPlaying && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute inset-0 flex items-center justify-center bg-midnight/30 cursor-pointer"
          onClick={togglePlay}
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-20 h-20 rounded-full bg-rose/30 backdrop-blur-md flex items-center justify-center border-2 border-rose/50"
          >
            <Play className="w-10 h-10 text-cream ml-1" fill="currentColor" />
          </motion.div>
        </motion.div>
      )}

      {/* Controls overlay */}
      <motion.div
        initial={false}
        animate={{ opacity: showControls ? 1 : 0 }}
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-midnight-deep via-midnight-deep/80 to-transparent p-4 pt-12"
      >
        {/* Heart-shaped progress bar */}
        <div className="mb-4">
          <div
            className="relative h-3 bg-midnight-light/50 rounded-full cursor-pointer overflow-hidden group"
            onClick={handleProgressClick}
          >
            {/* Progress fill with gradient */}
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-rose via-rose-light to-gold rounded-full"
              style={{ width: `${progress}%` }}
            />
            
            {/* Heart indicator */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
              style={{ left: `${progress}%` }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="relative"
              >
                <Heart
                  className="w-5 h-5 text-rose drop-shadow-[0_0_8px_rgba(255,182,193,0.8)]"
                  fill="currentColor"
                />
              </motion.div>
            </motion.div>

            {/* Sparkle effect on progress */}
            <div
              className="absolute top-0 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent w-8 animate-pulse"
              style={{ left: `${Math.max(0, progress - 4)}%` }}
            />
          </div>

          {/* Time display */}
          <div className="flex justify-between mt-1 text-xs font-quicksand text-cream/70">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Control buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Skip back */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => skip(-10)}
              className="p-2 text-cream/70 hover:text-rose transition-colors"
            >
              <SkipBack className="w-5 h-5" />
            </motion.button>

            {/* Play/Pause with heart design */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={togglePlay}
              className="relative w-12 h-12 rounded-full bg-rose/30 border border-rose/50 flex items-center justify-center group hover:bg-rose/50 transition-colors"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-cream" />
              ) : (
                <Play className="w-5 h-5 text-cream ml-0.5" fill="currentColor" />
              )}
              {/* Pulsing heart ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-rose/50"
                animate={{ scale: [1, 1.2], opacity: [0.5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.button>

            {/* Skip forward */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => skip(10)}
              className="p-2 text-cream/70 hover:text-rose transition-colors"
            >
              <SkipForward className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Volume and fullscreen */}
          <div className="flex items-center gap-3">
            {/* Volume control */}
            <div className="flex items-center gap-2 group">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleMute}
                className="p-2 text-cream/70 hover:text-rose transition-colors"
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </motion.button>
              
              {/* Heart-styled volume slider */}
              <div className="w-0 group-hover:w-20 overflow-hidden transition-all duration-300">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-full h-1 rounded-full appearance-none cursor-pointer bg-midnight-light/50
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:w-3
                    [&::-webkit-slider-thumb]:h-3
                    [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:bg-rose
                    [&::-webkit-slider-thumb]:shadow-[0_0_8px_rgba(255,182,193,0.8)]"
                />
              </div>
            </div>

            {/* Fullscreen */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleFullscreen}
              className="p-2 text-cream/70 hover:text-rose transition-colors"
            >
              <Maximize className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Title and caption */}
        {(title || caption) && (
          <div className="mt-4 text-center">
            {title && (
              <h3 className="font-playfair text-xl text-cream flex items-center justify-center gap-2">
                <Heart className="w-4 h-4 text-rose" fill="currentColor" />
                {title}
                <Heart className="w-4 h-4 text-rose" fill="currentColor" />
              </h3>
            )}
            {caption && (
              <p className="font-quicksand text-cream/60 text-sm italic mt-1">{caption}</p>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default RomanticVideoPlayer;
