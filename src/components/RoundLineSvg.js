import React from "react";
import { motion } from "framer-motion";
import { animatePath } from "../framerMotion/motionValues";

function RoundLineSvg() {
  return (
    <motion.svg
      variants={animatePath}
      initial="hidden"
      className="absolute z-0"
      animate="visible"
      width={188}
      height={30}
      viewBox="0 0 188 30"
      fill="none"
    >
      <motion.path
        variants={animatePath}
        d="M1.00006 23.2642C51.1411 5.01219 108.835 -0.380603 163.481 2.15872C174.801 2.68474 196.304 3.8097 180.864 16.3374C169.367 25.6661 152.788 27.1461 137.698 27.9687C115.028 29.2045 91.9166 28.505 69.185 26.9306C58.2117 26.1705 52.0127 26.3586 64.2824 22.1488"
        stroke="#2cdc00"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </motion.svg>
  );
}

export default RoundLineSvg;
