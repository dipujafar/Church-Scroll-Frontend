"use client";
import { Button } from "@/components/ui/button";
import AddMemberModal from "./AddMemberModal";
import { useState } from "react";
import { memberData } from "@/utils/member-data";
import ChurchAdminMemberCard from "@/components/shared/ChurchAdminMemberCard";
import { Eye, Trash2 } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import Link from "next/link";

const tableHeaderData = ["Sl", "Name", "Joining Date", "Reg. Code", "Action"];

const sponsorData = [
  {
    _id: 1,
    image: "/attendeesProfile.png",
    name: "Maria Johnson",
    date: "11 Oct 2024",
    code: "504253",
    tnx: "#abc123",
    tnxMethod: "Stripe",
  },
];

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

      {/* existing members table */}
      <Table className="bg-gray-50 rounded p-2 mt-5">
        <TableHeader className="bg-primary-color">
          <TableRow className="text-lg">
            {tableHeaderData.map((header) => (
              <TableHead key={header} className="truncate text-center">
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {sponsorData.map((sponsor) => (
            <TableRow
              key={sponsor.tnx}
              className="text-lg font-medium hover:bg-gray-200 duration-500 text-center space-x-5"
            >
              <TableCell className="truncate">{sponsor._id}</TableCell>
              <TableCell className="truncate">
                <Link
                  href={"/member-profile?memberId=2"}
                  className="flex items-center justify-center gap-x-2 min-w-[200px]"
                >
                  <Image
                    src={sponsor.image}
                    alt="profile_image"
                    width={1200}
                    height={1200}
                    className="size-10 rounded-full w-fit"
                  ></Image>
                  <p>{sponsor.name}</p>
                </Link>
              </TableCell>
              <TableCell className="truncate">{sponsor.date}</TableCell>
              <TableCell className="truncate">{sponsor.code}</TableCell>
              <TableCell className="truncate flex gap-x-2 justify-center items-center ">
                <Link href={"/member-profile?memberId=2"}>
                  <Eye color="#00B047" className="cursor-pointer mx-auto" />
                </Link>
                <Trash2
                  size={19}
                  color="red"
                  className="cursor-pointer"
                ></Trash2>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* existing members */}
      {/* <div className="mt-5 grid grid-cols-1 md:grid-cols-2  2xl:grid-cols-3 gap-5 ">
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
      </div> */}
      <AddMemberModal
        open={openAddMemberModal}
        setOpen={setOpenAddMemberModal}
      ></AddMemberModal>
    </div>
  );
};

export default ChurchMemberContainer;
