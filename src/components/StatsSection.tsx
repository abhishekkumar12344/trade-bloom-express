import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Globe, BarChart3, Star } from "lucide-react";

const stats = [
  { icon: Users, value: "869K+", label: "Active Traders Daily", color: "text-primary" },
  { icon: Globe, value: "133", label: "Countries Worldwide", color: "text-accent" },
  { icon: BarChart3, value: "34M+", label: "Trades Processed Weekly", color: "text-primary" },
  { icon: Star, value: "4.8/5", label: "User Satisfaction Rating", color: "text-accent" },
];

const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6 text-center border-glow group hover:scale-[1.03] transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-gradient-gold mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
