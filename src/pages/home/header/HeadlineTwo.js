import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function HeadlineTwo() {
  let { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  });

  let x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  return (
    <motion.h1
      style={{ x }}
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 1, delay: 1.2 }}
      className="pl-2 md:pl-10 absolute bottom-0 left-0"
    >
      brand id
    </motion.h1>
  );
}

export default HeadlineTwo;
