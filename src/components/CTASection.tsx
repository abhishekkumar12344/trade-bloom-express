import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl bg-gradient-to-br from-primary/20 via-card to-card border border-primary/20 p-12 md:p-20 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid opacity-10" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Ready to Start <span className="text-gradient-gold">Trading?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto mb-8">
              Join over 800,000 traders worldwide. Open your free account in under 60 seconds.
            </p>
            <Button size="lg" className="gap-2 text-base px-10 glow-gold">
              Create Free Account <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
