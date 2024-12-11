import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
const TransactionDetailsModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-h-screen overflow-auto">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Transaction Details</h2>
          <div className="flex justify-between items-center  bg-gray-100 px-2 py-2 rounded-lg">
            <div className="flex items-center gap-x-2">
              <Image
                src={"/attendeesProfile.png"}
                alt="attendeesProfile"
                width={1200}
                height={1200}
                className="size-16 rounded-full"
              ></Image>
              <p className="text-lg font-medium">Robert Fox</p>
            </div>
            <p className="text-lg font-medium">$50</p>
          </div>

          <div className="flex justify-between">
            <p className="text-lg font-medium">Transaction ID : </p>
            <p className="text-lg font-medium">#123456</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg font-medium">Transaction Method : </p>
            <p className="text-lg font-medium">Stripe</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg font-medium">A/C number : </p>
            <p className="text-lg font-medium">*** **** **** *545</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg font-medium">Date : </p>
            <p className="text-lg font-medium">11 Oct, 2024</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TransactionDetailsModal;
