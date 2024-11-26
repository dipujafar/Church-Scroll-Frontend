import React from "react";
import SingleActivitiesContainer from "./_components/SingleActivitiesContainer";
import Navbar from "@/components/shared/Navbar";
import Container from "@/components/shared/Container";

const MemberSingleActivities = () => {
  return (
    <div>
      <nav className="sticky top-0 z-20">
        <Navbar className="bg-white shadow-md"></Navbar>
      </nav>
      <Container className="mt-10 md:mt-5">
        <SingleActivitiesContainer></SingleActivitiesContainer>
      </Container>
    </div>
  );
};

export default MemberSingleActivities;
