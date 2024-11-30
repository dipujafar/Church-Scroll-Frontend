import Navbar from "@/components/shared/Navbar";
import React from "react";
import SignUpContainer from "./_components/SignUpContainer";
import Container from "@/components/shared/Container";

const SignUpPage = () => {
  return (
    <div>
      <nav className="sticky top-0 z-20 bg-white">
        <Navbar></Navbar>
      </nav>
      <Container className="mt-5 flex justify-center items-center min-h-[calc(100vh-280px)]">
        <SignUpContainer></SignUpContainer>
      </Container>
    </div>
  );
};

export default SignUpPage;
