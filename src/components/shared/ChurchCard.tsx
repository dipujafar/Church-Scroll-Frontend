import { churchData } from "@/type";
import Image from "next/image";

const ChurchCard = ({ data }: { data: churchData }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-2 group ">
      <Image
        src={data?.image}
        alt="church_image"
        width={1200}
        height={1200}
        className=" w-auto max- h-[210px] group-hover:scale-105 duration-300"
      ></Image>
      <p className="text-xl text-center text-black">{data?.name}</p>
    </div>
  );
};

export default ChurchCard;
