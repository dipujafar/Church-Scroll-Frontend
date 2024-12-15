"use client";
import { cn } from "@/lib/utils";
import Container from "./Container";
import { motion } from "framer-motion";
import {
  childrenVariants,
  parentVariants,
} from "@/animation/HeroSectionMotion";

type TPropsType = {
  image: string;
  title: string;
  description?: string;
  className?: string;
};

const TopBanner = ({ image, title, description, className }: TPropsType) => {
  return (
    <div
      className={cn(
        "min-h-[80vh]  bg-fixed bg-cover bg-center relative bg-opacity-20 bg-gray-500",
        className
      )}
      style={{ backgroundImage: `url(${image})` }}
    >
      <Container>
        <div className="overflow-x-hidden">
          <div className="absolute   top-1/2 left-1/2 -translate-x-1/2 transform -translate-y-1/2 w-full ">
            <motion.div
              variants={parentVariants}
              initial="initial"
              whileInView="animate"
              exit="exit"
              viewport={{ once: true }}
              className="  space-y-3 "
            >
              <motion.h1
                variants={childrenVariants}
                className="lg:text-6xl md:text-5xl text-3xl font-bold text-center max-w-5xl mx-auto"
              >
                {title}
              </motion.h1>
              <motion.p
                variants={childrenVariants}
                className="md:text-2xl font-medium text-center max-w-5xl mx-auto "
              >
                {description}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopBanner;
