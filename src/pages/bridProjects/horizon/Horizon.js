import React from "react";
import HorizonContent from "./HorizonContent";
import HomeBar from "../../../components/HomeBar";
import { Helmet } from "react-helmet";
import ProjectButtons from "./ProjectButtons";

function Horizon() {
  return (
    <section className="project-container">
      <Helmet>
        <title>BRID | Horizon</title>
      </Helmet>
      <HomeBar />
      <HorizonContent />
      <ProjectButtons />
    </section>
  );
}

export default Horizon;
