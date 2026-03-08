import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Check, Star, Crown, Gem, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
    <section id="accounts" ref={ref} className="py-24 relative overflow-hidden">
      <div className="floating-orb w-[500px] h-[500px] bg-primary top-[20%] right-[-200px]" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-primary text-sm font-medium mb-4">
            Pricing Plans
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Choose Your <span className="text-gradient-gold">Account</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Select the account type that matches your trading goals and experience level.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto perspective-container">
          {accounts.map((acc, i) => (
            <motion.div
              key={acc.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`relative rounded-2xl p-7 transition-all duration-500 hover:scale-[1.03] shine-effect ${
                acc.highlight
                  ? "glass-strong border-glow glow-gold z-10 scale-[1.02]"
                  : "glass border-glow"
              }`}
            >
              {acc.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-5 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold tracking-wide">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8 pt-2">
                <div className={`w-14 h-14 rounded-2xl ${acc.highlight ? 'bg-primary/20' : 'bg-primary/10'} flex items-center justify-center mx-auto mb-4`}>
                  <acc.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-1 text-foreground">{acc.name}</h3>
                <div className="text-4xl font-heading font-bold text-gradient-gold mt-2">{acc.deposit}</div>
                <div className="text-xs text-muted-foreground mt-1">Minimum Deposit</div>
                <div className="mt-3 inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold">
                  {acc.profit}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {acc.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-secondary-foreground">
                    <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full rounded-xl h-11 gap-2 ${acc.highlight ? "glow-gold" : ""}`}
                variant={acc.highlight ? "default" : "outline"}
                asChild
              >
                <Link to="/register">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccountTypesSection;
