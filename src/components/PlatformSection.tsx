import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import devicesImg from "@/assets/devices-mockup.jpg";

const reviews = [
  "\"This app is very easy to use. Deposits and withdrawals are very easy.\"",
  "\"I love the responsive support team, always there to help!\"",
  "\"Simple interface, no issues in withdrawal. Thanks TradeX!\"",
  "\"Best trading experience I've ever had, highly recommend.\"",
];

const PlatformSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="platform" ref={ref} className="py-28 section-dark relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            You can trade on <span className="text-gradient-gold">any device</span>
          </h2>
          <p className="text-muted-foreground text-lg">TradeX adapts to your style</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <img src={devicesImg} alt="TradeX on all devices" className="w-full rounded-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sm text-muted-foreground">Downloads</span>
              <span className="text-3xl font-heading font-bold text-primary">10M+</span>
            </div>

            <div className="space-y-4 mb-8">
              {reviews.map((review, i) => (
                <div key={i} className="p-4 rounded-xl bg-card border border-border/30">
                  <p className="text-sm text-secondary-foreground italic leading-relaxed">{review}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-muted-foreground text-sm">App rating</span>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-heading font-bold text-primary">4.8</span>
                <span className="text-muted-foreground text-sm">/ 5</span>
              </div>
              <div className="flex gap-1">
                {[1,2,3,4,5].map((s) => (
                  <svg key={s} className="w-4 h-4 text-primary fill-primary" viewBox="0 0 20 20">
                    <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.28 5.23 15.71l.91-5.32L2.27 6.62l5.34-.78L10 1z" />
                  </svg>
                ))}
              </div>
            </div>

            <Link
              to="/register"
              className="inline-flex items-center gap-2 btn-yellow text-base px-10 py-4 rounded-2xl"
            >
              Trade anywhere
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
