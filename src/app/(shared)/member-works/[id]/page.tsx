import Navbar from "@/components/shared/Navbar";
import React from "react";
import SingleWorkContainer from "./_components/SingleWorkContainer";
import Container from "@/components/shared/Container";

const MemberSingleWorksPage = () => {
  return (
    <div>
      <nav className="sticky top-0 z-20">
        <Navbar className="bg-white shadow-md"></Navbar>
      </nav>
      <Container className="mt-10 md:mt-5">
        <SingleWorkContainer></SingleWorkContainer>
      </Container>
    </div>
  );
};

export default MemberSingleWorksPage;
