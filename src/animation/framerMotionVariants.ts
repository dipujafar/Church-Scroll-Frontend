export const childrenVariants = {
  initial: {
    y: "-10%",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.2, easeIn: "easeInOut" },
  },
  exit: {
    y: "-10%",
    opacity: 0,
  },
};

export const parentVariants = {
  initial: {
    y: "-10%",
    opacity: 0,
  },

  animate: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
  exit: {
    y: "-10%",
    opacity: 0,
  },
};
