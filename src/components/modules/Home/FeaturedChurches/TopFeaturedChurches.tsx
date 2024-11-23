"use client";
import ChurchCard from "@/components/shared/ChurchCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { churchData } from "@/utils/church-data";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

const TopFeaturedChurches = () => {
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
        {churchData?.slice(0, 8)?.map((church) => (
          <CarouselItem
            key={church?._id}
            className="md:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
          >
            <div className="p-1">
              <ChurchCard data={church}></ChurchCard>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default TopFeaturedChurches;
