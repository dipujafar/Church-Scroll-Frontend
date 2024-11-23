"use client";
import EventCard from "@/components/shared/EventCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { eventData } from "@/utils/event-data";
import { Search } from "lucide-react";
import { useState } from "react";
import { Pagination } from "react-pagination-bar";

const EventContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pagePostsLimit = 6;
  return (
    <div>
      {/* search bar */}
      <div className="mt-5 flex items-center  border p-2 rounded-xl border-black xl:w-[40%]  md:w-[70%] lg:w-[60%] mx-auto">
        <Search></Search>
        <Input
          placeholder="Search Here"
          className="focus-visible:ring-0 focus-visible:ring-offset-0 border-none shadow-none"
        ></Input>
        <Button className="bg-primary-blue shadow-xl ">Search</Button>
      </div>

      {/* all events */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10 2xl:grid-cols-4">
        {eventData?.map((event) => (
          <div className="" key={event._id}>
            <EventCard data={event}></EventCard>
          </div>
        ))}
      </div>
      <div className="mt-10 text-end  ">
        <Pagination
          currentPage={currentPage}
          itemsPerPage={pagePostsLimit}
          onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
          totalItems={eventData?.length}
          pageNeighbours={2}
        />
      </div>
    </div>
  );
};

export default EventContainer;
