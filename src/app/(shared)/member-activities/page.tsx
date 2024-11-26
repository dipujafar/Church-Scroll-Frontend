import Container from "@/components/shared/Container";
import SearchBar from "@/components/shared/SearchBar";
import SectionTitle from "@/components/shared/SectionTitle";
import MemberActivitiesContainer from "./MemberActivitiesContainer";
import Navbar from "@/components/shared/Navbar";

const MemberActivitiesPage = () => {
  return (
    <>
      <nav className="sticky top-0 z-20">
        <Navbar className="bg-white shadow-md"></Navbar>
      </nav>
      <Container className="mt-5 lg:mt-10">
        <SectionTitle title="Explore Activity"></SectionTitle>

        <MemberActivitiesContainer></MemberActivitiesContainer>
      </Container>
    </>
  );
};

export default MemberActivitiesPage;
