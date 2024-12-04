"use client";
import { Button } from "@/components/ui/button";
import AddMemberModal from "./AddMemberModal";
import { useState } from "react";
import { memberData } from "@/utils/member-data";
import ChurchAdminMemberCard from "@/components/shared/ChurchAdminMemberCard";
import { Trash2 } from "lucide-react";

const ChurchMemberContainer = () => {
  const [openAddMemberModal, setOpenAddMemberModal] = useState(false);
  return (
    <div>
      {/* add member button */}
      <Button
        onClick={() => setOpenAddMemberModal(true)}
        className="bg-primary-blue w-full hover:bg-primary-blue/80"
      >
        Add Member
      </Button>

      {/* existing members */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2  2xl:grid-cols-3 gap-5 ">
        {memberData.map((member) => (
          <div className="relative">
            <ChurchAdminMemberCard
              key={member?._id}
              data={member}
            ></ChurchAdminMemberCard>
            <div className="absolute top-1 right-1 bg-pink-100 rounded-full p-2 cursor-pointer ">
              <Trash2 size={20} color="red"></Trash2>
            </div>
          </div>
        ))}
      </div>

      <AddMemberModal
        open={openAddMemberModal}
        setOpen={setOpenAddMemberModal}
      ></AddMemberModal>
    </div>
  );
};

export default ChurchMemberContainer;
