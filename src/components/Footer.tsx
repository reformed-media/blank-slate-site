import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#111111] border-t-[3px] border-[#C9A961] pt-16 px-8 pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
        <div>
          <h4 className="font-inter text-base font-bold tracking-[2px] mb-5 text-white">
            QUICK LINKS
          </h4>
          <ul className="list-none space-y-2">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
              { to: "/schedule", label: "Book Appointment" },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-[#aaaaaa] text-[0.9rem] hover:text-[#C9A961] transition-colors duration-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-inter text-base font-bold tracking-[2px] mb-5 text-white">
            CONTACT
          </h4>
          <p className="text-[#aaaaaa] text-[0.9rem] mb-2">
            <a href="tel:9172519317" className="text-[#aaaaaa] hover:text-[#C9A961]">
              (917) 251-9317
            </a>
          </p>
          <p className="text-[#aaaaaa] text-[0.9rem] mb-2">
            <a
              href="mailto:info@autospadetailz.com"
              className="text-[#aaaaaa] hover:text-[#C9A961]"
            >
              info@autospadetailz.com
            </a>
          </p>
          <p className="text-[#aaaaaa] text-[0.9rem]">Mineola, North Hempstead, NY</p>
        </div>

        <div>
          <h4 className="font-inter text-base font-bold tracking-[2px] mb-5 text-white">
            HOURS & SOCIAL
          </h4>
          <p className="text-[#aaaaaa] text-[0.9rem] mb-3">
            Open 7 Days a Week
            <br />
            8:00 AM – 7:00 PM
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.instagram.com/autospa_detailz"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center text-[#aaaaaa] text-[0.85rem] font-bold transition-all duration-300 hover:border-[#C9A961] hover:text-[#C9A961] hover:shadow-[0_0_15px_rgba(201,169,97,0.3)]"
            >
              IG
            </a>
            <a
              href="https://www.tiktok.com/@autospa.detailz"
              target="_blank"
              rel="noopener noreferrer"
              title="TikTok"
              className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center text-[#aaaaaa] text-[0.85rem] font-bold transition-all duration-300 hover:border-[#C9A961] hover:text-[#C9A961] hover:shadow-[0_0_15px_rgba(201,169,97,0.3)]"
            >
              TK
            </a>
          </div>
        </div>
      </div>

      <div className="text-center pt-10 mt-10 border-t border-[#1a1a1a] text-[#aaaaaa] text-[0.85rem] max-w-[1200px] mx-auto">
        <p>&copy; 2026 Autospa Detailz. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
