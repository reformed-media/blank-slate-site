import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Package = {
  name: string;
  pricing: { label: string; price: string }[];
  inclusions: string[];
};

const packages: Package[] = [
  {
    name: "Standard Detail",
    pricing: [
      { label: "Coupe", price: "$125+" },
      { label: "Mid-size sedan", price: "$200+" },
      { label: "SUV / lifted truck", price: "$250+" },
    ],
    inclusions: [
      "Foam Bath (Pre Treat If Needed)",
      "3 Bucket Wash",
      "Wheels Deep Cleaned",
      "Tire Dressing (Non Sling)",
      "Air Blower & Towel Dry",
      "Windows Cleaned",
      "Door & Trunk Jambs Deep Cleaned",
      "Interior Blow Out",
      "Full Deep Vacuum",
      "Interior Scrub Down",
    ],
  },
  {
    name: "Clay & Sealant",
    pricing: [
      { label: "Coupe", price: "$225+" },
      { label: "Mid-size", price: "$275+" },
      { label: "SUV", price: "$300+" },
    ],
    inclusions: [
      "Foam Bath (Pre Treat If Needed)",
      "3 Bucket Wash",
      "Iron Removal Treatment",
      "Clay Bar Treatment",
      "Ceramic Sealant",
      "Wheels Deep Cleaned",
      "Tire Dressing (Non Sling)",
      "Air Blower & Towel Dry",
      "Windows Cleaned",
    ],
  },
  {
    name: "Full Detail",
    pricing: [
      { label: "Coupe", price: "$350+" },
      { label: "Mid-size", price: "$375+" },
      { label: "SUV", price: "$425+" },
    ],
    inclusions: [
      "Foam Bath (Pre Treat If Needed)",
      "3 Bucket Wash",
      "Iron Removal Treatment",
      "Clay Bar Treatment",
      "Ceramic Sealant",
      "Wheels Deep Cleaned",
      "Tire Dressing (Non Sling)",
      "Air Blower & Towel Dry",
      "Windows Cleaned",
      "Door & Trunk Jambs Deep Cleaned",
      "+ Full Interior Detail Package",
    ],
  },
  {
    name: "Full Interior",
    pricing: [
      { label: "Coupe", price: "$250+" },
      { label: "Mid-size", price: "$275+" },
      { label: "SUV", price: "$300+" },
    ],
    inclusions: [
      "All Door Panels, Dash, and Console Properly Deep Cleaned and Scrubbed Down",
      "Full Steam Cleaning Treatment to Interior Cup Holders, A/C Vents, Crevices",
      "Shampoo & Heated Extraction on All Fabric Seats & Floor Carpet (if applicable)",
      "Deep Clean & Condition leather seats (if applicable)",
      "Interior Conditioning & Protectant (Non Greasy)",
      "Odor Removal Treatment",
    ],
  },
];

const addOns = [
  { name: "Pet Hair Removal", price: "$25+" },
  { name: "Steam Clean Interior", price: "$50" },
  { name: "Trim Conditioner", price: "$50" },
  { name: "Odor Eliminator", price: "$50" },
  { name: "Rim Ceramic Spray (3 month protection)", price: "$50" },
  { name: "Leather Seats Clean & Condition", price: "$60+" },
  { name: "Windshield Ceramic Coating", price: "$75" },
  { name: "Headlight Restoration", price: "$80" },
  { name: "Interior Fabric Coating", price: "$125" },
];

const Detail = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="page-hero-gradient page-hero-radial relative pt-32 pb-20 px-8 text-center">
        <div className="max-w-[800px] mx-auto relative">
          <h1 className="font-fraunces text-[clamp(2.4rem,6vw,3.8rem)] font-medium tracking-[-0.01em] mb-5">
            Detailing <span className="text-[#C9A961]">Packages</span>
          </h1>
          <p className="font-inter text-text-secondary text-lg max-w-[640px] mx-auto mb-8 leading-[1.7]">
            From a maintenance wash to a full restoration. Published pricing, no surprises.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C9A961] text-[#0A0A0A] font-inter text-[15px] font-semibold rounded-[3px] transition-all duration-300 hover:bg-[#D4B873]"
          >
            Book your detail →
          </Link>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-background-secondary py-20 px-8 max-md:py-14 max-md:px-5">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-fraunces text-[clamp(1.8rem,3.5vw,2.4rem)] font-medium text-center tracking-[-0.01em] mb-12">
            <span className="text-[#C9A961]">Packages</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {packages.map((p) => (
              <div
                key={p.name}
                className="bg-background-tertiary border border-border-subtle rounded-xl p-8 flex flex-col transition-all duration-300 hover:border-[#C9A961]"
              >
                <h3 className="font-fraunces text-[1.6rem] font-medium tracking-[-0.01em] mb-5 text-text-primary">
                  {p.name}
                </h3>
                <ul className="mb-6 space-y-1.5 border-b border-border-subtle pb-5">
                  {p.pricing.map((tier) => (
                    <li
                      key={tier.label}
                      className="flex justify-between font-inter text-[0.95rem]"
                    >
                      <span className="text-text-secondary">{tier.label}</span>
                      <span className="text-text-primary font-medium">{tier.price}</span>
                    </li>
                  ))}
                </ul>
                <ul className="mb-6 space-y-2 flex-1">
                  {p.inclusions.map((item) => (
                    <li
                      key={item}
                      className="font-inter text-text-secondary text-[0.92rem] leading-[1.55] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[0.55rem] before:w-1.5 before:h-1.5 before:bg-[#C9A961] before:rounded-full"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/book"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#C9A961] text-[#0A0A0A] font-inter text-[14px] font-semibold rounded-[3px] transition-all duration-300 hover:bg-[#D4B873]"
                >
                  Book this package →
                </Link>
              </div>
            ))}
          </div>
          <p className="font-inter text-text-secondary text-xs text-center mt-8 max-w-[700px] mx-auto leading-[1.6]">
            Final pricing may vary based on the condition of the vehicle. Quotes confirmed at booking.
          </p>
        </div>
      </section>

      {/* Add-ons */}
      <section className="bg-background-primary py-20 px-8 max-md:py-14 max-md:px-5">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-fraunces text-[clamp(1.8rem,3.5vw,2.4rem)] font-medium text-center tracking-[-0.01em] mb-12">
            Add-on <span className="text-[#C9A961]">services</span>
          </h2>
          <div className="bg-background-secondary border border-border-subtle rounded-xl p-6 sm:p-8">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
              {addOns.map((a) => (
                <li
                  key={a.name}
                  className="flex justify-between gap-4 py-3 border-b border-border-subtle font-inter text-[0.95rem] last:border-b-0 sm:[&:nth-last-child(2)]:border-b-0"
                >
                  <span className="text-text-secondary">{a.name}</span>
                  <span className="text-text-primary font-medium whitespace-nowrap">{a.price}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="font-inter text-text-secondary text-xs text-center mt-6 max-w-[700px] mx-auto leading-[1.6]">
            Final pricing may vary based on the condition of the vehicle. Quotes confirmed at booking.
          </p>
        </div>
      </section>

      <section className="social-cta-gradient text-center py-20 px-8 border-t border-b border-border-subtle">
        <h2 className="font-fraunces text-[clamp(1.6rem,3vw,2.2rem)] font-medium tracking-[-0.01em] mb-6">
          Pick your <span className="text-[#C9A961]">package</span>.
        </h2>
        <Link
          to="/book"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C9A961] text-[#0A0A0A] font-inter text-[15px] font-semibold rounded-[3px] transition-all duration-300 hover:bg-[#D4B873]"
        >
          Book your detail →
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default Detail;