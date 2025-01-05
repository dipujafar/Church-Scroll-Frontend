import { TChurchData } from "@/type";
import Image from "next/image";

const ChurchCard = ({ data }: { data: TChurchData }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-2 group ">
      <Image
        src={data?.image[0]}
        alt="church_image"
        width={1200}
        height={1200}
        className="w-auto  lg:h-[210px] h-[150px] group-hover:scale-105 duration-300 rounded-3xl"
      ></Image>
      <p className="lg:text-xl text-center text-black">{data?.name}</p>
    </div>
  );
};

export default ChurchCard;
