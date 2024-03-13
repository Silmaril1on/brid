import React, { useState } from "react";
import projectsData from "../../../database/projectsData";
import { motion, AnimatePresence } from "framer-motion";
import { slideShow } from "../../../framerMotion/motionValues";
import RightButton from "../../../components/RightButton";
import LeftButton from "../../../components/LeftButton";
import GreenArrowSvg from "../../../components/GreenArrowSvg";
import { NavLink } from "react-router-dom";

function MobileProjectSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const left = () => {
    setDirection(-1);
    setIndex(index === 0 ? projectsData.length - 1 : index - 1);
  };

  const right = () => {
    setDirection(1);
    setIndex(index === projectsData.length - 1 ? 0 : index + 1);
  };

  return (
    <section className="center flex-col md:hidden w-full h-screen">
      <div className="relative h-500 w-full center overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            variants={slideShow}
            initial="hidden"
            animate="visible"
            key={projectsData[index].image}
            exit="exit"
            custom={direction}
            className="center absolute flex-col max-w-80"
          >
            <article className="flex flex-row h-9 mb-5 w-full items-center relative border-bottom">
              <div className="w-9 h-9">
                <GreenArrowSvg />
              </div>
              <h1 className="w-full pl-5 text-green">
                {projectsData[index].name}
              </h1>
            </article>

            <div className="overflow-hidden h-80 w-full">
              <img
                className="duration-300 hover:scale-110 h-full w-full object-cover"
                src={projectsData[index].image}
                alt="horizon_image"
              />
            </div>

            <article className="p-2 w-full space-y-2">
              <h1 className="text-sm capitalize">{projectsData[index].info}</h1>
              <div className="relative flex justify-end w-32 cursor-pointer">
                <NavLink
                  to={projectsData[index].link}
                  className="text-end text-green relative z-5"
                >
                  {projectsData[index].button}
                </NavLink>
              </div>
            </article>
          </motion.div>
        </AnimatePresence>
      </div>
      <div>
        <LeftButton onClick={left} />
        <RightButton onClick={right} />
      </div>
    </section>
  );
}

export default MobileProjectSlider;
