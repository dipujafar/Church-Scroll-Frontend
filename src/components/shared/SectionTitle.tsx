"use client";
import AnimatedText from "@/animation/AnimatedText";
import {
  childrenVariants,
  parentVariants,
} from "@/animation/framerMotionVariants";
import { motion } from "framer-motion";
const SectionTitle = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle?: string;
}) => {
  return (
    <motion.div
      variants={parentVariants}
      initial="initial"
      whileInView="animate"
      exit="exit"
      viewport={{ once: true }}
      className="text-center space-y-2"
    >
      <motion.h1
        variants={childrenVariants}
        className="md:text-5xl text-2xl font-semibold"
      >
        {title}
      </motion.h1>
      {subTitle && (
        <motion.p
          variants={childrenVariants}
          className="text-black/60 md:text-xl lg:max-w-[80%] 2xl:w-[70%] mx-auto"
        >
          {subTitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
