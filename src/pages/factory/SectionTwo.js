import React from "react";
import { motion } from "framer-motion";
import { rotateX } from "../../framerMotion/motionValues";

const data = [
  {
    number: 1,
    name: "proof of quality of your brand",
    info: "Our team possesses a unique blend of skills and combines aesthetics with strategy To meet your business goals and objectives",
  },
  {
    number: 2,
    name: "value your time",
    info: "Save time and don't waste time on things that are not your priorities.",
  },
  {
    number: 3,
    name: "big profit, low cost",
    info: "A team of five people instead of one designer",
  },
];

function SectionTwo() {
  return (
    <section className="w-full h-screen">
      <div className="flex flex-col h-full">
        <article className="w-full flex flex-col md:flex-row items-center justify-between *:text-6xl md:*:text-200 px-10 pt-5">
          <h1>why</h1>
          <h1>it</h1>
          <h1>work</h1>
        </article>

        <article className="flex flex-col md:flex-row h-full pb-10">
          <div className="w-full flex items-end p-5">
            <h1 className="text-green">benefits</h1>
          </div>

          <motion.div
            variants={rotateX}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col w-full md:w-2/4 justify-end"
          >
            {data.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  variants={rotateX}
                  className="flex flex-col p-2"
                >
                  <h1 className="text-xl h-full w-20 text-center text-gray400">
                    {item.number}
                  </h1>
                  <div className="flex flex-col justify-end w-full pl-8">
                    <h1 className="text-2xl">{item.name}</h1>
                    <p className="py-3 text-gray400 text-xs normal-case">
                      {item.info}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </article>
      </div>
    </section>
  );
}

export default SectionTwo;
