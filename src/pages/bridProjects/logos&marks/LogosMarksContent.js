import React from "react";
import logomarksimages from "../../../database/imagesData/logomarksImages";

function LogosMarksContent() {
  return (
    <div className="project-section-container">
      {logomarksimages.map((image, index) => {
        return (
          <div className="w-full" key={index}>
            <img className="w-full h-full" src={image} alt="logos_and_marks" />
          </div>
        );
      })}
    </div>
  );
}

export default LogosMarksContent;
