import { motion } from "framer-motion";
import { ArrowRight, Play, TrendingUp, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const floatingCards = [
  { icon: TrendingUp, label: "BTC/USD", value: "$67,432", change: "+2.15%", delay: 0.5 },
  { icon: Shield, label: "Secured", value: "256-bit", change: "SSL", delay: 0.7 },
  { icon: Zap, label: "Execution", value: "<1ms", change: "Speed", delay: 0.9 },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Animated background orbs */}
      <div className="floating-orb w-[600px] h-[600px] bg-primary top-[-200px] right-[-100px]" />
      <div className="floating-orb w-[400px] h-[400px] bg-accent bottom-[-100px] left-[-100px]" style={{ animationDelay: '3s' }} />
      <div className="floating-orb w-[300px] h-[300px] bg-primary top-[40%] left-[30%]" style={{ animationDelay: '5s', opacity: 0.08 }} />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-primary text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-trading-green animate-pulse" />
                Live Trading — 95% Profitability
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-7xl font-heading font-bold leading-[1.1] mb-6"
            >
              Trade Smarter.{" "}
              <br />
              <span className="text-gradient-gold">Profit Faster.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed"
            >
              Join 800K+ traders worldwide. Access 70+ assets, AI-powered analytics, 
              and lightning-fast execution on our award-winning platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="gap-2 text-base px-8 glow-gold rounded-xl h-12" asChild>
                <Link to="/register">
                  Start Trading Free <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-base border-border text-foreground hover:bg-secondary rounded-xl h-12 glass">
                <Play className="h-4 w-4" /> Watch Demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-center gap-6 mt-10"
            >
              {[
                { label: "Active Traders", value: "869K+" },
                { label: "Countries", value: "133" },
                { label: "User Rating", value: "4.8/5" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-lg font-heading font-bold text-gradient-gold">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* 3D Floating Cards */}
          <div className="hidden lg:block perspective-container">
            <motion.div
              initial={{ opacity: 0, rotateY: -15, rotateX: 5 }}
              animate={{ opacity: 1, rotateY: -5, rotateX: 3 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              {/* Main trading card */}
              <div className="glass-strong rounded-2xl p-6 border-glow shine-effect">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-trading-green animate-pulse" />
                    <span className="text-sm font-heading font-medium text-foreground">Live Market</span>
                  </div>
                  <span className="text-xs text-muted-foreground">24/7 Trading</span>
                </div>

                {/* Fake chart SVG */}
                <svg viewBox="0 0 400 200" className="w-full h-48 mb-6">
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(47 90% 61%)" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="hsl(47 90% 61%)" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="hsl(47 90% 61%)" />
                      <stop offset="100%" stopColor="hsl(37 100% 70%)" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 150 Q50 130 80 140 T160 100 T240 120 T320 60 T400 80"
                    fill="none"
                    stroke="url(#lineGrad)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0 150 Q50 130 80 140 T160 100 T240 120 T320 60 T400 80 L400 200 L0 200 Z"
                    fill="url(#chartGrad)"
                  />
                  {/* Price dots */}
                  <circle cx="320" cy="60" r="5" fill="hsl(47 90% 61%)" />
                  <circle cx="320" cy="60" r="10" fill="hsl(47 90% 61%)" opacity="0.2">
                    <animate attributeName="r" values="8;14;8" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
                  </circle>
                </svg>

                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">BTC / USD</div>
                    <div className="text-2xl font-heading font-bold text-foreground">$67,432.50</div>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-trading-green/10 text-trading-green text-sm font-medium">
                      <TrendingUp className="h-3 w-3" /> +2.15%
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating mini cards */}
              {floatingCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: card.delay, duration: 0.5 }}
                  className="absolute glass-strong rounded-xl px-4 py-3 border-glow"
                  style={{
                    top: i === 0 ? '-20px' : i === 1 ? '40%' : 'auto',
                    bottom: i === 2 ? '-16px' : 'auto',
                    right: i === 0 ? '-30px' : 'auto',
                    left: i === 1 ? '-40px' : i === 2 ? '20%' : 'auto',
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-primary/15 flex items-center justify-center">
                      <card.icon className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div>
                      <div className="text-[10px] text-muted-foreground">{card.label}</div>
                      <div className="text-xs font-heading font-bold text-foreground">{card.value}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
