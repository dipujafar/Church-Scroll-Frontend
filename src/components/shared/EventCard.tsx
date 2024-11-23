import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";
import { TEvent } from "@/type";
import location from "@/assets/icons/Location.png";
import calendar from "@/assets/icons/calendar.png";
import Link from "next/link";
import { Button } from "../ui/button";

const EventCard = ({ data }: { data: TEvent }) => {
  return (
    <Card className=" border-[#000] shadow-none bg-transparent min-h-[480px] max-w-[400px]  lg:max-w-full hover:shadow-2xl rounded-xl duration-100 ease-in">
      <CardContent className="py-5 px-5">
        <Image
          src={data?.image[0]}
          alt="event_image"
          width={1200}
          height={1200}
          className="w-auto mx-auto h-56"
        ></Image>
        <div className="mt-5 space-y-2">
          <h1 className="xl:text-2xl text-lg font-semibold">
            {data?.name.length > 25
              ? data?.name.slice(0, 25) + "..."
              : data?.name}
          </h1>
          <p className="text-black/70">
            Hosted By:{" "}
            {data?.hostName.length > 25
              ? data?.hostName.slice(0, 25) + "..."
              : data?.hostName}
          </p>
          <div className="flex items-center gap-x-1 truncate">
            <Image src={location} alt="location_icon"></Image>
            {data?.location}
          </div>
          <div className="flex items-center gap-x-1 truncate">
            <Image src={calendar} alt="location_icon"></Image>
            {data?.date}
          </div>
          <Link href={`/events/${data?._id}`}>
            <Button className="mt-5 w-full bg-primary-blue hover:bg-black/60 hover:animate-pulse">
              View More
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;
