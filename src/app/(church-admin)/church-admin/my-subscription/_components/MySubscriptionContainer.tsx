import { Button } from "@/components/ui/button";
import Link from "next/link";

const MySubscriptionContainer = () => {
  return (
    <div className=" bg-primary-color py-7 px-5 rounded-xl gap-y-5 space-y-5 xl:w-[70%] mx-auto mt-5">
      <h1 className="md:text-4xl text-2xl font-semibold capitalize">Monthly</h1>
      <p className="text-lg">
        Church admins who need short-term access or want to try out
        ChurchScroll's features without a long-term commitment.
      </p>

      <div className="flex justify-between items-center">
        <h2 className="md:text-4xl text-2xl font-semibold capitalize">
          $29/month
        </h2>
        <Link href={"/plan-pricing"}>
          <Button className="bg-primary-blue  hover:bg-primary-blue/80">
            Upgrade Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MySubscriptionContainer;
