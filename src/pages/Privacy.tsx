{/* TODO: Replace this entire page content with finalized Privacy Policy from Termly or legal review. Final language must explicitly reference: SMS data handling (Twilio A2P 10DLC), Meta Pixel tracking, cookie usage, and data sharing with service providers (GoHighLevel, Twilio, Stripe, Meta). */}
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Information We Collect",
    body: "We collect information you provide directly (name, contact details, vehicle information) as well as information collected automatically (browsing activity, device data, cookies).",
  },
  {
    title: "How We Use Your Information",
    body: "We use information to schedule and deliver detailing services, communicate about appointments, improve our offerings, and meet legal obligations.",
  },
  {
    title: "SMS Communications",
    body: "If you opt in, we send appointment confirmations and reminders by SMS. Message frequency varies. Reply STOP to opt out at any time. Reply HELP for assistance. Standard message and data rates may apply.",
  },
  {
    title: "Cookies and Tracking Technologies (Meta Pixel, Google Analytics)",
    body: "We use cookies, pixel tags, and similar technologies — including the Meta Pixel and Google Analytics — to understand site usage and measure marketing performance.",
  },
  {
    title: "Third-Party Service Providers (GoHighLevel, Twilio, Stripe, Meta)",
    body: "We share limited information with vetted service providers who help us operate the business, including GoHighLevel (CRM), Twilio (SMS), Stripe (payments), and Meta (advertising and analytics).",
  },
  {
    title: "Your Rights and Choices",
    body: "Depending on your location, you may have rights to access, correct, delete, or restrict certain personal information. Contact us to exercise these rights.",
  },
  {
    title: "Children's Privacy",
    body: "Our services are not directed to children under 13, and we do not knowingly collect personal information from children.",
  },
  {
    title: "Changes to This Policy",
    body: "We may update this policy from time to time. The 'Last updated' date above will reflect the most recent revision.",
  },
  {
    title: "Contact Us",
    body: "Questions about this policy? Email info@autospadetailz.com or call (917) 251-9317.",
  },
];

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="page-hero-gradient page-hero-radial relative pt-32 pb-16 px-8 text-center">
        <div className="max-w-[800px] mx-auto relative">
          <h1 className="font-fraunces text-[clamp(2.4rem,6vw,3.8rem)] font-medium tracking-[-0.01em] mb-4">
            Privacy <span className="text-[#C9A961]">Policy</span>
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;