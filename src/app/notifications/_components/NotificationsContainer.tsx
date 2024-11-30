import { Button } from "@/components/ui/button";
import { notificationData } from "@/utils/notification-data";
import notificationBell from "@/assets/image/Notification.png";
import Image from "next/image";

const NotificationsContainer = () => {
  return (
    <div className="md:mt-10 mt-5">
      <div className="flex justify-end">
        <Button className="bg-primary-blue text-white hover:bg-black/70">
          Mark as read
        </Button>
      </div>

      <div className="flex flex-col gap-y-4 mt-5 border px-3 py-4 h-[650px] border-black/70 rounded-xl overflow-y-auto">
        {notificationData?.map((data) => (
          <div key={data?._id} className="space-y-4">
            <div className="flex items-center gap-x-2">
              <div>
                <Image src={notificationBell} alt="notification_icons"></Image>
              </div>
              <div>
                <p className="text-lg font-medium">{data?.message}</p>
                <p className="text-black/70">{data?.date}</p>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsContainer;
