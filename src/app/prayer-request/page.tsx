import Container from "@/components/shared/Container";
import React from "react";
import PrayerRequestContainer from "./_components/PrayerRequestContainer";
import Navbar from "@/components/shared/Navbar";
export const metadata = {
  title: "Prayer Request",
  description: "Completed Your Prayer With Us",
};

const PayerRequestPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <Container>
        <PrayerRequestContainer></PrayerRequestContainer>
      </Container>
    </>
  );
};

export default PayerRequestPage;
