import React from "react";
import askanaImages from "../../../database/imagesData/askanaImages";

function AskanaContent() {
  return (
    <div className="project-section-container">
      {askanaImages.map((image, index) => {
        return (
          <div key={index}>
            <img className="w-auto h-full" src={image} alt="logos_and_marks" />
          </div>
        );
      })}
    </div>
  );
}

export default AskanaContent;
