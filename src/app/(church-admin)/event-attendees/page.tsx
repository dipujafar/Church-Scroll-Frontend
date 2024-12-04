import ChurchMemberNavbar from "@/components/shared/ChurchMemberNavbar";
import Container from "@/components/shared/Container";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { eventAttendeesData } from "@/utils/attendees";
import Image from "next/image";
import React from "react";

const tableHeaderData = ["Sl", "Name", "Contact", "Email"];

const EventAttendeesPage = () => {
  return (
    <div>
      <nav className="sticky top-0 z-20">
        <ChurchMemberNavbar className="bg-white"></ChurchMemberNavbar>
      </nav>
      <Container>
        <Table className="bg-gray-50 rounded p-2">
          <TableHeader className="bg-primary-color">
            <TableRow className="text-lg">
              {tableHeaderData.map((header, inx) => (
                <TableHead
                  key={header}
                  className={cn(
                    "truncate text-center",
                    inx === 0 && "text-start",
                    inx === 0 && "text-start"
                  )}
                >
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {eventAttendeesData.map((data) => (
              <TableRow
                key={data._id}
                className="text-lg font-medium hover:bg-gray-200 duration-500"
              >
                <TableCell className="truncate">#{data._id}</TableCell>
                <TableCell className="truncate text-center">
                  <div className="flex items-center justify-center gap-x-2">
                    <Image
                      src={data.image}
                      alt="profile_image"
                      width={1200}
                      height={1200}
                      className="size-8 rounded-full s"
                    ></Image>
                    <p className="text-center">{data.name}</p>
                  </div>
                </TableCell>
                <TableCell className="truncate text-center">
                  {data.contact}
                </TableCell>
                <TableCell className="truncate text-center">
                  ${data.email}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </div>
  );
};

export default EventAttendeesPage;
