import Container from "@/components/shared/Container";
import Navbar from "@/components/shared/Navbar";
import SectionTitle from "@/components/shared/SectionTitle";
import MembersContainer from "./_components/MembersContainer";

export const metadata = {
  title: "Members",
  description: "All Members on Church Scroll",
};

const MembersPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Container>
        <SectionTitle title="Explore People"></SectionTitle>
        <MembersContainer></MembersContainer>
      </Container>
    </div>
  );
};

export default MembersPage;
