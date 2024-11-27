import EventCard from "@/components/shared/EventCard";
import { eventData } from "@/utils/event-data";
import React from "react";

const MyEventContainer = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2  2xl:grid-cols-3 gap-5">
        {eventData?.slice(0, 4)?.map((event) => (
          <EventCard key={event._id} data={event} btn={false}></EventCard>
        ))}
      </div>
    </div>
  );
};

export default MyEventContainer;
