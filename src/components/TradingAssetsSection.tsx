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
    <section id="trading" ref={ref} className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Trade <span className="text-gradient-gold">70+ Assets</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Access forex, stocks, crypto, and commodities — all from one powerful platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {assets.map((asset, i) => (
            <motion.div
              key={asset.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="group p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
                  {asset.category}
                </span>
                {asset.up ? (
                  <TrendingUp className="h-3.5 w-3.5 text-trading-green" />
                ) : (
                  <TrendingDown className="h-3.5 w-3.5 text-trading-red" />
                )}
              </div>
              <div className="font-heading font-semibold text-sm">{asset.name}</div>
              <div className="flex items-baseline justify-between mt-1">
                <span className="text-lg font-heading font-bold">${asset.price}</span>
                <span
                  className={`text-xs font-medium ${
                    asset.up ? "text-trading-green" : "text-trading-red"
                  }`}
                >
                  {asset.change}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TradingAssetsSection;
