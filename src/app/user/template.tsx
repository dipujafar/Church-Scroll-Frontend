import Container from "@/components/shared/Container";
import { ReactNode } from "react";
import UserDashboardSidebar from "./_components/UserDashboardSidebar";
import Navbar from "@/components/shared/Navbar";

const Template = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <nav className="sticky top-0 z-20">
        <Navbar className="bg-white"></Navbar>
      </nav>
      <div className="min-h-screen bg-white py-10">
        <Container className="items-start gap-x-8 xl:flex">
          <UserDashboardSidebar></UserDashboardSidebar>
          <div className="flex-grow">{children}</div>
        </Container>
      </div>
    </div>
  );
};

export default Template;
