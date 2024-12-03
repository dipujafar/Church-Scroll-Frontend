import ChurchMemberNavbar from "@/components/shared/ChurchMemberNavbar";
import Container from "@/components/shared/Container";
import PlanPricingContainer from "./_components/PlanPricingContainer";

const PlanPricingPage = () => {
  return (
    <div>
      <nav className="sticky top-0 z-20 bg-white">
        <ChurchMemberNavbar></ChurchMemberNavbar>
        <Container className="mt-10">
          <PlanPricingContainer></PlanPricingContainer>
        </Container>
      </nav>
    </div>
  );
};

export default PlanPricingPage;
