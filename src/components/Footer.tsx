import { TrendingUp } from "lucide-react";

const footerLinks = {
  Platform: ["Web Terminal", "Mobile App", "Desktop App", "API"],
  Trading: ["Forex", "Stocks", "Crypto", "Commodities"],
  Company: ["About Us", "Careers", "Press", "Contact"],
  Legal: ["Terms of Service", "Privacy Policy", "Risk Disclosure", "AML Policy"],
};

const Footer = () => {
  return (
    <footer className="relative border-t border-border/30 py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/30" />
      <div className="container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <span className="text-lg font-heading font-bold text-foreground">TradeX</span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The modern trading platform built for everyone.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-bold text-sm mb-4 text-foreground">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 TradeX. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground max-w-xl text-center md:text-right">
            Risk Warning: Trading involves significant risk. You may lose your invested capital. Trade responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
