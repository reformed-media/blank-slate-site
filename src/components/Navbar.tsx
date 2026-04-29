import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import BookNowButton from "@/components/BookNowButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] px-8 py-4 flex items-center justify-between nav-blur transition-colors duration-300 ${
        scrolled
          ? "bg-[rgba(10,10,10,0.95)] shadow-[0_2px_20px_rgba(0,0,0,0.5)]"
          : "bg-[rgba(10,10,10,0.85)]"
      }`}
    >
      <Link
        to="/"
        className="flex items-center hover:opacity-90 transition-opacity"
      >
        <img src={logo} alt="AutoSpa Detailz" className="h-12" />
      </Link>

      <ul
        className={`flex items-center gap-8 list-none max-md:fixed max-md:top-0 max-md:w-[280px] max-md:h-screen max-md:bg-[#0d0d0d] max-md:flex-col max-md:pt-20 max-md:px-8 max-md:pb-8 max-md:shadow-[-5px_0_30px_rgba(0,0,0,0.5)] max-md:transition-[right] max-md:duration-300 ${
          isOpen ? "max-md:right-0" : "max-md:right-[-100%]"
        }`}
      >
        {[
          { path: "/", label: "Home" },
          { path: "/services", label: "Services" },
          { path: "/portfolio", label: "Portfolio" },
          { path: "/about", label: "About" },
          { path: "/reviews", label: "Reviews" },
          { path: "/contact", label: "Contact" },
        ].map(({ path, label }) => (
          <li key={path}>
            <Link
              to={path}
              onClick={closeMenu}
              className={`text-[0.9rem] font-medium uppercase tracking-[1px] transition-colors duration-300 ${
                isActive(path) ? "text-white" : "text-[#aaaaaa] hover:text-white"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            to="/consultation"
            onClick={closeMenu}
            className={`text-[0.85rem] font-medium transition-colors duration-300 ${
              isActive("/consultation") ? "text-white" : "text-[#aaaaaa] hover:text-white"
            }`}
          >
            Free Consultation
          </Link>
        </li>
        <li>
          <BookNowButton onClick={closeMenu} className="px-[20px] py-[10px] text-[14px]" />
        </li>
      </ul>

      <button
        className="hidden max-md:flex flex-col gap-[5px] cursor-pointer bg-none border-none p-[5px] z-[1001]"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`w-7 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "rotate-45 translate-x-[5px] translate-y-[5px]" : ""
          }`}
        />
        <span
          className={`w-7 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`w-7 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "-rotate-45 translate-x-[5px] -translate-y-[5px]" : ""
          }`}
        />
      </button>
    </nav>
  );
};

export default Navbar;
