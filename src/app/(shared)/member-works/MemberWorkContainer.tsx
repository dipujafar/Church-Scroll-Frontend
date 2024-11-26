"use client";
import WorkCard from "@/components/shared/WorkCard";
import { MemberWorkData } from "@/utils/member-work-data";
import Link from "next/link";
import React, { useState } from "react";
import { Pagination } from "react-pagination-bar";

const MemberWorkContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pagePostsLimit = 6;
  return (
    <div>
      <div className="lg:mt-20 mt-10  grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
        {MemberWorkData?.map((work) => (
          <Link href={`/member-works/${work._id}`} key={work._id}>
            <WorkCard data={work}></WorkCard>
          </Link>
        ))}
      </div>
      <div className="mt-10 text-end  ">
        <Pagination
          currentPage={currentPage}
          itemsPerPage={pagePostsLimit}
          onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
          totalItems={MemberWorkData?.length}
          pageNeighbours={2}
        />
      </div>
    </div>
  );
};

export default MemberWorkContainer;
