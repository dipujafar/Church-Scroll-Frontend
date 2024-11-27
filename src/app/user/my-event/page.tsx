import SectionTitle from "@/components/shared/SectionTitle";
import MyEventContainer from "./_components/MyEventContainer";

export const metadata = {
  title: "User  Events",
  description: "User  Events",
};

const MyEventPage = () => {
  return (
    <>
      <SectionTitle title="My Events"></SectionTitle>
      <MyEventContainer></MyEventContainer>
    </>
  );
};

export default MyEventPage;
