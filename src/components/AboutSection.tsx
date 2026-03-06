import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Globe, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To democratize trading by providing accessible, powerful tools for traders of all experience levels worldwide.",
  },
  {
    icon: Users,
    title: "Community First",
    desc: "Over 800K+ traders trust TradeX daily. We build features driven by community feedback and real user needs.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Operating in 133+ countries with 24/7 multilingual support and localized payment methods for every region.",
  },
  {
    icon: Award,
    title: "Award Winning",
    desc: "Recognized as Best Trading Platform 2025 by Global Finance Awards and FinTech Excellence Awards.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 bg-card/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium mb-4">
              About TradeX
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Built by Traders,{" "}
              <span className="text-gradient-gold">For Traders</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Founded in 2018, TradeX was born from a simple idea: trading should be accessible to everyone. Our team of experienced traders and fintech engineers built a platform that combines institutional-grade tools with an intuitive interface.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we serve over 800,000 active traders across 133 countries, processing more than 34 million trades every week. Our commitment to innovation, security, and user experience sets us apart in the industry.
            </p>

            <div className="mt-8 flex items-center gap-8">
              <div>
                <div className="text-2xl font-heading font-bold text-gradient-gold">2018</div>
                <div className="text-xs text-muted-foreground">Founded</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <div className="text-2xl font-heading font-bold text-gradient-gold">450+</div>
                <div className="text-xs text-muted-foreground">Team Members</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <div className="text-2xl font-heading font-bold text-gradient-gold">15+</div>
                <div className="text-xs text-muted-foreground">Awards Won</div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="p-5 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <v.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-sm mb-1.5">{v.title}</h3>
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
