import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function HeadlineOne() {
  let { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  });

  let x = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.h1
      style={{ x }}
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 1, delay: 1.2 }}
      className="text-end pr-2 md:pr-10"
    >
      create your
    </motion.h1>
  );
}

export default HeadlineOne;
