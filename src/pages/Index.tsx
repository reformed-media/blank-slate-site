import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  { icon: "☀", title: "DETAILING", desc: "Full interior and exterior restoration. Paint correction, wash & wax — your car reborn." },
  { icon: "▖", title: "VEHICLE WRAPS", desc: "Full and partial vinyl wraps. Bold color changes and custom designs that turn heads." },
  { icon: "◦", title: "WINDOW TINTS", desc: "Precision tinting for privacy, UV protection, and a sleek blacked-out look." },
  { icon: "○", title: "PAINT PROTECTION", desc: "Clear bra and PPF installation. Self-healing film that keeps your paint flawless." },
  { icon: "⚙", title: "VEHICLE CUSTOMIZATION", desc: "Body kits, rim repairs, caliper painting, starlight lighting, powder coating, and more." },
  { icon: "❖", title: "CERAMIC COATING", desc: "Long-lasting hydrophobic protection. Showroom shine that lasts for years." },
];

const whyCards = [
  { icon: "🔎", title: "ATTENTION TO DETAIL", desc: "Every inch of your vehicle is treated with care and precision — no shortcuts, no compromises." },
  { icon: "⭐", title: "PREMIUM PRODUCTS", desc: "We use only the highest-quality products to ensure lasting results and superior protection." },
  { icon: "📅", title: "7 DAYS A WEEK", desc: "Open every day from 8am to 7pm. Your schedule shouldn't stop you from getting the best." },
  { icon: "✅", title: "SATISFACTION GUARANTEED", desc: "Your happiness drives everything we do. We don't stop until you're blown away." },
];

const reviews = [
  { text: "My car looks brand new, super impressed with the paint correction and wax. Highly recommend!", author: "Sarah T." },
  { text: "Amazing service and attention to detail. My car's never looked better!", author: "Michael L." },
  { text: "Got the starlight lighting and it's stunning. Excellent work by the team.", author: "Jessica R." },
  { text: "The ceramic coating was a game-changer. My car shines like new!", author: "David K." },
  { text: "Powder coating and detailing were top-notch. Highly satisfied!", author: "Lucas M." },
  { text: "The wash and wax made my car look showroom ready. Great experience!", author: "Nina S." },
];

