"use client";
import { Button } from "@/components/ui/button";
import AddMemberModal from "./AddMemberModal";
import { useState } from "react";
import { memberData } from "@/utils/member-data";
import ChurchAdminMemberCard from "@/components/shared/ChurchAdminMemberCard";
import { Trash2 } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const ChurchMemberContainer = () => {
  const [openAddMemberModal, setOpenAddMemberModal] = useState(false);
  return (
    <div>
      {/* add member button */}
      <Button
        onClick={() => setOpenAddMemberModal(true)}
        className="bg-primary-blue w-full hover:bg-primary-blue/80"
      >
        Generate Code
      </Button>

      {/* existing members */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2  2xl:grid-cols-3 gap-5 ">
        {memberData.map((member) => (
          <div className="relative">
            <ChurchAdminMemberCard
              key={member?._id}
              data={member}
            ></ChurchAdminMemberCard>

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
                      Do you want to delete this Church member profile ?
                    </p>
                    <div className="flex justify-center">
                      <Button className=" bg-primary-blue">Confirm</Button>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
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
