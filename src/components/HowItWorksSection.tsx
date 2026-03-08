import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Check, DollarSign, TrendingUp, Wallet, ArrowRight } from "lucide-react";

const steps = [
  {
    num: 1,
    title: "Learn on demo",
    desc: "Practice risk-free with $10,000 virtual balance. Master strategies before going live.",
    icon: TrendingUp,
    detail: {
      label: "Starting balance",
      value: "$10,000",
      profit: "+$4,100",
      trades: "5 successful trades",
    },
  },
  {
    num: 2,
    title: "Make your first deposit",
    desc: "Start with just $10. Multiple payment methods available — fast, safe, and easy.",
    icon: Wallet,
    detail: {
      label: "Minimum deposit",
      value: "$10",
      profit: "Instant",
      trades: "10+ payment methods",
    },
  },
  {
    num: 3,
    title: "Make successful deals",
    desc: "Choose your asset, predict the direction, and earn up to 95% profit per trade.",
    icon: DollarSign,
    detail: {
      label: "Profit per trade",
      value: "Up to 95%",
      profit: "+$5,000",
      trades: "70+ assets",
    },
  },
  {
    num: 4,
    title: "Withdraw money",
    desc: "Get your profits fast. Priority withdrawals for Gold & VIP accounts within 4 hours.",
    icon: Check,
    detail: {
      label: "Withdrawal time",
      value: "4 hours",
      profit: "No fees",
      trades: "Any amount",
    },
  },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  return (
    <section id="how-it-works" ref={ref} className="py-28 section-purple relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold">
            Take 4 steps to start earning as a <span className="text-gradient-gold">real trader</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Steps list */}
          <div className="space-y-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                onClick={() => setActive(i)}
                className={`flex items-start gap-5 p-5 rounded-2xl cursor-pointer transition-all duration-300 ${
                  active === i
                    ? "bg-secondary/80 border border-primary/20"
                    : "hover:bg-secondary/40 border border-transparent"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 font-heading font-bold text-lg transition-colors ${
                    active === i
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {step.num}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Active step detail card */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-card rounded-3xl border border-border/50 p-8 lg:sticky lg:top-24"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              {(() => {
                const Icon = steps[active].icon;
                return <Icon className="h-8 w-8 text-primary" />;
              })()}
            </div>
            <h3 className="text-2xl font-heading font-bold mb-4 text-foreground">
              {steps[active].title}
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center py-3 border-b border-border/30">
                <span className="text-muted-foreground text-sm">{steps[active].detail.label}</span>
                <span className="font-heading font-bold text-primary text-lg">{steps[active].detail.value}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border/30">
                <span className="text-muted-foreground text-sm">Profit</span>
                <span className="font-heading font-bold text-trading-green">{steps[active].detail.profit}</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-muted-foreground text-sm">Details</span>
                <span className="font-heading font-semibold text-foreground text-sm">{steps[active].detail.trades}</span>
              </div>
            </div>

            {active === 3 && (
              <div className="space-y-3 mb-6">
                {["Yesterday 10:56 PM — +$2,900", "Today 08:11 AM — +$3,350"].map((tx) => (
                  <div key={tx} className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
                    <div className="w-2 h-2 rounded-full bg-trading-green" />
                    <span className="text-sm text-secondary-foreground">{tx}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>

        <div className="text-center mt-14">
          <Link
            to="/register"
            className="inline-flex items-center gap-2 btn-yellow text-base px-10 py-4 rounded-2xl"
          >
            Join us <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
