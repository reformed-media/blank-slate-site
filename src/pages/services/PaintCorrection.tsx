import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const levels = [
  { name: "1-step", desc: "Light defects, refresh gloss." },
  { name: "2-step", desc: "Moderate swirls, deeper scratches, restored clarity." },
  { name: "3-step", desc: "Severe oxidation, heavy correction, near-perfection finish." },
];

const PaintCorrection = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="page-hero-gradient page-hero-radial relative pt-32 pb-20 px-8 text-center">
        <div className="max-w-[800px] mx-auto relative">
          <h1 className="font-fraunces text-[clamp(2.4rem,6vw,3.8rem)] font-medium tracking-[-0.01em] mb-5">
            Paint <span className="text-[#C9A961]">Correction</span>
          </h1>
          <p className="font-inter text-text-secondary text-lg max-w-[640px] mx-auto mb-8 leading-[1.7]">
            We remove the swirls, scratches, and oxidation hiding your car's true finish.
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
            Levels of <span className="text-[#C9A961]">correction</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {levels.map((l) => (
              <div
                key={l.name}
                className="bg-background-tertiary border border-border-subtle rounded-xl p-8 flex flex-col transition-all duration-300 hover:border-[#C9A961]"
              >
                <h3 className="font-fraunces text-[1.4rem] font-medium tracking-[-0.01em] mb-3 text-text-primary">
                  {l.name}
                </h3>
                <p className="font-inter text-text-secondary text-[0.95rem] leading-[1.65] flex-1">
                  {l.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-primary py-20 px-8 max-md:py-14 max-md:px-5">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-fraunces text-[clamp(1.8rem,3.5vw,2.4rem)] font-medium text-center tracking-[-0.01em] mb-12">
            Before / <span className="text-[#C9A961]">after</span>
          </h2>
          <div className="aspect-video bg-background-tertiary border border-border-subtle rounded-xl flex items-center justify-center">
            <span className="font-mono text-text-secondary text-xs uppercase tracking-wider">
              Before/after slider — placeholder
            </span>
          </div>
        </div>
      </section>

      <section className="bg-background-secondary py-20 px-8 max-md:py-14 max-md:px-5">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-fraunces text-[clamp(1.8rem,3.5vw,2.4rem)] font-medium text-center tracking-[-0.01em] mb-12">
            What it <span className="text-[#C9A961]">pairs with</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
            <Link
              to="/services/ceramic"
              className="bg-background-tertiary border border-border-subtle rounded-xl p-8 transition-all duration-300 hover:border-[#C9A961] group"
            >
              <h3 className="font-fraunces text-[1.25rem] font-medium tracking-[-0.01em] mb-3 text-text-primary">
                Ceramic Coating
              </h3>
              <p className="font-inter text-text-secondary text-[0.95rem] leading-[1.65] mb-4">
                Lock in the corrected finish under years of hydrophobic protection.
              </p>
              <span className="font-inter text-[#C9A961] text-sm font-medium inline-flex items-center gap-1.5 group-hover:gap-2 transition-all">
                Explore ceramic →
              </span>
            </Link>
            <Link
              to="/services/ppf"
              className="bg-background-tertiary border border-border-subtle rounded-xl p-8 transition-all duration-300 hover:border-[#C9A961] group"
            >
              <h3 className="font-fraunces text-[1.25rem] font-medium tracking-[-0.01em] mb-3 text-text-primary">
                Paint Protection Film
              </h3>
              <p className="font-inter text-text-secondary text-[0.95rem] leading-[1.65] mb-4">
                Protect the freshly corrected paint from chips and scratches with PPF.
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
          Bring back the <span className="text-[#C9A961]">finish</span>.
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

export default PaintCorrection;