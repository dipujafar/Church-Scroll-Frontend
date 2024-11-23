import { MapPin, Search } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const SearchBar = () => {
  return (
    <div className="flex items-center border border-black p-2 rounded-xl ">
      <div className="flex-1 flex items-center  border-r mr-2 border-black">
        <Search size={20}></Search>
        <Input
          className="focus-visible:ring-0 focus-visible:ring-offset-0 border-none shadow-none"
          placeholder="Search here..."
        ></Input>
      </div>
      <div className=" flex-1 flex-between">
        <div className="flex items-center gap-x-1">
          <MapPin size={20}></MapPin>
          <p className="text-black/70">location</p>
        </div>
        <Button className="bg-primary-blue px-7 py-5 hover:bg-black/70">
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
