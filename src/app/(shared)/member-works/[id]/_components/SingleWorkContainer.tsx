"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MemberWorkData } from "@/utils/member-work-data";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";

const SingleWorkContainer = () => {
  return (
    <div>
      {/* activity Carousel */}
      <Carousel
        opts={{
          loop: true,
          duration: 55,
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 4500,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="w-full pl-4 pr-2 "
      >
        <CarouselContent className="relative ">
          {MemberWorkData[0]?.image?.map((data: string, index: number) => (
            <CarouselItem key={index}>
              <Card className="rounded-3xl border-none">
                <CardContent className="relative px-0 pb-0 border-none">
                  <Image
                    src={data}
                    width={2400}
                    height={2400}
                    alt="banner_image"
                    quality={100}
                    className="object-fit  xl:[400px]  w-auto mx-auto rounded-3xl md:h-[330px] lg:h-[380px] cursor-pointer"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute -left-1 top-1/2 -translate-y-1/2 size-10  bg-primary-sky hover:bg-primary-blue duration-500 hover:text-white" />
        <CarouselNext className="absolute -right-2 top-1/2 size-10  bg-primary-sky hover:bg-primary-blue duration-500 hover:text-white -translate-y-1/2" />
      </Carousel>
      {/* activity details */}
      <h1 className="md:mt-10 mt-5 md:text-3xl text-xl font-semibold">
        {MemberWorkData?.[0]?.title}
      </h1>
      <p className="text-black/75 mt-2">
        Project Title: “3D Design of Church Courtyard and Gathering Space” This
        3D model was crafted as part of a church interior modernization project,
        focusing on both functionality and a serene aesthetic. The design
        highlights seating arrangements optimized for visibility and
        accessibility, with carefully selected lighting fixtures to create a
        warm, inviting atmosphere. The layout promotes natural light, using
        large windows and strategically placed fixtures to bring in daylight
        while maintaining an intimate and peaceful environment during evening
        services. Key Features: Seating Arrangements: Designed to maximize the
        capacity while ensuring comfort and clear sightlines toward the pulpit
        and stage. Lighting Fixtures: Custom lighting, including pendant and
        wall-mounted lights, to enhance both architectural details and create a
        comforting ambiance. Architectural Details: Includes arches, textured
        walls, and natural wood finishes to convey a blend of tradition and
        modernity, reflecting the church's character. Altar and Stage Design: A
        modern pulpit setup with a minimalist design, crafted to emphasize
        openness and accessibility for all congregation members. Tools and
        Skills Applied: Software: Modeled and rendered using Blender and V-Ray
        for high-quality, realistic visuals. Texturing: Used Adobe Substance
        Painter for realistic textures on seating, walls, and wooden elements.
        Lighting Design: Integrated advanced lighting techniques to ensure
        realistic shadows and highlights, with optimized render settings for a
        photorealistic finish. Share any feedback or outcomes from the project,
        especially if the model contributed to a real-world application.
      </p>
    </div>
  );
};

export default SingleWorkContainer;
