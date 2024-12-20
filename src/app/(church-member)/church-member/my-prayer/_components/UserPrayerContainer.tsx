import { prayerData } from "@/utils/prayer-data";
import React from "react";
import UserPrayerCard from "./UserPrayerCard";
import AddPrayerRequest from "./AddPrayerRequest";

const UserPrayerContainer = () => {
  return (
    <div className="mt-5">
      <AddPrayerRequest></AddPrayerRequest>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {prayerData?.slice(0, 9)?.map((data) => (
          <UserPrayerCard key={data?._id} data={data}></UserPrayerCard>
        ))}
      </div>
    </div>
  );
};

export default UserPrayerContainer;
