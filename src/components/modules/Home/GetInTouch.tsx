import { Button } from "@/components/ui/button";
import Image from "next/image";
import bgImage from "@/assets/home/GetInTouch/getInTouchBg.png";

const GetInTouch = () => {
  return (
    <div className="relative">
      <Image
        src={bgImage}
        alt="Prayer_mage"
        className="w-full rounded-xl"
      ></Image>

      <div className="space-y-3 absolute inset-0   text-white   lg:pt-40 pt-16 lg:pl-10 pl-5 bg-gradient-to-r from-[#31454E] to-transparent rounded-xl">
        <h1 className="lg:text-6xl text-2xl font-bold ">
          Get in Touch with Us
        </h1>
        <p className="text-xl">
          Have questions, suggestions, or just want to say hello? We're here for
          you.
        </p>
        <Button className="bg-[#1C618B] font-bold py-7 text-lg hover:bg-black/50 duration-300">
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default GetInTouch;
