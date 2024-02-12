import React from "react";
import { motion } from "framer-motion";
import { animatedHeader } from "../framerMotion/motionValues";

function AnimatedWords({ text, className }) {
  const words = text.split(" ");
  return (
    <motion.div
      variants={animatedHeader}
      initial="hidden"
      whileInView="visible"
      className={className}
    >
      {words.map((word, index) => {
        return (
          <motion.span
            variants={animatedHeader}
            className={className}
            key={index}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.div>
  );
}

export default AnimatedWords;
