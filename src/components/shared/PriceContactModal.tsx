import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { AlertDialogCancel } from "@radix-ui/react-alert-dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const PriceContactModal = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-primary-blue   hover:bg-primary-blue/80">
          Contact
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center">
            Please fill the from for custom price
          </AlertDialogTitle>
          <form className="space-y-3">
            <div className="grid w-full max-w-sm items-center gap-1.5  mx-auto ">
              <Label>Price</Label>
              <Input type="number" id="price" placeholder="price" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5  mx-auto">
              <Label>Member</Label>
              <Input
                type="number"
                id="price"
                placeholder="how many members you want to add"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5  mx-auto">
              <Label>Duration</Label>
              <Input type="text" id="price" placeholder="duration" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5  mx-auto">
              <Label>Description</Label>
              <Textarea rows={5} placeholder=""></Textarea>
            </div>
          </form>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="border px-5 rounded">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction className="bg-primary-blue">
            Submit
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PriceContactModal;
