import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ChurchMemberNetwork from "./_components/ChurchMemberNetwork";
import ChurchMemberConnectionRequest from "./_components/ChurchMemberConnectionRequest";
import ConnectionRequest from "./_components/ConnectionRequest";

const ChurchMemberNetworkPage = () => {
  return (
    <Tabs defaultValue="church-member-network">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 gap-y-1  ">
        <TabsTrigger
          value="church-member-network"
          className="data-[state=active]:bg-primary-blue data-[state=active]:text-white  text-black duration-300 truncate border"
        >
          My Network
        </TabsTrigger>
        <TabsTrigger
          value="church-member-request"
          className="data-[state=active]:bg-primary-blue data-[state=active]:text-white text-black duration-300truncate border ml-2"
        >
          Connection Request
        </TabsTrigger>
        <TabsTrigger
          value="church-member-connection-request"
          className="data-[state=active]:bg-primary-blue data-[state=active]:text-white text-black duration-300truncate border ml-2"
        >
          My Request
        </TabsTrigger>
      </TabsList>
      <TabsContent value="church-member-network" className="mt-10">
        <ChurchMemberNetwork></ChurchMemberNetwork>
      </TabsContent>
      <TabsContent value="church-member-request" className="mt-10">
        <ChurchMemberConnectionRequest></ChurchMemberConnectionRequest>
      </TabsContent>
      <TabsContent value="church-member-connection-request" className="mt-10">
        <ConnectionRequest></ConnectionRequest>
      </TabsContent>
    </Tabs>
  );
};

export default ChurchMemberNetworkPage;
