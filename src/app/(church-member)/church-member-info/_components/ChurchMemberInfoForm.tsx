"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import inputIcon from "@/assets/icons/inputIcon.png";
import { Label } from "@/components/ui/label";
import CountryStateCitySelector from "@/components/ui/country-state-city-selector";
import { Checkbox } from "@/components/ui/checkbox";

// Define form data types
interface FormData {
  name: string;
  designation: string;
  registrationCode: string;
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
  };

  return (
    <Card className="xl:w-[650px] md:w-[500px] shadow-md ">
      <CardHeader>
        <CardTitle className="text-center md:text-3xl text-xl font-semibold">
          Some details about you
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
              <Label className=" text-lg font-light text-primary-black/80">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Name"
                type="text"
                {...register("name", {
                  required: "Name is required",
                })}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>
            {/* ---- input   Address ---- */}
            <div className="grid w-full  items-center gap-1.5">
              <Label className=" text-lg font-light text-primary-black/80">
                Location
              </Label>
              {/*---- input   country ---- */}
              <CountryStateCitySelector
                control={control}
                userAddress={{
                  country: "",
                  state: "",
                  city: "",
                  area: "",
                  house: "",
                }}
                register={register}
                setValue={setValue}
              />
            </div>

            {/* Input Designation */}
            <div className="flex flex-col space-y-1.5">
              <Label className=" text-lg font-light  text-primary-black/80">
                Designation
              </Label>
              <Input
                id="designation"
                placeholder="Designation"
                type="text"
                {...register("designation", {
                  required: "Name is required",
                })}
              />
              {errors.designation && (
                <p className="text-sm text-red-500">
                  {errors.designation.message}
                </p>
              )}
            </div>

            {/* Input registration code  */}
            <div className="flex flex-col space-y-1.5">
              <Label className=" text-lg font-light  text-primary-black/80">
                Registration Code
              </Label>

              <Input
                id="registrationCode"
                placeholder="Registration Code"
                type="text"
                {...register("registrationCode", {
                  required: "Name is required",
                })}
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
