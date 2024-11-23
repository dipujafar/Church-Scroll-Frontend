import Container from "./Container";

type TPropsType = {
  image: string;
  title: string;
  description: string;
};

const TopBanner = ({ image, title, description }: TPropsType) => {
  return (
    <div
      className=" min-h-screen  bg-fixed md:bg-cover bg-center relative bg-opacity-80"
      style={{ backgroundImage: `url(${image})` }}
    >
      <Container>
        <div className="overflow-x-hidden">
          <div className="absolute   top-1/2 left-1/2 -translate-x-1/2 transform -translate-y-1/2 w-full ">
            <div className="  space-y-3 ">
              <h1 className=" lg:text-6xl md:text-5xl text-3xl font-bold text-center">
                {title}
              </h1>
              <p className="md:text-2xl font-medium text-center ">
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
