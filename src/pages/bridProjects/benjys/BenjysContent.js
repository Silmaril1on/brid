import React from "react";
import benjysImages from "../../../database/imagesData/benjysImages";

function BenjysContent() {
  return (
    <div className="project-section-container">
      {benjysImages.map((image, index) => {
        return (
          <div className="w-full" key={index}>
            <img className="w-full h-full" src={image} alt="logos_and_marks" />
          </div>
        );
      })}
    </div>
  );
}

export default BenjysContent;
