import React from "react";
import { motion } from "framer-motion";
import { staggerOpacity600 } from "../../../framerMotion/motionValues";

const text = [
  " / we are team of young professionals who create",
  " BRAND IDENTITY THAT LEAVES FINGERPRINTS ON THE MARKET",
  " & THE MINDS OF YOUR CUSTOMERS, SO THEIR NUMBERS GROW",
  " BY LEAPS & BOUNDS /",
];

function Headline() {
  return (
    <article className="md:absolute flex items-end md:pb-36 bottom-0 px-5 w-full">
      <motion.div
        variants={staggerOpacity600}
        initial="hidden"
        whileInView="visible"
        className="*:text-sm *:md:text-5xl relative"
      >
        {text.map((item, index) => {
          return (
            <motion.h1 key={index} variants={staggerOpacity600}>
              {item}
            </motion.h1>
          );
        })}
      </motion.div>
    </article>
  );
}

export default Headline;
