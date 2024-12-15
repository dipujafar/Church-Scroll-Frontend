import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TPrayerRequest } from "@/type";
import Image from "next/image";
import Link from "next/link";

const PrayerCardHome = ({ data }: { data: TPrayerRequest }) => {
  return (
    <div className="p-3 space-y-2 border hover:border-black hover:shadow-xl duration-500 rounded-md">
      <div>
        <div>
          <div className="flex gap-x-2">
            <Image
              src={"/profileImage.png"}
              alt="profile_image"
              width={1200}
              height={1200}
              className="size-12 rounded-full"
            ></Image>
            <div>
              <p className="text-lg font-medium">{data?.name}</p>
              <p className="text-sm">{data?.date}</p>
              <p className="text-sm">
                ({data?.startTime} - {data?.endTime})
              </p>
            </div>
          </div>
        </div>
        <Link href="/churches/1">
          <p className="mt-2 text-primary-blue/90 font-medium">
            {data?.churchName}
          </p>
        </Link>
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
    </div>
  );
};

export default PrayerCardHome;
