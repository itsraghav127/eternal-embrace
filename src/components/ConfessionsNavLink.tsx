import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Video } from "lucide-react";

const ConfessionsNavLink = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed top-6 right-6 z-50"
    >
      <Link
        to="/confessions"
        className="flex items-center gap-2 px-4 py-2 bg-rose/20 backdrop-blur-md rounded-full border border-rose/30 text-rose-light hover:bg-rose/40 transition-all duration-300 group"
      >
        <Video className="w-4 h-4" />
        <span className="font-quicksand text-sm">Video Confessions</span>
        <Heart className="w-3 h-3 group-hover:animate-heartbeat" />
      </Link>
    </motion.div>
  );
};

export default ConfessionsNavLink;
