import React from "react";
import { motion } from "framer-motion";
import { staggerOpacity200 } from "../framerMotion/motionValues";

function AnimatedLetters({ text, className }) {
  const words = text.split("");
  return (
    <motion.div
      variants={staggerOpacity200}
      initial="hidden"
      whileInView="visible"
      className={className}
    >
      {words.map((word, index) => {
        return (
          <motion.span
            variants={staggerOpacity200}
            className="text-6xl md:text-9xl"
            key={index}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.div>
  );
}

export default AnimatedLetters;
