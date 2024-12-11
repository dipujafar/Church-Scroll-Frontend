"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { TimePicker } from "@/components/ui/dayandtimepicker";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { UploadedImage } from "@/components/ui/upload-photo";
import { EventPhotoUpload } from "@/components/ui/upload-event-photo";

const AddEventModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const [date, setDate] = useState<Date>();
  const [startTime, setStartTime] = useState<Date | undefined>(undefined);
  const [endTime, setEndTime] = useState<Date | undefined>(undefined);
  const [images, setImages] = useState<UploadedImage[]>([]);

  const handleImagesChange = (newImages: UploadedImage[]) => {
    setImages(newImages);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-h-screen overflow-auto">
        <form className="space-y-4">
          <div>
            <Label>Upload Image</Label>
            <EventPhotoUpload
              onImagesChange={handleImagesChange}
              maxImages={5}
            />
          </div>

          {/* input event name */}
          <div className="grid w-full  items-center gap-1.5">
            <Label>Event Name</Label>
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
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
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

export default AddEventModal;
