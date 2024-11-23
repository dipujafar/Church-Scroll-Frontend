import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import NearbyUpcomingEvents from "./NearbyUpcomingEvents";

const UpcomingEvent = () => {
  return (
    <div>
      <SectionTitle
        title="Upcoming Church  Events"
        subTitle="ChurchScroll offers a suite of features designed to enhance your community experience. From privacy settings to event management, we empower members to connect safely and meaningfully."
      ></SectionTitle>
      <div className="flex  justify-end">
        <Link href="/#">
          <p className="text-black hover:text-black/70  group cursor-pointer overflow-hidden text-xl truncate flex items-center">
            View all
            <ChevronRight
              size={24}
              color="#9A9CAA"
              className="group-hover:translate-x-2 overflow-hidden duration-700"
            />
          </p>
        </Link>
      </div>
      <NearbyUpcomingEvents></NearbyUpcomingEvents>
    </div>
  );
};

export default UpcomingEvent;