import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { TResources } from "@/type";

const ResourcesCard = ({ data }: { data: TResources }) => {
  return (
    <Link href={`/member-profile?memberId=${data?._id}`}>
      <Card className=" border-[#000] shadow-none bg-transparent min-h-[480px] max-w-[400px]  lg:max-w-full hover:shadow-2xl rounded-xl duration-100 ease-in">
        <CardContent className=" py-5 px-5">
          <Image
            src={data?.image}
            alt="event_image"
            width={1200}
            height={1200}
            className="w-auto mx-auto h-56 rounded-t-xl"
          ></Image>
          <div className="mt-3 space-y-2">
            <div className="space-y-2">
              <h1 className="xl:text-2xl text-lg font-semibold">
                {data?.name}
              </h1>
              <p className="text-black/70">
                {data?.creator.length > 40
                  ? data?.creator.slice(0, 39) + "..."
                  : data?.creator}
              </p>
            </div>

            <div>
              <Link href={`/churches/${data?._id}`}>
                <p className="text-lg text-light-blue">{data?.churchName}</p>
              </Link>
            </div>
            <div className="py-1 px-4 b border border-black w-fit rounded-full">
              <p className="text-lg text-black font-medium truncate">
                {data?.services}
              </p>
            </div>

            <div>
              <Button className="mt-3 w-full bg-primary-blue hover:bg-black/60 hover:animate-pulse">
                View More
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ResourcesCard;
