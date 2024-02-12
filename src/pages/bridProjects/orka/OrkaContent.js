import React from "react";
import orkaImages from "../../../database/imagesData/orkaImages";

function OrkaContent() {
  return (
    <div className="project-section-container">
      {orkaImages.map((image, index) => {
        return (
          <div key={index}>
            <img className="w-auto h-full" src={image} alt="logos_and_marks" />
          </div>
        );
      })}
    </div>
  );
}

export default OrkaContent;
