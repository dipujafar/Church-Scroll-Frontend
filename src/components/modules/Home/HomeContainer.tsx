import React from "react";
import Hero from "./Hero";
import FeaturedChurches from "./FeaturedChurches/FeaturedChurches";
import Container from "@/components/shared/Container";
import UpcomingEvent from "./UpcomingEvents/UpcomingEvent";
import GetInTouch from "./GetInTouch";

const HomeContainer = () => {
  return (
    <div className="lg:space-y-16 space-y-8">
      <Hero></Hero>
      <Container className="lg:space-y-16 space-y-8">
        <FeaturedChurches></FeaturedChurches>
        <UpcomingEvent></UpcomingEvent>
        <GetInTouch></GetInTouch>
      </Container>
    </div>
  );
};

export default HomeContainer;
