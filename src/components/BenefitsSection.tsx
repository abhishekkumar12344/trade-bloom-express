import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { DollarSign, Zap, Shield, Clock, BarChart3, Gift } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Start from $10",
    desc: "Minimum deposit to open your trading account and start earning profits immediately.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Zap,
    title: "Trades from $1",
    desc: "Low minimum trade amount — learn and earn without big financial risks.",
    gradient: "from-accent/20 to-accent/5",
  },
  {
    icon: Clock,
    title: "Non-Stop Trading",
    desc: "Trade 24/7 with our unique non-stop mode on weekends and holidays.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: BarChart3,
    title: "Up to 95% Profit",
    desc: "Industry-leading profitability rates on every successful trade you make.",
    gradient: "from-accent/20 to-accent/5",
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    desc: "Fully regulated with 256-bit SSL encryption and segregated client accounts.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Gift,
    title: "Bonuses & Tournaments",
    desc: "Regular promotions, deposit bonuses and competitive trading tournaments.",
    gradient: "from-accent/20 to-accent/5",
  },
];

const BenefitsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="benefits" ref={ref} className="py-24 relative overflow-hidden">
      <div className="floating-orb w-[500px] h-[500px] bg-primary top-[-100px] left-[-150px]" style={{ animationDelay: '4s' }} />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-primary text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            The Power of <span className="text-gradient-gold">TradeX</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Everything you need to trade profitably, all in one professional platform.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group glass rounded-2xl p-7 border-glow hover:scale-[1.02] transition-all duration-500 shine-effect"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${b.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
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
