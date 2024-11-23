import React from "react";
import Hero from "./Hero";
import FeaturedChurches from "./FeaturedChurches/FeaturedChurches";
import Container from "@/components/shared/Container";
import UpcomingEvent from "./UpcomingEvents/UpcomingEvent";

const HomeContainer = () => {
  return (
    <div className="lg:space-y-12 space-y-6">
      <Hero></Hero>
      <Container className="lg:space-y-12 space-y-6">
        <FeaturedChurches></FeaturedChurches>
        <UpcomingEvent></UpcomingEvent>
      </Container>
    </div>
  );
};

export default HomeContainer;
