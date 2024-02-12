import React from "react";
import soowensImages from "../../../database/imagesData/soowensImages";

function SoowensContent() {
  return (
    <div className="project-section-container">
      {soowensImages.map((image, index) => {
        return (
          <div key={index}>
            <img className="w-auto h-full" src={image} alt="logos_and_marks" />
          </div>
        );
      })}
    </div>
  );
}

export default SoowensContent;
