import { Button } from "@/components/ui/button";

const PlanPricingContainer = () => {
  const packages = [
    {
      _id: 1,
      duration: "monthly",
      price: 29,
      title: "Flexible Monthly Plan",
      description:
        "Church admins who need short-term access or want to try out ChurchScroll's features without a long-term commitment.",
    },
    {
      _id: 2,
      duration: "yearly",
      price: 299,
      title: "Best Value Annual Plan",
      description:
        "Church admins who want year-round access to all key ChurchScroll features and save with an annual commitment.",
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

      <div className="mt-10 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2  gap-5 xl:w-[60%] mx-auto">
        {packages.map((data) => (
          <div className="flex flex-col justify-center items-center bg-primary-color py-7 px-5 rounded-xl gap-y-5 text-center">
            <h1 className="text-2xl font-semibold capitalize">
              {data?.duration}
            </h1>
            <div>
              <h3 className="text-2xl font-semibold">
                ${data?.price}/
                <span className="text-lg font-medium">
                  {data?.duration === "yearly" ? "year" : "month"}
                </span>
              </h3>
              <p className="text-lg font-medium text-black">{data?.title}</p>
            </div>

            <p>{data?.description}</p>

            <Button className="bg-primary-blue  w-[60%] hover:bg-primary-blue/80">
              Get Started
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanPricingContainer;
