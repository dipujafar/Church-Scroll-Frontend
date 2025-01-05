"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, X } from "lucide-react";

import { Button } from "@/components/ui/button";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import inputIcon from "@/assets/icons/inputIcon.png";
import { useRouter, useSearchParams } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";

// Define form data types
interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const CreateAccountForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);
  const [fileName, setFileName] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const role = useSearchParams().get("role");
  const router = useRouter();
  const [isAdult, setIsAdult] = useState(false);

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
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    if (role == "Administrator") {
      router.push("/plan-pricing");
    }
    console.log(data);
  };

  return (
    <Card className="xl:w-[650px] md:w-[500px] shadow-md w-full">
      <CardHeader>
        <CardTitle className="text-center text-4xl font-semibold">
          Create Account
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
            {/* Input email */}
            <div className="flex flex-col space-y-1.5">
              <Input
                id="email"
                placeholder="Email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Please enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Input password  */}
            <div>
              <div className="relative flex flex-col space-y-1.5">
                <Input
                  id="password"
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                      message:
                        "Password must contain an uppercase letter and a symbol",
                    },
                  })}
                />

                {/* Eye icon to toggle password visibility */}
                <div
                  className="absolute right-3 top-1/3 -translate-y-1/2 transform cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <Eye color="#1A1A1A" />
                  ) : (
                    <EyeOff color="#1A1A1A" />
                  )}
                </div>
              </div>
              {errors.password && (
                <p className="text-sm text-red-500 mt-2">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Input Confirm Password  */}
            <div>
              <div className="relative flex flex-col space-y-1.5">
                <Input
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  type={showConfirmPassword ? "text" : "password"}
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) => {
                      if (value !== watch("password")) {
                        return "Passwords do not match";
                      }
                    },
                  })}
                />

                {/* Eye icon to toggle password visibility */}
                <div
                  className="absolute right-3 top-1/3 -translate-y-1/2 transform cursor-pointer"
                  onClick={() => setConfirmShowPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <Eye color="#1A1A1A" />
                  ) : (
                    <EyeOff color="#1A1A1A" />
                  )}
                </div>
              </div>
              {errors.confirmPassword && (
                <p className="text-sm text-red-500 mt-2">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                color="#7b7b7b"
                className="border-gray-500"
                onCheckedChange={() => setIsAdult(!isAdult)}
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black/70"
              >
                You are 17 years or older
              </label>
            </div>

            {/* Login button */}
            <Button
              type="submit"
              className="rounded-full bg-primary-blue hover:bg-black/70"
              disabled={!isAdult}
            >
              Create Account
            </Button>
          </div>
        </form>
      </CardContent>

      {/* Footer with link to register */}
      <CardFooter className="flex justify-center gap-1">
        <p className="text-secondary-gray">Already have an account?</p>
        <Link href={"/sign-up"}>
          <span className="text-lg text-green-600 font-medium"> Sign In</span>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CreateAccountForm;
