import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Day Trader",
    country: "🇺🇸 USA",
    text: "TradeX changed my trading game completely. The platform is incredibly fast and the charts are professional-grade. I've been consistently profitable since switching.",
    rating: 5,
  },
  {
    name: "Rajesh K.",
    role: "Forex Trader",
    country: "🇮🇳 India",
    text: "Best trading platform I've used. The low minimum deposit let me start small and grow. Customer support is exceptional — they respond within minutes!",
    rating: 5,
  },
  {
    name: "Elena V.",
    role: "Crypto Enthusiast",
    country: "🇩🇪 Germany",
    text: "I love the non-stop trading feature. Being able to trade on weekends gives me so much more flexibility. The mobile app is also beautifully designed.",
    rating: 5,
  },
  {
    name: "Carlos R.",
    role: "Part-time Trader",
    country: "🇧🇷 Brazil",
    text: "Started with just $10 and now I'm a Gold account holder. The educational resources and trading signals helped me learn so much in just 3 months.",
    rating: 4,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-card/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Trusted by <span className="text-gradient-gold">800K+ Traders</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            See what our community says about their trading experience with TradeX.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-5 rounded-xl bg-card border border-border/50 hover:border-primary/20 transition-all duration-300 flex flex-col"
            >
              <Quote className="h-6 w-6 text-primary/30 mb-3" />
              <p className="text-sm text-secondary-foreground leading-relaxed flex-1 mb-4">
                "{t.text}"
              </p>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    className={`h-3.5 w-3.5 ${si < t.rating ? "text-primary fill-primary" : "text-muted-foreground"}`}
                  />
                ))}
              </div>
              <div>
                <div className="font-heading font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">
                  {t.role} · {t.country}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
