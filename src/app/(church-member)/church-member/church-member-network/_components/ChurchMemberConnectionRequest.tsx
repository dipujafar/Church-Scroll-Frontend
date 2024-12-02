import { Button } from "@/components/ui/button";
import { requestData } from "@/utils/request-data";
import Image from "next/image";
import Link from "next/link";

const ChurchMemberConnectionRequest = () => {
  return (
    <div className="border p-5 border-black/80 rounded-md space-y-4 mt-5">
      {requestData?.map((data) => (
        <div key={data?._id}>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-x-5 gap-y-2">
            <div className="flex items-center gap-x-4">
              <Link href={"/member-profile?memberId=1"}>
                <Image
                  src={data?.image}
                  alt="profile"
                  width={1200}
                  height={1200}
                  className="size-16 rounded-full"
                ></Image>
              </Link>
              <div className="space-y-0">
                <Link href={"/member-profile?memberId=1"}>
                  <h4 className="font-semibold">{data?.name}</h4>
                </Link>
                <p>{data?.designation}</p>
                <Link href="/churches/2">
                  <p className="text-light-blue underline">
                    {data?.churchName}
                  </p>
                </Link>
              </div>
            </div>
            <div className="flex gap-x-2">
              <Link href="/message">
                <Button className="bg-foundation-color text-black border hover:bg-primary-blue/40 border-primary-blue px-8">
                  Ignore
                </Button>
              </Link>
              <Link href="/message">
                <Button className="bg-primary-blue px-8">Accept</Button>
              </Link>
            </div>
          </div>
          <hr className="mt-3 border-black/50" />
        </div>
      ))}
    </div>
  );
};

export default ChurchMemberConnectionRequest;
