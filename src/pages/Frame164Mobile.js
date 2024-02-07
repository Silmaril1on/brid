import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slideShow } from "../framerMotion/motionValues";
import image1 from "../assets/image_8.png";
import image2 from "../assets/image_35.png";
import image3 from "../assets/image_47.png";
import HeaderTwo from "../components/HeaderTwo";
import GreenArrowSvg from "../components/GreenArrowSvg";
import RoundLineSvg from "../components/RoundLineSvg";
import RightButton from "../components/RightButton";
import LeftButton from "../components/LeftButton";

const horizonData = [
  {
    id: 0,
    name: "horizon",
    image: image1,
    info: "digital marketing agency from germany",
    button: "branding, packaging",
  },
  {
    id: 1,
    name: "horizon",
    image: image2,
    info: "digital marketing agency from germany",
    button: "branding",
  },
  {
    id: 2,
    name: "horizon",
    image: image3,
    info: "digital marketing agency from germany",
    button: "branding",
  },
];

function Frame164Mobile() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const left = () => {
    setDirection(-1);
    setIndex(index === 0 ? horizonData.length - 1 : index - 1);
  };

  const right = () => {
    setDirection(1);
    setIndex(index === horizonData.length - 1 ? 0 : index + 1);
  };

  return (
    <section className="center flex-col md:hidden w-full">
      <HeaderTwo />
      <div className="relative h-400 w-full center overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            variants={slideShow}
            initial="hidden"
            animate="visible"
            key={horizonData[index].image}
            exit="exit"
            custom={direction}
            className="center absolute flex-col max-w-80"
          >
            <article className="flex flex-row h-9 mb-5 w-full items-center relative border-bottom">
              <div className="w-9 h-9">
                <GreenArrowSvg />
              </div>
              <h1 className="w-full pl-5 text-green">
                {horizonData[index].name}
              </h1>
            </article>
            <div className="overflow-hidden">
              <img
                className="duration-300 hover:scale-110"
                src={horizonData[index].image}
                alt="horizon_image"
              />
            </div>
            <article className="p-2 w-full space-y-2">
              <h1 className="text-sm capitalize">{horizonData[index].info}</h1>
              <div className="relative flex justify-end">
                <RoundLineSvg />
                <button className="text-end text-green">
                  {horizonData[index].button}
                </button>
              </div>
            </article>
          </motion.div>
        </AnimatePresence>
      </div>
      <div>
        <LeftButton onClick={left} />
        <RightButton onClick={right} />
      </div>
      <article className="w-full flex justify-end mt-5">
        <h1
          className="mr-5 text-xl cursor-pointer
         underline underline-offset-2 text-gray500 duration-300 hover:text-gray300"
        >
          view all projects
        </h1>
      </article>
    </section>
  );
}

export default Frame164Mobile;
