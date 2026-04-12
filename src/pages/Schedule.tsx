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

      <section className="py-12 px-8 pb-20 max-md:py-8 max-md:px-5 max-md:pb-14">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-12 p-8 bg-[#111111] border border-[#222] rounded-xl">
            <p className="text-[#aaaaaa] mb-3">Prefer to talk? Call us directly:</p>
            <div className="font-montserrat text-[2rem] tracking-[3px]">
              <a href="tel:9172519317" className="text-[#0099ff] hover:text-[#33b1ff]">
                (917) 251-9317
              </a>
            </div>
            <p className="text-[#aaaaaa] mt-2">Open 7 days a week, 8:00 AM – 7:00 PM</p>
          </div>

          <div className="bg-[#111111] border border-[#222] rounded-xl overflow-hidden">
            <iframe
              src="https://autospadetailz.com/schedule"
              title="Book an appointment with Autospa Detailz"
              loading="lazy"
              allowFullScreen
              className="block w-full h-[800px] max-md:h-[600px] border-0"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Schedule;
