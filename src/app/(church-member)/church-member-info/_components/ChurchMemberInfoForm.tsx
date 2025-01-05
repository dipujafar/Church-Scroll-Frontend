"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import inputIcon from "@/assets/icons/inputIcon.png";
import { Label } from "@/components/ui/label";
import CountryStateCitySelector from "@/components/ui/country-state-city-selector";
import { Checkbox } from "@/components/ui/checkbox";
import { TagInput } from "@/components/ui/tag-input";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";
import { PhoneInput } from "@/components/ui/phone-input";

// Define form data types
interface FormData {
  name: string;
  designation: string;
  registrationCode: string;
  servicesTags: string[];
  hobbies: string[];
}

const filterData = [
  {
    label: "Travel & Hospitality",
    value: "Travel & Hospitality",
  },
  {
    label: "Teaching & Education",
    value: "Teaching & Education",
  },
  {
    label: "Digital Services",
    value: "Digital Services",
  },
  {
    label: "Health & Wellness",
    value: "Health & Wellness",
  },
  {
    label: "Art & Music",
    value: "Art & Music",
  },
  {
    label: "Technology Assistance",
    value: "Technology Assistance",
  },
  {
    label: "Hobbies & Passions",
    value: "Technology Assistance",
  },
  {
    label: "Consulting Services",
    value: "Technology Assistance",
  },
];

const ChurchMemberInfoForm = () => {
  const [fileName, setFileName] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const router = useRouter();

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

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
    setValue,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log(data);
    router.push("/church-member/church-member-profile");
  };

  return (
    <Card className="xl:w-[650px] md:w-[500px] shadow-md ">
      <CardHeader>
        <CardTitle className="text-center md:text-3xl text-xl font-semibold">
          Create Church Member Profile
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex  flex-col items-center justify-center gap-y-5 relative group">
          <div className="group relative mb-5">
            <Avatar className="size-44">
              <AvatarImage src={imageUrl || "/profile.png"} />
              <AvatarFallback className="text-5xl uppercase">
                <Image
                  src={"/profile.png"}
                  width={950}
                  height={700}
                  className="size-40"
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

          {!fileName && !imageUrl && (
            <label
              htmlFor="fileInput"
              className=" hidden group-hover:block absolute bg-gray-600 duration-300"
            >
              <Image
                src={inputIcon}
                width={950}
                height={700}
                alt="Input Icon"
                className="size-8"
              ></Image>
            </label>
          )}
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid w-full items-center gap-4">
            {/* Input Name */}
            <div className="flex flex-col space-y-1.5">
              <Label className=" text-lg font-semibold text-primary-black/80">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Name"
                type="text"
                {...register("name", {
                  required: "Name is required",
                })}
                className="w-full bg-gray-100 py-6"
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div className="grid gap-1.5">
              <Label className="font-semibold text-lg">Email</Label>
              <Input
                type="email"
                id="email"
                className="w-full bg-gray-100 py-6"
              />
            </div>

            {/* input title */}
            <div className="grid gap-1.5">
              <Label className="font-semibold text-lg">Title</Label>
              <Input id="title" className="w-full bg-gray-100 py-6" />
            </div>

            {/* input Gender */}
            <div className="grid w-full  items-center gap-1.5">
              <Label className="font-semibold text-lg">Gender</Label>
              <Select defaultValue="male">
                <SelectTrigger className="w-full  bg-gray-100 py-6">
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

            {/* input contact number*/}

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

            {/* ---- input   Address ---- */}
            <div className="grid w-full  items-center gap-1.5">
              <Label className=" text-lg font-semibold text-primary-black/80">
                Location
              </Label>
              {/*---- input   country ---- */}
              <CountryStateCitySelector
                control={control}
                userAddress={{
                  country: "",
                  state: "",
                  city: "",
                  streetAddress: "",
                }}
                register={register}
                setValue={setValue}
              />
            </div>

            {/* Input Designation */}
            {/* <div className="flex flex-col space-y-1.5">
              <Label className=" text-lg font-semibold  text-primary-black/80">
                Designation
              </Label>
              <Input
                id="designation"
                placeholder="Designation"
                type="text"
                {...register("designation", {
                  required: "Name is required",
                })}
                className="w-full bg-gray-100 py-6"
              />
              {errors.designation && (
                <p className="text-sm text-red-500">
                  {errors.designation.message}
                </p>
              )}
            </div> */}

            {/* Input registration code  */}
            <div className="flex flex-col space-y-1.5">
              <Label className=" text-lg font-semibold  text-primary-black/80">
                Registration Code
              </Label>

              <Input
                id="registrationCode"
                placeholder="Registration Code"
                type="text"
                {...register("registrationCode", {
                  required: "Name is required",
                })}
                className="w-full bg-gray-100 py-6"
              />
              {errors.registrationCode && (
                <p className="text-sm text-red-500">
                  {errors.registrationCode.message}
                </p>
              )}
            </div>

            {/*input services types */}
            <div className="flex flex-col space-y-1.5">
              <Label className="text-lg font-light text-primary-black/80">
                Services Type
              </Label>

              <div className=" max-h-[350px] overflow-auto grid grid-cols-1 md:grid-cols-2 ">
                {filterData?.map((data) => (
                  <div key={data?.value}>
                    <div className="flex items-center gap-x-2 mb-4">
                      <Checkbox
                        id="terms2"
                        value={data?.value}
                        className="size-5 border-black/70"
                      />
                      <label
                        htmlFor="terms2"
                        className=" font-medium text-black/70"
                      >
                        {data?.label}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* input services tags */}
            <div className="flex flex-col space-y-1.5">
              <Label className="text-lg font-semibold text-primary-black/80">
                Services Tags
              </Label>

              <Controller
                name="servicesTags"
                control={control}
                render={({ field }) => (
                  <TagInput
                    value={field.value}
                    onChange={(newValue) => field.onChange(newValue)}
                  />
                )}
              />
            </div>
            {/* ================================== hobbies tags */}
            <div className="flex flex-col space-y-1.5">
              <Label className="text-lg font-semibold text-primary-black/80">
                Hobbies
              </Label>

              <Controller
                name="hobbies"
                control={control}
                render={({ field }) => (
                  <TagInput
                    value={field.value}
                    onChange={(newValue) => field.onChange(newValue)}
                  />
                )}
              />
            </div>

            {/* submit button */}
            <Button
              type="submit"
              className="rounded-full bg-primary-blue hover:bg-black/70"
            >
              Submit
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ChurchMemberInfoForm;
