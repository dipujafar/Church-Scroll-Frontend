"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CalendarIcon, Eye } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import TransactionDetailsModal from "./TransactionDetailsModal";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

const tableHeaderData = ["Sl", "Name", "Date", "Amount", "Action"];

const sponsorData = [
  {
    _id: 1,
    image: "/attendeesProfile.png",
    name: "Robert Fox",
    date: "11 Oct 2024",
    amount: "50",
    tnx: "#abc123",
    tnxMethod: "Stripe",
  },
];

const SponsorChurchContainer = () => {
  const [openDetails, setOpenDetails] = useState(false);
  const [date, setDate] = useState<Date>();
  return (
    <div>
      {/* filter and total amount */}

      <div className="flex justify-between p-4 border border-black mt-5 rounded">
        <div>
          <h1 className="text-2xl font-semibold">Total Amount</h1>
          <p className="text-xl font-semibold">$34,141</p>
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[280px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon />
              {date ? format(date, "PPP") : <span>Select Date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* data table */}
      <Table className="bg-gray-50 rounded p-2 mt-5">
        <TableHeader className="bg-primary-color">
          <TableRow className="text-lg">
            {tableHeaderData.map((header) => (
              <TableHead key={header} className="truncate">
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {sponsorData.map((sponsor) => (
            <TableRow
              key={sponsor.tnx}
              className="text-lg font-medium hover:bg-gray-200 duration-500"
            >
              <TableCell className="truncate">{sponsor._id}</TableCell>
              <TableCell className="truncate">
                <div className="flex items-center gap-x-2">
                  <Image
                    src={sponsor.image}
                    alt="profile_image"
                    width={1200}
                    height={1200}
                    className="size-10 rounded-full"
                  ></Image>
                  <p>{sponsor.name}</p>
                </div>
              </TableCell>
              <TableCell className="truncate">{sponsor.date}</TableCell>
              <TableCell className="truncate">${sponsor.amount}</TableCell>
              <TableCell className="truncate">
                <Eye
                  color="#00B047"
                  onClick={() => setOpenDetails(true)}
                  className="cursor-pointer"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <TransactionDetailsModal
        open={openDetails}
        setOpen={setOpenDetails}
      ></TransactionDetailsModal>
    </div>
  );
};

export default SponsorChurchContainer;
