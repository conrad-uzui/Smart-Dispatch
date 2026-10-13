import { Link } from "react-router-dom";

const companyLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Features", href: "/#features" },
  { label: "Roadmap", href: "/#roadmap" },
  { label: "Contact", to: "/contact" },
];

const productLinks = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Who It's For", href: "/#who-its-for" },
  { label: "Roadmap", href: "/#roadmap" },
];

const legalLinks = [
  { label: "Privacy Policy", to: "/contact" },
  { label: "Terms of Service", to: "/contact" },
];

const WHATSAPP_URL =
  "https://wa.me/233502826749?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20Smart%20Dispatch";

export default function Footer() {
  return (
    <footer className="bg-on-background text-surface py-16 px-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <span
              className="material-symbols-outlined text-primary-fixed text-[22px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              local_shipping
            </span>
            <span className="text-[17px] font-bold text-primary-fixed tracking-tight">
              Smart Dispatch
            </span>
          </Link>
          <p className="text-surface-variant text-[14px] leading-relaxed max-w-xs">
            Intelligent WhatsApp-based delivery automation for restaurants,
            pharmacies, and retailers across Africa.
          </p>
          <div className="mt-5 flex gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
            >
              <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                chat
              </span>
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h5 className="font-bold mb-4 text-surface-bright text-sm uppercase tracking-wide">Company</h5>
          <ul className="space-y-3 text-surface-variant text-[14px]">
            {companyLinks.map((link) => (
              <li key={link.label}>
                {link.to ? (
                  <Link className="hover:text-primary-fixed transition-colors" to={link.to}>
                    {link.label}
                  </Link>
                ) : (
                  <a className="hover:text-primary-fixed transition-colors" href={link.href}>
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Product */}
        <div>
          <h5 className="font-bold mb-4 text-surface-bright text-sm uppercase tracking-wide">Product</h5>
          <ul className="space-y-3 text-surface-variant text-[14px]">
            {productLinks.map((link) => (
              <li key={link.label}>
                <a className="hover:text-primary-fixed transition-colors" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h5 className="font-bold mb-4 text-surface-bright text-sm uppercase tracking-wide">Legal</h5>
          <ul className="space-y-3 text-surface-variant text-[14px]">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link className="hover:text-primary-fixed transition-colors" to={link.to}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-screen-xl mx-auto mt-14 pt-6 border-t border-outline/20 text-surface-variant text-[13px] flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2026 Smart Dispatch. Built in Accra & Obuasi, Ghana.</p>
        <div className="flex gap-3">
          {/* LinkedIn */}
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-surface/10 flex items-center justify-center hover:bg-primary-fixed/20 transition-colors"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          {/* X / Twitter */}
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-surface/10 flex items-center justify-center hover:bg-primary-fixed/20 transition-colors"
            aria-label="X / Twitter"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
