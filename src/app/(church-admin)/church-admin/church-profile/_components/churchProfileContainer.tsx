"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import editIcon from "@/assets/icons/EditIcon2.png";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { ImageUpload, UploadedImage } from "@/components/ui/upload-images";
import { PhotoUpload } from "@/components/ui/upload-photo";

const ChurchProfileContainer = () => {
  const [images, setImages] = useState<UploadedImage[]>([]);

  const handleImagesChange = (newImages: UploadedImage[]) => {
    setImages(newImages);
  };
  return (
    <div>
      {/* church image */}
      <div className="h-[450px] w-full bg-gray-100 rounded relative">
        <Image
          src="/church-image.png"
          alt="church_image"
          width={1200}
          height={1200}
          className="h-[450px] w-full mx-auto"
        ></Image>
      </div>

      {/* church info */}
      <div className="mt-5">
        {/* church Name */}
        <div className="grid  gap-1.5">
          <Label className="font-semibold text-lg">Church Name</Label>
          <Input
            type="text"
            id="name"
            defaultValue={"Hope Community Church"}
            placeholder="Name"
            className="py-6 !text-xl placeholder:text-lg bg-gray-100 h-[69%] w-[99%] mx-auto"
          />
        </div>
        <div className="grid  gap-1.5">
          <Label className="font-semibold text-lg">Description</Label>
          <Textarea
            rows={7}
            id="description"
            defaultValue={
              "Wondering how to cultivate more awe in your life? Is it time to release perfection in favor of living? Nurture joy even in a challenging world? Delivered as a 5-day series of emails, our Pathways provide guidance, inspiration, and practices to help you cultivate a more grateful life. Each day contains a rich collection of essays, poetry, music, videos, research, and practices that explore grateful living principles and themes."
            }
            placeholder="Name"
            className=" !text-xl placeholder:text-lg bg-gray-100 w-[99%] mx-auto"
          />
        </div>
        <div className="w-full mt-5">
          <PhotoUpload onImagesChange={handleImagesChange} maxImages={5} />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-2 mt-5">
          <Image
            src={"/church4.png"}
            alt="edit_icon"
            width={1200}
            height={1200}
            className="w-auto mx-auto h-full"
          ></Image>
          <Image
            src={"/church1.png"}
            alt="edit_icon"
            width={1200}
            height={1200}
            className="w-auto mx-auto h-full"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default ChurchProfileContainer;
