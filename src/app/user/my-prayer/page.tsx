import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import UserPrayerContainer from "./_components/UserPrayerContainer";

const MyPrayerPage = () => {
  return (
    <div>
      <SectionTitle title="Recent Prayer Request"></SectionTitle>
      <UserPrayerContainer></UserPrayerContainer>
    </div>
  );
};

export default MyPrayerPage;
