import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const PrayerCard = ({ data }) => {
  return (
    <div className="p-2 space-y-3">
      <div className="flex gap-x-5">
        <Image
          src={data?.image}
          alt="profile_image"
          width={1200}
          height={1200}
          className="size-14"
        ></Image>
        <div className="space-x-5">
          <p className="font-medium">{data?.name}</p>
          <p className="font-medium">{data?.time}</p>
        </div>
      </div>
      <h5 className="font-medium">{data?.prayerName}</h5>
      <p>
        {data?.prayer.length > 60
          ? data?.prayer.slice(0, 59) + "..."
          : data?.prayer}
      </p>
    </div>
  );
};

export default PrayerCard;
