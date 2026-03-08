import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

const assets = [
  { name: "EUR/USD", category: "Forex", price: "1.0847", change: "+0.32%", up: true },
  { name: "BTC/USD", category: "Crypto", price: "67,432", change: "+2.15%", up: true },
  { name: "Gold", category: "Commodity", price: "2,341.50", change: "+0.87%", up: true },
  { name: "Apple", category: "Stock", price: "189.72", change: "-0.45%", up: false },
  { name: "ETH/USD", category: "Crypto", price: "3,521.80", change: "+1.63%", up: true },
  { name: "GBP/JPY", category: "Forex", price: "191.234", change: "-0.18%", up: false },
  { name: "Tesla", category: "Stock", price: "248.90", change: "+3.21%", up: true },
  { name: "Silver", category: "Commodity", price: "27.45", change: "-0.52%", up: false },
];

const TradingAssetsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="trading" ref={ref} className="py-24 relative overflow-hidden">
      <div className="floating-orb w-[400px] h-[400px] bg-accent bottom-0 right-[-100px]" style={{ animationDelay: '2s' }} />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-accent text-sm font-medium mb-4">
            Live Markets
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Trade <span className="text-gradient-gold">70+ Assets</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Access forex, stocks, crypto, and commodities — all from one powerful platform with real-time data.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {assets.map((asset, i) => (
            <motion.div
              key={asset.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="group glass rounded-xl p-5 border-glow hover:scale-[1.03] transition-all duration-300 cursor-pointer shine-effect"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] text-muted-foreground bg-secondary/80 px-2 py-0.5 rounded-full uppercase tracking-wider font-medium">
                  {asset.category}
                </span>
                {asset.up ? (
                  <TrendingUp className="h-3.5 w-3.5 text-trading-green" />
                ) : (
                  <TrendingDown className="h-3.5 w-3.5 text-trading-red" />
                )}
              </div>
              <div className="font-heading font-semibold text-sm text-foreground">{asset.name}</div>
              <div className="flex items-baseline justify-between mt-2">
                <span className="text-xl font-heading font-bold text-foreground">${asset.price}</span>
                <span
                  className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                    asset.up ? "text-trading-green bg-trading-green/10" : "text-trading-red bg-trading-red/10"
                  }`}
                >
                  {asset.change}
                </span>
              </div>
              {/* Mini sparkline */}
              <svg viewBox="0 0 100 30" className="w-full h-6 mt-3 opacity-40 group-hover:opacity-70 transition-opacity">
                <path
                  d={asset.up 
                    ? "M0 25 Q15 20 25 22 T50 15 T75 10 T100 5" 
                    : "M0 5 Q15 10 25 8 T50 18 T75 20 T100 25"
                  }
                  fill="none"
                  stroke={asset.up ? "hsl(145 70% 50%)" : "hsl(0 75% 55%)"}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TradingAssetsSection;
