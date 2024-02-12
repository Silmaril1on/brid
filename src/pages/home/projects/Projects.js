import React, { useState } from "react";
import ProjectsList from "./ProjectsList";
import ProjectButtons from "./ProjectButtons";
import { NavLink } from "react-router-dom";
import MobileProjectSlider from "./MobileProjectSlider";

function Projects() {
  const [index, setIndex] = useState(0);

  return (
    <section id="work" className="pb-3 pt-14 w-full">
      <MobileProjectSlider />
      <div className="overflow-hidden hidden md:block">
        <ProjectsList index={index} />
        <ProjectButtons index={index} setIndex={setIndex} />
      </div>
      <div>
        <div className="p-4 flex justify-end w-full">
          <NavLink
            to="/allprojects"
            className="mr-2 md:mr-10 uppercase text-2xl underline underline-offset-2 duration-300 text-gray400 hover:text-gray100 cursor-pointer"
          >
            view all projects
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Projects;
