"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import fallBackImag from "@/assets/image/dummy-profile.png";
import profileImage from "@/assets/image/profile.png";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ProfileContainer = () => {
  const [fileName, setFileName] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const file = input.files?.[0];

    if (file) {
      const url = URL.createObjectURL(file);
      console.log(url);
      setImageUrl(url);
      setFileName(file);
    } else {
      setImageUrl(null);
      setFileName(null);
    }

    input.value = "";
  };

  return (
    <div className="flex   flex-col-reverse md:flex-row gap-y-3 lg:gap-x-14 gap-x-5">
      <div className="flex-1 md:space-y-10 space-y-5">
        <div className="flex flex-col md:flex-row gap-5">
          {/* input First Name */}
          <div className="grid w-full  items-center gap-1.5">
            <Label className="text-lg">First Name</Label>
            <Input
              type="text"
              id="firstName"
              placeholder="First Name"
              defaultValue="Kocham"
              className="text-black/80 text-lg font-medium bg-gray-50 border-gray-400 py-5 w-full"
            />
          </div>
          {/* input First Name */}
          <div className="grid w-full items-center gap-1.5">
            <Label className="text-lg">Last Name</Label>
            <Input
              type="text"
              id="lastName"
              placeholder="Last Name"
              defaultValue="Chakma"
              className="text-black/80 text-lg font-medium bg-gray-50 border-gray-400 py-5 w-full"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          {/* input First Name */}
          <div className="grid w-full   gap-1.5">
            <Label className="text-lg">E-Mail</Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              defaultValue="kocham@gmail.com"
              className="text-black/80 text-lg font-medium bg-gray-50 border-gray-400 py-5 w-full"
            />
          </div>
          {/* input First Name */}
          <div className="grid w-full items-center gap-1.5">
            <Label className="text-lg">Contact Number</Label>
            <Input
              type="text"
              id="lastName"
              placeholder="Last Name"
              defaultValue="Chakma"
              className="text-black/80 text-lg font-medium bg-gray-50 border-gray-400 py-5 w-full"
            />
          </div>
        </div>

        <Button className="bg-primary-blue w-full hover:bg-black/70">
          Save
        </Button>
      </div>
      <div className="flex  flex-col items-center justify-center gap-y-5">
        <div className="group relative">
          <Avatar className="size-52">
            <AvatarImage src={imageUrl || "/profile.png"} />
            <AvatarFallback className="text-5xl uppercase">
              <Image
                src={fallBackImag}
                width={950}
                height={700}
                className="size-52"
                alt="user image"
              />
            </AvatarFallback>
          </Avatar>

          {/* cancel button */}
          {fileName && imageUrl && (
            <div
              className="absolute right-4 top-2 cursor-pointer rounded-md bg-primary-pink opacity-0 duration-1000 group-hover:opacity-100"
              onClick={() => {
                setFileName(null);
                setImageUrl(null);
              }}
            >
              <X color="red" />
            </div>
          )}
        </div>

        {/* upload image */}
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={handleFileChange}
          accept="image/*"
        />
        {/* upload button */}
        <label
          htmlFor="fileInput"
          className="flex cursor-pointer flex-col items-center"
        >
          <div className="rounded-full border-2 border-primary-blue px-5 py-2 font-semibold text-primary-blue hover:bg-primary-blue hover:text-white duration-5">
            Choose Image
          </div>
        </label>
      </div>
    </div>
  );
};

export default ProfileContainer;
