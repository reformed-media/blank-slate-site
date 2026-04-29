import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  portfolioItems,
  captionFor,
  makeLabels,
  type PortfolioMake,
  type PortfolioItem,
} from "@/data/portfolio";

type FilterValue = "all" | PortfolioMake;

const filters: { value: FilterValue; label: string }[] = [
  { value: "all", label: "All" },
  { value: "ferrari", label: "Ferrari" },
  { value: "porsche", label: "Porsche" },
  { value: "lamborghini", label: "Lamborghini" },
  { value: "bmw", label: "BMW" },
  { value: "mercedes", label: "Mercedes" },
  { value: "tesla", label: "Tesla" },
  { value: "range-rover", label: "Range Rover" },
  { value: "mclaren", label: "McLaren" },
  { value: "other", label: "Other" },
];

const Portfolio = () => {
  const [active, setActive] = useState<FilterValue>("all");
  const [lightbox, setLightbox] = useState<PortfolioItem | null>(null);

  const visible = active === "all" ? portfolioItems : portfolioItems.filter((p) => p.make === active);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="page-hero-gradient page-hero-radial relative pt-32 pb-16 px-8 text-center">
        <div className="max-w-[800px] mx-auto relative">
          <h1 className="font-fraunces text-[clamp(2.4rem,6vw,3.8rem)] font-medium tracking-[-0.01em] mb-5">
            <span className="text-[#C9A961]">Portfolio</span>
          </h1>
          <p className="font-inter text-text-secondary text-lg max-w-[640px] mx-auto leading-[1.7]">
            A look at recent builds. Clients trust us with everything from daily drivers to six-figure exotics.
          </p>
        </div>
      </section>

      {/* Filter pills */}
      <section className="px-8 max-md:px-5">
        <div className="max-w-[1200px] mx-auto flex flex-wrap gap-2 justify-center">
          {filters.map((f) => {
            const isActive = f.value === active;
            return (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`px-4 py-2 rounded-full font-inter text-sm font-medium border transition-all duration-200 ${
                  isActive
                    ? "bg-[#C9A961] text-[#0A0A0A] border-[#C9A961]"
                    : "bg-background-secondary text-text-primary border-border-subtle hover:border-[#C9A961]"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Grid */}
      <section className="py-14 px-8 max-md:py-10 max-md:px-5">
        <div className="max-w-[1200px] mx-auto">
          {visible.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {visible.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setLightbox(item)}
                  className="text-left flex flex-col gap-3 group"
                >
                  <div className="aspect-[3/2] bg-background-tertiary border border-border-subtle rounded-lg flex items-center justify-center transition-all duration-300 group-hover:border-[#C9A961]">
                    <span className="font-mono text-text-secondary text-xs uppercase tracking-wider">
                      [ Image ]
                    </span>
                  </div>
                  <p className="font-inter text-text-primary text-sm leading-[1.5]">
                    {captionFor(item)}
                  </p>
                </button>
              ))}
            </div>
          ) : (
            <p className="text-center font-inter text-text-secondary py-16">
              No builds in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="social-cta-gradient text-center py-20 px-8 border-t border-b border-border-subtle">
        <p className="font-fraunces text-[clamp(1.4rem,2.8vw,2rem)] font-medium tracking-[-0.01em] mb-6">
          Don't see your make? <span className="text-[#C9A961]">We work on everything.</span>
        </p>
        <Link
          to="/consultation"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C9A961] text-[#0A0A0A] font-inter text-[15px] font-semibold rounded-[3px] transition-all duration-300 hover:bg-[#D4B873]"
        >
          Book a free consultation →
        </Link>
      </section>

      <Footer />

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[2000] bg-black/85 flex items-center justify-center p-6"
          role="dialog"
          aria-modal="true"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-[1100px] w-full"
          >
            <div className="aspect-[3/2] bg-background-tertiary border border-border-subtle rounded-lg flex items-center justify-center">
              <span className="font-mono text-text-secondary text-sm uppercase tracking-wider">
                [ Image ]
              </span>
            </div>
            <div className="flex items-center justify-between gap-4 mt-4">
              <p className="font-inter text-text-primary text-base">
                {captionFor(lightbox)}
              </p>
              <button
                onClick={() => setLightbox(null)}
                className="font-inter text-text-secondary text-sm hover:text-text-primary transition-colors"
                aria-label="Close"
              >
                Close ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;

export { makeLabels };