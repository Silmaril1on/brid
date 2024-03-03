import React from "react";
import askanaImages from "../../../database/imagesData/askanaImages";

function AskanaContent() {
  return (
    <div className="project-section-container">
      {askanaImages.map((image, index) => {
        return (
          <div className="w-full" key={index}>
            <img className="w-full h-full" src={image} alt="logos_and_marks" />
          </div>
        );
      })}
    </div>
  );
}

export default AskanaContent;
