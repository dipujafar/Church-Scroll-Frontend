import Container from "@/components/shared/Container";
import React from "react";
import SingleEventContainer from "./_components/SingleEventContainer";
import Navbar from "@/components/shared/Navbar";

const SingleEventPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <Container>
        <SingleEventContainer></SingleEventContainer>
      </Container>
    </>
  );
};

export default SingleEventPage;
