"use client";
import { MapPin, MoveUpRight, Search } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const SearchBar = () => {
  const [isLocationSetOpen, setIsLocationSetOpen] = React.useState(false);
  return (
    <div className="flex  items-center border border-black p-2 rounded-xl  relative">
      <div className="flex-1 flex items-center  border-r mr-2 border-black">
        <Search size={20}></Search>
        <Input
          className="focus-visible:ring-0 focus-visible:ring-offset-0 border-none shadow-none"
          placeholder="Search here..."
        ></Input>
      </div>
      <div className=" flex-1 flex-between">
        <div
          className="flex items-center gap-x-1 cursor-pointer"
          onClick={() => setIsLocationSetOpen(!isLocationSetOpen)}
        >
          <MapPin size={20}></MapPin>
          <p className="text-black/70">location</p>
        </div>
        <Button className="bg-primary-blue px-7 py-5 hover:bg-black/70">
          Search
        </Button>
      </div>
      <Button
        className={cn(
          "bg-primary-blue py-6  hover:bg-primary-black/70 absolute top-14 left-1/2 opacity-0 invisible duration-1000 ease-in",
          isLocationSetOpen && "opacity-100 visible"
        )}
      >
        Set Nearby Location <MoveUpRight size={28} className="ml-0" />
      </Button>
    </div>
  );
};

export default SearchBar;
