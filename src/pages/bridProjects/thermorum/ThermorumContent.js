import React from "react";
import thermorumImages from "../../../database/imagesData/thermorumImages";

function ThermorumContent() {
  return (
    <div className="project-section-container">
      {thermorumImages.map((image, index) => {
        return (
          <div key={index}>
            <img className="w-auto h-full" src={image} alt="logos_and_marks" />
          </div>
        );
      })}
    </div>
  );
}

export default ThermorumContent;
