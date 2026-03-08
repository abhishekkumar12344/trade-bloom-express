import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const stories = [
  {
    title: "Bought a bicycle for grandson",
    text: "Trading on TradeX seems easier than on other platforms. Earned $10 on the first day, and within a month reached $200.",
    name: "Abdulla K.",
    age: "60 y.o.",
  },
  {
    title: "Saving for my house",
    text: "With my main job, a side hustle, and a TradeX account, I'm seeing success. Planning to replace the side hustle with trading.",
    name: "Babar M.",
    age: "22 y.o.",
  },
  {
    title: "Paying for education",
    text: "Have been trading on TradeX for 3 years. Realized I've saved up for education with salary, trading, and parental support.",
    name: "Enrique T.",
    age: "25 y.o.",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 section-dark relative">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold">
            Join <span className="text-gradient-gold">successful traders</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {stories.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card rounded-3xl border border-border/30 p-7 flex flex-col"
            >
              <h3 className="text-lg font-heading font-bold text-primary mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">{s.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center text-xs font-heading font-bold text-foreground">
                  {s.name.charAt(0)}{s.name.split(" ")[1]?.charAt(0)}
                </div>
                <div>
                  <div className="font-heading font-semibold text-sm text-foreground">{s.name}</div>
                  <div className="text-xs text-muted-foreground">{s.age}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
