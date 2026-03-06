import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
  ChevronDown,
  Clock,
  DollarSign,
  ArrowUp,
  ArrowDown,
  BarChart3,
  Wallet,
  Bell,
  Settings,
  User,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// Simulated assets
const assets = [
  { id: "eurusd", name: "EUR/USD", category: "Forex", price: 1.0847, payout: 87 },
  { id: "btcusd", name: "BTC/USD", category: "Crypto", price: 67432.5, payout: 90 },
  { id: "gold", name: "Gold", category: "Commodity", price: 2341.5, payout: 85 },
  { id: "aapl", name: "Apple Inc", category: "Stock", price: 189.72, payout: 82 },
  { id: "ethusd", name: "ETH/USD", category: "Crypto", price: 3521.8, payout: 88 },
  { id: "gbpjpy", name: "GBP/JPY", category: "Forex", price: 191.234, payout: 86 },
  { id: "tsla", name: "Tesla Inc", category: "Stock", price: 248.9, payout: 83 },
  { id: "silver", name: "Silver", category: "Commodity", price: 27.45, payout: 84 },
];

const timeframes = ["5s", "15s", "30s", "1m", "5m", "15m", "30m", "1h"];

// Generate simulated candlestick data
function generateCandles(count: number, basePrice: number) {
  const candles = [];
  let price = basePrice;
  for (let i = 0; i < count; i++) {
    const open = price;
    const change = (Math.random() - 0.48) * (basePrice * 0.003);
    const close = open + change;
    const high = Math.max(open, close) + Math.random() * (basePrice * 0.001);
    const low = Math.min(open, close) - Math.random() * (basePrice * 0.001);
    candles.push({ open, close, high, low, time: i });
    price = close;
  }
  return candles;
}

// Candlestick chart component
const CandlestickChart = ({ candles, containerWidth, containerHeight }: { candles: any[]; containerWidth: number; containerHeight: number }) => {
  if (candles.length === 0 || containerWidth === 0) return null;

  const padding = { top: 20, bottom: 30, left: 60, right: 20 };
  const chartW = containerWidth - padding.left - padding.right;
  const chartH = containerHeight - padding.top - padding.bottom;

  const allPrices = candles.flatMap((c) => [c.high, c.low]);
  const minP = Math.min(...allPrices);
  const maxP = Math.max(...allPrices);
  const range = maxP - minP || 1;

  const candleW = Math.max(2, chartW / candles.length - 2);
  const yScale = (p: number) => padding.top + chartH - ((p - minP) / range) * chartH;

  // Grid lines
  const gridLines = 5;
  const gridPrices = Array.from({ length: gridLines }, (_, i) => minP + (range / (gridLines - 1)) * i);

  return (
    <svg width={containerWidth} height={containerHeight} className="block">
      {/* Grid */}
      {gridPrices.map((p, i) => (
        <g key={i}>
          <line x1={padding.left} y1={yScale(p)} x2={containerWidth - padding.right} y2={yScale(p)} stroke="hsl(var(--border))" strokeWidth={0.5} strokeDasharray="4,4" />
          <text x={padding.left - 8} y={yScale(p) + 4} textAnchor="end" fill="hsl(var(--muted-foreground))" fontSize={10}>
            {p < 10 ? p.toFixed(4) : p < 1000 ? p.toFixed(2) : p.toFixed(0)}
          </text>
        </g>
      ))}

      {/* Candles */}
      {candles.map((c, i) => {
        const x = padding.left + (i / candles.length) * chartW + candleW / 2;
        const bullish = c.close >= c.open;
        const color = bullish ? "hsl(var(--trading-green))" : "hsl(var(--trading-red))";
        return (
          <g key={i}>
            {/* Wick */}
            <line x1={x} y1={yScale(c.high)} x2={x} y2={yScale(c.low)} stroke={color} strokeWidth={1} />
            {/* Body */}
            <rect
              x={x - candleW / 2}
              y={yScale(Math.max(c.open, c.close))}
              width={candleW}
              height={Math.max(1, Math.abs(yScale(c.open) - yScale(c.close)))}
              fill={bullish ? color : color}
              opacity={bullish ? 0.9 : 0.9}
              rx={1}
            />
          </g>
        );
      })}

      {/* Current price line */}
      {candles.length > 0 && (
        <>
          <line
            x1={padding.left}
            y1={yScale(candles[candles.length - 1].close)}
            x2={containerWidth - padding.right}
            y2={yScale(candles[candles.length - 1].close)}
            stroke="hsl(var(--primary))"
            strokeWidth={1}
            strokeDasharray="6,3"
          />
          <rect
            x={containerWidth - padding.right}
            y={yScale(candles[candles.length - 1].close) - 10}
            width={55}
            height={20}
            rx={4}
            fill="hsl(var(--primary))"
          />
          <text
            x={containerWidth - padding.right + 27}
            y={yScale(candles[candles.length - 1].close) + 4}
            textAnchor="middle"
            fill="hsl(var(--primary-foreground))"
            fontSize={10}
            fontWeight={600}
          >
            {candles[candles.length - 1].close < 10
              ? candles[candles.length - 1].close.toFixed(4)
              : candles[candles.length - 1].close.toFixed(2)}
          </text>
        </>
      )}
    </svg>
  );
};

