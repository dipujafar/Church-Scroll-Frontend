"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import PrayerRequestModal from "./PrayerRequestModal";
import { prayerData } from "@/utils/prayer-data";
import PrayerCard from "@/components/shared/PrayerCard";
import { Pagination } from "react-pagination-bar";

const PrayerRequestContainer = () => {
  const [openModal, setOpenModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pagePostsLimit = 6;
  return (
    <div>
      <Button
        onClick={() => setOpenModal(true)}
        className="bg-primary-blue w-full py-5 text-lg hover:bg-black/70 duration-300"
      >
        Add Prayer Request
      </Button>

      {/* exiting prayer request */}
      <div className="mt-10 grid git-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {prayerData?.slice(0, 9)?.map((data) => (
          <PrayerCard key={data?._id} data={data} />
        ))}
      </div>
      <div className="mt-10 text-end  ">
        <Pagination
          currentPage={currentPage}
          itemsPerPage={pagePostsLimit}
          onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
          totalItems={prayerData?.length}
          pageNeighbours={2}
        />
      </div>

      {/* prayer request modal */}
      <PrayerRequestModal
        open={openModal}
        setOpen={setOpenModal}
      ></PrayerRequestModal>
    </div>
  );
};

export default PrayerRequestContainer;
