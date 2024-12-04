import EventCard from "@/components/shared/EventCard";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
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
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="absolute top-1 right-1 bg-pink-100 rounded-full p-2 cursor-pointer ">
                  <Trash2 size={20} color="red"></Trash2>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-fit">
                <div className="flex justify-between space-x-4">
                  <div className="space-y-3">
                    <h4 className=" font-semibold text-center text-red-500 text-xl">
                      Are you sure !
                    </h4>
                    <p className="text-sm">
                      Do you want to delete this event ?
                    </p>
                    <div className="flex justify-center">
                      <Button className=" bg-primary-blue">Confirm</Button>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
            <EventCard key={event._id} data={event}></EventCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChurchEventContainer;
