import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";

const navLinks = [
  { label: "How It Works", href: "#how-it-works", anchor: true },
  { label: "Features", href: "#features", anchor: true },
  { label: "Roadmap", href: "#roadmap", anchor: true },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleAnchorClick = (e, href) => {
    if (!isHome) {
      e.preventDefault();
      window.location.href = "/" + href;
    }
    setMenuOpen(false);
  };

  return (
    <header className="bg-white/95 dark:bg-on-background/95 backdrop-blur-sm w-full top-0 sticky z-50 border-b border-outline-variant dark:border-outline">
      <nav className="flex justify-between items-center px-6 h-16 w-full max-w-screen-xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
          <span className="material-symbols-outlined text-primary dark:text-primary-fixed text-[22px]"
            style={{ fontVariationSettings: "'FILL' 1" }}>
            local_shipping
          </span>
          <span className="text-[17px] font-bold text-primary dark:text-primary-fixed tracking-tight">
            Smart Dispatch
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) =>
            link.anchor ? (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="px-3 py-2 rounded-md text-sm font-medium text-on-surface-variant hover:text-primary hover:bg-primary/5 transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                className="px-3 py-2 rounded-md text-sm font-medium text-on-surface-variant hover:text-primary hover:bg-primary/5 transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
          <div className="ml-4">
            <Button to="/contact" size="sm">Get Early Access</Button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-surface-container transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-on-surface-variant text-[22px]">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-on-background border-t border-outline-variant px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) =>
            link.anchor ? (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="px-3 py-2.5 rounded-md text-sm font-medium text-on-surface-variant hover:text-primary hover:bg-primary/5 transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                className="px-3 py-2.5 rounded-md text-sm font-medium text-on-surface-variant hover:text-primary hover:bg-primary/5 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <div className="pt-2">
            <Button to="/contact" className="w-full" onClick={() => setMenuOpen(false)}>
              Get Early Access
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
