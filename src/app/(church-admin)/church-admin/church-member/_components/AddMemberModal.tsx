"use client";
import { Button } from "@/components/ui/button";
import CountryStateCitySelector from "@/components/ui/country-state-city-selector";
import { DatePicker } from "@/components/ui/date-picker";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PhoneInput } from "@/components/ui/phone-input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller, useForm } from "react-hook-form";

const AddMemberModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const { control, setValue, register } = useForm();
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-h-screen overflow-auto">
        <DialogHeader>
          <h1 className="text-center font-medium text-2xl text-primary-blue ">
            Member Details
          </h1>
        </DialogHeader>
        <form className="space-y-4">
          {/* input first name */}
          <div className="grid gap-1.5">
            <Label>First Name</Label>
            <Input id="firstName" className="w-full bg-gray-100" />
          </div>
          {/* input last name */}
          <div className="grid gap-1.5">
            <Label>Last Name</Label>
            <Input id="lastName" className="w-full bg-gray-100" />
          </div>
          {/* input email*/}
          <div className="grid gap-1.5">
            <Label>Email</Label>
            <Input type="email" id="email" className="w-full bg-gray-100" />
          </div>

          {/* input title */}
          <div className="grid gap-1.5">
            <Label>Title</Label>
            <Input id="title" className="w-full bg-gray-100" />
          </div>

          {/* input Gender */}
          <div className="grid w-full  items-center gap-1.5">
            <Label className="font-semibold text-lg">Gender</Label>
            <Select defaultValue="male">
              <SelectTrigger className="w-full  bg-gray-100">
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
          <div className="grid w-full items-center gap-1.5 ">
            <Label className="font-semibold text-lg text-primary-black/80">
              Address
            </Label>
            {/* input addresss */}
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
        </form>
        <DialogFooter>
          <Button
            type="submit"
            className="w-full bg-primary-blue hover:bg-primary-blue/80"
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddMemberModal;
