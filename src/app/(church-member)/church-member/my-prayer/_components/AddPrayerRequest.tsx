"use client";
import { Button } from "@/components/ui/button";
import { DateTimePicker, TimePicker } from "@/components/ui/dayandtimepicker";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { CalendarIcon, Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
const frameworks = [
  {
    value: "hope community church",
    label: "Hope Community Church",
  },
  {
    value: "faith united church",
    label: "Faith United Church",
  },
  {
    value: "grace fellowship",
    label: "Grace Fellowship",
  },
  {
    value: "joyful living church",
    label: "Joyful Living Church",
  },
  {
    value: "peaceful way ministries",
    label: "Peaceful Way Ministries",
  },
  {
    value: "unity in spirit church",
    label: "Unity in Spirit Church",
  },
];

const AddPrayerRequest = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [startTime, setStartTime] = useState<Date | undefined>(undefined);
  const [endTime, setEndTime] = useState<Date | undefined>(undefined);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-blue text-white w-full">
          Add Prayer Request
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-screen overflow-auto">
        <form className="space-y-4">
          {/* inputs name */}
          <div className="grid w-full  items-center gap-1.5">
            <Label>Name</Label>
            <Input type="text" id="name" className="w-full border-black" />
          </div>
          {/* input prayer name */}
          <div className="grid w-full  items-center gap-1.5">
            <Label>Payer Name</Label>
            <Input type="text" id="name" className="w-full border-black" />
          </div>
          {/* input church name */}
          <div className="grid w-full  items-center gap-1.5">
            <Label>Select Church (optional)</Label>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className=" justify-between"
                >
                  {value
                    ? frameworks.find((framework) => framework.value === value)
                        ?.label
                    : "Select church..."}
                  <ChevronsUpDown className="opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className=" p-0">
                <Command>
                  <CommandInput placeholder="Search church..." />
                  <CommandList>
                    <CommandEmpty>No church found.</CommandEmpty>
                    <CommandGroup>
                      {frameworks.map((framework) => (
                        <CommandItem
                          key={framework.value}
                          value={framework.value}
                          onSelect={(currentValue) => {
                            setValue(
                              currentValue === value ? "" : currentValue
                            );
                            setOpen(false);
                          }}
                        >
                          {framework.label}
                          <Check
                            className={cn(
                              "ml-auto",
                              value === framework.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          {/* input prayer Date */}
          <div className="grid w-full  items-center gap-1.5">
            <Label>Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          {/* input prayer start time */}
          <div className="grid w-full  items-center gap-1.5">
            <Label>Start Time</Label>
            <div className="flex gap-x-10">
              <TimePicker date={startTime} onChange={setStartTime} />
            </div>
          </div>
          {/* "prayer end time" */}
          <div className="grid w-full  items-center gap-1.5">
            <Label>End Time</Label>
            <div className="flex gap-x-10">
              <TimePicker date={endTime} onChange={setEndTime} />
            </div>
          </div>

          {/* input description */}
          <div className="grid w-full  items-center gap-1.5">
            <Label>Description</Label>
            <Textarea rows={4} className="border-black"></Textarea>
          </div>
          <Button className="w-full bg-primary-blue hover:bg-black/70 duration-300">
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddPrayerRequest;
