"use client";
import MemberCard from "@/components/shared/MemberCard";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { memberData } from "@/utils/member-data";
import { Search } from "lucide-react";
import { useState } from "react";
import { Pagination } from "react-pagination-bar";

const filterData = [
  {
    label: "Travel & Hospitality",
    value: "Travel & Hospitality",
  },
  {
    label: "Teaching & Education",
    value: "Teaching & Education",
  },
  {
    label: "Digital Services",
    value: "Digital Services",
  },
  {
    label: "Health & Wellness",
    value: "Health & Wellness",
  },
  {
    label: "Art & Music",
    value: "Art & Music",
  },
  {
    label: "Technology Assistance",
    value: "Technology Assistance",
  },
  {
    label: "Hobbies & Passions",
    value: "Technology Assistance",
  },
  {
    label: "Consulting Services",
    value: "Technology Assistance",
  },
];

const MembersContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pagePostsLimit = 4;
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

      {/* members container */}
      <div className="md:mt-10 mt-5 grid grid-cols-1  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
        {/* filter */}
        <div className="col-span-1">
          {filterData?.map((data) => (
            <div key={data?.value}>
              <div className="flex items-center gap-x-2 my-4">
                <Checkbox
                  id="terms2"
                  value={data?.value}
                  className="size-5 border-black/70"
                />
                <label htmlFor="terms2" className=" font-medium text-black/70">
                  {data?.label}
                </label>
              </div>
            </div>
          ))}
        </div>
        {/* all members */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-3 2xl:col-span-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {memberData?.map((member) => (
              <div key={member?._id} className="p-1">
                <div className="p-1">
                  <MemberCard data={member}></MemberCard>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* pagination */}
      <div className="mt-10 text-end  ">
        <Pagination
          currentPage={currentPage}
          itemsPerPage={pagePostsLimit}
          onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
          totalItems={memberData?.length}
          pageNeighbours={2}
        />
      </div>
    </div>
  );
};

export default MembersContainer;
