"use client";
import WorkCard from "@/components/shared/WorkCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { MemberWorkData } from "@/utils/member-work-data";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

const MemberWorks = () => {
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
        {MemberWorkData?.slice(0, 8)?.map((work) => (
          <CarouselItem
            key={work?._id}
            className="md:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
          >
            <div className="p-1">
              <Link href={`/#/${work._id}`}>
                <WorkCard data={work}></WorkCard>
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default MemberWorks;
