import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { UserPlus, Wallet, LineChart, BadgeDollarSign } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Register",
    desc: "Create your free account in under 60 seconds. No paperwork needed.",
  },
  {
    icon: Wallet,
    step: "02",
    title: "Deposit",
    desc: "Fund your account from just $10 using any convenient payment method.",
  },
  {
    icon: LineChart,
    step: "03",
    title: "Trade",
    desc: "Choose an asset, set your prediction, and place your trade with one click.",
  },
  {
    icon: BadgeDollarSign,
    step: "04",
    title: "Profit",
    desc: "Earn up to 95% profit on successful trades and withdraw anytime.",
  },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-primary text-sm font-medium mb-4">
            Getting Started
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            How It <span className="text-gradient-gold">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Start trading in just 4 simple steps. No experience required.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-20 left-[15%] right-[15%] h-px">
            <div className="w-full h-full bg-gradient-to-r from-primary/40 via-accent/30 to-primary/40" />
          </div>

          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center relative group"
            >
              <div className="w-20 h-20 rounded-2xl glass border-glow flex items-center justify-center mx-auto mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
                <s.icon className="h-8 w-8 text-primary" />
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center">
                  {s.step}
                </div>
              </div>
              <h3 className="text-lg font-heading font-bold mb-2 text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px] mx-auto">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
