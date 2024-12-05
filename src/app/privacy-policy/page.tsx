import Container from "@/components/shared/Container";
import Navbar from "@/components/shared/Navbar";
import React from "react";
import PrivacyPolicyContainer from "./_components/PrivacyPolicyContainer";

const PrivacyPolicyPage = () => {
  return (
    <div>
      <nav className="sticky top-0 z-20 bg-white">
        <Navbar></Navbar>
      </nav>
      <Container className="mt-10">
        <PrivacyPolicyContainer></PrivacyPolicyContainer>
      </Container>
    </div>
  );
};

export default PrivacyPolicyPage;
