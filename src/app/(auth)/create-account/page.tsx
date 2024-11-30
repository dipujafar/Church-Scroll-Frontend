import Container from "@/components/shared/Container";
import Navbar from "@/components/shared/Navbar";
import React from "react";
import CreateAccountForm from "./_components/CreateUserForm";

const CreateAccountPage = () => {
  return (
    <div>
      <nav className="sticky top-0 z-20 bg-white">
        <Navbar></Navbar>
      </nav>
      <Container className="mt-5 flex justify-center items-center min-h-[calc(100vh-280px)]">
        <CreateAccountForm></CreateAccountForm>
      </Container>
    </div>
  );
};

export default CreateAccountPage;
