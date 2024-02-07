import React, { useState } from "react";
import ArrowSvg from "../components/ArrowSvg";
import GreenArrowSvg from "../components/GreenArrowSvg";
import { motion } from "framer-motion";
import { slideFromTop } from "../framerMotion/motionValues";

const servicesData = [
  {
    id: 0,
    name: "consulting & strategy",
  },
  {
    id: 1,
    name: "naming & copywriting",
  },
  {
    id: 2,
    name: "brand identity",
  },
  {
    id: 3,
    name: "packaging",
  },
  {
    id: 4,
    name: "logotype",
  },
  {
    id: 5,
    name: "illustration",
  },
  {
    id: 6,
    name: "typography",
  },
  {
    id: 7,
    name: "print",
  },
  {
    id: 8,
    name: "editorial",
  },
  {
    id: 9,
    name: "ui & ux design",
  },
  {
    id: 10,
    name: "digital marketing",
  },
  {
    id: 11,
    name: "video content",
  },
];

function Frame155() {
  const [active, setActive] = useState(0);

  return (
    <section className="center flex-col w-full">
      <div className="center flex-col w-full">
        <div className=" w-full">
          <h1 className="w-full text-end text-6xl md:text-9xl pr-2 md:pr-10">
            services
          </h1>
        </div>
        <motion.div
          variants={slideFromTop}
          initial="hidden"
          whileInView="visible"
          className="mt-10 px-2 md:px-10 w-full space-y-1 flex items-start flex-col"
        >
          {servicesData.map((item) => {
            return (
              <motion.div
                variants={slideFromTop}
                className="center overflow-hidden cursor-pointer w-full md:w-2/4 flex-row space-x-4 md:space-x-10 h-8"
                key={item.id}
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
      </div>
    </section>
  );
}

export default Frame155;
