import Container from "@/components/shared/Container";
import Navbar from "@/components/shared/Navbar";
import SectionTitle from "@/components/shared/SectionTitle";
import TopBanner from "@/components/shared/TopBanner";
import ResourcesContainer from "./_components/ResourcesContainer";

const ResourcesPage = () => {
  return (
    <div className="relative">
      <Navbar
        className="absolute top-0 z-20 w-full text-white"
        btnClass="text-white border-white"
      ></Navbar>
      <TopBanner
        image="/resources.jpg"
        title="Our Talented Hands: Member Skills and Services"
        description="A gallery or section highlighting various professional and creative talents within the congregation."
        className="text-white/80 bg-opacity-50"
      ></TopBanner>
      <Container className="mt-5 lg:mt-10">
        <SectionTitle title="Explore Resource"></SectionTitle>
        <ResourcesContainer></ResourcesContainer>
      </Container>
    </div>
  );
};

export default ResourcesPage;
