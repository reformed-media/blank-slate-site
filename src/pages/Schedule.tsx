import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Schedule = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="page-hero-gradient page-hero-radial relative pt-32 pb-12 px-8 text-center">
        <h1 className="font-montserrat text-[clamp(2.2rem,6vw,3.5rem)] font-black tracking-[4px] relative">
          BOOK YOUR <span className="text-[#0099ff]">APPOINTMENT</span>
        </h1>
        <div className="w-[60px] h-[3px] bg-[#0099ff] mx-auto mb-8 mt-4" />
        <p className="text-[#aaaaaa] max-w-[600px] mx-auto relative text-lg">
          Ready to transform your vehicle? Book online or give us a call.
        </p>
      </section>

      {/* TODO: Replace CALENDAR_ID with your real GHL calendar ID to enable:
           <iframe src="https://api.leadconnectorhq.com/widget/booking/CALENDAR_ID" width="100%" height="700" frameBorder="0" /> */}
      <section className="py-12 px-8 pb-20 max-md:py-8 max-md:px-5 max-md:pb-14">
        <div className="max-w-[700px] mx-auto text-center">
          <div className="p-10 bg-[#111111] border border-[#222] rounded-xl">
            <h2 className="font-montserrat text-[clamp(1.6rem,4vw,2.2rem)] font-extrabold tracking-[2px] mb-4">
              READY TO <span className="text-[#0099ff]">BOOK</span>?
            </h2>
            <div className="w-[60px] h-[3px] bg-[#0099ff] mx-auto mb-6" />
            <p className="text-[#aaaaaa] text-lg leading-relaxed mb-10 max-w-[500px] mx-auto">
              Text or call us to schedule your detail. We'll confirm your appointment within the hour.
            </p>

            <a
              href="tel:9172519317"
              className="inline-flex items-center justify-center w-full max-w-[360px] gap-2 px-8 py-4 bg-[#0099ff] text-white font-montserrat text-lg font-bold tracking-[2px] rounded-[4px] transition-all duration-300 hover:bg-[#0088e6] mb-4"
            >
              📞 (917) 251-9317
            </a>

            <p className="text-[#666] text-sm mb-6">Open 7 days a week · 8:00 AM – 7:00 PM</p>

            <a
              href="mailto:autospadetailz@gmail.com"
              className="text-[#0099ff] text-[0.95rem] font-medium hover:text-[#33b1ff] transition-colors duration-300"
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
