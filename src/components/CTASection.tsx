import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
          className="relative rounded-3xl glass-strong border-glow p-12 md:p-20 text-center overflow-hidden"
        >
          <div className="floating-orb w-[300px] h-[300px] bg-primary top-[-50px] right-[-50px]" />
          <div className="floating-orb w-[200px] h-[200px] bg-accent bottom-[-50px] left-[-50px]" style={{ animationDelay: '3s' }} />
          <div className="absolute inset-0 bg-grid opacity-10" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Ready to Start <span className="text-gradient-gold">Trading?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto mb-8">
              Join over 800,000 traders worldwide. Open your free account in under 60 seconds.
            </p>
            <Button size="lg" className="gap-2 text-base px-10 glow-gold rounded-xl h-12" asChild>
              <Link to="/register">
                Create Free Account <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
