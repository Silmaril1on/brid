import React, { useState } from "react";
import projectsData from "../../../database/projectsData";
import ArrowSvg from "../../../components/ArrowSvg";
import RoundLineSvg from "../../../components/RoundLineSvg";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function ProjectsList({ index }) {
  const [active, setActive] = useState(0);
  return (
    <motion.div
      initial={{ index }}
      animate={{ translateX: `-${index * 505}px` }}
      transition={{ duration: 0.5 }}
      className="w-max flex flex-row justify-center items-center"
    >
      {projectsData.map((item) => {
        return (
          <section
            onClick={() => setActive(item.id)}
            className={
              active === item.id
                ? "w-505 *:duration-300 relative border-bottom duration-500 flex flex-col h-full px-4 "
                : "w-505 *:duration-300 relative border-bottom duration-500 flex flex-col brightness-75 h-full px-4 "
            }
            key={item.id}
          >
            <article className="flex flex-row w-full h-12 relative mb-10 space-x-6 border-bottom">
              <div className="flex flex-row w-full">
                <div className="w-auto">
                  <ArrowSvg />
                </div>
                <h1 className="text-2xl center justify-start ml-3 w-full">
                  {item.name}
                </h1>
              </div>
            </article>

            <div className="w-full h-96 overflow-hidden">
              <img
                className="w-full h-full object-cover hover:scale-110 duration-300"
                src={item.image}
                alt="horizon"
              />
            </div>

            <p className="capitalize py-3 text-sm">{item.info}</p>
            <article className="flex justify-end relative w-40 *:cursor-pointer">
              {active === item.id ? <RoundLineSvg /> : ""}
              <NavLink
                to={item.link}
                className={
                  active === item.id
                    ? "text-end w-full pr-5 text-green duration-500 relative z-5"
                    : "text-end w-full pr-5 relative z-5"
                }
              >
                {item.button}
              </NavLink>
            </article>
          </section>
        );
      })}
    </motion.div>
  );
}

export default ProjectsList;
