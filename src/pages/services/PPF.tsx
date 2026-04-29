import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const benefits = [
  { title: "Rock chip protection", desc: "Stops chips before they reach paint." },
  { title: "Self-healing", desc: "Minor swirls vanish with heat or sunlight." },
  { title: "Hydrophobic surface", desc: "Water sheets off. Easier washes, longer between details." },
  { title: "Lifetime warranty", desc: "Backed by manufacturer warranty for as long as you own the car." },
];

const tiers = [
  { name: "Partial Front", desc: "Hood leading edge, fenders, mirrors, headlights." },
  { name: "Full Front", desc: "Full hood, full fenders, full bumper, mirrors, headlights, A-pillars." },
  { name: "Track Pack", desc: "Full Front + rocker panels + door cups + rear arches." },
  { name: "Full Body", desc: "Every painted exterior surface." },
];

const builds = [
  "2024 Porsche 911 GT3 — Full Front PPF",
  "2023 Audi RS6 — Track Pack PPF",
  "2022 BMW M4 Competition — Full Front PPF",
  "2024 Tesla Model S Plaid — Full Body PPF",
];

const PPF = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="page-hero-gradient page-hero-radial relative pt-32 pb-20 px-8 text-center">
        <div className="max-w-[800px] mx-auto relative">
          <h1 className="font-fraunces text-[clamp(2.4rem,6vw,3.8rem)] font-medium tracking-[-0.01em] mb-5">
            Paint Protection <span className="text-[#C9A961]">Film</span>
          </h1>
          <p className="font-inter text-text-secondary text-lg max-w-[640px] mx-auto mb-8 leading-[1.7]">
            Invisible armor for your paint. Self-healing, hydrophobic, warranted for life.
          </p>
          <Link
            to="/consultation"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C9A961] text-[#0A0A0A] font-inter text-[15px] font-semibold rounded-[3px] transition-all duration-300 hover:bg-[#D4B873]"
          >
            Book a free consultation →
          </Link>
        </div>
      </section>

      {/* Why PPF */}
      <section className="bg-background-secondary py-20 px-8 max-md:py-14 max-md:px-5">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-fraunces text-[clamp(1.8rem,3.5vw,2.4rem)] font-medium text-center tracking-[-0.01em] mb-12">
            Why <span className="text-[#C9A961]">PPF</span>
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
                <p className="font-inter text-text-secondary text-[0.95rem] leading-[1.65]">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage options */}
      <section className="bg-background-primary py-20 px-8 max-md:py-14 max-md:px-5">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-fraunces text-[clamp(1.8rem,3.5vw,2.4rem)] font-medium text-center tracking-[-0.01em] mb-12">
            Coverage <span className="text-[#C9A961]">options</span>
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

      {/* Brands */}
      <section className="bg-background-secondary py-20 px-8 max-md:py-14 max-md:px-5">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-fraunces text-[clamp(1.8rem,3.5vw,2.4rem)] font-medium text-center tracking-[-0.01em] mb-12">
            Brands we <span className="text-[#C9A961]">install</span>
          </h2>
          <div className="grid grid-cols-2 max-w-[700px] mx-auto gap-6">
            {["XPEL", "SunTek"].map((brand) => (
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

      {/* Recent builds */}
      <section className="bg-background-primary py-20 px-8 max-md:py-14 max-md:px-5">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-fraunces text-[clamp(1.8rem,3.5vw,2.4rem)] font-medium text-center tracking-[-0.01em] mb-12">
            Recent PPF <span className="text-[#C9A961]">builds</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {builds.map((caption, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div className="aspect-square bg-background-tertiary border border-border-subtle rounded-lg flex items-center justify-center">
                  <span className="font-mono text-text-secondary text-xs uppercase tracking-wider">
                    [ Image ]
                  </span>
                </div>
                <p className="font-inter text-text-secondary text-sm leading-[1.5]">{caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="social-cta-gradient text-center py-20 px-8 border-t border-b border-border-subtle">
        <h2 className="font-fraunces text-[clamp(1.6rem,3vw,2.2rem)] font-medium tracking-[-0.01em] mb-6">
          Ready to <span className="text-[#C9A961]">protect your paint</span>?
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

export default PPF;