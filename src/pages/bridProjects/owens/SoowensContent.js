import React from "react";
import soowensImages from "../../../database/imagesData/soowensImages";

function SoowensContent() {
  return (
    <div className="project-section-container">
      {soowensImages.map((image, index) => {
        return (
          <div className="w-full" key={index}>
            <img className="w-full h-full" src={image} alt="logos_and_marks" />
          </div>
        );
      })}
    </div>
  );
}

export default SoowensContent;
