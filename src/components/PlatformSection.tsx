import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, Smartphone, Cpu, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { icon: Monitor, text: "Advanced web platform with professional-grade charts" },
  { icon: Smartphone, text: "Native iOS & Android apps for trading on the go" },
  { icon: Cpu, text: "AI-powered analytics and real-time market signals" },
  { icon: BarChart3, text: "One-click execution with sub-millisecond speed" },
];

const PlatformSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="platform" ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="floating-orb w-[400px] h-[400px] bg-accent top-[10%] left-[-100px]" style={{ animationDelay: '2s' }} />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-accent text-sm font-medium mb-4">
              Our Platform
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Trade Anywhere,{" "}
              <span className="text-gradient-gold">Anytime</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Our award-winning platform delivers institutional-grade tools with a beautifully intuitive interface. Real-time data, instant execution, and full control.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((item) => (
                <div key={item.text} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl glass flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-secondary-foreground text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="gap-2 glow-gold rounded-xl h-12" asChild>
              <Link to="/register">
                Open Free Account <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="perspective-container"
          >
            <div className="glass-strong rounded-2xl p-6 border-glow shine-effect card-3d">
              {/* Simulated platform UI */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-trading-red/60" />
                <div className="w-3 h-3 rounded-full bg-primary/60" />
                <div className="w-3 h-3 rounded-full bg-trading-green/60" />
                <span className="ml-3 text-xs text-muted-foreground font-heading">TradeX Pro Terminal</span>
              </div>
              
              <div className="grid grid-cols-3 gap-3 mb-4">
                {["EUR/USD", "BTC/USD", "Gold"].map((a) => (
                  <div key={a} className="glass rounded-lg p-3 text-center">
                    <div className="text-[10px] text-muted-foreground">{a}</div>
                    <div className="text-sm font-heading font-bold text-foreground mt-1">
                      {a === "EUR/USD" ? "1.0847" : a === "BTC/USD" ? "67,432" : "2,341"}
                    </div>
                  </div>
                ))}
              </div>

              <svg viewBox="0 0 400 180" className="w-full h-40 mb-4">
                <defs>
                  <linearGradient id="platformGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(210 100% 55%)" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="hsl(210 100% 55%)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Candlesticks */}
                {[20,50,80,110,140,170,200,230,260,290,320,350].map((x, i) => {
                  const h = 30 + Math.sin(i * 0.8) * 25 + Math.random() * 15;
                  const y = 90 - h / 2 + Math.cos(i) * 15;
                  const up = i % 3 !== 0;
                  return (
                    <g key={i}>
                      <line x1={x} y1={y - 8} x2={x} y2={y + h + 8} stroke={up ? "hsl(145 70% 50%)" : "hsl(0 75% 55%)"} strokeWidth="1" opacity="0.5" />
                      <rect x={x - 6} y={y} width="12" height={h} rx="1" fill={up ? "hsl(145 70% 50%)" : "hsl(0 75% 55%)"} opacity="0.8" />
                    </g>
                  );
                })}
              </svg>

              <div className="flex gap-3">
                <div className="flex-1 glass rounded-lg p-3 text-center cursor-pointer hover:bg-trading-green/10 transition-colors">
                  <span className="text-trading-green font-heading font-bold text-sm">▲ UP</span>
                </div>
                <div className="flex-1 glass rounded-lg p-3 text-center cursor-pointer hover:bg-trading-red/10 transition-colors">
                  <span className="text-trading-red font-heading font-bold text-sm">▼ DOWN</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
