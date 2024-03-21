import React, { useRef } from "react";
import ProjectsList from "./ProjectsList";
import { NavLink } from "react-router-dom";
import MobileProjectSlider from "./MobileProjectSlider";
import projectsData from "../../../database/projectsData";
import { motion, useTransform, useScroll } from "framer-motion";

function Projects() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0", "-63%"]);

  return (
    <section id="work" className="w-full relative h-full">
      <MobileProjectSlider />
      <section ref={targetRef} className="relative h-[150vh] hidden md:block">
        <div className="sticky top-0 flex items-center overflow-hidden">
          <motion.div drag="x" style={{ x }} className="center flex-row pt-16">
            {projectsData.slice(1, 9).map((project) => {
              return <ProjectsList key={project.id} item={project} />;
            })}
          </motion.div>
        </div>
      </section>
      <div className="p-4 flex justify-end w-full">
        <NavLink
          to="/allprojects"
          className="mr-2 md:mr-10 uppercase text-2xl underline underline-offset-2 duration-300 text-gray400 hover:text-gray100 cursor-pointer"
        >
          view all projects
        </NavLink>
      </div>
    </section>
  );
}

export default Projects;
