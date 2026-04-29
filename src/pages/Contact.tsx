import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contactCards = [
  { icon: "📞", title: "PHONE", content: <a href="tel:9172519317" className="text-[#aaaaaa] hover:text-[#C9A961]">(917) 251-9317</a> },
  { icon: "✉", title: "EMAIL", content: <a href="mailto:info@autospadetailz.com" className="text-[#aaaaaa] hover:text-[#C9A961]">info@autospadetailz.com</a> },
  { icon: "📍", title: "ADDRESS", content: <span>Mineola, North Hempstead, NY</span> },
  { icon: "🕓", title: "HOURS", content: <span>8:00 AM – 7:00 PM<br />7 Days a Week</span> },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="page-hero-gradient page-hero-radial relative pt-32 pb-16 px-8 text-center">
        <h1 className="font-inter text-[clamp(2.2rem,6vw,3.5rem)] font-black tracking-[4px] relative">
          GET IN <span className="text-[#C9A961]">TOUCH</span>
        </h1>
        <div className="w-[60px] h-[3px] bg-[#C9A961] mx-auto mb-8 mt-4" />
        <p className="text-[#aaaaaa] max-w-[600px] mx-auto relative text-lg">
          We'd love to hear from you. Reach out anytime — we're here 7 days a week.
        </p>
      </section>

      <section className="py-20 px-8 max-md:py-14 max-md:px-5">
        <div className="max-w-[1200px] mx-auto">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactCards.map((c) => (
              <div
                key={c.title}
                className="bg-[#111111] border border-[#222] rounded-xl p-8 text-center transition-all duration-300 hover:border-[#333] hover:-translate-y-[3px] hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
              >
                <div className="text-[2rem] mb-4">{c.icon}</div>
                <h3 className="font-inter text-base font-bold tracking-[2px] mb-2">{c.title}</h3>
                <p className="text-[#aaaaaa] text-[0.95rem]">{c.content}</p>
              </div>
            ))}
          </div>

          {/* Form + Map Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-inter text-[1.6rem] font-extrabold tracking-[2px] mb-6">
                SEND US A <span className="text-[#C9A961]">MESSAGE</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-[0.85rem] text-[#aaaaaa] mb-1.5 font-medium uppercase tracking-[1px]">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    required
                    className="w-full px-4 py-3.5 bg-[#161616] border border-[#222] rounded-lg text-white font-inter text-[0.95rem] outline-none transition-colors duration-300 focus:border-[#C9A961] focus:shadow-[0_0_10px_rgba(201,169,97,0.1)]"
                  />
                </div>
                <div>
                  <label className="block text-[0.85rem] text-[#aaaaaa] mb-1.5 font-medium uppercase tracking-[1px]">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 555-5555"
                    className="w-full px-4 py-3.5 bg-[#161616] border border-[#222] rounded-lg text-white font-inter text-[0.95rem] outline-none transition-colors duration-300 focus:border-[#C9A961] focus:shadow-[0_0_10px_rgba(201,169,97,0.1)]"
                  />
                </div>
                <div>
                  <label className="block text-[0.85rem] text-[#aaaaaa] mb-1.5 font-medium uppercase tracking-[1px]">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    required
                    className="w-full px-4 py-3.5 bg-[#161616] border border-[#222] rounded-lg text-white font-inter text-[0.95rem] outline-none transition-colors duration-300 focus:border-[#C9A961] focus:shadow-[0_0_10px_rgba(201,169,97,0.1)]"
                  />
                </div>
                <div>
                  <label className="block text-[0.85rem] text-[#aaaaaa] mb-1.5 font-medium uppercase tracking-[1px]">
                    Service Interested In
                  </label>
                  <select className="custom-select w-full px-4 py-3.5 bg-[#161616] border border-[#222] rounded-lg text-white font-inter text-[0.95rem] outline-none cursor-pointer transition-colors duration-300 focus:border-[#C9A961] focus:shadow-[0_0_10px_rgba(201,169,97,0.1)]">
                    <option value="" className="bg-[#111111]">Select a service</option>
                    <option value="detailing" className="bg-[#111111]">Detailing</option>
                    <option value="vehicle-wraps" className="bg-[#111111]">Vehicle Wraps</option>
                    <option value="window-tints" className="bg-[#111111]">Window Tints</option>
                    <option value="paint-protection" className="bg-[#111111]">Paint Protection Film (PPF)</option>
                    <option value="customization" className="bg-[#111111]">Vehicle Customization</option>
                    <option value="ceramic-coating" className="bg-[#111111]">Ceramic Coating</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[0.85rem] text-[#aaaaaa] mb-1.5 font-medium uppercase tracking-[1px]">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3.5 bg-[#161616] border border-[#222] rounded-lg text-white font-inter text-[0.95rem] outline-none resize-y min-h-[120px] transition-colors duration-300 focus:border-[#C9A961] focus:shadow-[0_0_10px_rgba(201,169,97,0.1)]"
                  />
                </div>
                <button
                  type="submit"
                  className={`w-full px-7 py-3 font-inter text-[0.85rem] font-bold tracking-[2px] rounded uppercase transition-all duration-300 text-white ${
                    submitted
                      ? "bg-[#22c55e]"
                      : "bg-[#C9A961] hover:bg-[#D4B873] hover:shadow-[0_0_25px_rgba(201,169,97,0.3)] hover:-translate-y-0.5"
                  }`}
                >
                  {submitted ? "MESSAGE SENT!" : "SEND MESSAGE"}
                </button>
              </form>
              <div className="flex gap-4 mt-8">
                <a
                  href="https://www.instagram.com/autospa_detailz"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                  className="w-12 h-12 rounded-full border border-[#333] flex items-center justify-center text-[#aaaaaa] text-[0.9rem] font-bold transition-all duration-300 hover:border-[#C9A961] hover:text-[#C9A961] hover:shadow-[0_0_15px_rgba(201,169,97,0.3)]"
                >
                  IG
                </a>
                <a
                  href="https://www.tiktok.com/@autospa.detailz"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="TikTok"
                  className="w-12 h-12 rounded-full border border-[#333] flex items-center justify-center text-[#aaaaaa] text-[0.9rem] font-bold transition-all duration-300 hover:border-[#C9A961] hover:text-[#C9A961] hover:shadow-[0_0_15px_rgba(201,169,97,0.3)]"
                >
                  TK
                </a>
              </div>
            </div>

            <div>
              <h2 className="font-inter text-[1.6rem] font-extrabold tracking-[2px] mb-6">
                FIND <span className="text-[#C9A961]">US</span>
              </h2>
              <div className="rounded-xl overflow-hidden border border-[#222] map-filter">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24183.!2d-73.6407!3d40.7490!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2846c01011c05%3A0x44dd0dd71d7e784b!2sMineola%2C%20NY!5e0!3m2!1sen!2sus!4v1"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Autospa Detailz Location - Mineola, NY"
                  className="block w-full h-[400px] border-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
