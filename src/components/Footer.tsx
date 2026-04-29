import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
];

const serviceLinks = [
  { to: "/services/ppf", label: "Paint Protection Film" },
  { to: "/services/ceramic", label: "Ceramic Coating" },
  { to: "/services/paint-correction", label: "Paint Correction" },
  { to: "/services/detail", label: "Detailing" },
  { to: "/services/tints", label: "Window Tints" },
];

const linkClass =
  "text-[#A8A29A] text-sm hover:text-[#C9A961] transition-colors duration-300";
const headingClass =
  "font-fraunces text-base font-medium text-[#F5F1EA] mb-5";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.91a8.16 8.16 0 0 0 4.77 1.52V7a4.85 4.85 0 0 1-1.84-.31z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2A2A2A]">
      <div className="max-w-[1200px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block hover:opacity-90 transition-opacity">
              <img src={logo} alt="AutoSpa Detailz" className="h-12" />
            </Link>
            <p className="text-[#A8A29A] text-sm mt-5 leading-relaxed">
              Luxury auto detailing in Mineola, NY
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.instagram.com/autospa_detailz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-[#2A2A2A] flex items-center justify-center text-[#A8A29A] transition-colors duration-300 hover:border-[#C9A961] hover:text-[#C9A961]"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.tiktok.com/@autospa.detailz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-full border border-[#2A2A2A] flex items-center justify-center text-[#A8A29A] transition-colors duration-300 hover:border-[#C9A961] hover:text-[#C9A961]"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className={headingClass}>Navigate</h4>
            <ul className="list-none space-y-2">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className={linkClass}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className={headingClass}>Services</h4>
            <ul className="list-none space-y-2">
              {serviceLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className={linkClass}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={headingClass}>Get in touch</h4>
            <ul className="list-none space-y-2 text-sm text-[#A8A29A]">
              <li>
                <a href="tel:9172519317" className={linkClass}>(917) 251-9317</a>
              </li>
              <li>
                <a href="mailto:info@autospadetailz.com" className={linkClass}>
                  info@autospadetailz.com
                </a>
              </li>
              <li>Mineola, North Hempstead, NY</li>
              <li className="pt-2">Open 7 days a week</li>
              <li>8:00 AM – 7:00 PM</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#2A2A2A]">
        <div className="max-w-[1200px] mx-auto px-8 py-6 flex flex-col sm:flex-row items-center sm:justify-between gap-3">
          <p className="text-[#A8A29A] text-xs order-2 sm:order-1">
            © 2026 Autospa Detailz. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs order-1 sm:order-2">
            <Link to="/privacy" className={linkClass}>Privacy Policy</Link>
            <span className="text-[#2A2A2A]">|</span>
            <Link to="/terms" className={linkClass}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
