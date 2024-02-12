import React from "react";
import { motion } from "framer-motion";
import { staggerOpacity600 } from "../../../framerMotion/motionValues";

function Headline() {
  return (
    <article className="md:absolute flex items-end pb-36 bottom-0 px-5 w-full ">
      <motion.div
        variants={staggerOpacity600}
        initial="hidden"
        whileInView="visible"
        className="*:text-3xl *:md:text-5xl"
      >
        <motion.h1 variants={staggerOpacity600}>
          \ we are team of young professionals who create
        </motion.h1>
        <motion.h1 variants={staggerOpacity600}>
          BRAND IDENTITY THAT LEAVES FINGERPRINTS ON THE MARKET
        </motion.h1>
        <motion.h1 variants={staggerOpacity600}>
          & THE MINDS OF YOUR CUSTOMERS, SO THEIR NUMBERS GROW
        </motion.h1>
        <motion.h1 variants={staggerOpacity600}>BY LEAPS & BOUNDS \</motion.h1>
      </motion.div>
    </article>
  );
}

export default Headline;
