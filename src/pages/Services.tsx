import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookNowButton from "@/components/BookNowButton";
import SeeOurWorkButton from "@/components/SeeOurWorkButton";
import vehicleWrapsImg from "@/assets/vehicle-wraps.png";
import detailingImg from "@/assets/detailing.png";
import windowTintsImg from "@/assets/window-tints.png";
import ppfImg from "@/assets/ppf.png";
import customizationImg from "@/assets/vehicle-customization.png";
import ceramicCoatingImg from "@/assets/ceramic-coating.png";

const services = [
  {
    icon: "☀",
    image: detailingImg,
    title: "DETAILING",
    desc: "Our comprehensive detailing service restores your vehicle to better-than-showroom condition. We meticulously clean, correct, and protect every surface.",
    items: [
      "Interior deep cleaning and conditioning",
      "Exterior wash, clay bar, and polish",
      "Paint correction and swirl removal",
      "Wash and wax packages",
      "Ceramic coating application",
    ],
  },
  {
    icon: "▖",
    title: "VEHICLE WRAPS",
    desc: "Transform the look of your vehicle without a permanent commitment. Our expert installers deliver flawless, bubble-free wraps that protect your original paint.",
    image: vehicleWrapsImg,
    items: [
      "Full vehicle vinyl wraps",
      "Partial wraps and accent pieces",
      "Color change wraps",
      "Custom designs and graphics",
    ],
  },
  {
    icon: "◦",
    image: windowTintsImg,
    title: "WINDOW TINTS",
    desc: "Professional-grade window tinting for style, privacy, and UV protection. Precision cut and installed for a clean, seamless finish on any vehicle.",
    items: [
      "Precision tinting for all vehicle types",
      "UV protection and heat rejection",
      "Privacy and security enhancement",
      "Multiple shade options",
    ],
  },
  {
    icon: "○",
    image: ppfImg,
    title: "PAINT PROTECTION FILM (PPF)",
    desc: "Shield your paint from rock chips, scratches, and road debris with our premium paint protection film. Invisible armor that keeps your vehicle looking flawless.",
    items: [
      "Clear bra installation",
      "Full front-end protection",
      "Self-healing film technology",
      "Custom coverage options",
    ],
  },
  {
    icon: "⚙",
    image: customizationImg,
    title: "VEHICLE CUSTOMIZATION",
    desc: "Make your ride truly one-of-a-kind. From subtle upgrades to full custom builds, we bring your vision to life with expert craftsmanship.",
    items: [
      "Body kits and aftermarket installations",
      "Rim repairs and refinishing",
      "Caliper painting",
      "Starlight headliner lighting",
      "Powder coating",
    ],
  },
  {
    icon: "❖",
    image: ceramicCoatingImg,
    title: "CERAMIC COATING",
    desc: "The ultimate paint protection. Our ceramic coatings bond at the molecular level to create a hydrophobic barrier that keeps your vehicle cleaner, longer.",
    items: [
      "Long-lasting nano-ceramic protection",
      "Hydrophobic water-repelling finish",
      "Showroom shine for years",
      "Easier maintenance and cleaning",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="page-hero-gradient page-hero-radial relative pt-32 pb-16 px-8 text-center">
        <h1 className="font-inter text-[clamp(2.2rem,6vw,3.5rem)] font-black tracking-[4px] relative">
          OUR <span className="text-[#C9A961]">SERVICES</span>
        </h1>
        <div className="w-[60px] h-[3px] bg-[#C9A961] mx-auto mb-8 mt-4" />
        <p className="text-[#aaaaaa] max-w-[600px] mx-auto relative text-lg">
          Premium detailing and customization services to make your vehicle stand out.
        </p>
      </section>

      <section className="py-20 px-8 max-md:py-14 max-md:px-5">
        <div className="max-w-[1200px] mx-auto space-y-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="grid grid-cols-[300px_1fr] max-md:grid-cols-1 bg-[#111111] border border-[#222] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#C9A961] hover:shadow-[0_10px_40px_rgba(201,169,97,0.08)]"
            >
              <div className="service-detail-img-bg min-h-[250px] max-md:min-h-[200px] flex items-center justify-center text-[4rem] overflow-hidden h-full">
                {s.image ? (
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                ) : (
                  s.icon
                )}
              </div>
              <div className="p-10 flex flex-col justify-center">
                <h2 className="font-inter text-[1.6rem] font-extrabold tracking-[2px] mb-4">
                  {s.title}
                </h2>
                <p className="text-[#aaaaaa] mb-4 leading-[1.8]">{s.desc}</p>
                <ul className="list-none mb-6 space-y-2">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="text-[#aaaaaa] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-1.5 before:h-1.5 before:bg-[#C9A961] before:rounded-full before:-translate-y-1/2"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-row gap-3 max-sm:flex-col">
                  <BookNowButton />
                  <SeeOurWorkButton />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
