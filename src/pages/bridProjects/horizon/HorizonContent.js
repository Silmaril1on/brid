import React from "react";
import horizonImages from "../../../database/imagesData/horizonImages";

function HorizonContent() {
  return (
    <div className="project-section-container">
      {horizonImages.map((image, index) => {
        return (
          <div key={index}>
            <img className="w-auto h-full" src={image} alt="logos_and_marks" />
          </div>
        );
      })}
    </div>
  );
}

export default HorizonContent;