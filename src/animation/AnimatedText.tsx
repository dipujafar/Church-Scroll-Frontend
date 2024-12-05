"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type TProsType = {
  children: string;
  duration: number;
  className?: string;
  x?: string;
  y?: string;
  delay: number;
};

const AnimatedText = ({
  children,
  duration,
  className,
  x,
  y,
  delay,
}: TProsType) => {
  return (
    <>
      {children?.split("")?.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, x: x, y: x }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: x, y: y }}
          transition={{
            duration: duration,
            delay: index * delay,
            ease: "easeIn",
          }}
          viewport={{ once: true }}
          className={cn("inline-block", className)}
        >
          {char === " " ? <span>&nbsp;</span> : char}
        </motion.span>
      ))}
    </>
  );
};

export default AnimatedText;
