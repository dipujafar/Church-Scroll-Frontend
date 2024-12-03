import ChurchMemberNavbar from "@/components/shared/ChurchMemberNavbar";
import Container from "@/components/shared/Container";
import { ReactNode } from "react";
import ChurchAdminSidebar from "./_components/ChurchAdminSidebar";

const ChurchAdminTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <nav className="sticky top-0 z-20">
        <ChurchMemberNavbar className="bg-white"></ChurchMemberNavbar>
      </nav>
      <div className="min-h-screen bg-white py-10">
        <Container className="items-start gap-x-8 lg:flex">
          <div className="lg:sticky lg:top-40">
            <ChurchAdminSidebar></ChurchAdminSidebar>
          </div>
          <div className="flex-grow overflow-hidden">{children}</div>
        </Container>
      </div>
    </div>
  );
};

export default ChurchAdminTemplate;
