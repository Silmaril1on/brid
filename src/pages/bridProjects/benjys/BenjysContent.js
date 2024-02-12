import React from "react";
import benjysImages from "../../../database/imagesData/benjysImages";

function BenjysContent() {
  return (
    <div className="project-section-container">
      {benjysImages.map((image, index) => {
        return (
          <div className="m-1" key={index}>
            <img className="w-auto h-full" src={image} alt="logos_and_marks" />
          </div>
        );
      })}
    </div>
  );
}

export default BenjysContent;
