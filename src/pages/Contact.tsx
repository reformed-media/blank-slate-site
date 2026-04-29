import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contactCards = [
  { icon: "📞", title: "Phone", content: <a href="tel:9172519317" className="text-[#aaaaaa] hover:text-[#C9A961]">(917) 251-9317</a> },
  { icon: "✉", title: "Email", content: <a href="mailto:info@autospadetailz.com" className="text-[#aaaaaa] hover:text-[#C9A961]">info@autospadetailz.com</a> },
  { icon: "📍", title: "Address", content: <span>Mineola, North Hempstead, NY</span> },
  { icon: "🕓", title: "Hours", content: <span>8:00 AM – 7:00 PM<br />7 Days a Week</span> },
];

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="page-hero-gradient page-hero-radial relative pt-32 pb-16 px-8 text-center">
        <h1 className="font-fraunces text-[clamp(2.2rem,6vw,3.5rem)] font-medium tracking-[-0.01em] relative mb-6">
          Get in <span className="text-[#C9A961]">touch</span>
        </h1>
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
                <h3 className="font-fraunces text-base font-medium tracking-[-0.01em] mb-2">{c.title}</h3>
                <p className="text-[#aaaaaa] text-[0.95rem]">{c.content}</p>
              </div>
            ))}
          </div>

          {/* Form + Map Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-fraunces text-[1.6rem] font-medium tracking-[-0.01em] mb-6">
                Send us a <span className="text-[#C9A961]">message</span>
              </h2>
              {/* TODO: Replace with GHL contact form iframe embed. Form must include UTM hidden fields populated from sessionStorage (see src/lib/tracking.ts captureUTMs). */}
              <div className="min-h-[600px] bg-background-secondary border border-border-subtle rounded-lg p-8 flex flex-col items-center justify-center text-center">
                <p className="text-text-secondary text-xs font-mono uppercase tracking-wider mb-3">[ GHL Form Embed ]</p>
                <p className="text-text-primary font-medium mb-2">Contact form will load here</p>
                <p className="text-text-secondary text-sm max-w-md">Replace this entire div with the GHL form iframe embed code once the sub-account is provisioned. The form must include hidden UTM fields populated from sessionStorage.</p>
              </div>
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
              <h2 className="font-fraunces text-[1.6rem] font-medium tracking-[-0.01em] mb-6">
                Find <span className="text-[#C9A961]">us</span>
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
