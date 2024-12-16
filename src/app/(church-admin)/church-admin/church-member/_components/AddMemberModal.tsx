"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Copy } from "lucide-react";
import { useState } from "react";
import DownloadPDF from "./DownloadPDF";

const generateCode = (quantity: number = 1) => {
  const codes = [];
  for (let i = 0; i < quantity; i++) {
    const code = Math.floor(Math.random() * 1000000);
    codes.push(code.toString());
  }

  return codes;
};

const AddMemberModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const [codes, setCodes] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(0);

  const copyToClipboard = () => {
    // Join the codes with a newline or comma as desired
    const codesText = codes.join("\n"); // Change '\n' to ',' if you prefer comma separation
    navigator.clipboard.writeText(codesText);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-h-screen overflow-auto">
        {codes?.length ? (
          <div className="mt-2">
            <DialogHeader>
              <button
                onClick={copyToClipboard}
                className="flex justify-end mt-2"
              >
                <span role="img" aria-label="copy">
                  <Copy size={18} className="hover:scale-95" />
                </span>
              </button>
              <div className="grid md:grid-cols-6 grid-cols-3 gap-x-3">
                {codes.map((code, inx) => (
                  <h1
                    key={code}
                    className="font-medium text-xl text-primary-blue flex ml-1"
                  >
                    <span>{code}</span> {codes?.length !== inx + 1 && ","}
                  </h1>
                ))}
              </div>
              <p className=" text-primary-blue text-sm">
                **Copy the codes and send it to the church member for
                registration
              </p>
              <div className="flex items-center justify-center gap-x-2">
                <Button
                  onClick={() => {
                    setCodes([]);
                    setQuantity(0);
                  }}
                  variant={"outline"}
                  className="flex-1  border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white"
                >
                  Done
                </Button>
                <div className="flex-1">
                  <PDFDownloadLink
                    fileName="generated-codes.pdf"
                    document={<DownloadPDF data={codes} />}
                  >
                    <p className="px-10 border py-[6px] bg-primary-blue text-white rounded-md text-center">
                      Download
                    </p>
                  </PDFDownloadLink>
                </div>
              </div>
            </DialogHeader>
          </div>
        ) : (
          <div>
            <DialogHeader>
              <h1 className="text-center font-medium text-2xl text-primary-blue ">
                Generate Code
              </h1>
              <p className="text-center">
                Do you want to generate code for a new members?
              </p>
              <div className="">
                <Input
                  type="number"
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="border border-black mt-2 w-[80%] mx-auto"
                  placeholder="write how code you want to generate"
                ></Input>
              </div>
            </DialogHeader>

            <DialogFooter className="mt-5">
              <div className="flex justify-between gap-x-2">
                <Button
                  disabled={quantity === 0}
                  type="submit"
                  className="w-full bg-primary-blue hover:bg-primary-blue/80"
                  onClick={() => setCodes(generateCode(quantity))}
                >
                  Generate
                </Button>
              </div>
            </DialogFooter>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AddMemberModal;
