import React, { useState } from "react";
import { motion } from "framer-motion";
import { staggerOpacity200 } from "../../../framerMotion/motionValues";
import navlinksData from "../../../database/navlinksData";

function NavLinks() {
  const [active, setActive] = useState(0);
  return (
    <section className="">
      <motion.div
        variants={staggerOpacity200}
        initial="hidden"
        animate="visible"
        className="center flex-row"
      >
        {navlinksData.map((item) => {
          return (
            <motion.a
              href={item.link}
              variants={staggerOpacity200}
              className="mx-3"
              key={item.id}
            >
              <h1
                onClick={() => setActive(item.id)}
                className={
                  active === item.id
                    ? "text-base text-center cursor-pointer text-gray100 bg-vector269 bg-contain bg-no-repeat bg-center duration-300"
                    : "text-base text-center text-gray200 cursor-pointer duration-300"
                }
              >
                {item.name}
              </h1>
            </motion.a>
          );
        })}
      </motion.div>
    </section>
  );
}

export default NavLinks;
