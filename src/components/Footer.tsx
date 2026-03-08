import { TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  Platform: ["Web Terminal", "Mobile App", "Desktop App", "API"],
  Trading: ["Forex", "Stocks", "Crypto", "Commodities"],
  Company: ["About Us", "Careers", "Press", "Contact"],
  Legal: ["Terms of Service", "Privacy Policy", "Risk Disclosure", "AML Policy"],
};

const Footer = () => {
  return (
    <footer className="border-t border-border/20 py-16 bg-background">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-heading font-bold text-foreground">TradeX</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The modern trading platform for everyone.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-bold text-sm mb-4 text-foreground">{title}</h4>
              <ul className="space-y-2.5">
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

        <div className="border-t border-border/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© 2026 TradeX. All rights reserved.</p>
          <p className="text-xs text-muted-foreground max-w-xl text-center md:text-right">
            Risk Warning: Trading involves significant risk. You may lose your invested capital. Trade responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
