"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import PrayerRequestModal from "./PrayerRequestModal";

const PrayerRequestContainer = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <Button
        onClick={() => setOpenModal(true)}
        className="bg-primary-blue w-full py-5 text-lg hover:bg-black/70 duration-300"
      >
        Add Prayer Request
      </Button>
      <PrayerRequestModal
        open={openModal}
        setOpen={setOpenModal}
      ></PrayerRequestModal>
    </div>
  );
};

export default PrayerRequestContainer;
