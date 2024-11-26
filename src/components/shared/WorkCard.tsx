import { TWork } from "@/type";
import Image from "next/image";

const WorkCard = ({ data }: { data: TWork }) => {
  return (
    <div className="flex flex-col   gap-y-2 group ">
      <Image
        src={data?.image[0]}
        alt="church_image"
        width={1200}
        height={1200}
        className=" w-auto  h-[210px] group-hover:scale-105 duration-300 rounded-3xl"
      ></Image>
      <p className="text-xl text-black">{data?.title}</p>
    </div>
  );
};

export default WorkCard;
