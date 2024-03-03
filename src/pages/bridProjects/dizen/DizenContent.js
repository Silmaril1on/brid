import React from "react";
import dizenImages from "../../../database/imagesData/dizenImages";

function DizenContent() {
  return (
    <div className="project-section-container">
      {dizenImages.map((image, index) => {
        return (
          <div className="w-full" key={index}>
            <img className="w-full h-full" src={image} alt="logos_and_marks" />
          </div>
        );
      })}
    </div>
  );
}

export default DizenContent;
