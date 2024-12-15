"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";

const AddMemberModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-h-screen overflow-auto">
        <DialogHeader>
          <h1 className="text-center font-medium text-2xl text-primary-blue ">
            Generate Code
          </h1>
          <p className="text-center">
            Do you want to generate code for a new member?
          </p>
        </DialogHeader>

        <DialogFooter>
          <div className="flex justify-between gap-x-2">
            <Button
              type="submit"
              variant={"outline"}
              className="w-full border-red-500 text-red-500"
            >
              cancel
            </Button>
            <Button
              type="submit"
              className="w-full bg-primary-blue hover:bg-primary-blue/80"
            >
              Generate
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddMemberModal;
