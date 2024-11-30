import { cn } from "@/lib/utils";
import Image from "next/image";

const UserCard = ({ user, active }: { user: any; active: boolean }) => {
  const { img, name, latestMsg } = user;
  return (
    <div
      className={`flex gap-x-4 ${
        active ? "bg-primary-blue text-white p-2 rounded" : ""
      }`}
    >
      <div className="w-[16%]">
        <Image src={img} alt={name} className="w-full rounded-full" />
      </div>

      <div className="flex-grow space-y-1">
        <div className="flex items-center justify-between">
          <h4
            className={cn(
              "text-xl font-medium text-black",
              active && "text-white"
            )}
          >
            {name}
          </h4>
          <p className="font-semibold text-secondary-2 text-gray-500">12m</p>
        </div>
        <p className="text-ellipsis">{latestMsg}</p>
      </div>
    </div>
  );
};

export default UserCard;
