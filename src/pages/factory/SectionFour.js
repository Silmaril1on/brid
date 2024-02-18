import React from "react";
import UserSvg from "../../components/UserSvg";
import ElipseSvg from "../../components/ElipseSvg";
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
  return (
    <section className="bg-gray800 center flex-col w-full">
      <header className="w-full">
        <h1 className="text-4xl md:text-5xl w-full md:w-2/4 p-2 md:m-16">
          <span className="text-green">factory</span> is staffed by a
          proffesional team
        </h1>
      </header>
      <article className="w-full my-20">
        <motion.div
          variants={staggerOpacity200}
          initial="hidden"
          whileInView="visible"
          className="center flex-col md:flex-row justify-around"
        >
          {data.map((item) => {
            return (
              <motion.div
                key={item.id}
                variants={staggerOpacity200}
                className="w-64 md:w-80 flex-col center"
              >
                <div>
                  <UserSvg />
                </div>
                <div className="w-full center flex-col mt-4">
                  <h1 className="text-sm">{item.name}</h1>
                  <button className="relative uppercase p-5 center">
                    <ElipseSvg />
                    {item.position}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </article>
    </section>
  );
}

export default SectionFour;
