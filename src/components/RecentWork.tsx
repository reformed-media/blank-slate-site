import recentWork1 from "@/assets/recent-work-1.jpg";
import recentWork2 from "@/assets/recent-work-2.jpg";
import recentWork3 from "@/assets/recent-work-3.jpg";
import recentWork4 from "@/assets/recent-work-4.jpg";
import recentWork5 from "@/assets/recent-work-5.jpg";
import recentWork6 from "@/assets/recent-work-6.jpg";
import recentWork7 from "@/assets/recent-work-7.jpg";
import recentWork8 from "@/assets/recent-work-8.jpg";

const images = [
  recentWork1, recentWork2, recentWork3, recentWork4,
  recentWork5, recentWork6, recentWork7, recentWork8,
];

const RecentWork = () => {
  return (
    <section className="py-20 px-8 max-md:py-14 max-md:px-5">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-10">
          <span className="text-primary text-[0.75rem] font-bold tracking-[3px] uppercase block mb-3">
            RECENT WORK
          </span>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.2] mb-3 text-foreground">
            What's been through the doors.
          </h2>
          <p className="text-muted-foreground text-[0.95rem]">
            Some clients. Some friends. All of them left cleaner than they came in.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {images.map((src, i) => (
            <div
              key={i}
              className="aspect-square overflow-hidden rounded-[4px] border border-white/[0.06] transition-all duration-300 hover:border-primary/40 hover:scale-[1.02]"
            >
              <img
                src={src}
                alt={`Recent detailing work ${i + 1}`}
                loading="lazy"
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <p className="text-right text-muted-foreground text-[0.8rem] mt-4 italic">
          And many more we forgot to photograph.
        </p>
      </div>
    </section>
  );
};

export default RecentWork;
