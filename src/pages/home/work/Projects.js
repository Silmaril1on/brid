import React from "react";
import { NavLink } from "react-router-dom";
import MobileSwiper from "./mobileSlider/MobileSwiper";
import HorizontalSlider from "./horizontalSlider/HorizontalSlider";

function Projects() {
  return (
    <section id="work" className="w-full relative h-screen md:h-full">
      <MobileSwiper />
      <HorizontalSlider />

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
