import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ConnectionRequest from "./_components/ConnectionRequest";
import Network from "./_components/Network";

const MyNetworkPage = () => {
  return (
    <Tabs defaultValue="account">
      <TabsList className="grid w-full grid-cols-2 ">
        <TabsTrigger
          value="account"
          className="data-[state=active]:bg-primary-blue data-[state=active]:text-white  text-black duration-300 truncate"
        >
          Connection Request
        </TabsTrigger>
        <TabsTrigger
          value="password"
          className="data-[state=active]:bg-primary-blue data-[state=active]:text-white text-black duration-300truncate"
        >
          My Network
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <ConnectionRequest></ConnectionRequest>
      </TabsContent>
      <TabsContent value="password">
        <Network></Network>
      </TabsContent>
    </Tabs>
  );
};

export default MyNetworkPage;
