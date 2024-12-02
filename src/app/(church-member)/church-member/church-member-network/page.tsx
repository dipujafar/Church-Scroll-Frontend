import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ChurchMemberNetwork from "./_components/ChurchMemberNetwork";
import ChurchMemberConnectionRequest from "./_components/ChurchMemberConnectionRequest";

const ChurchMemberNetworkPage = () => {
  return (
    <Tabs defaultValue="church-member-network">
      <TabsList className="grid w-full grid-cols-2 ">
        <TabsTrigger
          value="church-member-network"
          className="data-[state=active]:bg-primary-blue data-[state=active]:text-white  text-black duration-300 truncate"
        >
          My Network
        </TabsTrigger>
        <TabsTrigger
          value="church-member-request"
          className="data-[state=active]:bg-primary-blue data-[state=active]:text-white text-black duration-300truncate"
        >
          Connection Request
        </TabsTrigger>
      </TabsList>
      <TabsContent value="church-member-network">
        <ChurchMemberNetwork></ChurchMemberNetwork>
      </TabsContent>
      <TabsContent value="church-member-request">
        <ChurchMemberConnectionRequest></ChurchMemberConnectionRequest>
      </TabsContent>
    </Tabs>
  );
};

export default ChurchMemberNetworkPage;
