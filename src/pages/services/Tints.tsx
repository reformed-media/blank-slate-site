import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const types = [
  { name: "Ceramic", desc: "Premium heat rejection, no signal interference." },
  { name: "Carbon", desc: "Strong UV protection, matte finish." },
  { name: "Dyed", desc: "Cosmetic option, budget-friendly." },
];

const shades = [
  { vlt: "5%", color: "rgba(255,255,255,0.05)" },
  { vlt: "20%", color: "rgba(255,255,255,0.20)" },
  { vlt: "35%", color: "rgba(255,255,255,0.35)" },
  { vlt: "50%", color: "rgba(255,255,255,0.55)" },
];

const Tints = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="page-hero-gradient page-hero-radial relative pt-32 pb-20 px-8 text-center">
        <div className="max-w-[800px] mx-auto relative">
          <h1 className="font-fraunces text-[clamp(2.4rem,6vw,3.8rem)] font-medium tracking-[-0.01em] mb-5">
            Window <span className="text-[#C9A961]">Tints</span>
          </h1>
          <p className="font-inter text-text-secondary text-lg max-w-[640px] mx-auto mb-8 leading-[1.7]">
            Privacy, UV protection, and a sharp finish — installed cleanly.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C9A961] text-[#0A0A0A] font-inter text-[15px] font-semibold rounded-[3px] transition-all duration-300 hover:bg-[#D4B873]"
          >
            Book your service →
          </Link>
        </div>
      </section>

      <section className="bg-background-secondary py-20 px-8 max-md:py-14 max-md:px-5">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-fraunces text-[clamp(1.8rem,3.5vw,2.4rem)] font-medium text-center tracking-[-0.01em] mb-12">
            Tint <span className="text-[#C9A961]">types</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {types.map((t) => (
              <div
                key={t.name}
                className="bg-background-tertiary border border-border-subtle rounded-xl p-8 flex flex-col transition-all duration-300 hover:border-[#C9A961]"
              >
                <h3 className="font-fraunces text-[1.4rem] font-medium tracking-[-0.01em] mb-3 text-text-primary">
                  {t.name}
                </h3>
                <p className="font-inter text-text-secondary text-[0.95rem] leading-[1.65]">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-primary py-20 px-8 max-md:py-14 max-md:px-5">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-fraunces text-[clamp(1.8rem,3.5vw,2.4rem)] font-medium text-center tracking-[-0.01em] mb-6">
            Shade <span className="text-[#C9A961]">options</span>
          </h2>
          <p className="font-inter text-text-secondary text-center text-[1rem] leading-[1.7] max-w-[700px] mx-auto mb-12">
            VLT (Visible Light Transmission) is how much light passes through the film. Lower VLT means a darker tint and more privacy.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-[800px] mx-auto">
            {shades.map((s) => (
              <div
                key={s.vlt}
                className="bg-background-secondary border border-border-subtle rounded-xl overflow-hidden flex flex-col"
              >
                <div
                  className="aspect-square w-full"
                  style={{ background: `linear-gradient(135deg, #0A0A0A, #1C1C1C), ${s.color}` }}
                >
                  <div className="w-full h-full" style={{ background: s.color }} />
                </div>
                <div className="py-4 text-center">
                  <span className="font-fraunces text-[1.1rem] font-medium tracking-[-0.01em] text-text-primary">
                    {s.vlt} VLT
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-secondary py-20 px-8 max-md:py-14 max-md:px-5">
        <div className="max-w-[800px] mx-auto">
          <div className="bg-background-tertiary border border-border-subtle rounded-xl p-8 sm:p-10">
            <h2 className="font-fraunces text-[1.5rem] font-medium tracking-[-0.01em] mb-4 text-text-primary">
              New York <span className="text-[#C9A961]">legal limit</span>
            </h2>
            <p className="font-inter text-text-secondary text-[1rem] leading-[1.75]">
              NY law allows a minimum of 70% VLT on front side windows and the windshield. Rear windows are unrestricted. We'll walk you through what's compliant for your vehicle.
            </p>
          </div>
        </div>
      </section>

      <section className="social-cta-gradient text-center py-20 px-8 border-t border-b border-border-subtle">
        <h2 className="font-fraunces text-[clamp(1.6rem,3vw,2.2rem)] font-medium tracking-[-0.01em] mb-6">
          Pick your <span className="text-[#C9A961]">shade</span>.
        </h2>
        <Link
          to="/book"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C9A961] text-[#0A0A0A] font-inter text-[15px] font-semibold rounded-[3px] transition-all duration-300 hover:bg-[#D4B873]"
        >
          Book your service →
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default Tints;