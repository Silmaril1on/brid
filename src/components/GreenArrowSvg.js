import React from "react";
import { motion } from "framer-motion";
import { animatePath } from "../framerMotion/motionValues";

function GreenArrowSvg() {
  return (
    <motion.svg
      variants={animatePath}
      initial="hidden"
      animate="visible"
      width="100%"
      height="100%"
      viewBox="-10 0 70 70"
      fill="none"
    >
      <motion.path
        variants={animatePath}
        d="M4.6792 37.9688C16.6238 39.185 28.7511 38.1798 40.9071 37.1398"
        stroke="#2CDC00"
        strokeWidth={3}
        strokeLinecap="round"
      />
      <motion.path
        variants={animatePath}
        d="M22.5566 58.1543C27.1564 49.5883 35.6336 41.7604 43.204 36.7228C43.8387 36.3004 50.4621 34.1112 48.1503 38.2061C44.7406 44.2456 27.1337 15.4028 25.8239 13.0406"
        stroke="#2CDC00"
        strokeWidth={3}
        strokeLinecap="round"
      />
    </motion.svg>
  );
}

export default GreenArrowSvg;
