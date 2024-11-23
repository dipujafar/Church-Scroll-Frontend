import Image from "next/image";
import logo from "@/assets/image/logo.png";
import dummyProfile from "@/assets/image/dummy-profile.png";
import Container from "./Container";
import { BellRing, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
const navLinks = [
  {
    label: "Explore",
    href: "/",
  },
  {
    label: "Events",
    href: "/",
  },
  {
    label: "Resource",
    href: "/",
  },
];

const Navbar = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className)}>
      <Container className="flex-between py-8">
        <Image src={logo} alt="logo"></Image>

        {/*  */}
        <ul className="flex gap-x-5 items-center">
          {navLinks.map((link) => (
            <li key={link.href} className="text-lg font-medium">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-x-5 items-center">
          <BellRing fill="#000" className="cursor-pointer" />
          <Mail className="cursor-pointer" />
          <Image
            src={dummyProfile}
            alt="profile"
            width={1200}
            height={12000}
            className="size-20 cursor-pointer"
          ></Image>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
