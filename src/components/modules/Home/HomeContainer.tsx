import React from "react";
import Hero from "./Hero";
import FeaturedChurches from "./FeaturedChurches/FeaturedChurches";
import Container from "@/components/shared/Container";

const HomeContainer = () => {
  return (
    <div className="lg:space-y-12 space-y-6">
      <Hero></Hero>
      <Container>
        <FeaturedChurches></FeaturedChurches>
      </Container>
    </div>
  );
};

export default HomeContainer;
