import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Check, Star, Crown, Gem } from "lucide-react";

const accounts = [
  {
    icon: Star,
    name: "Standard",
    deposit: "$10",
    profit: "Up to 85%",
    highlight: false,
    features: [
      "70+ Trading Assets",
      "Basic Charts & Tools",
      "24/5 Support",
      "Demo Account",
      "Mobile Trading",
    ],
  },
  {
    icon: Crown,
    name: "Gold",
    deposit: "$500",
    profit: "Up to 90%",
    highlight: true,
    features: [
      "All Standard Features",
      "Personal Account Manager",
      "Priority Withdrawals",
      "Advanced Analytics",
      "Trading Signals",
      "Risk-Free Trades",
    ],
  },
  {
    icon: Gem,
    name: "VIP",
    deposit: "$2,000",
    profit: "Up to 95%",
    highlight: false,
    features: [
      "All Gold Features",
      "VIP Support 24/7",
      "Exclusive Strategies",
      "Insurance on Trades",
      "Cashback Program",
      "Private Trading Room",
    ],
  },
];

const AccountTypesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="accounts" ref={ref} className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Choose Your <span className="text-gradient-gold">Account</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Select the account type that matches your trading goals and experience level.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {accounts.map((acc, i) => (
            <motion.div
              key={acc.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`relative rounded-2xl p-6 border transition-all duration-300 ${
                acc.highlight
                  ? "bg-gradient-to-b from-primary/10 via-card to-card border-primary/40 glow-gold scale-[1.02]"
                  : "bg-card border-border/50 hover:border-primary/20"
              }`}
            >
              {acc.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6 pt-2">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <acc.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-1">{acc.name}</h3>
                <div className="text-3xl font-heading font-bold text-gradient-gold">{acc.deposit}</div>
                <div className="text-xs text-muted-foreground">Minimum Deposit</div>
                <div className="mt-2 inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  {acc.profit}
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {acc.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-secondary-foreground">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${acc.highlight ? "glow-gold" : ""}`}
                variant={acc.highlight ? "default" : "outline"}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccountTypesSection;
