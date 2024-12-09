"use client";
import heroImage1 from "@/assets/home/hero/heroImage1.png";
import heroImage2 from "@/assets/home/hero/heroImage2.png";
import Image from "next/image";
import Container from "../../shared/Container";
import SearchBar from "@/components/shared/SearchBar";
import AnimatedText from "@/animation/AnimatedText";
import MovementElement from "@/animation/MovementElement";
import { motion } from "framer-motion";
import {
  childrenVariants,
  parentVariants,
} from "@/animation/framerMotionVariants";
import { Input } from "@/components/ui/input";
import { Map, MapPin, MoveUpRight, Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Hero = () => {
  const [isLocationSetOpen, setIsLocationSetOpen] = useState(false);
  return (
    <div className="bg-primary-color py-16 ">
      <Container className="flex-center flex-col-reverse lg:flex-row min-h-[calc(100vh-280px)] -translate-y-10 gap-x-10 gap-y-5">
        <motion.div
          initial={{ y: "-10%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          exit={{ y: "-10%", opacity: 0 }}
          className="flex-1"
        >
          <motion.div
            variants={parentVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            exit="exit"
            className="md:space-y-8 space-y-4"
          >
            <motion.div
              variants={childrenVariants}
              className="px-4 py-2 rounded-md bg-[#fff] w-fit font-medium"
            >
              <AnimatedText duration={0.05} delay={0.08}>
                Never stop learning
              </AnimatedText>
            </motion.div>

            <motion.h1
              variants={childrenVariants}
              className="2xl:text-7xl lg:text-5xl md:text-4xl text-2xl font-bold text-primary-blue"
            >
              Welcome to <br /> ChurchScroll: <br /> Connect and Grow
            </motion.h1>
            <motion.p
              variants={childrenVariants}
              className="text-black/50 max-w-2xl text-lg"
            >
              At ChurchScroll, we empower church communities to connect and
              thrive, fostering relationships and supporting local businesses.
            </motion.p>

            {/* large screen search bar */}
            <motion.div
              variants={childrenVariants}
              className="xl:w-[80%] md:w-[80%] lg:w-full hidden md:block"
            >
              <SearchBar></SearchBar>
            </motion.div>

            {/* small screen search bar */}
            <motion.div
              variants={childrenVariants}
              className="md:hidden relative"
            >
              <Search
                size={16}
                className="absolute top-1/2 left-2 -translate-y-1/2"
              ></Search>
              <Input
                className="bg-white px-7 "
                placeholder="search here"
              ></Input>
            </motion.div>
            <motion.div variants={childrenVariants} className="relative">
              <div
                className="md:hidden relative mt-5"
                onClick={() => setIsLocationSetOpen(!isLocationSetOpen)}
              >
                <MapPin
                  size={16}
                  className="absolute top-1/2 left-2 -translate-y-1/2"
                ></MapPin>
                <div className="bg-white px-7 text-black/60 py-1 rounded-md border border-gray-200 ">
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

        <div className=" md:justify-end flex-1 flex gap-x-8">
          <MovementElement duration={1} y="-20%">
            <Image
              src={heroImage1}
              alt="heroImage1"
              className="md:-translate-y-14"
            ></Image>
          </MovementElement>
          <MovementElement duration={1} y="20%">
            <Image
              src={heroImage2}
              alt="heroImage2"
              className="md:translate-y-14 hidden md:block"
            ></Image>
          </MovementElement>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
