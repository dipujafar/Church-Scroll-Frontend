import Navbar from "@/components/shared/Navbar";
import React from "react";
import ChurchDistanceInMap from "./_components/ChurchDistanceInMap";
import Container from "@/components/shared/Container";

const ChurchLocationPage = () => {
  return (
    <div>
      <nav className="sticky top-0 z-20 bg-white">
        <Navbar></Navbar>
      </nav>
      <Container>
        <ChurchDistanceInMap></ChurchDistanceInMap>
      </Container>
    </div>
  );
};

export default ChurchLocationPage;