const faqs = [
  {
    q: "How often should I get my car detailed?",
    a: "Every 4–6 months depending on driving conditions. If you're in a harsh environment with lots of dust, salt, or sun exposure, more frequent detailing will help maintain your vehicle's finish and interior condition.",
  },
  {
    q: "What's the difference between car washing and detailing?",
    a: "Washing is a surface-level clean — removing dirt and grime. Detailing is a comprehensive restoration of your vehicle's interior and exterior, including paint correction, polishing, conditioning, and protection to bring it back to showroom quality.",
  },
  {
    q: "Can I book online?",
    a: "Yes! Head over to our Schedule page to book your appointment online, or call us directly at (917) 251-9317.",
  },
];

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="hero-bg min-h-screen flex items-center justify-center text-center px-8 relative">
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-[900px]">
          <h1 className="font-montserrat text-[clamp(3rem,8vw,5rem)] font-black leading-[1.1] tracking-[2px] mb-6">
            DON'T <span className="text-[#0099ff]">BLEND IN</span> WITH TRAFFIC
          </h1>
          <p className="text-[clamp(1rem,2vw,1.15rem)] font-normal italic text-[#aaaaaa] max-w-[600px] mx-auto mb-10 leading-[1.7]">
            Premium detailing and customization in Mineola, NY — where every vehicle becomes a masterpiece.
          </p>
          <Link
            to="/schedule"
            className="inline-block px-7 py-3 bg-[#0099ff] text-white font-montserrat text-[0.85rem] font-bold tracking-[2px] rounded uppercase transition-all duration-300 hover:bg-[#33b1ff] hover:shadow-[0_0_25px_rgba(0,153,255,0.3)] hover:-translate-y-0.5"
          >
            BOOK NOW
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#111111] py-20 px-8 max-md:py-14 max-md:px-5">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-montserrat text-[clamp(1.8rem,4vw,2.5rem)] font-extrabold text-center tracking-[2px] mb-4">
            OUR <span className="text-[#0099ff]">SERVICES</span>
          </h2>
          <div className="w-[60px] h-[3px] bg-[#0099ff] mx-auto mb-8 mt-4" />
          <p className="text-center text-[#aaaaaa] max-w-[600px] mx-auto mb-12">
            From full detailing to head-turning customization — we do it all.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="group bg-[#161616] border border-[#222] rounded-xl px-8 py-10 relative overflow-hidden transition-all duration-300 hover:border-[#0099ff] hover:-translate-y-[5px] hover:shadow-[0_10px_40px_rgba(0,153,255,0.1)]"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#0099ff] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                <span className="text-[2.5rem] block mb-5">{s.icon}</span>
                <h3 className="font-montserrat text-[1.2rem] font-bold tracking-[2px] mb-3">
                  {s.title}
                </h3>
                <p className="text-[#aaaaaa] text-[0.95rem] mb-5 leading-relaxed">{s.desc}</p>
                <Link
                  to="/services"
                  className="text-[#0099ff] text-[0.9rem] font-semibold uppercase tracking-[1px] hover:text-[#33b1ff]"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#0a0a0a] py-20 px-8 max-md:py-14 max-md:px-5">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-montserrat text-[clamp(1.8rem,4vw,2.5rem)] font-extrabold text-center tracking-[2px] mb-4">
            WHY <span className="text-[#0099ff]">CHOOSE US</span>
          </h2>
          <div className="w-[60px] h-[3px] bg-[#0099ff] mx-auto mb-8 mt-4" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyCards.map((c) => (
              <div
                key={c.title}
                className="text-center p-8 rounded-xl bg-[#111111] border border-[#1a1a1a] transition-all duration-300 hover:border-[#333] hover:shadow-[0_5px_30px_rgba(0,0,0,0.3)]"
              >
                <div className="text-[2.5rem] mb-4">{c.icon}</div>
                <h3 className="font-montserrat text-[1.1rem] font-bold tracking-[2px] mb-2">
                  {c.title}
                </h3>
                <p className="text-[#aaaaaa] text-[0.9rem]">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-[#111111] py-20 px-8 max-md:py-14 max-md:px-5">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-montserrat text-[clamp(1.8rem,4vw,2.5rem)] font-extrabold text-center tracking-[2px] mb-4">
            WHAT OUR <span className="text-[#0099ff]">CLIENTS SAY</span>
          </h2>
          <div className="w-[60px] h-[3px] bg-[#0099ff] mx-auto mb-8 mt-4" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div
                key={r.author}
                className="bg-[#161616] border border-[#222] rounded-xl p-8 transition-all duration-300 hover:border-[#333] hover:-translate-y-[3px]"
              >
                <div className="text-[#f5a623] text-base mb-4 tracking-[2px]">★★★★★</div>
                <p className="text-[#aaaaaa] text-[0.95rem] leading-[1.7] mb-4 italic">
                  "{r.text}"
                </p>
                <div className="font-semibold text-white text-[0.95rem]">{r.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#0a0a0a] py-20 px-8 max-md:py-14 max-md:px-5">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-montserrat text-[clamp(1.8rem,4vw,2.5rem)] font-extrabold text-center tracking-[2px] mb-4">
            FREQUENTLY <span className="text-[#0099ff]">ASKED QUESTIONS</span>
          </h2>
          <div className="w-[60px] h-[3px] bg-[#0099ff] mx-auto mb-8 mt-4" />
          <div className="max-w-[800px] mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-[#222] rounded-[10px] overflow-hidden bg-[#111111] transition-colors duration-300 hover:border-[#333]"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 bg-transparent border-none text-white font-montserrat text-base font-semibold text-left cursor-pointer flex justify-between items-center gap-4"
                >
                  {faq.q}
                  <span
                    className={`text-2xl text-[#0099ff] flex-shrink-0 transition-transform duration-300 ${
                      openFaq === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? "max-h-[200px]" : "max-h-0"
                  }`}
                >
                  <p className="px-6 pb-5 text-[#aaaaaa] leading-[1.7]">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social CTA */}
      <section className="social-cta-gradient text-center py-20 px-8 border-t border-b border-[#1a1a1a]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-montserrat text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[2px] mb-2">
            WE'RE ACTIVE ON <span className="text-[#0099ff]">SOCIAL MEDIA</span>
          </h2>
          <p className="text-[#aaaaaa] mb-8">Follow Our Work</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://www.instagram.com/autospa_detailz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-7 py-3 bg-[#0099ff] text-white font-montserrat text-[0.85rem] font-bold tracking-[2px] rounded uppercase transition-all duration-300 hover:bg-[#33b1ff] hover:shadow-[0_0_25px_rgba(0,153,255,0.3)] hover:-translate-y-0.5"
            >
              Follow on Instagram
            </a>
            <a
              href="https://www.tiktok.com/@autospa.detailz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-7 py-3 bg-transparent border-2 border-[#0099ff] text-white font-montserrat text-[0.85rem] font-bold tracking-[2px] rounded uppercase transition-all duration-300 hover:bg-[#0099ff] hover:shadow-[0_0_25px_rgba(0,153,255,0.3)] hover:-translate-y-0.5"
            >
              Follow on TikTok
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
