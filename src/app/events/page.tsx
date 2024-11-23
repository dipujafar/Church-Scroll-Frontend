import Container from "@/components/shared/Container";
import Navbar from "@/components/shared/Navbar";
import SectionTitle from "@/components/shared/SectionTitle";
import TopBanner from "@/components/shared/TopBanner";
import React from "react";
import EventContainer from "./_components/EventContainer";
export const metadata = {
  title: "Events",
  description: "All Events on Church Scroll",
};

const EventPage = () => {
  return (
    <div className="relative">
      <Navbar className="absolute top-0 z-10 w-full bg-transparent"></Navbar>
      <TopBanner
        image="/eventsBg.png"
        title="Church Community Events"
        description="ChurchScroll offers a suite of features designed to enhance your community experience. From privacy settings to event management, we empower members to connect safely and meaningfully."
        className="text-white"
      ></TopBanner>
      <Container className="mt-5 lg:mt-10">
        <SectionTitle title="Explore Events"></SectionTitle>
        <EventContainer></EventContainer>
      </Container>
    </div>
  );
};

export default EventPage;
