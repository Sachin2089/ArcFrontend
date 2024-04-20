import { Variants } from "framer-motion";

const addFadeup: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      staggerChildren: 0.3,
    },
  },
};

export default addFadeup;
