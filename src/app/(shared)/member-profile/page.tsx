import Navbar from "@/components/shared/Navbar";
import React from "react";
import MemberProfileContainer from "./_components/MemberProfileContainer";

const MemberProfile = () => {
  return (
    <div>
      <nav className="sticky top-0 z-20">
        <Navbar className="bg-white shadow-md"></Navbar>
      </nav>
      <MemberProfileContainer></MemberProfileContainer>
    </div>
  );
};

export default MemberProfile;
