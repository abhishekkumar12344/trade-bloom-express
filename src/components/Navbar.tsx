import { useState } from "react";
import { Menu, X, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Trading", href: "#trading" },
  { label: "Accounts", href: "#accounts" },
  { label: "Platform", href: "#platform" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
            <TrendingUp className="h-5 w-5 text-primary" />
          </div>
          <span className="text-xl font-heading font-bold text-foreground">TradeX</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground rounded-lg" asChild>
            <Link to="/login">Sign In</Link>
          </Button>
          <Button size="sm" className="rounded-lg glow-gold" asChild>
            <Link to="/register">Register</Link>
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-strong px-6 pb-6 pt-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 pt-2">
            <Button variant="ghost" size="sm" className="text-muted-foreground" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
            <Button size="sm" className="glow-gold" asChild>
              <Link to="/register">Register</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
