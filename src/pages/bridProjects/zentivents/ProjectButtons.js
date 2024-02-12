import React from "react";
import RightButton from "../../../components/RightButton";
import LeftButton from "../../../components/LeftButton";
import { NavLink } from "react-router-dom";

function ProjectButtons() {
  return (
    <div className="h-20 w-full flex flex-row justify-between items-center *:center *:flex-row *:mx-5">
      <NavLink to="/winnerprints2019" className="cursor-pointer">
        <LeftButton />
        <h1 className="capitalize text-green">previous project</h1>
      </NavLink>
      <NavLink to="/agrohub" className="cursor-pointer">
        <h1 className="capitalize text-green">next project</h1>
        <RightButton />
      </NavLink>
    </div>
  );
}

export default ProjectButtons;
