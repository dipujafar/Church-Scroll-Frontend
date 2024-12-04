import EventCard from "@/components/shared/EventCard";
import { Button } from "@/components/ui/button";
import { eventData } from "@/utils/event-data";
import { Trash2 } from "lucide-react";

const ChurchEventContainer = () => {
  return (
    <div>
      <Button className="bg-primary-blue w-full hover:bg-primary-blue/80">
        Create Event
      </Button>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2  2xl:grid-cols-3 gap-5">
        {eventData?.map((event) => (
          <div className="relative">
            <div className="absolute top-1 right-1 bg-pink-100 rounded-full p-2 cursor-pointer ">
              <Trash2 size={20} color="red"></Trash2>
            </div>
            <EventCard key={event._id} data={event}></EventCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChurchEventContainer;
