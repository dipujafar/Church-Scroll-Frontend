import Container from "@/components/shared/Container";
import Navbar from "@/components/shared/Navbar";
import SectionTitle from "@/components/shared/SectionTitle";
import TopBanner from "@/components/shared/TopBanner";
import ResourcesContainer from "./_components/ResourcesContainer";

const ResourcesPage = () => {
  return (
    <div className="relative">
      <Navbar
        logoClass="bg-[#a1a6a9] px-2 py-1 bg-opacity-70 rounded"
        className="absolute top-0 z-20 w-full text-white"
        btnClass="text-white border-white"
      ></Navbar>
      <TopBanner
        image="/resources.jpg"
        title="Our Talented Hands: Member Skills and Services"
        className="text-white/80 bg-opacity-50"
      ></TopBanner>
      <Container className="mt-5 lg:mt-10">
        <SectionTitle title="Explore Resources"></SectionTitle>
        <ResourcesContainer></ResourcesContainer>
      </Container>
    </div>
  );
};

export default ResourcesPage;
