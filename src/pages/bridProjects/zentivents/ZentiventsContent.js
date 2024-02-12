import React from "react";
import zentiventsImages from "../../../database/imagesData/zentiventsImages";

function ZentiventsContent() {
  return (
    <div className="project-section-container">
      {zentiventsImages.map((image, index) => {
        return (
          <div key={index}>
            <img className="w-auto h-full" src={image} alt="logos_and_marks" />
          </div>
        );
      })}
    </div>
  );
}

export default ZentiventsContent;
