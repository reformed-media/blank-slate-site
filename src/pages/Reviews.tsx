import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const testimonials = [
  { text: "My car looks brand new, super impressed with the paint correction and wax. Highly recommend!", author: "Sarah T." },
  { text: "Amazing service and attention to detail. My car's never looked better!", author: "Michael L." },
  { text: "Got the starlight lighting and it's stunning. Excellent work by the team.", author: "Jessica R." },
  { text: "The ceramic coating was a game-changer. My car shines like new!", author: "David K." },
  { text: "Powder coating and detailing were top-notch. Highly satisfied!", author: "Lucas M." },
  { text: "The wash and wax made my car look showroom ready. Great experience!", author: "Nina S." },
];

const Reviews = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="page-hero-gradient page-hero-radial relative pt-32 pb-16 px-8 text-center">
        <div className="max-w-[800px] mx-auto relative">
          <h1 className="font-fraunces text-[clamp(2.4rem,6vw,3.8rem)] font-medium tracking-[-0.01em] mb-5">
            <span className="text-[#C9A961]">Reviews</span>
          </h1>
          <p className="font-inter text-text-secondary text-lg max-w-[640px] mx-auto leading-[1.7]">
            Five stars across hundreds of details. Here's what clients are saying.
          </p>
        </div>
      </section>

      {/* Google Reviews placeholder */}
      <section className="bg-background-primary py-20 px-8 max-md:py-14 max-md:px-5">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-fraunces text-[clamp(1.8rem,3.5vw,2.4rem)] font-medium text-center tracking-[-0.01em] mb-12">
            Google <span className="text-[#C9A961]">reviews</span>
          </h2>
          {/* TODO: Replace with the Google reviews embed (Elfsight, SociableKit, or equivalent). */}
          <div className="min-h-[400px] bg-background-secondary border border-border-subtle rounded-lg p-8 flex flex-col items-center justify-center text-center">
            <p className="text-text-secondary text-xs font-mono uppercase tracking-wider mb-3">[ Google Reviews Widget ]</p>
            <p className="text-text-primary font-medium mb-2">Live Google reviews will load here</p>
            <p className="text-text-secondary text-sm max-w-md">Replace with the Google reviews embed (Elfsight, SociableKit, or equivalent) once configured.</p>
          </div>
        </div>
      </section>

      {/* Written testimonials */}
      <section className="bg-background-secondary py-20 px-8 max-md:py-14 max-md:px-5">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-fraunces text-[clamp(1.8rem,3.5vw,2.4rem)] font-medium text-center tracking-[-0.01em] mb-12">
            Written <span className="text-[#C9A961]">testimonials</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="bg-background-tertiary border border-border-subtle rounded-xl p-7 transition-all duration-300 hover:border-[#C9A961]"
              >
                <div className="text-[#C9A961] text-base mb-4 tracking-[2px]">★★★★★</div>
                <p className="font-inter text-text-secondary text-[0.95rem] leading-[1.7] mb-4 italic">
                  "{t.text}"
                </p>
                <div className="font-inter font-semibold text-text-primary text-[0.95rem]">
                  {t.author}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video testimonials */}
      <section className="bg-background-primary py-20 px-8 max-md:py-14 max-md:px-5">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-fraunces text-[clamp(1.8rem,3.5vw,2.4rem)] font-medium text-center tracking-[-0.01em] mb-12">
            Video <span className="text-[#C9A961]">testimonials</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="aspect-video bg-background-tertiary border border-border-subtle rounded-lg flex items-center justify-center"
              >
                <p className="text-text-secondary text-xs font-mono">[ Video testimonial coming soon ]</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="social-cta-gradient text-center py-20 px-8 border-t border-b border-border-subtle">
        <h2 className="font-fraunces text-[clamp(1.6rem,3vw,2.2rem)] font-medium tracking-[-0.01em] mb-8">
          Ready for the <span className="text-[#C9A961]">same treatment</span>?
        </h2>
        <div className="flex flex-row gap-3 justify-center max-sm:flex-col max-sm:items-center">
          <Link
            to="/consultation"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#C9A961] text-[#0A0A0A] font-inter text-[15px] font-semibold rounded-[3px] transition-all duration-300 hover:bg-[#D4B873] max-sm:w-64"
          >
            Book a free consultation →
          </Link>
          <Link
            to="/book"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-transparent border border-border-subtle text-text-primary font-inter text-[15px] font-semibold rounded-[3px] transition-all duration-300 hover:border-[#C9A961] max-sm:w-64"
          >
            Book your detail →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;