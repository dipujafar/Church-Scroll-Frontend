import { Dispatch, SetStateAction } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import Link from "next/link";
import { X } from "lucide-react";

const CreateSponsorModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader className="space-y-5">
          <AlertDialogTitle className="uppercase text-center text-2xl text-primary-blue font-medium">
            Sponsor a Church
          </AlertDialogTitle>
          <div className="flex mt-5 justify-center gap-x-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className="bg-primary-blue hover:bg-black/7
           duration-300 text-lg"
                >
                  $5
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <p>
                  It will redirect paypal payment form when implement backend
                  for $5 sponsor.
                </p>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className="bg-primary-blue hover:bg-black/7
           duration-300 text-lg"
                >
                  $20
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <p>
                  It will redirect paypal payment form when implement backend
                  for $20 sponsor.
                </p>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className="bg-primary-blue hover:bg-black/7
           duration-300 text-lg"
                >
                  $50
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <p>
                  It will redirect paypal payment form when implement backend
                  for $50 sponsor.
                </p>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className="bg-primary-blue hover:bg-black/7
           duration-300 text-lg"
                >
                  $custom
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <p>
                  It will redirect paypal payment form when implement backend
                  for custom sponsor.
                </p>
              </PopoverContent>
            </Popover>
          </div>

          <div className="mt-10 text-center text-lg">
            <p>Would you like this to go to a specific church? </p>
            <div className="mt-1 space-x-2">
              <Link href={"/churches/#churches"}>
                <Button
                  className="bg-primary-blue  hover:bg-black/7
           duration-300 "
                >
                  Yes
                </Button>
              </Link>
              <Button
                onClick={() => setOpen(false)}
                variant={"outline"}
                className="text-primary-blue border-primary-blue hover:bg-black/7
           duration-300 "
              >
                No
              </Button>
            </div>
          </div>
          <p className="text-center">
            <span className="text-red-500">**</span>Unless specified the
            sponsorship will go into a general fund for churches that use it.
          </p>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="absolute top-0 right-0 border-none shadow-none bg-red-500 rounded-bl-3xl hover:bg-red-400">
            <X size={28} color="#fff" />
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CreateSponsorModal;
