{/* TODO: Replace with finalized Terms of Service. Must include SMS terms language (frequency, opt-out, charges, HELP keyword response) and link back to /privacy. */}
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Acceptance of Terms",
    body: "By accessing or using our website and services, you agree to be bound by these Terms of Service.",
  },
  {
    title: "Services Offered",
    body: "AutoSpa Detailz provides auto detailing, paint protection film, ceramic coating, paint correction, window tinting, and related services.",
  },
  {
    title: "Booking and Cancellation Policy",
    body: "Appointments may be booked online or by phone. Please provide at least 24 hours' notice to reschedule or cancel.",
  },
  {
    title: "SMS Communications and Consent",
    body: "By providing your phone number, you consent to receive transactional SMS messages from AutoSpa Detailz related to your appointments. Message frequency varies. Reply STOP to opt out at any time, or HELP for support. Standard message and data rates may apply.",
  },
  {
    title: "Pricing and Payment",
    body: "Quoted prices are estimates and may vary based on the condition of the vehicle. Final pricing is confirmed at booking. Payment is due upon completion of service unless otherwise agreed.",
  },
  {
    title: "Limitation of Liability",
    body: "To the fullest extent permitted by law, AutoSpa Detailz is not liable for indirect, incidental, or consequential damages arising from the use of our services.",
  },
  {
    title: "Governing Law (New York)",
    body: "These terms are governed by the laws of the State of New York, without regard to conflict-of-law principles.",
  },
  {
    title: "Changes to These Terms",
    body: "We may modify these terms at any time. Continued use of our services constitutes acceptance of the updated terms.",
  },
  {
    title: "Contact",
    body: "Questions? Email info@autospadetailz.com or call (917) 251-9317.",
  },
];

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="page-hero-gradient page-hero-radial relative pt-32 pb-16 px-8 text-center">
        <div className="max-w-[800px] mx-auto relative">
          <h1 className="font-fraunces text-[clamp(2.4rem,6vw,3.8rem)] font-medium tracking-[-0.01em] mb-4">
            Terms of <span className="text-[#C9A961]">Service</span>
          </h1>
          <p className="font-inter text-text-secondary text-base">
            Last updated: [PLACEHOLDER DATE]
          </p>
        </div>
      </section>

      <section className="py-16 px-8 max-md:py-12 max-md:px-5">
        <div className="max-w-[820px] mx-auto space-y-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-fraunces text-[1.4rem] font-medium tracking-[-0.01em] mb-3 text-text-primary">
                {s.title}
              </h2>
              <p className="font-inter text-text-secondary text-sm italic mb-3">
                [Placeholder — replace with finalized language.]
              </p>
              <p className="font-inter text-text-primary text-[1rem] leading-[1.75]">
                {s.body}
              </p>
            </div>
          ))}

          <p className="font-inter text-text-secondary text-sm pt-4 border-t border-border-subtle">
            See our <Link to="/privacy" className="text-[#C9A961] hover:text-[#D4B873] underline-offset-4 hover:underline">Privacy Policy</Link> for details on how we handle your information.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;