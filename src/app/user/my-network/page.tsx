import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ConnectionRequest from "./_components/ConnectionRequest";
import Network from "./_components/Network";

const MyNetworkPage = () => {
  return (
    <Tabs defaultValue="network">
      <TabsList className="grid w-full grid-cols-2 ">
        <TabsTrigger
          value="network"
          className="data-[state=active]:bg-primary-blue data-[state=active]:text-white  text-black duration-300 truncate"
        >
          My Network
        </TabsTrigger>
        <TabsTrigger
          value="request"
          className="data-[state=active]:bg-primary-blue data-[state=active]:text-white text-black duration-300truncate"
        >
          Connection Request
        </TabsTrigger>
      </TabsList>
      <TabsContent value="network">
        <Network></Network>
      </TabsContent>
      <TabsContent value="request">
        <ConnectionRequest></ConnectionRequest>
      </TabsContent>
    </Tabs>
  );
};

export default MyNetworkPage;
