import { TrendingUp } from "lucide-react";

const footerLinks = {
  Platform: ["Web Terminal", "Mobile App", "Desktop App", "API"],
  Trading: ["Forex", "Stocks", "Crypto", "Commodities"],
  Company: ["About Us", "Careers", "Press", "Contact"],
  Legal: ["Terms of Service", "Privacy Policy", "Risk Disclosure", "AML Policy"],
};

const Footer = () => {
  return (
    <footer id="about" className="border-t border-border/50 py-16">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-6 w-6 text-primary" />
              <span className="text-lg font-heading font-bold">TradeX</span>
            </a>
            <p className="text-sm text-muted-foreground">
              The modern trading platform for everyone.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
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
