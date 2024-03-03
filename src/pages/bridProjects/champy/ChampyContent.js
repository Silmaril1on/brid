import React from "react";
import champyImages from "../../../database/imagesData/champyImages";

function ChampyContent() {
  return (
    <div className="project-section-container">
      {champyImages.map((image, index) => {
        return (
          <div className="w-full" key={index}>
            <img className="w-full h-full" src={image} alt="logos_and_marks" />
          </div>
        );
      })}
    </div>
  );
}

export default ChampyContent;
