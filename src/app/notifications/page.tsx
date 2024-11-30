import Container from "@/components/shared/Container";
import Navbar from "@/components/shared/Navbar";
import React from "react";
import NotificationsContainer from "./_components/NotificationsContainer";

const NotificationPage = () => {
  return (
    <div>
      <nav className="sticky top-0 z-20">
        <Navbar className="bg-white shadow-md"></Navbar>
      </nav>
      <Container>
        <NotificationsContainer></NotificationsContainer>
      </Container>
    </div>
  );
};

export default NotificationPage;
