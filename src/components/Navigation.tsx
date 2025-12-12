import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Heart, Image, Video, Gamepad2, Home } from "lucide-react";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/gallery", label: "Gallery", icon: Image },
  { path: "/confession", label: "Confession", icon: Video },
  { path: "/love-game", label: "Love Game", icon: Gamepad2 },
];

const Navigation = () => {
  const location = useLocation();

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 p-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="glass-card px-6 py-3 flex items-center justify-center gap-2 md:gap-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;

            return (
              <Link key={item.path} to={item.path}>
                <motion.div
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-rose/30 text-rose"
                      : "text-foreground/70 hover:text-rose hover:bg-rose/10"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-body text-sm md:text-base font-medium hidden sm:inline">
                    {item.label}
                  </span>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
