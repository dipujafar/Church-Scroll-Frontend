import Container from "@/components/shared/Container";
import Navbar from "@/components/shared/Navbar";
import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import MemberWorkContainer from "./MemberWorkContainer";

const MemberWorksPage = () => {
  return (
    <>
      <nav className="sticky top-0 z-20">
        <Navbar className="bg-white shadow-md"></Navbar>
      </nav>
      <Container className="mt-5 lg:mt-10">
        <SectionTitle title="My Work"></SectionTitle>
        <MemberWorkContainer></MemberWorkContainer>
      </Container>
    </>
  );
};

export default MemberWorksPage;
