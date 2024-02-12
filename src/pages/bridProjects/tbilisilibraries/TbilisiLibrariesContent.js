import React from "react";
import tbilisiLib from "../../../database/imagesData/tbilisiLibImages";

function TbilisiLibrariesContent() {
  return (
    <div className="project-section-container">
      {tbilisiLib.map((image, index) => {
        return (
          <div className="m-1" key={index}>
            <img className="w-auto h-full" src={image} alt="logos_and_marks" />
          </div>
        );
      })}
    </div>
  );
}

export default TbilisiLibrariesContent;
