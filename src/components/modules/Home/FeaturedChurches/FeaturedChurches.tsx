"use client";
import SectionTitle from "@/components/shared/SectionTitle";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import TopFeaturedChurches from "./TopFeaturedChurches";

const FeaturedChurches = () => {
  return (
    <div className="space-y-8">
      <SectionTitle
        title="Featured Churches"
        subTitle="Connect with vibrant church communities active on ChurchScroll."
      />
      <div className="flex  justify-end ">
        <Link href="/#">
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
      <TopFeaturedChurches></TopFeaturedChurches>
    </div>
  );
};

export default FeaturedChurches;
