import React from "react";
import tbilisiLib from "../../../database/imagesData/tbilisiLibImages";

function TbilisiLibrariesContent() {
  return (
    <div className="project-section-container">
      {tbilisiLib.map((image, index) => {
        return (
          <div className="w-full" key={index}>
            <img className="w-full h-full" src={image} alt="logos_and_marks" />
          </div>
        );
      })}
    </div>
  );
}

export default TbilisiLibrariesContent;
