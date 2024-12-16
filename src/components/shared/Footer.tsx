import Image from "next/image";

import logo from "@/assets/image/logo.png";
import Link from "next/link";
import Container from "./Container";
import facebookIcon from "@/assets/icons/facebookIcon.png";
import instagramIcon from "@/assets/icons/instagram.png";
import tiktokIcon from "@/assets/icons/tiktok.png";
import sparkTechLogo from "@/assets/image/SparkTech-Logo.png";

const Footer = () => {
  return (
    <div className="bg-primary-sky py-16">
      <Container>
        <div className="flex flex-col flex-wrap xl:justify-between justify-center gap-y-10 gap-x-2 md:flex-row">
          {/* Logo and description */}
          <div>
            <Image
              src={logo}
              alt="logo"
              width={1200}
              height={1200}
              className="w-auto h-auto mx-auto"
            />
            <p className="mt-4 max-w-[320px] text-primary-white/70 mx-auto">
              Dedicated to fostering community, growth, and service,
              ChurchScroll.com is a place where church communities are welcome
              to connect and thrive.
            </p>
          </div>

          {/* Links and supports informations */}
          <div className="flex xl:justify-between justify-center items-center flex-wrap gap-6 lg:gap-28">
            {/* Account Links */}
            <div>
              <h3 className="mb-4 font-semibold text-primary-white">
                Get Involved
              </h3>
              <ul className="space-y-2 text-primary-white">
                <li>
                  <Link href="/#howToWork">How it works</Link>
                </li>

                <li>
                  <Link href="/plan-pricing">Pricing</Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-4 font-semibold text-primary-white">
                Quick Links
              </h3>
              <ul className="space-y-2 text-primary-white">
                <li>
                  <Link href="/privacy-policy">Privacy Policy </Link>
                </li>
                <li>
                  <Link href="/terms-condition">Term of Use</Link>
                </li>
                <li>
                  <Link href="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* Support Information */}
            <div>
              <h3 className="mb-4 font-semibold text-primary-white">Support</h3>
              <ul className="space-y-2 text-primary-white">
                <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
                <li>team@churchscroll.com</li>
                <li>+88015-88888-9999</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 mt-5">
          {/* social media links */}
          <div className="flex gap-x-2 items-center xl:justify-start justify-center  w-full mt-2 xl:ml-16">
            <Link
              href="https://www.instagram.com/churchscroll?igsh=Znc1Njhld3FudXNm"
              target="_blank"
            >
              <Image
                src={instagramIcon}
                alt="LinkedInIcon"
                className="size-7"
              ></Image>
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61551473257006&rdid=X4Ofuk1uhr1kUQUr&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18KusYJYoR%2F#"
              target="_blank"
            >
              <Image
                src={facebookIcon}
                alt="facebookIcon"
                className="size-7"
              ></Image>
            </Link>
            <Link
              href="https://www.tiktok.com/@churchscroll?_t=ZT-8sEixGTVpFe&_r=1"
              target="_blank"
            >
              <Image src={tiktokIcon} alt="xIcon" className="size-7"></Image>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
