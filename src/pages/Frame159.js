import React, { useState } from "react";
import { motion } from "framer-motion";
import { staggerOpacity200 } from "../framerMotion/motionValues";

const data = [
  {
    id: 0,
    name: "agency",
  },
  {
    id: 1,
    name: "work",
  },
  {
    id: 2,
    name: "services",
  },
  {
    id: 3,
    name: "award",
  },
  {
    id: 4,
    name: "factory",
  },
  {
    id: 5,
    name: "fonts",
  },
  {
    id: 6,
    name: "contact",
  },
];

function Frame159() {
  const [active, setActive] = useState(0);

  return (
    <section>
      <motion.div
        variants={staggerOpacity200}
        initial="hidden"
        whileInView="visible"
        className="center flex-col space-y-1 m-2 py-24"
      >
        {data.map((item) => {
          return (
            <motion.div
              variants={staggerOpacity200}
              className="w-44 md:w-72"
              key={item.id}
            >
              <h1
                onClick={() => setActive(item.id)}
                className={
                  active === item.id
                    ? "text-3xl md:text-6xl text-center cursor-pointer text-gray100 bg-vector269 bg-contain bg-no-repeat bg-center duration-300"
                    : "text-3xl md:text-6xl text-center text-gray200 cursor-pointer duration-300"
                }
              >
                {item.name}
              </h1>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

export default Frame159;
