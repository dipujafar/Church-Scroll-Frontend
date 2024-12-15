import PriceContactModal from "@/components/shared/PriceContactModal";
import { Button } from "@/components/ui/button";
import { Dot } from "lucide-react";

const PlanPricingContainer = () => {
  const packages = [
    {
      _id: 1,
      monthlyPlan: {
        duration: "monthly",
        price: 29,
      },
      yearlyPlan: {
        duration: "yearly",
        price: 299,
      },
      title: "Flexible Monthly Plan",

      memberLimit: "1-500",
    },
    {
      _id: 1,
      monthlyPlan: {
        duration: "monthly",
        price: 55,
      },
      yearlyPlan: {
        duration: "yearly",
        price: 549,
      },
      title: "Flexible Monthly Plan",

      memberLimit: "501-1,000",
    },
  ];
  return (
    <div>
      <div className="text-center">
        <h4 className="text-xl text-primary-blue font-semibold">Pricing</h4>
        <h1 className="md:text-4xl text-2xl font-bold mt-1">
          Choose the Perfect Plan{" "}
        </h1>
      </div>
      {/* subscription packages */}

      <div className="mt-10 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-5 xl:w-[90%] mx-auto">
        {packages.map((data) => (
          <div className="flex flex-col justify-center items-center bg-primary-color py-7 px-5 rounded-xl gap-y-3 text-center">
            <h1 className=" font-medium text-black/80">
              For {data?.memberLimit} Church Members
            </h1>

            {/* monthly plan */}
            <div>
              <h3 className="text-2xl font-semibold">
                ${data?.monthlyPlan?.price}/
                <span className="text-lg font-medium">monthly</span>
                <br />
              </h3>
              <p className="text-lg font-medium text-black">
                Flexible Monthly Plan
              </p>
            </div>

            <p className="text-xl font-medium text-black">or</p>

            <div>
              <h3 className="text-2xl font-semibold">
                ${data?.yearlyPlan?.price}/
                <span className="text-lg font-medium">yearly</span>
                <br />
              </h3>
              <p className="text-lg font-medium text-black">
                Flexible Yearly Plan
              </p>
            </div>

            <div className="flex justify-center gap-x-3">
              <Button
                variant={"outline"}
                className="border-primary-blue text-primary-blue"
              >
                Monthly
              </Button>
              <Button className="bg-primary-blue   hover:bg-primary-blue/80">
                Yearly
              </Button>
            </div>
          </div>
        ))}
        {/* custom plan */}
        <div className=" bg-primary-color py-7 px-5 rounded-xl space-y-5 text-center">
          <h1 className=" text-2xl font-medium text-black/80">
            For 1,001+ Church Members
          </h1>

          {/* features */}
          <div className="min-h-[150px] ">
            <p className="text-lg">Please contact for pricing</p>
          </div>

          <PriceContactModal></PriceContactModal>
        </div>
      </div>

      <div>
        <p className="text-center mt-10 text-lg max-w-sm mx-auto text-primary-blue">
          **If your church would like to join but does not have the budget,
          please contact us!
        </p>
      </div>
    </div>
  );
};

export default PlanPricingContainer;
