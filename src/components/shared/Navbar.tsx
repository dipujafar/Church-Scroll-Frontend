import Image from "next/image";
import logo from "@/assets/image/logo.png";
import dummyProfile from "@/assets/image/dummy-profile.png";
import Container from "./Container";
import { BellRing, Mail, TableOfContents } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
const navLinks = [
  {
    label: "Explore",
    href: "/churches",
  },
  {
    label: "Events",
    href: "/events",
  },
  {
    label: "Resource",
    href: "/resources",
  },
];

const Navbar = ({ className }: { className?: string }) => {
  let user = false;
  return (
    <div className={cn(className)}>
      <Container className="flex-between  py-4">
        <Link href="/">
          <Image src={logo} alt="logo"></Image>
        </Link>

        {/*  */}
        <ul className="md:flex gap-x-5 items-center hidden ">
          {navLinks.map((link) => (
            <li key={link.href} className="text-lg font-medium">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        {user ? (
          <div className="md:flex hidden gap-x-5 items-center">
            <Link href={"/notifications"}>
              <BellRing fill="#000" className="cursor-pointer" />
            </Link>
            <Link href={"/message"}>
              <Mail className="cursor-pointer" />
            </Link>
            <Link href={"/user/profile"}>
              <Image
                src={dummyProfile}
                alt="profile"
                width={1200}
                height={12000}
                className="size-20 cursor-pointer"
              ></Image>
            </Link>
          </div>
        ) : (
          <div className="md:flex hidden gap-2">
            <Link href="/sign-in">
              <Button
                variant={"outline"}
                className="bg-transparent  border-primary-blue text-lg"
              >
                Login
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button className="bg-primary-blue text-lg hover:bg-primary-blue/80">
                Sing Up
              </Button>
            </Link>
          </div>
        )}

        {/* small device view */}
        <div className="md:hidden block">
          <Sheet>
            <SheetTrigger asChild>
              <TableOfContents size={24} />
            </SheetTrigger>
            <SheetContent className="pt-10">
              <Image src={logo} alt="logo"></Image>

              {/*  */}
              <ul className="flex flex-col gap-x-5 items-center">
                {navLinks.map((link) => (
                  <li key={link.href} className="text-lg font-medium">
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
              {user ? (
                <div className="flex md:gap-x-5 gap-x-3 items-center justify-center">
                  <Link href={"/notifications"}>
                    <BellRing fill="#000" className="cursor-pointer" />
                  </Link>
                  <Link href={"/message"}>
                    <Mail className="cursor-pointer" />
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
              ) : (
                <div className="flex md:gap-x-5 gap-x-3 items-center justify-center mt-5">
                  <Link href="/sign-in">
                    <Button
                      variant={"outline"}
                      className="bg-transparent  border-primary-blue text-lg"
                    >
                      Login
                    </Button>
                  </Link>
                  <Link href="/sign-up">
                    <Button className="bg-primary-blue text-lg hover:bg-primary-blue/80">
                      Sing Up
                    </Button>
                  </Link>
                </div>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
