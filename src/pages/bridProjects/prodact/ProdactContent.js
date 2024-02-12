import React from "react";
import prodactImages from "../../../database/imagesData/prodactImages";
import arrow03 from "../../../assets/prodact/03.gif";
import arrow04 from "../../../assets/prodact/04.gif";
import arrow05 from "../../../assets/prodact/05.gif";
import arrow06 from "../../../assets/prodact/06.gif";

function ProdactContent() {
  return (
    <div className="project-section-container">
      {prodactImages.slice(0, 2).map((image, index) => {
        return (
          <div key={index}>
            <img className="w-auto h-full" src={image} alt="logos_and_marks" />
          </div>
        );
      })}
      <div className="py-10 *:w-2/4 center flex-col *:my-5">
        <article>
          <h1 className="font-bold">/ About</h1>
          <p className="text-green font-bold mt-4">
            Prodact is the First Georgian community uniting digital and tech
            product creators. Annually Prodact invites professionals from
            various spheres, so they can share valuable information with public.
          </p>
        </article>
        <article>
          <h1 className="font-bold">/ The Task</h1>
          <p className="text-green font-bold mt-4">
            ​​​​​​​BRID had an unique and exiting challenge of creating a brand
            identity system for Prodact. The task was including: visuals for
            Social media, printed merch and stationary.
          </p>
        </article>
      </div>
      <div className="center flex-row *:h-80">
        <img src={arrow03} alt="arrow" />
        <img src={arrow04} alt="arrow" />
        <img src={arrow05} alt="arrow" />
        <img src={arrow06} alt="arrow" />
      </div>
      {prodactImages.slice(2, 20).map((image, index) => {
        return (
          <div key={index}>
            <img className="w-auto h-full" src={image} alt="logos_and_marks" />
          </div>
        );
      })}
    </div>
  );
}

export default ProdactContent;
