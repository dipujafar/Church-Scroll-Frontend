import React from "react";
import ProfileContainer from "./_components/ProfileContainer";

export const metadata = {
  title: "User Profile",
  description: "User Profile",
};

const UserProfilePage = () => {
  return (
    <div>
      <ProfileContainer></ProfileContainer>
    </div>
  );
};

export default UserProfilePage;
