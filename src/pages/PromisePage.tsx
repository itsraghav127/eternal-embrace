import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Heart, Star, Crown } from "lucide-react";

const PromisePage = () => {
  const promises = [
    {
      icon: Heart,
      title: "I Promise to Love You",
      description: "Unconditionally, completely, and eternally. Through every season of life, my love for you will only grow stronger.",
    },
    {
      icon: Star,
      title: "I Promise to Support You",
      description: "In your dreams, your fears, your victories, and your struggles. I will be your biggest cheerleader and your safest shelter.",
    },
    {
      icon: Crown,
      title: "I Promise to Respect You",
      description: "Your thoughts, your feelings, your boundaries. You are my equal, my partner, my queen.",
    },
    {
      icon: Heart,
      title: "I Promise to Be Honest",
      description: "With my words, my actions, and my heart. Trust is the foundation we build our love upon.",
    },
    {
      icon: Star,
      title: "I Promise to Choose You",
      description: "Every single day, in every moment. You are my forever choice, my always answer.",
    },
    {
      icon: Crown,
      title: "I Promise to Grow With You",
      description: "To become better together, to learn, to evolve. Our love story is just beginning.",
    },
  ];

  return (
    <PageLayout>
      <div className="min-h-screen py-20 px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-rose/30 to-gold/30 flex items-center justify-center"
            animate={{ 
              boxShadow: [
                "0 0 20px hsla(340, 80%, 70%, 0.3)",
                "0 0 40px hsla(340, 80%, 70%, 0.5)",
                "0 0 20px hsla(340, 80%, 70%, 0.3)",
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Heart className="w-10 h-10 text-rose" fill="currentColor" />
          </motion.div>

          <h1 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            My <span className="text-gold glow-gold">Promises</span> to You
          </h1>
          <p className="font-body text-foreground/70 max-w-xl mx-auto">
            Sacred vows written on my heart, sealed with eternal love
          </p>
        </motion.div>

        {/* Promises Grid */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {promises.map((promise, index) => {
            const Icon = promise.icon;
            return (
              <motion.div
                key={index}
                className="glass-card p-8 relative overflow-hidden group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -5 }}
              >
                {/* Background Decoration */}
                <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-gradient-to-br from-rose/10 to-lavender/10 blur-2xl group-hover:scale-150 transition-transform duration-700" />

                <motion.div
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-rose/20 to-gold/20 flex items-center justify-center mb-4"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, delay: index * 0.5 }}
                >
                  <Icon className="w-7 h-7 text-rose" />
                </motion.div>

                <h3 className="font-display text-xl md:text-2xl text-foreground mb-3">
                  {promise.title}
                </h3>
                <p className="font-body text-foreground/70 leading-relaxed">
                  {promise.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Signature */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="inline-block glass-card px-8 py-4">
            <p className="font-display text-xl text-rose italic">
              "Forever and always, my love"
            </p>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-3" />
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default PromisePage;
