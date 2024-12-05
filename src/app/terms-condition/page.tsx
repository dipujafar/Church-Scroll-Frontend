import Container from "@/components/shared/Container";
import Navbar from "@/components/shared/Navbar";
import React from "react";
import TermsCondition from "./components/TermsCondition";

const TermsConditionPage = () => {
  return (
    <div>
      <nav className="sticky top-0 z-20 bg-white">
        <Navbar></Navbar>
      </nav>
      <Container className="mt-10">
        <TermsCondition></TermsCondition>
      </Container>
    </div>
  );
};

export default TermsConditionPage;
