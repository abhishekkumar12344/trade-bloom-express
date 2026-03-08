import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Globe, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "Democratize trading by providing accessible, powerful tools for traders of all levels.",
  },
  {
    icon: Users,
    title: "Community First",
    desc: "800K+ traders trust TradeX daily. Features built on real community feedback.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Operating in 133+ countries with 24/7 multilingual support and local payments.",
  },
  {
    icon: Award,
    title: "Award Winning",
    desc: "Best Trading Platform 2025 by Global Finance Awards & FinTech Excellence.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 relative overflow-hidden">
      <div className="floating-orb w-[500px] h-[500px] bg-accent bottom-[-150px] right-[-100px]" style={{ animationDelay: '3s' }} />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-primary text-sm font-medium mb-4">
              About TradeX
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Built by Traders,{" "}
              <span className="text-gradient-gold">For Traders</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Founded in 2018, TradeX was born from a simple idea: trading should be accessible to everyone. Our team combines institutional-grade tools with an intuitive interface.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we serve over 800,000 active traders across 133 countries, processing more than 34 million trades every week.
            </p>

            <div className="mt-8 flex items-center gap-8">
              {[
                { value: "2018", label: "Founded" },
                { value: "450+", label: "Team Members" },
                { value: "15+", label: "Awards Won" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-heading font-bold text-gradient-gold">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="glass rounded-2xl p-6 border-glow hover:scale-[1.03] transition-all duration-300 shine-effect"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <v.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-sm mb-2 text-foreground">{v.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