const TradingPanel = () => {
  const navigate = useNavigate();
  const [selectedAsset, setSelectedAsset] = useState(assets[0]);
  const [amount, setAmount] = useState(10);
  const [timeframe, setTimeframe] = useState("1m");
  const [showAssets, setShowAssets] = useState(false);
  const [balance, setBalance] = useState(10000);
  const [candles, setCandles] = useState(() => generateCandles(60, assets[0].price));
  const [activeTrades, setActiveTrades] = useState<any[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);
  const [chartDims, setChartDims] = useState({ w: 800, h: 400 });

  // Update chart dimensions
  useEffect(() => {
    const updateDims = () => {
      if (chartRef.current) {
        setChartDims({ w: chartRef.current.clientWidth, h: chartRef.current.clientHeight });
      }
    };
    updateDims();
    window.addEventListener("resize", updateDims);
    return () => window.removeEventListener("resize", updateDims);
  }, []);

  // Simulate live price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCandles((prev) => {
        const last = prev[prev.length - 1];
        const change = (Math.random() - 0.48) * (selectedAsset.price * 0.002);
        const newClose = last.close + change;
        const newCandle = {
          open: last.close,
          close: newClose,
          high: Math.max(last.close, newClose) + Math.random() * (selectedAsset.price * 0.0005),
          low: Math.min(last.close, newClose) - Math.random() * (selectedAsset.price * 0.0005),
          time: last.time + 1,
        };
        return [...prev.slice(1), newCandle];
      });
    }, 1500);
    return () => clearInterval(interval);
  }, [selectedAsset]);

  // Resolve trades
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTrades((prev) =>
        prev.map((t) => {
          if (t.resolved) return t;
          const elapsed = Date.now() - t.startTime;
          if (elapsed > t.duration) {
            const currentPrice = candles[candles.length - 1]?.close || selectedAsset.price;
            const won =
              t.direction === "up"
                ? currentPrice > t.entryPrice
                : currentPrice < t.entryPrice;
            const profit = won ? t.amount * (t.payout / 100) : 0;
            if (won) setBalance((b) => b + t.amount + profit);
            return { ...t, resolved: true, won, profit };
          }
          return t;
        })
      );
    }, 500);
    return () => clearInterval(interval);
  }, [candles, selectedAsset.price]);

  const placeTrade = (direction: "up" | "down") => {
    if (amount > balance) return;
    setBalance((b) => b - amount);
    const trade = {
      id: Date.now(),
      asset: selectedAsset.name,
      direction,
      amount,
      entryPrice: candles[candles.length - 1]?.close || selectedAsset.price,
      payout: selectedAsset.payout,
      startTime: Date.now(),
      duration: 30000,
      resolved: false,
      won: false,
      profit: 0,
    };
    setActiveTrades((prev) => [trade, ...prev]);
  };

  const switchAsset = (asset: typeof assets[0]) => {
    setSelectedAsset(asset);
    setCandles(generateCandles(60, asset.price));
    setShowAssets(false);
  };

  const currentPrice = candles[candles.length - 1]?.close || selectedAsset.price;
  const prevPrice = candles[candles.length - 2]?.close || selectedAsset.price;
  const priceChange = ((currentPrice - prevPrice) / prevPrice) * 100;

  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      {/* Top bar */}
      <header className="h-14 border-b border-border/50 bg-card/80 backdrop-blur-xl flex items-center justify-between px-4 shrink-0 z-50">
        <div className="flex items-center gap-3">
          <button className="lg:hidden text-foreground" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <a href="/" className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            <span className="text-lg font-heading font-bold hidden sm:block">TradeX</span>
          </a>
        </div>

        {/* Asset selector */}
        <div className="relative">
          <button
            onClick={() => setShowAssets(!showAssets)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
          >
            <span className="font-heading font-semibold text-sm">{selectedAsset.name}</span>
            <span className={`text-xs font-medium ${priceChange >= 0 ? "text-trading-green" : "text-trading-red"}`}>
              {priceChange >= 0 ? "+" : ""}
              {priceChange.toFixed(2)}%
            </span>
            <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
          </button>

          {showAssets && (
            <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 w-72 bg-card border border-border rounded-xl shadow-2xl p-2 z-50 max-h-80 overflow-y-auto">
              {assets.map((a) => (
                <button
                  key={a.id}
                  onClick={() => switchAsset(a)}
                  className={`w-full flex items-center justify-between p-2.5 rounded-lg text-sm transition-colors ${
                    a.id === selectedAsset.id ? "bg-primary/10 text-primary" : "hover:bg-secondary"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-heading font-semibold">{a.name}</span>
                    <span className="text-xs text-muted-foreground">{a.category}</span>
                  </div>
                  <span className="text-xs text-primary font-medium">{a.payout}%</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary">
            <Wallet className="h-4 w-4 text-primary" />
            <span className="font-heading font-bold text-sm">${balance.toFixed(2)}</span>
          </div>
          <button className="p-2 rounded-lg hover:bg-secondary transition-colors hidden sm:block">
            <Bell className="h-4 w-4 text-muted-foreground" />
          </button>
          <button onClick={() => navigate("/register")} className="p-2 rounded-lg hover:bg-secondary transition-colors">
            <User className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Left sidebar — timeframes */}
        <aside className={`${sidebarOpen ? 'absolute inset-y-0 left-0 z-40' : 'hidden'} lg:relative lg:flex w-14 border-r border-border/50 bg-card/60 flex-col items-center py-3 gap-1 shrink-0`}>
          {timeframes.map((tf) => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf)}
              className={`w-10 h-8 rounded-md text-xs font-heading font-semibold transition-colors ${
                tf === timeframe ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {tf}
            </button>
          ))}
        </aside>

        {/* Chart area */}
        <main className="flex-1 flex flex-col overflow-hidden">
          {/* Chart info bar */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-border/30 bg-card/30 shrink-0">
            <div className="flex items-center gap-4">
              <div>
                <span className="text-2xl font-heading font-bold">
                  {currentPrice < 10 ? currentPrice.toFixed(4) : currentPrice < 1000 ? currentPrice.toFixed(2) : currentPrice.toFixed(0)}
                </span>
                <span className={`ml-2 text-sm font-medium ${priceChange >= 0 ? "text-trading-green" : "text-trading-red"}`}>
                  {priceChange >= 0 ? <TrendingUp className="h-3.5 w-3.5 inline mr-1" /> : <TrendingDown className="h-3.5 w-3.5 inline mr-1" />}
                  {priceChange >= 0 ? "+" : ""}{priceChange.toFixed(3)}%
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">Payout:</span>
              <span className="text-sm font-heading font-bold text-trading-green">{selectedAsset.payout}%</span>
            </div>
          </div>

          {/* Chart */}
          <div ref={chartRef} className="flex-1 bg-background relative">
            <CandlestickChart candles={candles} containerWidth={chartDims.w} containerHeight={chartDims.h} />
          </div>
        </main>

        {/* Right panel — trade controls */}
        <aside className="w-64 lg:w-72 border-l border-border/50 bg-card/60 flex flex-col shrink-0">
          <div className="p-4 flex-1 flex flex-col">
            {/* Balance on mobile */}
            <div className="sm:hidden flex items-center gap-1.5 px-3 py-2 rounded-lg bg-secondary mb-3">
              <Wallet className="h-4 w-4 text-primary" />
              <span className="font-heading font-bold text-sm">${balance.toFixed(2)}</span>
            </div>

            {/* Timer */}
            <div className="mb-4">
              <label className="text-xs text-muted-foreground mb-1.5 block">Time</label>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-secondary">
                <Clock className="h-4 w-4 text-primary" />
                <span className="font-heading font-semibold text-sm">{timeframe}</span>
              </div>
            </div>

            {/* Amount */}
            <div className="mb-4">
              <label className="text-xs text-muted-foreground mb-1.5 block">Investment Amount</label>
              <div className="flex items-center gap-1 p-1 rounded-lg bg-secondary">
                <button
                  onClick={() => setAmount(Math.max(1, amount - 5))}
                  className="w-8 h-8 rounded-md bg-card flex items-center justify-center text-foreground hover:bg-muted transition-colors font-bold"
                >
                  −
                </button>
                <div className="flex-1 flex items-center justify-center gap-1">
                  <DollarSign className="h-3.5 w-3.5 text-primary" />
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Math.max(1, Number(e.target.value)))}
                    className="w-16 bg-transparent text-center font-heading font-bold text-lg outline-none"
                  />
                </div>
                <button
                  onClick={() => setAmount(amount + 5)}
                  className="w-8 h-8 rounded-md bg-card flex items-center justify-center text-foreground hover:bg-muted transition-colors font-bold"
                >
                  +
                </button>
              </div>
              {/* Quick amounts */}
              <div className="flex gap-1 mt-2">
                {[5, 10, 25, 50, 100].map((a) => (
                  <button
                    key={a}
                    onClick={() => setAmount(a)}
                    className={`flex-1 py-1 rounded-md text-xs font-medium transition-colors ${
                      amount === a ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    ${a}
                  </button>
                ))}
              </div>
            </div>

            {/* Payout info */}
            <div className="mb-4 p-3 rounded-lg bg-secondary/50 border border-border/30">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-muted-foreground">Profit</span>
                <span className="text-trading-green font-heading font-semibold">
                  +${(amount * (selectedAsset.payout / 100)).toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Payout</span>
                <span className="font-heading font-semibold">{selectedAsset.payout}%</span>
              </div>
            </div>

            {/* Trade buttons */}
            <div className="flex gap-2 mt-auto">
              <Button
                onClick={() => placeTrade("up")}
                className="flex-1 h-14 bg-[hsl(var(--trading-green))] hover:bg-[hsl(var(--trading-green))]/90 text-background font-heading font-bold text-base gap-1.5"
              >
                <ArrowUp className="h-5 w-5" />
                UP
              </Button>
              <Button
                onClick={() => placeTrade("down")}
                className="flex-1 h-14 bg-[hsl(var(--trading-red))] hover:bg-[hsl(var(--trading-red))]/90 text-background font-heading font-bold text-base gap-1.5"
              >
                <ArrowDown className="h-5 w-5" />
                DOWN
              </Button>
            </div>
          </div>

          {/* Active trades */}
          {activeTrades.length > 0 && (
            <div className="border-t border-border/50 p-3 max-h-48 overflow-y-auto">
              <div className="text-xs text-muted-foreground font-heading font-semibold mb-2">Active Trades</div>
              {activeTrades.slice(0, 5).map((t) => (
                <div
                  key={t.id}
                  className={`p-2 rounded-lg mb-1.5 text-xs ${
                    t.resolved
                      ? t.won
                        ? "bg-[hsl(var(--trading-green))]/10 border border-[hsl(var(--trading-green))]/20"
                        : "bg-[hsl(var(--trading-red))]/10 border border-[hsl(var(--trading-red))]/20"
                      : "bg-secondary/50 border border-border/30"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-heading font-semibold">{t.asset}</span>
                    <span className={`font-medium ${t.direction === "up" ? "text-trading-green" : "text-trading-red"}`}>
                      {t.direction === "up" ? "↑" : "↓"} ${t.amount}
                    </span>
                  </div>
                  {t.resolved && (
                    <div className={`mt-1 font-heading font-semibold ${t.won ? "text-trading-green" : "text-trading-red"}`}>
                      {t.won ? `+$${t.profit.toFixed(2)} Won!` : "Lost"}
                    </div>
                  )}
                  {!t.resolved && (
                    <div className="mt-1 text-muted-foreground">Trading...</div>
                  )}
                </div>
              ))}
            </div>
          )}
        </aside>
      </div>
    </div>
  );
};

export default TradingPanel;
