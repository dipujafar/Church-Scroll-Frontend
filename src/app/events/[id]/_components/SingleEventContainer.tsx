"use client";
import location from "@/assets/icons/Location.png";
import calendar from "@/assets/icons/calendar.png";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const carouselImage = ["/event1.png", "/event2.png"];

const SingleEventContainer = () => {
  return (
    <div>
      <div className="flex-between flex-col lg:flex-row xl:gap-x-10 gap-5">
        <div className="flex-1 relative">
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
            className="w-full pl-4 pr-2 "
          >
            <CarouselContent className="relative">
              {carouselImage?.map((data: string, index: number) => (
                <CarouselItem key={index}>
                  <Card className="rounded-3xl">
                    <CardContent className="relative px-0 pb-0">
                      <Image
                        src={data}
                        width={2400}
                        height={2400}
                        alt="banner_image"
                        quality={100}
                        className="object-fit  w-[2600px] rounded-3xl md:h-[330px] lg:h-[380px] 2xl:h-[400px]"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-1 top-1/2 -translate-y-1/2 size-10  bg-primary-sky hover:bg-primary-blue duration-500 hover:text-white" />
            <CarouselNext className="absolute -right-2 top-1/2 size-10  bg-primary-sky hover:bg-primary-blue duration-500 hover:text-white -translate-y-1/2" />
          </Carousel>
        </div>
        <div className="flex-1 space-y-6">
          <h1 className="xl:text-5xl lg:text-3xl text-2xl font-semibold">
            Community Outreach Day
          </h1>
          <p className="p-2 border border-black flex-center gap-x-2 rounded-md">
            Hosted By: Hope Community Church Outreach Team
          </p>
          <p className="p-2 border border-black flex-center gap-x-2 rounded-md">
            <Image src={location} alt="location_icon"></Image>
            Main Hall, Hope Community Church
          </p>
          <p className="p-2 border border-black flex-center gap-x-2 rounded-md">
            <Image src={calendar} alt="calendar_icon"></Image>
            Dec 2, 2023, 10:00 AM - 2:00 PM
          </p>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="text-lg bg-primary-blue w-full py-5">
                Request to join
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  You are about to join this event!
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction className="bg-primary-blue hover:bg-black/70">
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
      <div>
        <h1 className="md:text-3xl text-xl font-semibold mt-6">Details</h1>
        <p>
          Coming to you from Australia. Joshua Roy has been life coaching now
          for 7 years, has run more than 300 live seminars, and has spent more
          than 1000 hours on 1 on 1 coaching.You have a conscious mind, and you
          have an unconscious mind. You will succeed in life to the degree that
          you can get both parts of your mind working in harmony together.THE
          BIG QUESTION IS HOW???How does one create lasting change?How does one
          create more happiness?How does one create more wealth?How does one
          overcome addiction?How does one deal with self sabotage, limiting
          beliefs and fear?How does one shift from victim to victor?Is there a
          need for change in your life? Are there situations and emotions that
          you are dealing with that disrupt your peace?Why would you want to
          take full control of the unconscious mind?The research suggests that
          severe TRAUMA suffered at a young age affects brain development and
          function. Furthermore, if a person experienced more than 7 major
          traumas between the ages of 1 to 7 (the imprint period) this person is
          4 times as likely to suffer heart conditions, and 3 times more likely
          to develop cancer. (This was not related to lifestyle choices. It is
          directly related to TRAUMA).We have some real challenges in our
          society with increases in illicit drug use, violent crimes and of
          tyrants that oppress, and reign with blood and horror on this
          earth.The statistics tell us that life is getting more and more
          stressful and difficult for people.The statistics do not lie!Millions
          suffer with depression each year, while twice as many suffer with
          anxiety.65% of adults in developed countries are obese or overweight.
          (More than 20kg of excess weight is considered body armour. In most
          cases, it is emotional).
        </p>
      </div>
    </div>
  );
};

export default SingleEventContainer;
