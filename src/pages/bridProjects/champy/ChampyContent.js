import React from "react";
import champyImages from "../../../database/imagesData/champyImages";

function ChampyContent() {
  return (
    <div className="project-section-container">
      {champyImages.map((image, index) => {
        return (
          <div className="m-1" key={index}>
            <img className="w-auto h-full" src={image} alt="logos_and_marks" />
          </div>
        );
      })}
    </div>
  );
}

export default ChampyContent;
