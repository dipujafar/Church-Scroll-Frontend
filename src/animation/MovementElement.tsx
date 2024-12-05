"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type TProsType = {
  children: ReactNode;
  duration: number;
  className?: string;
  x?: string;
  y?: string;
  delay?: number;
};

const MovementElement = ({
  children,
  duration,
  className,
  delay,
  x,
  y,
}: TProsType) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: x, y: y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: x, y: y }}
      viewport={{ once: true }}
      transition={{ duration: duration, delay: delay, ease: "easeIn" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};

export default MovementElement;
