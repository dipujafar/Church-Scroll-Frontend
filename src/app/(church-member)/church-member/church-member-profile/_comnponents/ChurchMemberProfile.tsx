"use client";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import messageIcon from "@/assets/icons/message-icon.png";
import { ChevronRight } from "lucide-react";

import { reviewData } from "@/utils/reviewData";
import { TReview } from "@/type";
import ReviewCard from "@/components/shared/ReviewCard";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import ChurchMemberWork from "./ChurchMemberWork";
import ChurchMemberActivities from "./ChurchMemberActivities";

const ChurchMemberProfile = () => {
  const [showReview, setShowReview] = useState(4);
  return (
    <div>
      {/* profile Image section */}
      <Image
        src={"/profilecover.png"}
        alt="cover_image"
        width={1900}
        height={1600}
        quality={100}
        className="w-full h-[350px] max-w-[2020px] mx-auto"
      ></Image>
      <Container>
        <Image
          src={"/member.png"}
          alt="profile_image"
          width={1200}
          height={1200}
          className="md:size-44 size-32 rounded-full md:-translate-y-28 -translate-y-16"
        ></Image>

        {/* profile info */}
        <div className="md:-translate-y-20 -translate-y-12 space-y-2">
          <h3 className="lg:text-2xl text-xl font-medium">
            Sister Maria Johnson
          </h3>
          <Link href={"/churches/1"}>
            <h4 className="lg:text-xl text-base text-light-blue underline">
              Hope Community Church
            </h4>
          </Link>
          <h1 className="section-title">
            Certified Christian Counselor and Family Ministry Leader
          </h1>
          <div className="flex items-center gap-x-5">
            <Button className="bg-primary-blue px-5">Connect</Button>
            <Image src={messageIcon} alt="message_icon" className="h-8"></Image>
          </div>
        </div>
        {/* about us part */}
        <div className="md:-translate-y-10 -translate-y-5 space-y-2">
          <h1 className="section-title">About Us</h1>
          <p className="text-black/80 text-lg">
            Sister Maria is a licensed counselor with a specialty in family
            dynamics and faith-based counseling. She leads sessions on
            strengthening family relationships through Christian principles and
            offers guidance for parents in the community.
          </p>
        </div>

        {/* services part */}
        <div className="space-y-2 mb-5">
          <h1 className="section-title">Service </h1>
          <div className="mt-2 py-1 px-4 rounded-full bg-primary-blue/90 w-fit text-white">
            Digital Services
          </div>
        </div>
        {/* services tag */}
        <div className="space-y-2">
          <h1 className="section-title">Service Tag</h1>
          <div className="mrt-2 flex gap-3 flex-wrap">
            <div className="py-1 px-4 rounded-full bg-primary-blue/90 w-fit text-white">
              Graphics Design
            </div>
            <div className="py-1 px-4 rounded-full bg-primary-blue/90 w-fit text-white">
              Illustration and Iconography
            </div>
            <div className="py-1 px-4 rounded-full bg-primary-blue/90 w-fit text-white">
              Branding and Identity Design
            </div>
          </div>
        </div>

        {/* work section */}
        <div className="space-y-2 md:mt-16  mt-8">
          <h1 className="section-title">My Work</h1>
          <div className="flex  justify-end ">
            <Link href="/member-works">
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
          <ChurchMemberWork></ChurchMemberWork>
        </div>

        {/* activity section */}
        <div className="space-y-2 md:mt-16  mt-8">
          <h1 className="section-title">Activity</h1>
          <div className="flex  justify-end ">
            <Link href="/member-activities">
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
          <ChurchMemberActivities></ChurchMemberActivities>
        </div>

        {/* review section */}
        <div className=" md:mt-16  mt-8">
          <h1 className="section-title">Reviews</h1>
          <p className="mt-2 text-black/70">1 out 4 of 158 Reviews</p>
          <div className="xl:w-[70%]">
            <div className="mt-5 flex flex-col gap-y-8">
              {reviewData?.slice(0, showReview)?.map((review: TReview) => (
                <ReviewCard key={review?._id} data={review}></ReviewCard>
              ))}
            </div>
            {reviewData?.length > 4 && (
              <div className="flex justify-end">
                {reviewData?.length <= showReview ? (
                  <Button
                    onClick={() => setShowReview(4)}
                    variant="outline"
                    className=" border-black/50 rounded-full duration-500"
                  >
                    See Less
                  </Button>
                ) : (
                  <Button
                    onClick={() => setShowReview((prev) => prev + 4)}
                    variant="outline"
                    className=" border-black/50 rounded-full duration-500"
                  >
                    See More
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ChurchMemberProfile;
