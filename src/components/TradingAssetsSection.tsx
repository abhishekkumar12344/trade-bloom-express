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
    <section id="trading" ref={ref} className="py-28 section-dark relative">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            Trade <span className="text-gradient-gold">70+ assets</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Forex, stocks, crypto, and commodities — all from one platform with real-time data
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {assets.map((asset, i) => (
            <motion.div
              key={asset.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="group bg-card rounded-2xl p-5 border border-border/30 hover:border-primary/30 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] text-muted-foreground bg-secondary px-2.5 py-1 rounded-full uppercase tracking-wider font-bold">
                  {asset.category}
                </span>
                {asset.up ? (
                  <TrendingUp className="h-4 w-4 text-trading-green" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-trading-red" />
                )}
              </div>
              <div className="font-heading font-bold text-foreground mb-1">{asset.name}</div>
              <div className="flex items-baseline justify-between">
                <span className="text-xl font-heading font-bold text-foreground">${asset.price}</span>
                <span
                  className={`text-xs font-bold px-2 py-1 rounded-lg ${
                    asset.up
                      ? "text-trading-green bg-trading-green/10"
                      : "text-trading-red bg-trading-red/10"
                  }`}
                >
                  {asset.change}
                </span>
              </div>
              {/* Mini chart */}
              <svg viewBox="0 0 100 24" className="w-full h-5 mt-3 opacity-30 group-hover:opacity-60 transition-opacity">
                <path
                  d={asset.up
                    ? "M0 20 Q15 18 25 16 T50 12 T75 6 T100 4"
                    : "M0 4 Q15 8 25 10 T50 16 T75 18 T100 20"
                  }
                  fill="none"
                  stroke={asset.up ? "hsl(145 72% 48%)" : "hsl(0 80% 55%)"}
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
