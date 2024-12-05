import { TPrayerRequest } from "@/type";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { ReactNode } from "react";

const PrayerCard = ({
  data,
  children,
}: {
  data: TPrayerRequest;
  children?: ReactNode;
}) => {
  return (
    <div className="p-3 space-y-2 border hover:border-black hover:shadow-xl duration-500 rounded-md">
      <div className="flex gap-x-3">
        <Image
          src={data?.image}
          alt="profile_image"
          width={1200}
          height={1200}
          className="size-14 rounded-full"
        ></Image>
        <div>
          <p className="font-medium">{data?.name}</p>
          <p className="text-sm">{data?.date}</p>
          <p className="text-sm">
            ({data?.startTime} - {data?.endTime})
          </p>
        </div>
      </div>
      <h5 className="font-medium text-lg">{data?.prayerName}</h5>
      <p className="max-w-xl text-black/80">
        {data.description.slice(0, 150)}
        {data.description.length > 150 ? (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <span className="text-black cursor-pointer font-medium">
                  ... Read more
                </span>
              </TooltipTrigger>

              <TooltipContent className="md:max-w-sm text-lg  bg-gray-200 overflow-auto p-4 rounded-lg max-h-[250px] text-black">
                <p>{data?.description}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ) : (
          ""
        )}
      </p>
      {children}
    </div>
  );
};

export default PrayerCard;
