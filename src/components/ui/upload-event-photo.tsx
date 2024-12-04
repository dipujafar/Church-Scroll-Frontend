"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Loader2, X } from "lucide-react";
import uploadIcon from "@/assets/icons//uploadIcon2.png";

export interface UploadedImage {
  id: string;
  file: File;
  previewUrl: string;
}

interface ImageUploadProps {
  onImagesChange: (images: UploadedImage[]) => void;
  maxImages?: number;
}

export function EventPhotoUpload({
  onImagesChange,
  maxImages = Infinity,
}: ImageUploadProps) {
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  console.log(uploadedImages);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files?.length) return;

    setIsUploading(true);

    try {
      const filesArray = Array.from(files);
      const newImages: UploadedImage[] = filesArray
        .slice(0, maxImages - uploadedImages.length)
        .map((file) => ({
          id: Math.random().toString(36).substring(7),
          file: file,
          previewUrl: URL.createObjectURL(file),
        }));

      const updatedImages = [...uploadedImages, ...newImages];
      setUploadedImages(updatedImages);
      onImagesChange(updatedImages);
    } catch (error) {
      console.error("Error uploading images:", error);
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const removeImage = (id: string) => {
    const updatedImages = uploadedImages.filter((image) => image.id !== id);
    setUploadedImages(updatedImages);
    onImagesChange(updatedImages);
  };

  return (
    <div className="w-full space-y-1">
      <div className="flex justify-center ">
        <label className="relative cursor-pointer group w-full">
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            accept="image/*"
            multiple
            onChange={handleUpload}
            disabled={isUploading || uploadedImages.length >= maxImages}
          />
          <Image
            src={uploadIcon}
            alt="uploadIcon"
            className="mx-auto size-8"
          ></Image>
          <div className="rounded-lg  group-hover:primary-blue/70 transition-colors border  bg-primary-blue text-white w-fit mx-auto py-1  px-10 ">
            Upload Image
          </div>
        </label>
      </div>

      {isUploading && (
        <div className="flex justify-center">
          <Loader2 className="w-6 h-6 animate-spin " />
        </div>
      )}

      {uploadedImages.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
          {uploadedImages.map((image) => (
            <div
              key={image.id}
              className="relative group flex justify-center items-center gap-x-2 "
            >
              <Image
                src={image.previewUrl}
                alt="Uploaded preview"
                width={1200}
                height={1200}
                className=" rounded-lg size-16"
              />
              <p className="text-lg truncate">{image?.file?.name}</p>
              <button
                onClick={() => removeImage(image.id)}
                className=" p-1 bg-red-500 rounded-full  z-30"
              >
                <X className="w-4 h-4 text-white" />
              </button>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
