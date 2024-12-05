import React from "react";
import ChurchPrayerRequestContainer from "./_components/ChurchPrayerRequestContainer";

const ChurchPrayerRequestPage = () => {
  return (
    <div>
      <h1 className="text-center font-semibold md:text-3xl text-xl mb-5">
        Prayer Request
      </h1>
      <ChurchPrayerRequestContainer></ChurchPrayerRequestContainer>
    </div>
  );
};

export default ChurchPrayerRequestPage;
