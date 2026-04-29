import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const benefits = [
  { title: "Years of protection", desc: "Bonds to clear coat. Survives wash after wash." },
  { title: "Hydrophobic", desc: "Water beads and rolls. Dirt struggles to stick." },
  { title: "UV resistance", desc: "Slows oxidation and paint fade." },
  { title: "Showroom gloss", desc: "Adds depth and clarity over corrected paint." },
];

const tiers = [
  { name: "1-year sealant", desc: "Entry-level protection." },
  { name: "3-year coating", desc: "Daily driver standard." },
  { name: "5-year coating", desc: "Enthusiast's choice." },
  { name: "9-year coating", desc: "Flagship protection (Modesta-tier)." },
];

const Ceramic = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="page-hero-gradient page-hero-radial relative pt-32 pb-20 px-8 text-center">
        <div className="max-w-[800px] mx-auto relative">
          <h1 className="font-fraunces text-[clamp(2.4rem,6vw,3.8rem)] font-medium tracking-[-0.01em] mb-5">
            Ceramic <span className="text-[#C9A961]">Coating</span>
          </h1>
          <p className="font-inter text-text-secondary text-lg max-w-[640px] mx-auto mb-8 leading-[1.7]">
            Molecular-bonded protection that outlasts wax by years.
          </p>
          <Link
            to="/consultation"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C9A961] text-[#0A0A0A] font-inter text-[15px] font-semibold rounded-[3px] transition-all duration-300 hover:bg-[#D4B873]"
          >
            Book a free consultation →
          </Link>
        </div>
      </section>

      <section className="bg-background-secondary py-20 px-8 max-md:py-14 max-md:px-5">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-fraunces text-[clamp(1.8rem,3.5vw,2.4rem)] font-medium text-center tracking-[-0.01em] mb-12">
            Why <span className="text-[#C9A961]">ceramic</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-background-tertiary border border-border-subtle rounded-xl p-7 transition-all duration-300 hover:border-[#C9A961]"
              >
                <h3 className="font-fraunces text-[1.15rem] font-medium tracking-[-0.01em] mb-3 text-text-primary">
                  {b.title}
                </h3>
                <p className="font-inter text-text-secondary text-[0.95rem] leading-[1.65]">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-primary py-20 px-8 max-md:py-14 max-md:px-5">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-fraunces text-[clamp(1.8rem,3.5vw,2.4rem)] font-medium text-center tracking-[-0.01em] mb-12">
            Coating <span className="text-[#C9A961]">tiers</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((t) => (
              <div
                key={t.name}
                className="bg-background-secondary border border-border-subtle rounded-xl p-7 flex flex-col transition-all duration-300 hover:border-[#C9A961]"
              >
                <h3 className="font-fraunces text-[1.2rem] font-medium tracking-[-0.01em] mb-3 text-text-primary">
                  {t.name}
                </h3>
                <p className="font-inter text-text-secondary text-[0.95rem] leading-[1.65] mb-6 flex-1">
                  {t.desc}
                </p>
                <span className="font-inter text-[#C9A961] text-[0.85rem] font-medium">
                  Quote at consultation
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-secondary py-20 px-8 max-md:py-14 max-md:px-5">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-fraunces text-[clamp(1.8rem,3.5vw,2.4rem)] font-medium text-center tracking-[-0.01em] mb-12">
            Brands we <span className="text-[#C9A961]">install</span>
          </h2>
          <div className="grid grid-cols-2 max-w-[700px] mx-auto gap-6">
            {["Modesta", "Gtechniq"].map((brand) => (
              <div
                key={brand}
                className="bg-background-tertiary border border-border-subtle rounded-xl py-12 flex items-center justify-center"
              >
                <span className="font-fraunces text-[1.6rem] font-medium tracking-[-0.01em] text-text-primary">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-primary py-20 px-8 max-md:py-14 max-md:px-5">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-fraunces text-[clamp(1.8rem,3.5vw,2.4rem)] font-medium text-center tracking-[-0.01em] mb-12">
            Pairs <span className="text-[#C9A961]">with</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
            <Link
              to="/services/paint-correction"
              className="bg-background-secondary border border-border-subtle rounded-xl p-8 transition-all duration-300 hover:border-[#C9A961] group"
            >
              <h3 className="font-fraunces text-[1.25rem] font-medium tracking-[-0.01em] mb-3 text-text-primary">
                Paint correction first, then coating
              </h3>
              <p className="font-inter text-text-secondary text-[0.95rem] leading-[1.65] mb-4">
                Polish out swirls and defects before sealing the finish under ceramic.
              </p>
              <span className="font-inter text-[#C9A961] text-sm font-medium inline-flex items-center gap-1.5 group-hover:gap-2 transition-all">
                Explore paint correction →
              </span>
            </Link>
            <Link
              to="/services/ppf"
              className="bg-background-secondary border border-border-subtle rounded-xl p-8 transition-all duration-300 hover:border-[#C9A961] group"
            >
              <h3 className="font-fraunces text-[1.25rem] font-medium tracking-[-0.01em] mb-3 text-text-primary">
                Coat over PPF for layered defense
              </h3>
              <p className="font-inter text-text-secondary text-[0.95rem] leading-[1.65] mb-4">
                Add hydrophobic ceramic on top of PPF for the most complete protection stack.
              </p>
              <span className="font-inter text-[#C9A961] text-sm font-medium inline-flex items-center gap-1.5 group-hover:gap-2 transition-all">
                Explore PPF →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="social-cta-gradient text-center py-20 px-8 border-t border-b border-border-subtle">
        <h2 className="font-fraunces text-[clamp(1.6rem,3vw,2.2rem)] font-medium tracking-[-0.01em] mb-6">
          Ready to <span className="text-[#C9A961]">lock in the gloss</span>?
        </h2>
        <Link
          to="/consultation"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C9A961] text-[#0A0A0A] font-inter text-[15px] font-semibold rounded-[3px] transition-all duration-300 hover:bg-[#D4B873]"
        >
          Book a free consultation →
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default Ceramic;