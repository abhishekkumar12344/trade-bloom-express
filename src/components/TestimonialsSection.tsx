import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Day Trader",
    country: "🇺🇸 USA",
    text: "TradeX changed my trading game completely. The platform is incredibly fast and the charts are professional-grade.",
    rating: 5,
    avatar: "SM",
  },
  {
    name: "Rajesh K.",
    role: "Forex Trader",
    country: "🇮🇳 India",
    text: "Best trading platform I've used. The low minimum deposit let me start small and grow consistently.",
    rating: 5,
    avatar: "RK",
  },
  {
    name: "Elena V.",
    role: "Crypto Enthusiast",
    country: "🇩🇪 Germany",
    text: "I love the non-stop trading feature. Being able to trade on weekends gives me so much flexibility.",
    rating: 5,
    avatar: "EV",
  },
  {
    name: "Carlos R.",
    role: "Part-time Trader",
    country: "🇧🇷 Brazil",
    text: "Started with just $10 and now I'm a Gold account holder. The signals helped me learn fast.",
    rating: 4,
    avatar: "CR",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/20" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-primary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Trusted by <span className="text-gradient-gold">800K+ Traders</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            See what our community says about their experience with TradeX.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6 border-glow hover:scale-[1.02] transition-all duration-300 flex flex-col"
            >
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              <p className="text-sm text-secondary-foreground leading-relaxed flex-1 mb-5">
                "{t.text}"
              </p>
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    className={`h-3.5 w-3.5 ${si < t.rating ? "text-primary fill-primary" : "text-muted-foreground/30"}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center text-xs font-heading font-bold text-foreground">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-heading font-semibold text-sm text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {t.role} · {t.country}
                  </div>
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
