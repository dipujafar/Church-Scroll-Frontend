import { TActivity } from "@/type";
import Image from "next/image";

const ActivityCard = ({ data }: { data: TActivity }) => {
  return (
    <div className="flex flex-col   gap-y-2 group border pb-5 rounded-2xl hover:shadow-xl hover:border-black ">
      <Image
        src={data?.image[0]}
        alt="church_image"
        width={1200}
        height={1200}
        className=" w-auto  h-[210px] rounded-t-2xl"
      ></Image>
      <p className="text-xl text-black px-2 truncate">{data?.title}</p>
      <p className="text-black/70 px-2">
        {data?.description.length > 100
          ? data?.description.slice(0, 99) + "......"
          : data?.description}
      </p>
    </div>
  );
};

export default ActivityCard;
