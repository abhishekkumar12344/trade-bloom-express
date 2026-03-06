import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, Smartphone } from "lucide-react";
import platformImg from "@/assets/platform-preview.jpg";

const PlatformSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="platform" ref={ref} className="py-24 bg-card/50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Trade Anywhere,{" "}
              <span className="text-gradient-gold">Anytime</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Our award-winning platform is available on web, desktop, and mobile. Get real-time charts, instant execution, and full account control wherever you go.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: Monitor, text: "Advanced web platform with professional charts" },
                { icon: Smartphone, text: "Native iOS & Android apps for trading on the go" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-secondary-foreground">{item.text}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="gap-2 glow-gold">
              Open Free Account <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden glow-gold">
              <img
                src={platformImg}
                alt="TradeX Platform Preview"
                className="w-full rounded-2xl animate-float"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
