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
    <section ref={ref} className="py-24 bg-card/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            How It <span className="text-gradient-gold">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Start trading in just 4 simple steps. No experience required.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center relative"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4 relative z-10">
                <s.icon className="h-7 w-7 text-primary" />
              </div>
              <div className="text-xs text-primary font-heading font-bold mb-2">STEP {s.step}</div>
              <h3 className="text-lg font-heading font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
