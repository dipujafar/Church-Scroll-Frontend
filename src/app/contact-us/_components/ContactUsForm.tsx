"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type TFormInput = {
  firstName: string;
  lastName: string;
  email: string;
  description: string;
};

const ContactUsForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormInput>();

  const onSubmit: SubmitHandler<TFormInput> = async (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="lg:w-3/4 mx-auto w-full">
      <div className="mt-6 w-full space-y-5">
        {/* input first name and last name */}
        <div className="flex flex-col items-center gap-x-8 gap-y-5 md:flex-row">
          <div className="w-full">
            <Input
              {...register("firstName", {
                required: "First name is required",
              })}
              id="firstName"
              placeholder="First name"
              className="rounded-full py-5 bg-gray-100"
            />
            {errors.firstName && (
              <p className="text-sm text-red-500">{errors.firstName.message}</p>
            )}
          </div>
          <div className="w-full">
            <Input
              {...register("lastName", {
                required: "Last name is required",
              })}
              id="lastName"
              placeholder="Last name"
              className="rounded-full py-5 bg-gray-100"
            />
            {errors.lastName && (
              <p className="text-sm text-red-500">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        {/* input email */}
        <div className="w-full ">
          <Input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Please enter a valid email address",
              },
            })}
            id="email"
            placeholder="Your mail"
            className="rounded-full py-5 bg-gray-100"
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* input description */}
        <div className="w-full">
          <Textarea
            rows={5}
            {...register("description", {
              required: "Message is required",
            })}
            className="bg-gray-100"
            placeholder="Type your message here"
          />
          {errors.description && (
            <p className="text-sm text-red-500">{errors.description.message}</p>
          )}
        </div>

        {/* submit button */}
        <Button className="w-full rounded-full bg-primary-blue" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ContactUsForm;
