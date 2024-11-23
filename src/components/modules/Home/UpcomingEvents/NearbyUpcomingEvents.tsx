"use client";
import EventCard from "@/components/shared/EventCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { eventData } from "@/utils/event-data";

import Autoplay from "embla-carousel-autoplay";

const NearbyUpcomingEvents = () => {
  return (
    <Carousel
      opts={{
        loop: true,
        duration: 55,
        align: "start",
      }}
      plugins={[
        Autoplay({
          delay: 3500,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
      className="w-full mt-8"
    >
      <CarouselContent>
        {eventData?.slice(0, 8)?.map((event) => (
          <CarouselItem
            key={event?._id}
            className="md:basis-1/3 lg:basis-1/3 xl:basis-1/4"
          >
            <div className="p-1">
              <EventCard data={event}></EventCard>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default NearbyUpcomingEvents;
