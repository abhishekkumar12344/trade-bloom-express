import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { DollarSign, Zap, Shield, Clock, BarChart3, Gift } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Start from $10",
    desc: "Minimum deposit to open your trading account and start earning.",
  },
  {
    icon: Zap,
    title: "Trades from $1",
    desc: "Low minimum trade amount — learn and earn without big risks.",
  },
  {
    icon: Clock,
    title: "Non-Stop Trading",
    desc: "Trade 24/7 with our unique non-stop mode on weekends and holidays.",
  },
  {
    icon: BarChart3,
    title: "Up to 95% Profit",
    desc: "Industry-leading profitability rates on every successful trade.",
  },
  {
    icon: Shield,
    title: "Secure & Regulated",
    desc: "Fully regulated platform with bank-grade security for your funds.",
  },
  {
    icon: Gift,
    title: "Bonuses & Tournaments",
    desc: "Regular promotions, deposit bonuses and trading tournaments.",
  },
];

const BenefitsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="benefits" ref={ref} className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            The Benefits of <span className="text-gradient-gold">TradeX</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Everything you need to start trading profitably, all in one powerful platform.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:glow-gold"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <b.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
