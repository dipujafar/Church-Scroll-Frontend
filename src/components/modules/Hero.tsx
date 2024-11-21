import React from "react";
import heroImage1 from "@/assets/home/hero/heroImage1.png";
import heroImage2 from "@/assets/home/hero/heroImage2.png";
import Image from "next/image";
import Container from "../shared/Container";
import { LocateIcon, MapPin, Search } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="bg-primary-color py-16 ">
      <Container className="flex-center min-h-[calc(100vh-280px)] -translate-y-10">
        <div className="flex-1 md:space-y-8 space-y-4">
          <div className="px-4 py-2 rounded bg-[#fff] w-fit">
            Never stop learning
          </div>
          <h1 className="xl:text-7xl md:text-4xl text-2xl font-bold text-primary-blue">
            Welcome to <br /> ChurchScroll: <br /> Connect and Grow
          </h1>
          <p className="text-black/50 max-w-2xl text-lg">
            At ChurchScroll, we empower church communities to connect and
            thrive, fostering relationships and supporting local businesses.
          </p>
          <div className="flex items-center border border-black p-2 rounded-xl xl:w-[80%]">
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
        </div>
        <div className=" justify-end flex-1 flex gap-x-8">
          <Image
            src={heroImage1}
            alt="heroImage1"
            className="-translate-y-14"
          ></Image>
          <Image
            src={heroImage2}
            alt="heroImage2"
            className="translate-y-14"
          ></Image>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
