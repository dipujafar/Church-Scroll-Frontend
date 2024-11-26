"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { activityData } from "@/utils/actity-data";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";

const SingleActivitiesContainer = () => {
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
          {activityData[0]?.image?.map((data: string, index: number) => (
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
        {activityData?.[0]?.title}
      </h1>
      <p className="text-black/75 mt-2">
        Coming to you from Australia. Joshua Roy has been life coaching now for
        7 years, has run more than 300 live seminars, and has spent more than
        1000 hours on 1 on 1 coaching.You have a conscious mind, and you have an
        unconscious mind. You will succeed in life to the degree that you can
        get both parts of your mind working in harmony together.THE BIG QUESTION
        IS HOW???How does one create lasting change?How does one create more
        happiness?How does one create more wealth?How does one overcome
        addiction?How does one deal with self sabotage, limiting beliefs and
        fear?How does one shift from victim to victor?Is there a need for change
        in your life? Are there situations and emotions that you are dealing
        with that disrupt your peace?Why would you want to take full control of
        the unconscious mind?The research suggests that severe TRAUMA suffered
        at a young age affects brain development and function. Furthermore, if a
        person experienced more than 7 major traumas between the ages of 1 to 7
        (the imprint period) this person is 4 times as likely to suffer heart
        conditions, and 3 times more likely to develop cancer. (This was not
        related to lifestyle choices. It is directly related to TRAUMA).We have
        some real challenges in our society with increases in illicit drug use,
        violent crimes and of tyrants that oppress, and reign with blood and
        horror on this earth.The statistics tell us that life is getting more
        and more stressful and difficult for people.The statistics do not
        lie!Millions suffer with depression each year, while twice as many
        suffer with anxiety.65% of adults in developed countries are obese or
        overweight. (More than 20kg of excess weight is considered body armour.
        In most cases, it is emotional).
      </p>
    </div>
  );
};

export default SingleActivitiesContainer;
