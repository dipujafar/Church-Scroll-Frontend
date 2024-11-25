import MemberCard from "@/components/shared/MemberCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { memberData } from "@/utils/member-data";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

const ChurchMembers = () => {
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
        {memberData?.slice(0, 8)?.map((member) => (
          <CarouselItem
            key={member?._id}
            className="md:basis-1/2  lg:basis-1/3 2xl:basis-1/4"
          >
            <div className="p-1">
              <MemberCard data={member}></MemberCard>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ChurchMembers;
