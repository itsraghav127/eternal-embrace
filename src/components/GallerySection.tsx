import { motion } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryItems = [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1529634597503-139d3726fed5?w=600&h=400&fit=crop",
    caption: "Every moment reminds me of you.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&h=400&fit=crop",
    caption: "You live in my heart.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=600&h=400&fit=crop",
    caption: "Together is my favorite place.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop",
    caption: "Forever starts with you.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1501901609772-df0848060b33?w=600&h=400&fit=crop",
    caption: "My heart found its home.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop",
    caption: "Love is our greatest adventure.",
  },
];

const GallerySection = () => {
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section className="relative py-20 px-6">
      <div className="container mx-auto max-w-6xl">
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
            <motion.div
              key={index}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative overflow-hidden rounded-2xl romantic-border">
                {/* Pink Ambient Glow */}
                <motion.div
                  className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "radial-gradient(circle at center, hsla(340, 80%, 70%, 0.3) 0%, transparent 70%)",
                  }}
                />

                <motion.img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Caption Overlay */}
                <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-midnight-deep/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-4xl bg-midnight-deep/95 border-rose/30 p-0 overflow-hidden">
          {selectedItem && (
            <div className="relative">
              <img
                src={selectedItem.src}
                alt={selectedItem.caption}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
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
