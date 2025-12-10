import { motion } from "framer-motion";

const FooterSection = () => {
  return (
    <footer className="relative py-24 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
          style={{
            background: "radial-gradient(ellipse at bottom, hsla(340, 80%, 70%, 0.2) 0%, transparent 70%)",
          }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Decorative Hearts */}
        <motion.div
          className="flex justify-center gap-4 mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.span
              key={i}
              className="text-rose text-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            >
              ♥
            </motion.span>
          ))}
        </motion.div>

        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.h3
            className="font-display text-3xl md:text-5xl text-foreground mb-6 leading-relaxed"
            animate={{
              textShadow: [
                "0 0 20px hsla(340, 80%, 70%, 0.3)",
                "0 0 40px hsla(340, 80%, 70%, 0.6)",
                "0 0 20px hsla(340, 80%, 70%, 0.3)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            If you ever see this…
            <br />
            <span className="text-rose italic">just know you are the reason</span>
            <br />
            my world feels warm.
          </motion.h3>

          <motion.div
            className="w-32 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto my-8"
            animate={{ scaleX: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          <motion.p
            className="font-body text-lg text-muted-foreground mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Made with infinite love, just for you
          </motion.p>

          {/* Heartbeat Animation */}
          <motion.div
            className="inline-block"
            animate={{
              scale: [1, 1.1, 1, 1.1, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              times: [0, 0.2, 0.4, 0.6, 1],
            }}
          >
            <svg
              className="w-16 h-16 text-rose mx-auto"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{
                filter: "drop-shadow(0 0 20px hsla(340, 80%, 70%, 0.8))",
              }}
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.p
          className="mt-16 text-sm text-muted-foreground/60 font-body"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          ♥ Forever & Always ♥
        </motion.p>
      </div>
    </footer>
  );
};

export default FooterSection;
