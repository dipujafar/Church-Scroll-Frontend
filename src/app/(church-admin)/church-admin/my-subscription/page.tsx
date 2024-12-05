import MySubscriptionContainer from "./_components/MySubscriptionContainer";

export const metadata = {
  title: "Church Admin  Subscription",
  description: "Church Admin  Subscription",
};

const MySubscriptionPage = () => {
  return (
    <div>
      <div className="space-y-3">
        <p className="text-2xl font-bold text-center text-primary-blue">
          Pricing
        </p>
        <h3 className="text-5xl font-bold text-center">My Plan</h3>
        <p className="bg-red-500 text-center text-white w-fit mx-auto px-4 rounded-full">
          Expired – October 22, 2024
        </p>
      </div>

      <MySubscriptionContainer></MySubscriptionContainer>
    </div>
  );
};

export default MySubscriptionPage;
