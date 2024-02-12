import React from "react";
import agrohubImages from "../../../database/imagesData/agrohubImages";

function AgrohubContent() {
  return (
    <div className="project-section-container">
      {agrohubImages.map((image, index) => {
        return (
          <div className="" key={index}>
            <img className="w-auto h-full" src={image} alt="logos_and_marks" />
          </div>
        );
      })}
    </div>
  );
}

export default AgrohubContent;
