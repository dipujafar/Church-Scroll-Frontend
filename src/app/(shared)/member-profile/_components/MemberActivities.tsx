"use client";
import ActivityCard from "@/components/shared/ActivityCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { activityData } from "@/utils/actity-data";

import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import React from "react";

const MemberActivities = () => {
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
      className="w-full mt-8"
    >
      <CarouselContent>
        {activityData?.slice(0, 8)?.map((activity) => (
          <CarouselItem
            key={activity?._id}
            className="md:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
          >
            <div className="p-1">
              <Link href={`/member-activities/${activity._id}`}>
                <ActivityCard data={activity}></ActivityCard>
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default MemberActivities;
