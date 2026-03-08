import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, DollarSign, Zap, Shield, Clock, BarChart3, Gift } from "lucide-react";

const benefits = [
  { icon: DollarSign, title: "Start from $10", desc: "Low minimum deposit to begin trading" },
  { icon: Zap, title: "Trades from $1", desc: "Learn and earn without big risks" },
  { icon: Clock, title: "Non-Stop Trading", desc: "Trade 24/7 including weekends" },
  { icon: BarChart3, title: "Up to 95% Profit", desc: "Industry-leading profitability rates" },
  { icon: Shield, title: "Bank-Grade Security", desc: "256-bit SSL encryption, segregated funds" },
  { icon: Gift, title: "Bonuses & Tournaments", desc: "Regular promotions and competitions" },
];

const BenefitsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 section-dark relative">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            TradeX makes trading <span className="text-gradient-gold">more exciting</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group bg-card rounded-2xl border border-border/30 p-7 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <b.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-bold mb-2 text-foreground">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
