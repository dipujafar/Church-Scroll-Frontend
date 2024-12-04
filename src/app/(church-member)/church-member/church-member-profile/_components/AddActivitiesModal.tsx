"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { ImageUpload, UploadedImage } from "@/components/ui/upload-images";

const AddActivitiesModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const [images, setImages] = useState<UploadedImage[]>([]);

  const handleImagesChange = (newImages: UploadedImage[]) => {
    setImages(newImages);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <h1 className="text-center font-medium text-lg ">Add Activity</h1>
          <ImageUpload onImagesChange={handleImagesChange} maxImages={5} />
        </DialogHeader>

        <div className="grid gap-y-4">
          <div className="grid gap-1.5">
            <Label>Work Name</Label>
            <Input id="name" className="col-span-3" />
          </div>
          <div className="grid gap-1.5">
            <Label>Description</Label>
            <Textarea rows={4}></Textarea>
          </div>
        </div>

        <DialogFooter>
          <Button
            type="submit"
            className="w-full bg-primary-blue hover:bg-primary-blue/80"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddActivitiesModal;
