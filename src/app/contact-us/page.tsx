import Container from "@/components/shared/Container";
import React from "react";
import ContactUsForm from "./_components/ContactUsForm";
import Navbar from "@/components/shared/Navbar";

const ContactUsPage = () => {
  return (
    <>
      <nav className="sticky top-0 z-20 bg-white">
        <Navbar></Navbar>
      </nav>
      <Container className="flex justify-center items-center min-h-[calc(100vh-280px)]">
        <ContactUsForm></ContactUsForm>
      </Container>
    </>
  );
};

export default ContactUsPage;
