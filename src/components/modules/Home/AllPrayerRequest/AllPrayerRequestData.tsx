"use client";
import UserPrayerCard from "@/app/user/my-prayer/_components/UserPrayerCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { churchData } from "@/utils/church-data";
import { prayerData } from "@/utils/prayer-data";
import Autoplay from "embla-carousel-autoplay";
import PrayerCardHome from "./PrayerCardHome";

const AllPrayerRequestData = () => {
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
        {prayerData?.slice(0, 9)?.map((data) => (
          <CarouselItem
            key={data?._id}
            className="md:basis-1/2 xl:basis-1/3 2xl:basis-1/3"
          >
            <PrayerCardHome key={data?._id} data={data}></PrayerCardHome>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default AllPrayerRequestData;
