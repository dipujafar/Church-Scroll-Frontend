"use client";
import { MapPin, MoveUpRight, Search } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const HeroSectionSearch = () => {
  const [isLocationSetOpen, setIsLocationSetOpen] = React.useState(false);
  return (
    <>
      <div className="flex  items-center border border-white p-2 rounded-xl  relative">
        <div className="flex-1 flex items-center  border-r mr-2 border-white">
          <Search color="#fff" size={20}></Search>
          <Input
            className="focus-visible:ring-0 focus-visible:ring-offset-0 border-none shadow-none placeholder:text-white text-white"
            placeholder="Search here..."
          ></Input>
        </div>

        <div className=" flex-1 flex-between">
          <div
            className="flex items-center gap-x-1 cursor-pointer"
            onClick={() => setIsLocationSetOpen(!isLocationSetOpen)}
          >
            <MapPin color="#fff" size={20}></MapPin>
            <p className="text-white">location</p>
          </div>
          <Button className="bg-primary-blue px-7 py-5 hover:bg-black/70">
            Search
          </Button>
        </div>
        <Button
          className={cn(
            "bg-primary-blue py-6  hover:bg-primary-white absolute top-14 left-1/2 opacity-0 invisible duration-1000 ease-in z-10",
            isLocationSetOpen && "opacity-100 visible"
          )}
        >
          Set Nearby Location <MoveUpRight size={28} className="ml-0" />
        </Button>
      </div>
      <div
        onClick={() => setIsLocationSetOpen(false)}
        className={cn(
          "h-screen w-[99vw]  absolute top-0 left-0 bg-transparent overflow-hidden ",
          !isLocationSetOpen && "hidden"
        )}
      ></div>
    </>
  );
};

export default HeroSectionSearch;
