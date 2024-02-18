import React from "react";
import RightButton from "../../../components/RightButton";
import LeftButton from "../../../components/LeftButton";
import projectsData from "../../../database/projectsData";

function ProjectButtons({ index, setIndex }) {
  const left = () => {
    setIndex(index === 0 ? projectsData.length - 3 : index - 1);
  };
  const right = () => {
    setIndex(index === projectsData.length - 3 ? 0 : index + 1);
  };

  return (
    <div className="w-full flex flex-row justify-around mt-5">
      <LeftButton onClick={left} />
      <RightButton onClick={right} />
    </div>
  );
}

export default ProjectButtons;
