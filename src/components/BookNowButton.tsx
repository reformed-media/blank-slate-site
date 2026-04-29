import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface BookNowButtonProps {
  className?: string;
  onClick?: () => void;
}

const BookNowButton = ({ className, onClick }: BookNowButtonProps) => {
  return (
    <Link
      to="/book"
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-1.5 px-[26px] py-[14px] bg-[#C9A961] text-[#0A0A0A] text-[15px] font-medium rounded-full transition-all duration-300 hover:bg-[#D4B873] group",
        className
      )}
    >
      Book Now
      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
};

export default BookNowButton;
