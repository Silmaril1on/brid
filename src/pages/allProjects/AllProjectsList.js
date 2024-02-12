import React from "react";
import projectsData from "../../database/projectsData";
import ArrowSvg from "../../components/ArrowSvg";
import { motion } from "framer-motion";
import { slideUp } from "../../framerMotion/motionValues";
import { NavLink } from "react-router-dom";

function AllProjectsList() {
  return (
    <section className="mt-10">
      <div className="grid grid-col-1 md:grid-cols-3 gap-4 p-3">
        {projectsData.map((project) => {
          return (
            <motion.div
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full *:duration-300 relative duration-500 flex flex-col h-full px-4 md:even:mt-20 md:odd:mb-32"
              key={project.id}
            >
              <article className="flex flex-row w-full h-12 relative space-x-6 border-bottom">
                <div className="flex flex-row w-full">
                  <div className="w-auto">
                    <ArrowSvg />
                  </div>
                  <h1 className="text-2xl center justify-start ml-3 w-full">
                    {project.name}
                  </h1>
                </div>
              </article>
              <p className="capitalize py-3 text-sm">{project.info}</p>

              <div className="w-full h-96 overflow-hidden">
                <img
                  className="w-full h-full object-cover hover:scale-110 duration-300"
                  src={project.image}
                  alt="horizon"
                />
              </div>

              <article className="flex w-full flex-col my-2">
                <h1 className="w-full">{project.desc}</h1>
                <NavLink
                  to={project.link}
                  className="w-full text-green cursor-pointer capitalize mt-3"
                >
                  {project.button}
                </NavLink>
              </article>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default AllProjectsList;
