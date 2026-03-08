import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import profitImg from "@/assets/profit-display.jpg";

const ProfitabilitySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="profitability" ref={ref} className="py-32 section-purple relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-12">
            The highest profitability on the market
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-md mx-auto mb-10"
          >
            <img src={profitImg} alt="95% Profit" className="w-full rounded-3xl" />
          </motion.div>

          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
            Available on TradeX with Dynamic Range Trading (DRT) for VIP users. 
            Get the highest returns in the industry.
          </p>

          <Link
            to="/register"
            className="inline-flex items-center gap-2 btn-yellow text-base px-10 py-4 rounded-2xl"
          >
            Join us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfitabilitySection;
