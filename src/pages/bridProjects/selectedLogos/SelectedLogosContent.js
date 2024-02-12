import React from "react";
import selectedlogosImages from "../../../database/imagesData/selectedlogosImages";

function SelectedLogosContent() {
  return (
    <div className="project-section-container">
      {selectedlogosImages.map((image, index) => {
        return (
          <div key={index}>
            <img className="w-auto h-full" src={image} alt="logos_and_marks" />
          </div>
        );
      })}
    </div>
  );
}

export default SelectedLogosContent;
