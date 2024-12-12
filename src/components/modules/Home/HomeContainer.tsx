import React from "react";
import Hero from "./Hero";
import FeaturedChurches from "./FeaturedChurches/FeaturedChurches";
import Container from "@/components/shared/Container";
import UpcomingEvent from "./UpcomingEvents/UpcomingEvent";
import GetInTouch from "./GetInTouch";
import HowTOWork from "./HowTOWork";
import AllPrayerRequest from "./AllPrayerRequest/AllPrayerRequest";

const HomeContainer = () => {
  return (
    <div className="xl:space-y-32 lg:space-y-20 space-y-10">
      <Hero></Hero>
      <Container className="xl:space-y-32 lg:space-y-20 space-y-10">
        <FeaturedChurches></FeaturedChurches>
        <UpcomingEvent></UpcomingEvent>
        <AllPrayerRequest></AllPrayerRequest>
        <HowTOWork></HowTOWork>
        <GetInTouch></GetInTouch>
      </Container>
    </div>
  );
};

export default HomeContainer;
