import React, { useState } from "react";
import ArrowSvg from "../../../../components/ArrowSvg";
import RoundLineSvg from "../../../../components/RoundLineSvg";
import { NavLink } from "react-router-dom";

function ProjectsList({ name, image, info, link, button }) {
  const [active, setActive] = useState(false);
  return (
    <section className="w-505 *:duration-300 relative border-bottom duration-500 flex flex-col h-full px-4">
      <article className="flex flex-row w-full h-12 relative mb-10 space-x-6 border-bottom">
        <div className="flex flex-row w-full">
          <div className="w-auto">
            <ArrowSvg />
          </div>
          <h1 className="text-2xl center justify-start ml-3 w-full">{name}</h1>
        </div>
      </article>

      <div className="w-full h-96 overflow-hidden">
        <img
          className="w-full h-full object-cover hover:scale-110 duration-300"
          src={image}
          alt="horizon"
        />
      </div>

      <p className="capitalize py-3 text-sm">{info}</p>
      <article
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        className="flex justify-end relative w-40 *:cursor-pointer"
      >
        {active && <RoundLineSvg />}
        <NavLink to={link} className="text-end w-full pr-5 relative z-5">
          {button}
        </NavLink>
      </article>
    </section>
  );
}

export default ProjectsList;
