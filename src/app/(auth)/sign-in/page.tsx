import React from "react";
import SignInForm from "./_components/SignInForm";
import Navbar from "@/components/shared/Navbar";
import Container from "@/components/shared/Container";

const SignInPage = () => {
  return (
    <>
      <nav className="sticky top-0 z-20 bg-white">
        <Navbar></Navbar>
      </nav>
      <Container className="mt-5 flex justify-center items-center min-h-[calc(100vh-280px)]">
        <SignInForm></SignInForm>
      </Container>
    </>
  );
};

export default SignInPage;
