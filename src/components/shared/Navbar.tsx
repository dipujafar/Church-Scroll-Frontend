"use client";
import Image from "next/image";
// import logo from "@/assets/image/logo.png";
import logo from "@/assets/image/logo-updated.png";
import dummyProfile from "@/assets/image/dummy-profile.png";
import Container from "./Container";
import { BellRing, Mail, TableOfContents } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import CreateSponsorModal from "./CreateSponsorModal";
import { useRouter } from "next/navigation";
const navLinks = [
  {
    label: "Churches",
    href: "/churches",
  },
  {
    label: "Events",
    href: "/events",
  },
  {
    label: "Resources",
    href: "/resources",
  },
];

const Navbar = ({
  className,
  btnClass,
}: {
  className?: string;
  btnClass?: string;
}) => {
  const [user, setUser] = useState(false);
  const [email, setEmail] = useState("");
  const [openSponsorModal, setOpenSponsorModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    localStorage.getItem("user") ? setUser(true) : setUser(false);
    const userMail = localStorage.getItem("email");
    if (!userMail) return;
    setEmail(userMail);
  }, [user, email]);

  const handleRedirectUserDashboard = () => {
    if (email === "churchadmin@gmail.com") {
      router.push("/church-admin/church-profile");
      return;
    }
    if (email === "churchmember@gmail.com") {
      router.push("/church-member/church-member-profile");
      return;
    }

    router.push("/user/profile");
  };

  return (
    <div className={cn(className)}>
      <Container className="flex-between items-center gap-x-2 py-4">
        <Link
          href="/"
          className="inline-block  w-[65%] sm:w-1/2 lg:w-1/6 h-auto"
        >
          <Image
            src={logo}
            alt="logo"
            className="-translate-y-2 brightness-105 "
          ></Image>
        </Link>

        {/* nav links */}
        <ul className="md:flex lg:gap-x-5 gap-x-2 items-center hidden">
          {navLinks.map((link) => (
            <li key={link.href} className="relative text-lg font-medium group ">
              <Link
                href={link.href}
                className="block group-hover:text-primary-blue"
              >
                {link.label}
              </Link>
              <span className="absolute left-0 bottom-0 h-[2px] w-full bg-black transform scale-x-0 transition-transform duration-700 ease-in-out group-hover:scale-x-100 origin-left"></span>
              <span className="absolute left-0 bottom-0 h-[2px] w-full bg-black transform scale-x-0 transition-transform duration-700 ease-in-out group-hover:scale-x-100 origin-right"></span>
            </li>
          ))}
        </ul>

        {user ? (
          <div className="md:flex hidden xl:gap-x-5 gap-x-2 items-center">
            <Button
              onClick={() => setOpenSponsorModal(true)}
              variant={"outline"}
              className={cn(
                "bg-transparent  border-primary-blue text-lg text-primary-blue",
                btnClass
              )}
            >
              Sponsor
            </Button>
            <Link href={"/notifications"}>
              <BellRing fill="#000" className="cursor-pointer" />
            </Link>
            <Link href={"/message"}>
              <Mail className="cursor-pointer" />
            </Link>

            <Image
              src={dummyProfile}
              onClick={() => handleRedirectUserDashboard()}
              alt="profile"
              width={1200}
              height={12000}
              className="size-12 cursor-pointer"
            ></Image>
          </div>
        ) : (
          <div className="md:flex hidden lg:gap-x-2 gap-x-1">
            <Button
              onClick={() => setOpenSponsorModal(true)}
              variant={"outline"}
              className={cn(
                "bg-transparent  border-primary-blue text-lg text-primary-blue",
                btnClass
              )}
            >
              Sponsor
            </Button>

            <Link href="/sign-in">
              <Button
                variant={"outline"}
                className={cn(
                  "bg-transparent  border-primary-blue text-lg text-primary-blue",
                  btnClass
                )}
              >
                Login
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button className="bg-primary-blue text-lg hover:bg-primary-blue/80">
                Sign Up
              </Button>
            </Link>
          </div>
        )}

        {/* small device view */}
        <div className="md:hidden block ">
          <Sheet>
            <SheetTrigger asChild>
              <TableOfContents size={24} />
            </SheetTrigger>
            <SheetContent className="pt-10">
              <Image src={logo} alt="logo" className="mx-auto"></Image>

              {/*  */}
              <ul className="flex flex-col gap-y-2 items-center mt-3">
                {navLinks.map((link) => (
                  <li
                    key={link.href}
                    className="relative text-lg font-medium group "
                  >
                    <Link
                      href={link.href}
                      className="block group-hover:text-primary-blue"
                    >
                      {link.label}
                    </Link>
                    <span className="absolute left-0 bottom-0 h-[2px] w-full bg-black transform scale-x-0 transition-transform duration-700 ease-in-out group-hover:scale-x-100 origin-left"></span>
                    <span className="absolute left-0 bottom-0 h-[2px] w-full bg-black transform scale-x-0 transition-transform duration-700 ease-in-out group-hover:scale-x-100 origin-right"></span>
                  </li>
                ))}
              </ul>
              {user ? (
                <div className="flex flex-wrap md:gap-x-5 gap-3 items-center justify-center mt-5">
                  <Button
                    onClick={() => setOpenSponsorModal(true)}
                    variant={"outline"}
                    className={cn(
                      "bg-transparent  border-primary-blue text-lg text-primary-blue",
                      btnClass
                    )}
                  >
                    Sponsor
                  </Button>
                  <Link href={"/notifications"}>
                    <BellRing fill="#000" className="cursor-pointer" />
                  </Link>
                  <Link href={"/message"}>
                    <Mail className="cursor-pointer" />
                  </Link>

                  <Image
                    src={dummyProfile}
                    onClick={() => handleRedirectUserDashboard()}
                    alt="profile"
                    width={1200}
                    height={12000}
                    className="size-12 cursor-pointer"
                  ></Image>
                </div>
              ) : (
                <div className="flex flex-wrap gap-1 items-center justify-center mt-5">
                  <Button
                    onClick={() => setOpenSponsorModal(true)}
                    variant={"outline"}
                    className={cn(
                      "bg-transparent  border-primary-blue text-lg text-primary-blue",
                      btnClass
                    )}
                  >
                    Sponsor
                  </Button>
                  <Link href="/sign-in">
                    <Button
                      variant={"outline"}
                      className={cn(
                        "bg-transparent  border-primary-blue text-lg text-primary-blue",
                        btnClass
                      )}
                    >
                      Login
                    </Button>
                  </Link>
                  <Link href="/sign-up">
                    <Button className="bg-primary-blue text-lg hover:bg-primary-blue/80">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </Container>
      <CreateSponsorModal
        open={openSponsorModal}
        setOpen={setOpenSponsorModal}
      ></CreateSponsorModal>
    </div>
  );
};

export default Navbar;
