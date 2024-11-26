"use client";

import ActivityCard from "@/components/shared/ActivityCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { activityData } from "@/utils/actity-data";
import { Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Pagination } from "react-pagination-bar";

const MemberActivitiesContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pagePostsLimit = 6;
  return (
    <div>
      <div className="mt-5 flex items-center  border p-2 rounded-xl border-black xl:w-[40%]  md:w-[70%] lg:w-[60%] mx-auto">
        <Search></Search>
        <Input
          placeholder="Search Here"
          className="focus-visible:ring-0 focus-visible:ring-offset-0 border-none shadow-none"
        ></Input>
        <Button className="bg-primary-blue shadow-xl ">Search</Button>
      </div>
      <div className="lg:mt-20 mt-10  grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
        {activityData?.map((activity) => (
          <Link href={`/member-activities/${activity._id}`} key={activity._id}>
            <ActivityCard data={activity}></ActivityCard>
          </Link>
        ))}
      </div>
      <div className="mt-10 text-end  ">
        <Pagination
          currentPage={currentPage}
          itemsPerPage={pagePostsLimit}
          onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
          totalItems={activityData?.length}
          pageNeighbours={2}
        />
      </div>
    </div>
  );
};

export default MemberActivitiesContainer;
