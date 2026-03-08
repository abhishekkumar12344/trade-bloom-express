import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Lock, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const guarantees = [
  { year: "2024", title: "Best Trading Platform", org: "World Business Outlook" },
  { year: "2023", title: "Most Secure Platform", org: "World Business Outlook" },
  { year: "2023", title: "Most Trusted Global", org: "International Business Magazine" },
  { year: "2016", title: "Platform of the Year", org: "Financial Commission" },
];

const SecuritySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 section-purple relative">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            TradeX <span className="text-gradient-gold">cares about you</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Security features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-heading font-bold mb-8 text-foreground">Your safety</h3>
            <div className="space-y-6">
              {[
                { icon: Shield, text: "AI-verification of identity and payment methods in less than 2 minutes" },
                { icon: Lock, text: "2-factor authentication for account access" },
                { icon: CheckCircle, text: "Payment card data protection under PCI international standard" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-secondary-foreground leading-relaxed pt-2">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-heading font-bold mb-8 text-foreground">Our guarantees</h3>
            <div className="grid grid-cols-2 gap-4">
              {guarantees.map((g, i) => (
                <div key={i} className="bg-card rounded-2xl border border-border/30 p-5">
                  <Award className="h-6 w-6 text-primary mb-3" />
                  <div className="text-xs text-primary font-heading font-bold mb-1">{g.year}</div>
                  <div className="text-sm font-heading font-semibold text-foreground mb-1">{g.title}</div>
                  <div className="text-xs text-muted-foreground">{g.org}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-14">
          <Link
            to="/register"
            className="inline-flex items-center gap-2 btn-yellow text-base px-10 py-4 rounded-2xl"
          >
            Trade safely
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
