import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  { icon: "⭐", title: "PREMIUM PRODUCTS", desc: "We source and use only the highest-quality detailing products, coatings, and films to ensure your vehicle gets the treatment it deserves." },
  { icon: "🔧", title: "EXPERT TEAM", desc: "Our team brings years of hands-on experience and specialized training to every job — from basic washes to complex custom builds." },
  { icon: "🔎", title: "EVERY DETAIL MATTERS", desc: "We obsess over the details others miss. Every seam, every edge, every surface is treated with precision and care." },
  { icon: "📅", title: "7-DAY AVAILABILITY", desc: "Open every day from 8am to 7pm. We work around your schedule so you never have to wait to get your vehicle looking its best." },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="page-hero-gradient page-hero-radial relative pt-32 pb-16 px-8 text-center">
        <h1 className="font-montserrat text-[clamp(2.2rem,6vw,3.5rem)] font-black tracking-[4px] relative">
          OUR PASSION FOR <span className="text-[#0099ff]">EXCELLENCE</span>
        </h1>
        <div className="w-[60px] h-[3px] bg-[#0099ff] mx-auto mb-8 mt-4" />
      </section>

      {/* Story */}
      <section className="bg-[#111111] py-20 px-8 max-md:py-14 max-md:px-5">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="font-montserrat text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[3px] mb-6">
            THE <span className="text-[#0099ff]">AUTOSPA DETAILZ</span> STORY
          </h2>
          <p className="text-[#aaaaaa] text-lg leading-[1.9] mb-6 italic">
            We started Autospa Detailz because we love cars. That's the whole origin story. What began as a side project for two car-obsessed friends in Mineola is now a full-service detail shop trusted by daily drivers, weekend builds, and six-figure exotics alike. We treat every car the same way: like it's our own.
          </p>
          <p className="text-[#aaaaaa] text-lg leading-[1.9]">
            Based in Long Island, our skilled team is dedicated to enhancing your vehicle inside and out, delivering top-notch results for every transformation. Whether it's a full detail, a custom wrap, or ceramic coating, we treat every car like it's our own.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#0a0a0a] py-20 px-8 max-md:py-14 max-md:px-5">
        <h2 className="font-montserrat text-[clamp(1.8rem,4vw,2.5rem)] font-extrabold text-center tracking-[3px] mb-4">
          WHAT <span className="text-[#0099ff]">SETS US APART</span>
        </h2>
        <div className="w-[60px] h-[3px] bg-[#0099ff] mx-auto mb-8 mt-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1200px] mx-auto">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-[#111111] border border-[#222] rounded-xl p-10 text-center transition-all duration-300 hover:border-[#333] hover:-translate-y-[3px] hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
            >
              <div className="text-[2.5rem] mb-4">{v.icon}</div>
              <h3 className="font-montserrat text-[1.1rem] font-bold tracking-[2px] mb-3">{v.title}</h3>
              <p className="text-[#aaaaaa] text-[0.95rem] leading-[1.7]">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="social-cta-gradient text-center py-20 px-8 border-t border-b border-[#1a1a1a]">
        <h2 className="font-montserrat text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[3px] mb-3">
          READY TO <span className="text-[#0099ff]">TRANSFORM</span> YOUR RIDE?
        </h2>
        <p className="text-[#aaaaaa] mb-8 text-lg">
          Book your appointment today and experience the Autospa Detailz difference.
        </p>
        <Link
          to="/schedule"
          className="inline-block px-7 py-3 bg-[#0099ff] text-white font-montserrat text-[0.85rem] font-bold tracking-[2px] rounded uppercase transition-all duration-300 hover:bg-[#33b1ff] hover:shadow-[0_0_25px_rgba(0,153,255,0.3)] hover:-translate-y-0.5"
        >
          BOOK NOW
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default About;
