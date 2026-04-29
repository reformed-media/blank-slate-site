import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GHL_CALENDAR_ID = "RYy3OfHypkhzywcvBYqi";

const Schedule = () => {
  useEffect(() => {
    if (!document.getElementById("ghl-form-embed-script")) {
      const script = document.createElement("script");
      script.id = "ghl-form-embed-script";
      script.src = "https://link.msgsndr.com/js/form_embed.js";
      script.type = "text/javascript";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="page-hero-gradient page-hero-radial relative pt-32 pb-12 px-8 text-center">
        <h1 className="font-fraunces text-[clamp(2.2rem,6vw,3.5rem)] font-medium tracking-[-0.01em] relative mb-6">
          Book your <span className="text-[#C9A961]">appointment</span>
        </h1>
        <p className="text-[#aaaaaa] max-w-[600px] mx-auto relative text-lg">
          Ready to transform your vehicle? Book online or give us a call.
        </p>
      </section>

      <section id="booking" className="py-12 px-8 pb-8 max-md:py-8 max-md:px-5">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="font-fraunces text-[clamp(1.6rem,4vw,2.2rem)] font-medium text-center tracking-[-0.01em] mt-4 mb-12">
            Book your <span className="text-[#C9A961]">detail</span>
          </h2>
          <div className="bg-[#111111] border border-[#222] rounded-xl overflow-hidden p-4 max-md:p-2">
            <iframe
              src={`https://api.leadconnectorhq.com/widget/booking/${GHL_CALENDAR_ID}`}
              style={{ width: "100%", border: "none", overflow: "hidden" }}
              scrolling="no"
              id={`${GHL_CALENDAR_ID}_booking`}
              title="Book an appointment with Autospa Detailz"
            />
          </div>
        </div>
      </section>

      <section className="py-8 px-8 pb-20 max-md:py-6 max-md:px-5 max-md:pb-14">
        <div className="max-w-[700px] mx-auto text-center">
          <div className="p-10 bg-[#111111] border border-[#222] rounded-xl">
            <h3 className="font-fraunces text-[1.2rem] font-medium tracking-[-0.01em] mb-4">
              Prefer to <span className="text-[#C9A961]">talk</span>?
            </h3>
            <p className="text-[#aaaaaa] leading-relaxed mb-8 max-w-[500px] mx-auto">
              Text or call us to schedule your detail. We'll confirm your appointment within the hour.
            </p>

            <a
              href="tel:9172519317"
              className="inline-flex items-center justify-center w-full max-w-[360px] gap-2 px-8 py-4 bg-[#C9A961] text-[#0A0A0A] font-inter text-lg font-semibold rounded-[4px] transition-all duration-300 hover:bg-[#D4B873] mb-4"
            >
              📞 (917) 251-9317
            </a>

            <p className="text-[#666] text-sm mb-6">Open 7 days a week · 8:00 AM – 7:00 PM</p>

            <a
              href="mailto:autospadetailz@gmail.com"
              className="text-[#C9A961] text-[0.95rem] font-medium hover:text-[#D4B873] transition-colors duration-300"
            >
              autospadetailz@gmail.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Schedule;
