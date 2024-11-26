import { TReview } from "@/type";
import Image from "next/image";

const ReviewCard = ({ data }: { data: TReview }) => {
  return (
    <div className="flex gap-x-3">
      <Image
        src={data?.image}
        alt="profile_image"
        width={1200}
        height={1200}
        className="size-14 rounded-full"
      ></Image>
      <div>
        <h4 className="text-lg font-medium">{data?.name}</h4>
        <p className="text-black/70">{data?.time}</p>
        <h4 className="text-black/90 mt-1">{data?.comment}</h4>
      </div>
    </div>
  );
};

export default ReviewCard;
