import React, { useState } from "react";
import { motion } from "framer-motion";
import { staggerOpacity200 } from "../../framerMotion/motionValues";

const data = [
  {
    id: 0,
    name: "name surename",
    position: "creative director",
  },
  {
    id: 1,
    name: "name surename",
    position: "art director",
  },
  {
    id: 2,
    name: "name surename",
    position: "graphic designer",
  },
  {
    id: 3,
    name: "name surename",
    position: "project manager",
  },
];

function SectionFour() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-gray600 center relative flex-col h-auto md:h-screen w-full">
      <header className="w-full *:text-4xl *:md:text-7xl flex flex-row justify-between px-5 mt-5">
        <h1 className="text-green">factory</h1>
        <h1>team</h1>
      </header>
      <section className="w-full my-10 md:my-20">
        <motion.div
          variants={staggerOpacity200}
          initial="hidden"
          whileInView="visible"
          className="center flex-col md:flex-row md:space-x-4 relative z-2 space-y-16 md:space-y-0"
        >
          {data.map((item) => {
            return (
              <motion.div
                key={item.id}
                variants={staggerOpacity200}
                className="w-64 md:w-80 flex-col center cursor-pointer"
                onClick={() => setActive(item.id)}
              >
                <div className="w-full h-72 bg-gray400"></div>
                <article className="bg-gray800 w-full center flex-col p-2 md:p-5 relative">
                  <h1 className="">{item.name}</h1>
                  {active === item.id ? (
                    <motion.h1
                      variants={staggerOpacity200}
                      initial="hidden"
                      animate="visible"
                      className="text-center absolute bg-gray800 w-full p-2 md:p-5 -bottom-10 md:-bottom-16"
                    >
                      {item.position}
                    </motion.h1>
                  ) : null}
                </article>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
      <div className="w-full bg-black h-64 absolute bottom-0 z-0"></div>
    </section>
  );
}

export default SectionFour;
