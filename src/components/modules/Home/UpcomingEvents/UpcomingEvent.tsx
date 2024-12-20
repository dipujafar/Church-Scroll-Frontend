import SectionTitle from "@/components/shared/SectionTitle";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Events from "../../../shared/Events";

const UpcomingEvent = () => {
  return (
    <div>
      <SectionTitle title="Upcoming Church  Events"></SectionTitle>

      <div className="flex  justify-end mt-4 lg:mt-0">
        <Link href="/events">
          <p className="text-black hover:text-black/70  group cursor-pointer overflow-hidden lg:text-xl truncate flex items-center">
            View all
            <ChevronRight
              size={24}
              color="#9A9CAA"
              className="group-hover:translate-x-2 overflow-hidden duration-700"
            />
          </p>
        </Link>
      </div>

      <Events></Events>
    </div>
  );
};

export default UpcomingEvent;
