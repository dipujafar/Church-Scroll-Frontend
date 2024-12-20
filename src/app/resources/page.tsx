import Container from "@/components/shared/Container";
import Navbar from "@/components/shared/Navbar";
import SectionTitle from "@/components/shared/SectionTitle";
import TopBanner from "@/components/shared/TopBanner";
import ResourcesContainer from "./_components/ResourcesContainer";

const ResourcesPage = () => {
  return (
    <div className="relative">
      <Navbar
        className="absolute top-0 z-20 w-full text-white "
        btnClass="text-white border-white"
      ></Navbar>

      <TopBanner
        image="/resources-1.jpg"
        title="Our Talented Hands: Member Skills and Services"
        className="text-white/80 bg-opacity-50"
        style={{ backgroundPosition: "100% 30%" }}
        backgroundImage="linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url('/resources-1.jpg')"
      ></TopBanner>

      <Container className="mt-5 lg:mt-10">
        <SectionTitle title="Explore Resources"></SectionTitle>
        <ResourcesContainer></ResourcesContainer>
      </Container>
    </div>
  );
};

export default ResourcesPage;
