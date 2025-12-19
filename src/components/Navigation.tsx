import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Heart, Image, Video, Gamepad2, Home, Sparkles, Crown, Shield, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/gallery", label: "Gallery", icon: Image },
  { path: "/intentions", label: "Intentions", icon: Sparkles },
  { path: "/promises", label: "Promises", icon: Crown },
  { path: "/why-i-love-you", label: "Why I Love You", icon: Heart },
  { path: "/confession", label: "Confession", icon: Video },
  { path: "/love-game", label: "Love Game", icon: Gamepad2 },
  { path: "/admin", label: "Admin", icon: Shield },
];

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 p-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Desktop Navigation */}
        <div className="glass-card px-4 py-3 hidden lg:flex items-center justify-center gap-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;

            return (
              <Link key={item.path} to={item.path}>
                <motion.div
                  className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-rose/30 text-rose"
                      : "text-foreground/70 hover:text-rose hover:bg-rose/10"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-body text-sm font-medium">{item.label}</span>
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <div className="glass-card px-4 py-3 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose" />
              <span className="font-display text-lg text-foreground">Axmi</span>
            </Link>
            
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full text-foreground/70 hover:text-rose hover:bg-rose/10 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="glass-card mt-2 py-2 overflow-hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {navItems.map((item, index) => {
                  const isActive = location.pathname === item.path;
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 transition-all duration-300 ${
                          isActive
                            ? "bg-rose/20 text-rose border-l-2 border-rose"
                            : "text-foreground/70 hover:text-rose hover:bg-rose/10"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-body font-medium">{item.label}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
