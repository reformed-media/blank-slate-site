import { cn } from "@/lib/utils";

interface SeeOurWorkButtonProps {
  className?: string;
}

const SeeOurWorkButton = ({ className }: SeeOurWorkButtonProps) => {
  const handleClick = () => {
    const section = document.getElementById("recent-work");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "inline-flex items-center gap-1.5 px-[26px] py-[14px] bg-transparent border border-white/20 text-white text-[15px] font-medium rounded-[3px] transition-all duration-300 hover:border-white/50 group",
        className
      )}
    >
      See Our Work
      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </button>
  );
};

export default SeeOurWorkButton;
