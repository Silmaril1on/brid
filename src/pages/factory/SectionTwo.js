import React from "react";
import RoundedLineSvg from "../../components/RoundLineSvg";
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
    <section className="w-full bg-gray800 flex flex-col">
      <article className="flex flex-col w-64 h-64 md:h-44 justify-between items-start pl-4 py-3">
        <h1> hire creative team and graphic designer to help you scale</h1>
        <button className="uppercase relative">
          <RoundedLineSvg />
          get started
        </button>
      </article>
      <div className="center flex-col md:flex-row items-start">
        <article className="w-full md:w-10/12 bg-black pt-20">
          <motion.div
            variants={rotateX}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col w-full md:w-10/12 md:ml-10 md:my-10 space-y-4"
          >
            {data.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  variants={rotateX}
                  className="flex flex-row p-2"
                >
                  <h1 className="text-9xl h-full w-20 text-center text-white">
                    {item.number}
                  </h1>
                  <div className="flex flex-col justify-end w-full pl-8">
                    <h1 className="text-green text-2xl md:text-5xl">
                      {item.name}
                    </h1>
                    <p className="py-3 text-xs md:text-sm normal-case">
                      {item.info}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </article>
        <article className="w-full md:w-1/4 mt-14">
          <div className="flex flex-col items-end px-10">
            <h1 className="text-green text-3xl w-full">why it works</h1>
            <h6>benefits</h6>
          </div>
        </article>
      </div>
    </section>
  );
}

export default SectionTwo;
