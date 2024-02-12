import React from "react";
import touchImages from "../../../database/imagesData/touchImages";

function TouchContent() {
  return (
    <div className="project-section-container">
      {touchImages.map((image, index) => {
        return (
          <div key={index}>
            <img className="w-auto h-full" src={image} alt="logos_and_marks" />
          </div>
        );
      })}
    </div>
  );
}

export default TouchContent;
