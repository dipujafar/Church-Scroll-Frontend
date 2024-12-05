import React from "react";
import boxShapeIcon from "@/assets/icons/box.png";
import Image from "next/image";
import SectionTitle from "@/components/shared/SectionTitle";

const HowTOWork = () => {
  return (
    <div id="howToWork">
      <SectionTitle title="How ChurchScrool Works"></SectionTitle>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10">
        <div className="group">
          <div className="flex gap-x-2 items-center">
            <Image
              src={boxShapeIcon}
              alt="Icon_image"
              className="group-hover:rotate-[360deg] duration-1000"
            ></Image>
            <h4 className="text-xl font-medium">
              Connect with Your Congregation
            </h4>
          </div>
          <p className="text-black/70 text-lg">
            "Stay updated with church events and connect with fellow members."
          </p>
        </div>
        <div className="group">
          <div className="flex gap-x-2 items-center">
            <Image
              src={boxShapeIcon}
              alt="Icon_image"
              className="group-hover:rotate-[360deg] duration-1000"
            ></Image>
            <h4 className="text-xl font-medium">Share Your Skills</h4>
          </div>
          <p className="text-black/70 text-lg">
            "Showcase your talents and support others in the community."
          </p>
        </div>
        <div className="group">
          <div className="flex gap-x-2 items-center">
            <Image
              src={boxShapeIcon}
              alt="Icon_image"
              className="group-hover:rotate-[360deg] duration-1000"
            ></Image>
            <h4 className="text-xl font-medium">Create Your Own Community</h4>
          </div>
          <p className="text-black/70 text-lg">
            "Explore church gatherings, events, and community activities."
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowTOWork;
