import React from "react";
import HorizonContent from "./HorizonContent";
import HomeBar from "../../../components/HomeBar";
import { Helmet } from "react-helmet";
import ProjectButtons from "./ProjectButtons";
import About from "./About";

function Horizon() {
  return (
    <section className="project-container">
      <Helmet>
        <title>BRID | Horizon</title>
      </Helmet>
      <HomeBar />
      <About />
      <HorizonContent />
      <ProjectButtons />
    </section>
  );
}

export default Horizon;
