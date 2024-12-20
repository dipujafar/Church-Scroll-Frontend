"use client";
import EventCard from "@/components/shared/EventCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { eventData } from "@/utils/event-data";

import Autoplay from "embla-carousel-autoplay";

const Events = () => {
  return (
    <Carousel
      opts={{
        loop: true,
        duration: 60,
        align: "start",
      }}
      plugins={[
        Autoplay({
          delay: 4000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
      className="w-full lg:mt-8 mt-4"
    >
      <CarouselContent>
        {eventData?.slice(0, 8)?.map((event) => (
          <CarouselItem
            key={event?._id}
            className="md:basis-1/2  lg:basis-1/3 2xl:basis-1/4"
          >
            <div className="p-1 flex-center flex-col ">
              <EventCard data={event}></EventCard>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Events;
