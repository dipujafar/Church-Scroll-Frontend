import { cn } from "@/lib/utils";
import Container from "./Container";

type TPropsType = {
  image: string;
  title: string;
  description: string;
  className?: string;
};

const TopBanner = ({ image, title, description, className }: TPropsType) => {
  return (
    <div
      className={cn(
        "min-h-screen  bg-fixed bg-cover bg-center relative bg-opacity-20 bg-gray-500",
        className
      )}
      style={{ backgroundImage: `url(${image})` }}
    >
      <Container>
        <div className="overflow-x-hidden">
          <div className="absolute   top-1/2 left-1/2 -translate-x-1/2 transform -translate-y-1/2 w-full ">
            <div className="  space-y-3 ">
              <h1 className=" lg:text-6xl md:text-5xl text-3xl font-bold text-center">
                {title}
              </h1>
              <p className="md:text-2xl font-medium text-center max-w-5xl mx-auto ">
                {description}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopBanner;
