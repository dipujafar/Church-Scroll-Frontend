"use client";
import Container from "../../shared/Container";
import SearchBar from "@/components/shared/SearchBar";
import { motion } from "framer-motion";

import { Input } from "@/components/ui/input";
import { MapPin, MoveUpRight, Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  childrenVariants,
  parentVariants,
} from "@/animation/HeroSectionMotion";
import Navbar from "@/components/shared/Navbar";
import HeroSectionSearch from "@/components/shared/HeroSectionSearch";

const Hero = () => {
  const [isLocationSetOpen, setIsLocationSetOpen] = useState(false);
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to top right, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.5)), url('/herobg.jpg')`,
      }}
      className="bg-fixed"
    >
      <Navbar></Navbar>
      <div className="py-20">
        <Container className="flex-center flex-col justify-center items-center min-h-[calc(100vh-280px)] -translate-y-10 gap-x-10 gap-y-5">
          <motion.div
            initial={{ y: "10%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            exit={{ y: "10%", opacity: 0 }}
          >
            <motion.div
              variants={parentVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              exit="exit"
              className="md:space-y-8 space-y-4 flex-center flex-col justify-center"
            >
              <motion.h1
                variants={childrenVariants}
                className="xl:text-7xl md:text-5xl  text-2xl font-bold text-[#fafafa] text-center"
              >
                Welcome to ChurchScroll: <br /> Connect and Grow
              </motion.h1>
              <motion.p
                variants={childrenVariants}
                className="text-white brightness-125 max-w-2xl text-lg text-center"
              >
                At ChurchScroll, we empower church communities to connect and
                thrive, fostering relationships and supporting local businesses.
              </motion.p>

              {/* large screen search bar */}
              <motion.div
                variants={childrenVariants}
                className="xl:w-[80%] md:w-[80%] mx-auto lg:w-full hidden md:block"
              >
                <HeroSectionSearch></HeroSectionSearch>
              </motion.div>

              {/* small screen search bar */}
              <motion.div
                variants={childrenVariants}
                className="md:hidden relative w-full"
              >
                <Search
                  size={16}
                  className="absolute top-1/2 left-2 -translate-y-1/2"
                ></Search>
                <Input
                  className="bg-white px-7 w-full"
                  placeholder="search here"
                ></Input>
              </motion.div>
              <motion.div
                variants={childrenVariants}
                className="relative  w-full"
              >
                <div
                  className="md:hidden relative"
                  onClick={() => setIsLocationSetOpen(!isLocationSetOpen)}
                >
                  <MapPin
                    size={16}
                    className="absolute top-1/2 left-2 -translate-y-1/2"
                  ></MapPin>
                  <div className="bg-white px-7 text-black/60 py-1 rounded-md border border-gray-200 w-full">
                    location
                  </div>
                </div>
                <Button
                  className={cn(
                    "bg-primary-blue py-6  hover:bg-primary-black/70 absolute top-8  opacity-0 invisible duration-1000 ease-in",
                    isLocationSetOpen && "opacity-100 visible"
                  )}
                >
                  Set Nearby Location <MoveUpRight size={28} className="ml-0" />
                </Button>
              </motion.div>

              <motion.button className="bg-primary-blue w-full md:hidden text-white py-1 rounded px-5 hover:bg-primary-blue/70">
                Search
              </motion.button>
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
