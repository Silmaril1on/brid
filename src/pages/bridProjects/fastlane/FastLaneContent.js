import React from "react";
import fastlaneimages from "../../../database/imagesData/fastlaneImages";

function FastLaneContent() {
  return (
    <div className="project-section-container">
      {fastlaneimages.map((image, index) => {
        return (
          <div key={index}>
            <img className="w-full h-full" src={image} alt="logos_and_marks" />
          </div>
        );
      })}
    </div>
  );
}

export default FastLaneContent;
