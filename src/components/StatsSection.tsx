import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const stats = [
  { value: "800K+", label: "Active users" },
  { value: "133", label: "Countries" },
  { value: "70+", label: "Trading assets" },
  { value: "$10", label: "Minimum deposit" },
  { value: "$1", label: "Minimum trade" },
  { value: "$12M+", label: "Monthly payouts" },
];

const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-28 section-dark relative">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            People worldwide earn with <span className="text-gradient-gold">TradeX</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-14">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="text-center py-6"
            >
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/register"
            className="inline-flex items-center gap-2 btn-yellow text-base px-10 py-4 rounded-2xl"
          >
            Join us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
