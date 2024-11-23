import Container from "@/components/shared/Container";
import Navbar from "@/components/shared/Navbar";
import SearchBar from "@/components/shared/SearchBar";
import SectionTitle from "@/components/shared/SectionTitle";
import TopBanner from "@/components/shared/TopBanner";
import React from "react";
import ChurchesContainer from "./_components/ChurchesContainer";
export const metadata = {
  title: "Churches",
  description: "Exploring All Churches on ChurchScroll",
};

const ChurchesPage = () => {
  return (
    <div className="relative">
      <Navbar className="absolute top-0 z-10 w-full bg-transparent"></Navbar>
      <TopBanner
        image="/featuredBg.webp"
        title="Featured Churches"
        description="Connect with vibrant church communities active on ChurchScroll."
      ></TopBanner>
      <Container className="mt-5 lg:mt-10">
        <SectionTitle title="Explore Churches"></SectionTitle>
        <div className="mt-5 xl:w-[50%] lg:w-[70%] md:w-[85%] mx-auto">
          <SearchBar></SearchBar>
        </div>
        <ChurchesContainer></ChurchesContainer>
      </Container>
    </div>
  );
};

export default ChurchesPage;
