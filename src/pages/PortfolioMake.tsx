import { Link, useParams, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  portfolioItems,
  captionFor,
  makeLabels,
  type PortfolioMake as PortfolioMakeType,
} from "@/data/portfolio";

const validMakes: PortfolioMakeType[] = [
  "ferrari",
  "porsche",
  "lamborghini",
  "bmw",
  "mercedes",
  "tesla",
  "range-rover",
  "mclaren",
  "audi",
  "lexus",
];

const PortfolioMake = () => {
  const { make } = useParams<{ make: string }>();
  const slug = make as PortfolioMakeType;

  if (!make || !validMakes.includes(slug)) {
    return <Navigate to="/portfolio" replace />;
  }

  const label = makeLabels[slug];
  const items = portfolioItems.filter((p) => p.make === slug);

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="page-hero-gradient page-hero-radial relative pt-32 pb-16 px-8 text-center">
        <div className="max-w-[800px] mx-auto relative">
          <h1 className="font-fraunces text-[clamp(2.4rem,6vw,3.8rem)] font-medium tracking-[-0.01em] mb-5">
            {label} <span className="text-[#C9A961]">builds</span>
          </h1>
          <p className="font-inter text-text-secondary text-lg max-w-[640px] mx-auto leading-[1.7]">
            A selection of recent work on {label} vehicles.
          </p>
        </div>
      </section>

      <section className="py-14 px-8 max-md:py-10 max-md:px-5">
        <div className="max-w-[1200px] mx-auto">
          {items.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {items.map((item) => (
                <div key={item.id} className="flex flex-col gap-3">
                  <div className="aspect-[3/2] bg-background-tertiary border border-border-subtle rounded-lg flex items-center justify-center">
                    <span className="font-mono text-text-secondary text-xs uppercase tracking-wider">
                      [ Image ]
                    </span>
                  </div>
                  <p className="font-inter text-text-primary text-sm leading-[1.5]">
                    {captionFor(item)}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-background-secondary border border-border-subtle rounded-xl p-12 text-center">
              <p className="font-inter text-text-primary text-lg mb-2">
                Coming soon
              </p>
              <p className="font-inter text-text-secondary text-base">
                Book a free consultation to be our next {label} feature.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="social-cta-gradient text-center py-20 px-8 border-t border-b border-border-subtle">
        <p className="font-fraunces text-[clamp(1.4rem,2.8vw,2rem)] font-medium tracking-[-0.01em] mb-6">
          Bring your <span className="text-[#C9A961]">{label}</span> in.
        </p>
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

export default PortfolioMake;