import PrayerCard from "@/components/shared/PrayerCard";
import { Button } from "@/components/ui/button";
import { prayerData } from "@/utils/prayer-data";

const ChurchPrayerRequestContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5">
      {prayerData?.map((data) => (
        <PrayerCard key={data?._id} data={data}>
          <Button
            variant={"outline"}
            className="px-10 text-red-600 border-red-600"
          >
            Delete
          </Button>
        </PrayerCard>
      ))}
    </div>
  );
};

export default ChurchPrayerRequestContainer;
