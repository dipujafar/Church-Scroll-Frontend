import Container from "@/components/shared/Container";
import Navbar from "@/components/shared/Navbar";
import React from "react";
import SingleChurch from "./_components/SingleChurch";

const SingleChurchDetails = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Container>
        <SingleChurch></SingleChurch>
      </Container>
    </div>
  );
};

export default SingleChurchDetails;
