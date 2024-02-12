import React, { useState } from "react";
import GreenArrowSvg from "../../../components/GreenArrowSvg";
import ArrowSvg from "../../../components/ArrowSvg";
import { motion } from "framer-motion";
import { slideFromTop } from "../../../framerMotion/motionValues";
import servicesData from "../../../database/servicesData";

function ServicesList() {
  const [active, setActive] = useState(0);

  return (
    <motion.div
      variants={slideFromTop}
      initial="hidden"
      whileInView="visible"
      className="mt-10 px-2 md:px-10 w-full space-y-1 flex items-start flex-col"
    >
      {servicesData.map((item) => {
        return (
          <motion.div
            key={item.id}
            variants={slideFromTop}
            className="center overflow-hidden cursor-pointer w-full md:w-2/4 flex-row space-x-4 md:space-x-10 h-8"
          >
            <div className="h-12">
              {active === item.id ? <GreenArrowSvg /> : <ArrowSvg />}
            </div>
            <h1
              onClick={() => setActive(item.id)}
              className={
                active === item.id
                  ? "text-lg md:text-4xl w-full text-green duration-300"
                  : "text-lg md:text-4xl w-full duration-300"
              }
            >
              {item.name}
            </h1>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default ServicesList;
