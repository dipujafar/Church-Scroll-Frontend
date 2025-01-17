"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { churchData } from "@/utils/church-data";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import locationArrowIcon from "@/assets/icons/arrow-square.png";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import ChurchMembers from "./ChurchMembers";
import Events from "@/components/shared/Events";
import CreateSpecificSponsorModal from "@/components/shared/CreateSpecificSponsorModal";
import facebookIcon from "@/assets/icons/facebookIcon.png";
import instagramIcon from "@/assets/icons/instagram.png";
import xIcon from "@/assets/icons/x-icon.png";
import websiteIcon from "@/assets/icons/websiteLogo.png";
const SingleChurch = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [openSponsorModal, setOpenSponsorModal] = useState(false);
  return (
    <div>
      {/* church Carousel */}
      <Carousel
        opts={{
          loop: true,
          duration: 55,
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 3500,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="w-full pl-4 pr-2 "
      >
        <CarouselContent className="relative">
          {churchData[0]?.image?.map((data: string, index: number) => (
            <CarouselItem key={index}>
              <Card className="rounded-3xl">
                <CardContent className="relative px-0 pb-0">
                  <Image
                    src={data}
                    width={2400}
                    height={2400}
                    alt="banner_image"
                    quality={100}
                    className="object-fit  xl:[400px] w-[2600px] rounded-3xl md:h-[330px] lg:h-[380px] 2xl:h-[500px] cursor-pointer"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {/* church details info */}

      <div className="mt-12 flex flex-col lg:flex-row justify-between gap-x-5 gap-y-2">
        <div className="">
          <h1 className="md:text-4xl text-xl font-semibold">
            Hope Community Church
          </h1>
          <Link href="/church-location">
            <div className="mt-1 flex items-center gap-x-2 underline text-light-blue">
              <Image src={locationArrowIcon} alt="location_arrow_icon"></Image>
              <p className="text-lg">1.2 km from Location</p>
            </div>
          </Link>

          {/* ======================= social media links ======================= */}

          <div className="flex gap-x-2 items-center xl:justify-start justify-center  w-full mt-1">
            <Link href="#">
              <Image
                src={websiteIcon}
                alt="websiteIcon"
                className="size-7"
              ></Image>
            </Link>
            <Link href="#">
              <Image
                src={instagramIcon}
                alt="LinkedInIcon"
                className="size-7"
              ></Image>
            </Link>
            <Link href="#">
              <Image
                src={facebookIcon}
                alt="facebookIcon"
                className="size-7"
              ></Image>
            </Link>
            <Link href="#">
              <Image src={xIcon} alt="xIcon" className="size-7"></Image>
            </Link>
          </div>
        </div>
        <div>
          <Link href="/prayer-request">
            <Button
              className="bg-primary-blue hover:bg-black/7
           duration-300 mr-2"
            >
              Prayer Request
            </Button>
          </Link>

          <Button
            onClick={() => setOpenSponsorModal(true)}
            className="bg-primary-blue hover:bg-black/7
           duration-300"
          >
            Sponsor a church
          </Button>
        </div>
      </div>
      {/* Tabs */}
      <div className="mt-5 flex justify-center items-center gap-x-5">
        <Link
          href={"/churches/1/#description"}
          className={
            currentTab === 0 ? "border-b border-black duration-300" : ""
          }
          onClick={() => setCurrentTab(0)}
        >
          Description
        </Link>
        <Link
          href={"/churches/1/#members"}
          className={
            currentTab === 1 ? "border-b border-black duration-300" : ""
          }
          onClick={() => setCurrentTab(1)}
        >
          Members
        </Link>
        <Link
          href={"/churches/1/#events"}
          className={
            currentTab === 2 ? "border-b border-black duration-300" : ""
          }
          onClick={() => setCurrentTab(2)}
        >
          Events
        </Link>
      </div>
      {/* Description */}
      <div className="md:mt-20 mt-14">
        <h2 id="description" className="section-title">
          Description
        </h2>
        <p className="mt-2 text-lg text-black/85">
          Wondering how to cultivate more awe in your life? Is it time to
          release perfection in favor of living? Nurture joy even in a
          challenging world? Delivered as a 5-day series of emails, our Pathways
          provide guidance, inspiration, and practices to help you cultivate a
          more grateful life. Each day contains a rich collection of essays,
          poetry, music, videos, research, and practices that explore grateful
          living principles and themes. In addition to the Pathways available
          below which you can explore at your own pace, new Pathways are offered
          several times per year, allowing you to practice and exchange
          reflections in real time with thousands of people around the globe.
        </p>
      </div>

      {/* church members */}
      <div className="md:mt-20 mt-14">
        <h2 id="members" className="section-title">
          Members (79)
        </h2>
        <div className="mt-2 flex  justify-end ">
          <Link href="/members">
            <p className="text-black hover:text-black/70  group cursor-pointer overflow-hidden lg:text-xl truncate flex items-center">
              View all
              <ChevronRight
                size={24}
                color="#9A9CAA"
                className="group-hover:translate-x-2 overflow-hidden duration-700"
              />
            </p>
          </Link>
        </div>
        <ChurchMembers></ChurchMembers>
      </div>

      {/* church Events */}
      <div className="md:mt-20 mt-14">
        <h2 id="events" className="section-title">
          Events
        </h2>
        <div className="mt-2 flex  justify-end ">
          <Link href={`/events?church=${1}`}>
            <p className="text-black hover:text-black/70  group cursor-pointer overflow-hidden lg:text-xl truncate flex items-center">
              View all
              <ChevronRight
                size={24}
                color="#9A9CAA"
                className="group-hover:translate-x-2 overflow-hidden duration-700"
              />
            </p>
          </Link>
        </div>
        <Events></Events>
      </div>
      <CreateSpecificSponsorModal
        open={openSponsorModal}
        setOpen={setOpenSponsorModal}
      ></CreateSpecificSponsorModal>
    </div>
  );
};

export default SingleChurch;
