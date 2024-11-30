import React from "react";
import MessageContainer from "./_components/MessageContainer";
import Navbar from "@/components/shared/Navbar";

const MessagePage = () => {
  return (
    <div>
      <nav className="sticky top-0 z-20 bg-white">
        <Navbar></Navbar>
      </nav>
      <MessageContainer></MessageContainer>
    </div>
  );
};

export default MessagePage;
