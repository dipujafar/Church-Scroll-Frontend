import Image from "next/image";
import logo from "@/assets/image/logo.png";
import dummyProfile from "@/assets/image/dummy-profile.png";
import Container from "./Container";
import { BellRing, TableOfContents } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const ChurchMemberNavbar = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className)}>
      <Container className="flex-between  py-4">
        <Link href="/">
          <Image src={logo} alt="logo"></Image>
        </Link>

        {/*  */}
        <div className="md:flex hidden gap-x-5 items-center">
          <Link href={"/notifications"}>
            <BellRing fill="#000" className="cursor-pointer" />
          </Link>
          <Link href={"/church-admin/church-profile"}>
            <Image
              src={dummyProfile}
              alt="profile"
              width={1200}
              height={12000}
              className="size-12 cursor-pointer"
            ></Image>
          </Link>
        </div>

        {/* small device view */}
        <div className="md:hidden block">
          <Sheet>
            <SheetTrigger asChild>
              <TableOfContents size={24} />
            </SheetTrigger>
            <SheetContent className="pt-10">
              <Image src={logo} alt="logo"></Image>

              <div className="flex md:gap-x-5 gap-x-3 items-center justify-center">
                <Link href={"/notifications"}>
                  <BellRing fill="#000" className="cursor-pointer" />
                </Link>
                <Link href={"/user/profile"}>
                  <Image
                    src={dummyProfile}
                    alt="profile"
                    width={1200}
                    height={12000}
                    className="size-16 cursor-pointer"
                  ></Image>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </div>
  );
};

export default ChurchMemberNavbar;
