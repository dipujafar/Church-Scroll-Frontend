import Image from "next/image";
import logo from "@/assets/logo.png";
import dummyProfile from "@/assets/dummy-profile.png";
import Container from "./Container";
import { BellRing, Mail } from "lucide-react";
const navLinks = [
  {
    label: "Explore",
    href: "/",
  },
  {
    label: "Events",
    href: "/about",
  },
  {
    label: "Resource",
    href: "/contact",
  },
];

const Navbar = ({ className }: { className?: string }) => {
  return (
    <Container className="flex-between py-8">
      <Image src={logo} alt="logo"></Image>

      {/*  */}
      <ul className="flex gap-x-5 items-center">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
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
  );
};

export default Navbar;
