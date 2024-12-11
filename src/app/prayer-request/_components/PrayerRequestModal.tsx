"use client";
import { Button } from "@/components/ui/button";
import { DateTimePicker, TimePicker } from "@/components/ui/dayandtimepicker";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const PrayerRequestModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [startTime, setStartTime] = useState<Date | undefined>(undefined);
  const [endTime, setEndTime] = useState<Date | undefined>(undefined);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
          {/* input prayer Date */}
          <div className="grid w-fit  items-center gap-1.5">
            <Label>Date</Label>
            <div className="flex gap-x-10">
              <DateTimePicker
                granularity="day"
                value={date}
                onChange={setDate}
              />
            </div>
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

export default PrayerRequestModal;
