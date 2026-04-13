import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface BookNowButtonProps {
  className?: string;
  onClick?: () => void;
}

const BookNowButton = ({ className, onClick }: BookNowButtonProps) => {
  return (
    <Link
      to="/schedule"
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-1.5 px-[26px] py-[14px] bg-[#0099ff] text-white text-[15px] font-medium rounded-[3px] transition-all duration-300 hover:bg-[#0088e6] group",
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
