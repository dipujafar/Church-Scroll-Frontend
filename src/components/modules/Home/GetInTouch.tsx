import { Button } from "@/components/ui/button";
import Image from "next/image";
import bgImage from "@/assets/home/GetInTouch/getInTouchBg.png";

const GetInTouch = () => {
  return (
    <div className="relative">
      <Image
        src={bgImage}
        alt="Prayer_mage"
        className="w-full rounded-xl min-h-[220px]"
      ></Image>

      <div className="space-y-3 absolute inset-0   text-white   2xl:pt-32 lg:pt-16 md:pt-10  pt-4 lg:pl-16 pl-5 bg-gradient-to-r from-[#31454E] to-transparent rounded-xl">
        <h1 className="lg:text-6xl text-2xl font-bold ">
          Get in Touch with Us
        </h1>
        <p className="lg:text-xl">
          Have questions, suggestions, or just want to say hello? We're here for
          you.
        </p>
        <Button className="bg-[#1C618B] font-bold lg:py-7 lg:text-lg hover:bg-black/50 duration-300">
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default GetInTouch;
