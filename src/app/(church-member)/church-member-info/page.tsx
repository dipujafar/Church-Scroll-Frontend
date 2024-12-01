import React from "react";
import ChurchMemberInfoForm from "./_components/ChurchMemberInfoForm";
import Navbar from "@/components/shared/Navbar";
import Container from "@/components/shared/Container";

const ChurchMemberInfoPage = () => {
  return (
    <div>
      <nav className="sticky top-0 z-20 bg-white">
        <Navbar></Navbar>
      </nav>
      <Container className="mt-5 flex justify-center items-center min-h-[calc(100vh-280px)]">
        <ChurchMemberInfoForm></ChurchMemberInfoForm>
      </Container>
    </div>
  );
};

export default ChurchMemberInfoPage;
