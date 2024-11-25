"use client";
import ChurchCard from "@/components/shared/ChurchCard";
import { churchData } from "@/utils/church-data";
import Link from "next/link";

import { useState } from "react";
import { Pagination } from "react-pagination-bar";

const ChurchesContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pagePostsLimit = 6;
  return (
    <div>
      <div className="lg:mt-20 mt-10  grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
        {churchData?.map((church) => (
          <Link href={`/churches/${church._id}`} key={church._id}>
            <ChurchCard data={church}></ChurchCard>
          </Link>
        ))}
      </div>
      <div className="mt-10 text-end  ">
        <Pagination
          currentPage={currentPage}
          itemsPerPage={pagePostsLimit}
          onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
          totalItems={churchData?.length}
          pageNeighbours={2}
        />
      </div>
    </div>
  );
};

export default ChurchesContainer;
