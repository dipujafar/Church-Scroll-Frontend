"use client";
import Container from "@/components/shared/Container";
import EventCard from "@/components/shared/EventCard";
import Navbar from "@/components/shared/Navbar";
import SectionTitle from "@/components/shared/SectionTitle";
import TopBanner from "@/components/shared/TopBanner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { eventData } from "@/utils/event-data";
import { Search } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Pagination } from "react-pagination-bar";

const EventContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pagePostsLimit = 6;
  const churchId = useSearchParams()?.get("church");

  return (
    <div>
      <div className="relative">
        <Navbar
          className={cn(!churchId && "absolute top-0 z-20 w-full")}
        ></Navbar>
        {!churchId && (
          <TopBanner
            image="/eventsBg.png"
            title="Church Community Events"
            description="ChurchScroll offers a suite of features designed to enhance your community experience. From privacy settings to event management, we empower members to connect safely and meaningfully."
            className="text-white"
          ></TopBanner>
        )}
      </div>
      <Container className="md:mt-10 mt-5 ">
        <SectionTitle title="Explore Events"></SectionTitle>
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
      </Container>
    </div>
  );
};

export default EventContainer;
