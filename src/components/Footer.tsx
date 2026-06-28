import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <img src={logo} alt="DesiDaaru" className="h-16 w-auto object-contain mb-4" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Your premium destination for the finest spirits, wines, and craft beers. Drink responsibly.
          </p>
          <div className="flex gap-3 mt-4">
            {["Facebook", "Instagram", "Twitter"].map((s) => (
              <a key={s} href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors border border-border rounded-full px-3 py-1">{s}</a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/shop", label: "Shop All" },
              { to: "/shop?category=whiskey", label: "Whiskey" },
              { to: "/shop?category=vodka", label: "Vodka" },
              { to: "/shop?category=rum", label: "Rum" },
              { to: "/shop?category=beer", label: "Beer" },
              { to: "/shop?category=wine", label: "Wine" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground hover:text-primary transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/privacy", label: "Privacy Policy" },
              { to: "/terms", label: "Terms & Conditions" },
              { to: "/refund", label: "Refund Policy" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground hover:text-primary transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> support@desidaaru.com</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-primary mt-0.5" /> 123 Spirit Lane, Mumbai, Maharashtra 400001</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">© 2026 DesiDaaru. All rights reserved. Drink responsibly. 18+ only.</p>
        <p className="text-xs text-muted-foreground">🔒 Secure payments | Fast delivery across India</p>
      </div>
    </div>
  </footer>
);

export default Footer;
