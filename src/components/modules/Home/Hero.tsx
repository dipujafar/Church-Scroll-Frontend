import heroImage1 from "@/assets/home/hero/heroImage1.png";
import heroImage2 from "@/assets/home/hero/heroImage2.png";
import Image from "next/image";
import Container from "../../shared/Container";
import SearchBar from "@/components/shared/SearchBar";
import AnimatedText from "@/animation/AnimatedText";
import MovementElement from "@/animation/MovementElement";

const Hero = () => {
  return (
    <div className="bg-primary-color py-16 ">
      <Container className="flex-center flex-col-reverse lg:flex-row min-h-[calc(100vh-280px)] -translate-y-10 gap-x-10 gap-y-5">
        <div className="flex-1 md:space-y-8 space-y-4">
          <div className="px-4 py-2 rounded-md bg-[#fff] w-fit font-medium">
            <AnimatedText duration={0.05} delay={0.08}>
              Never stop learning
            </AnimatedText>
          </div>

          <h1 className="xl:text-7xl md:text-4xl text-2xl font-bold text-primary-blue">
            Welcome to <br /> ChurchScroll: <br /> Connect and Grow
          </h1>
          <p className="text-black/50 max-w-2xl text-lg">
            At ChurchScroll, we empower church communities to connect and
            thrive, fostering relationships and supporting local businesses.
          </p>
          <div className="xl:w-[80%] md:w-[80%] lg:w-full">
            <SearchBar></SearchBar>
          </div>
        </div>
        <div className=" md:justify-end flex-1 flex gap-x-8">
          <MovementElement duration={1} y="-20%">
            <Image
              src={heroImage1}
              alt="heroImage1"
              className="md:-translate-y-14"
            ></Image>
          </MovementElement>
          <MovementElement duration={1} y="20%">
            <Image
              src={heroImage2}
              alt="heroImage2"
              className="md:translate-y-14 hidden md:block"
            ></Image>
          </MovementElement>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
