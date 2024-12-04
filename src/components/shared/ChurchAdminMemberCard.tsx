import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { TMember } from "@/type";

const ChurchAdminMemberCard = ({ data }: { data: TMember }) => {
  return (
    <Card className=" border-[#000] shadow-none bg-transparent min-h-[400px] max-w-[400px]  lg:max-w-full hover:shadow-2xl rounded-xl duration-100 ease-in">
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
              {data?.name.length > 25
                ? data?.name.slice(0, 24) + "..."
                : data?.name}
            </h1>
            <p className="text-black/70">
              {data?.designation.length > 40
                ? data?.designation.slice(0, 39) + "..."
                : data?.designation}
            </p>
          </div>
          <hr />

          <div>
            <Link href={`/member-profile?memberId=${data?._id}`}>
              <Button className="mt-3 w-full bg-primary-blue hover:bg-black/60 hover:animate-pulse">
                View More
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChurchAdminMemberCard;
