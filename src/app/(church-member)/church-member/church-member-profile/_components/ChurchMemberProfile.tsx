"use client";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Camera, ChevronRight, X } from "lucide-react";

import { reviewData } from "@/utils/reviewData";
import { TReview } from "@/type";
import ReviewCard from "@/components/shared/ReviewCard";
import { useState } from "react";
import ChurchMemberWork from "./ChurchMemberWork";
import ChurchMemberActivities from "./ChurchMemberActivities";
import inputIcon from "@/assets/icons/inputIcon.png";
import editIcon from "@/assets/icons/EditIcon.png";
import plusIcon from "@/assets/icons/Plus.png";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller, useForm } from "react-hook-form";
import { DatePicker } from "@/components/ui/date-picker";
import { PhoneInput } from "@/components/ui/phone-input";
import { Textarea } from "@/components/ui/textarea";
import AddWorkModal from "./AddWorkModal";
import AddActivitiesModal from "./AddActivitiesModal";

const ChurchMemberProfile = () => {
  const [showReview, setShowReview] = useState(4);

  const [coverFileName, setCoverFileName] = useState<File | null>(null);
  const [coverImageUrl, setCoverImageUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [aboutEdit, setAboutEdit] = useState(false);
  const [addServices, setAddServices] = useState(false);
  const [addServicesTag, setAddServicesTag] = useState(false);
  const [addWork, setAddWork] = useState(false);
  const [addActivities, setAddActivities] = useState(false);

  const { register, handleSubmit, control, reset, setValue } = useForm();

  // profile image change
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

  // profile cover photo change
  const handleCoverFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const input = event.target;
    const file = input.files?.[0];

    if (file) {
      const url = URL.createObjectURL(file);
      console.log(url);
      setCoverImageUrl(url);
      setCoverFileName(file);
    } else {
      setCoverImageUrl(null);
      setCoverFileName(null);
    }

    input.value = "";
  };

  return (
    <div>
      {/* profile Image section */}
      <div className="relative group">
        <div className="relative">
          <Image
            src={coverImageUrl || "/profilecover.png"}
            alt="cover_image"
            width={1900}
            height={1600}
            quality={100}
            className="w-full h-[350px] max-w-[2020px] mx-auto"
          ></Image>
          {/* cancel button */}
          {coverFileName && coverImageUrl && (
            <div
              className="absolute right-4 top-2 cursor-pointer rounded-md bg-primary-pink "
              onClick={() => {
                setCoverFileName(null);
                setCoverImageUrl(null);
              }}
            >
              <X color="red" size={28} />
            </div>
          )}
        </div>
        {/* upload image */}
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={handleCoverFileChange}
          accept="image/*"
        />
        {/* upload button */}

        {!coverFileName && !coverImageUrl && (
          <label
            htmlFor="fileInput"
            className="absolute bottom-3 right-5 bg-white px-2 py-1 rounded-md"
          >
            <div className="flex gap-x-1 items-center">
              <Camera size={20}></Camera>
              <p> Edit Cover Photo</p>
            </div>
          </label>
        )}
      </div>
      <Container>
        <div className=" relative md:-translate-y-28 -translate-y-16 group w-fit">
          <div className="relative">
            <Image
              src={imageUrl || "/member.png"}
              alt="profile_image"
              width={1200}
              height={1200}
              className="md:size-44 size-32 rounded-full "
            ></Image>
            {fileName && imageUrl && (
              <div
                className="absolute right-4 top-2 cursor-pointer rounded-md bg-primary-pink "
                onClick={() => {
                  setFileName(null);
                  setImageUrl(null);
                }}
              >
                <X color="red" size={28} />
              </div>
            )}
          </div>
          {/* upload image */}
          <input
            type="file"
            id="profileFileInput"
            className="hidden"
            onChange={handleFileChange}
            accept="image/*"
          />
          {/* upload button */}

          {!fileName && !imageUrl && (
            <label
              htmlFor="profileFileInput"
              className=" hidden group-hover:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2	 bg-gray-600 duration-300 cursor-pointer"
            >
              <Image
                src={inputIcon}
                width={950}
                height={700}
                alt="Input Icon"
                className="size-7"
              ></Image>
            </label>
          )}
        </div>

        {/* profile info */}
        <div className="md:-translate-y-20 -translate-y-12 space-y-2  ">
          {/* name, gender, date of birth */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-x-3">
            {/* input Name */}
            <div className="grid w-full items-center gap-1.5">
              <Label className="font-semibold text-lg">Your Name</Label>
              <Input
                type="text"
                id="name"
                defaultValue={"Kocham"}
                placeholder="Name"
                className="py-6 !text-xl placeholder:text-lg bg-gray-100   "
              />
            </div>
            {/* input Gender */}
            <div className="grid w-full  items-center gap-1.5">
              <Label className="font-semibold text-lg">Gender</Label>
              <Select defaultValue="male">
                <SelectTrigger className="w-full py-6 text-lg placeholder:text-lg bg-gray-100">
                  <SelectValue placeholder="Gender" />
                </SelectTrigger>
                <SelectContent defaultValue={"male"}>
                  <SelectGroup>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* input date of birth */}
            <div className="grid w-full items-center ">
              <Label className="font-semibold text-lg text-primary-black/80">
                Birthday
              </Label>
              <DatePicker
                name="dob"
                control={control}
                defaultValue={"Dec 01 2024"}
                // label="Date of Birth"
              />
            </div>
          </div>

          {/* email, contact number */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-x-3">
            {/* input Name */}
            <div className="grid w-full items-center gap-1.5">
              <Label className="font-semibold text-lg">Email</Label>
              <Input
                type="email"
                id="email"
                defaultValue={"example@gamil.com"}
                placeholder="Name"
                className="py-6 !text-xl placeholder:text-lg bg-gray-100   "
              />
            </div>

            {/* input contact number*/}
            <div className="grid w-full items-center ">
              <div className="grid w-full items-center gap-1.5 ">
                <Label className="font-semibold text-lg text-primary-black/80">
                  Contact Number
                </Label>
                <Controller
                  // @ts-ignore
                  name="phoneNumber"
                  // rules={{ required: "Phone number is required" }}
                  control={control}
                  render={({ field }) => (
                    <PhoneInput
                      // @ts-ignore
                      value={field.value}
                      onChange={field.onChange}
                      international
                      defaultCountry="US"
                    />
                  )}
                />
              </div>
            </div>
          </div>

          {/* title */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-x-3">
            {/* input Name */}
            <div className="grid w-full items-center gap-1.5">
              <Label className="font-semibold text-lg">Title</Label>
              <Input
                type="text"
                id="title"
                defaultValue={
                  "Certified Christian Counselor and Family Ministry Leader"
                }
                placeholder="Name"
                className="py-6 !text-xl placeholder:text-lg bg-gray-100   "
              />
            </div>
          </div>

          {/* save button */}
          <div>
            <Button className="mt-5 bg-primary-blue md:w-1/2 w-full hover:bg-primary-blue/80">
              Save Change
            </Button>
          </div>
        </div>

        {/* about us part */}
        <div className="md:-translate-y-10 -translate-y-5 space-y-2">
          <div className="flex justify-between gap-x-2">
            <h1 className="section-title">About Us</h1>
            <Image
              src={editIcon}
              width={950}
              height={700}
              alt="Input Icon"
              onClick={() => {
                setAboutEdit(!aboutEdit);
              }}
              className="size-5 cursor-pointer"
            ></Image>
          </div>

          {aboutEdit ? (
            <>
              <Textarea
                rows={4}
                defaultValue={
                  "Sister Maria is a licensed counselor with a specialty in family dynamics and faith-based counseling. She leads sessions on strengthening family relationships through Christian principles and offers guidance for parents in the community."
                }
                className="text-black/80 md:text-lg text-lg"
              ></Textarea>
              <Button className="mt-5 bg-primary-blue   hover:bg-primary-blue/80">
                Save Change
              </Button>
            </>
          ) : (
            <p className="text-black/80 text-lg">
              Sister Maria is a licensed counselor with a specialty in family
              dynamics and faith-based counseling. She leads sessions on
              strengthening family relationships through Christian principles
              and offers guidance for parents in the community.
            </p>
          )}
        </div>

        {/* services part */}
        <div className="space-y-2 mb-5">
          <div className="flex justify-between gap-x-2">
            <h1 className="section-title">Service</h1>
            <Image
              src={plusIcon}
              width={950}
              height={700}
              alt="Input Icon"
              onClick={() => {
                setAddServices(!addServices);
              }}
              className="size-7 cursor-pointer"
            ></Image>
          </div>

          <div className="flex items-center flex-wrap gap-4">
            <div className="mt-2 py-1 px-4 rounded-full bg-primary-blue/90 w-fit text-white">
              Digital Services
            </div>
            {addServices && (
              <div className="relative">
                <Input
                  className="mt-1 max-w-[200px] border border-black"
                  placeholder="write here..."
                ></Input>
                <X
                  size={18}
                  color="red"
                  className="absolute top-1 right-0 cursor-pointer"
                  onClick={() => setAddServices(false)}
                ></X>
              </div>
            )}
          </div>
        </div>
        {/* services tag */}
        <div className="space-y-2">
          <div className="flex justify-between gap-x-2">
            <h1 className="section-title">Service Tag</h1>
            <Image
              src={plusIcon}
              width={950}
              height={700}
              alt="Input Icon"
              onClick={() => {
                setAddServicesTag(!addServicesTag);
              }}
              className="size-7 cursor-pointer"
            ></Image>
          </div>

          <div className="flex items-center flex-wrap gap-4">
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
            {addServicesTag && (
              <div className="relative">
                <Input
                  className="mt-1 max-w-[200px] border border-black"
                  placeholder="write here..."
                ></Input>
                <X
                  size={18}
                  color="red"
                  className="absolute top-1 right-0 cursor-pointer"
                  onClick={() => setAddServicesTag(false)}
                ></X>
              </div>
            )}
          </div>
        </div>

        {/* work section */}
        <div className="space-y-4 md:mt-16  mt-8">
          <div className="flex justify-between items-center gap-x-2">
            <h1 className="section-title">My Work</h1>
            <Button
              onClick={() => setAddWork(true)}
              className="bg-gray-200 text-black border border-primary-blue/50 hover:bg-primary-blue/20"
            >
              Add Work
            </Button>
          </div>
          <div className="flex  justify-end ">
            <Link href="/member-works">
              <p className="text-black hover:text-black/70  group cursor-pointer overflow-hidden lg:text-lg truncate flex items-center">
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
        <div className="space-y-4 md:mt-16  mt-8">
          <div className="flex justify-between items-center gap-x-2">
            <h1 className="section-title">Activity</h1>
            <Button
              onClick={() => setAddActivities(true)}
              className="bg-gray-200 text-black border border-primary-blue/50 hover:bg-primary-blue/20"
            >
              Add Activity
            </Button>
          </div>

          <div className="flex  justify-end ">
            <Link href="/member-activities">
              <p className="text-black hover:text-black/70  group cursor-pointer overflow-hidden lg:text-lg truncate flex items-center">
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
      <AddWorkModal open={addWork} setOpen={setAddWork}></AddWorkModal>
      <AddActivitiesModal
        open={addActivities}
        setOpen={setAddActivities}
      ></AddActivitiesModal>
    </div>
  );
};

export default ChurchMemberProfile;
