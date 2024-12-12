import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import AllPrayerRequestData from "./AllPrayerRequestData";

const AllPrayerRequest = () => {
  return (
    <div>
      <SectionTitle title="Prayer Requests" subTitle="" />
      <AllPrayerRequestData></AllPrayerRequestData>
    </div>
  );
};

export default AllPrayerRequest;
