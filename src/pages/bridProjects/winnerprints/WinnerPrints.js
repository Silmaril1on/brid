import React from "react";
import HomeBar from "../../../components/HomeBar";
import WinnerPrintsContent from "./WinnerPrintsContent";
import { Helmet } from "react-helmet";
import ProjectButtons from "./ProjectButtons";

function WinnerPrints() {
  return (
    <section className="project-container">
      <Helmet>
        <title>BRID | WinnerPrints</title>
      </Helmet>
      <HomeBar />
      <WinnerPrintsContent />
      <ProjectButtons />
    </section>
  );
}

export default WinnerPrints;
