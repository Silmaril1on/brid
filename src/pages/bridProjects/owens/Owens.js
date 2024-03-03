import React from "react";
import SoowensContent from "./SoowensContent";
import HomeBar from "../../../components/HomeBar";
import { Helmet } from "react-helmet";
import ProjectButtons from "./ProjectButtons";
import About from "./About";

function Owens() {
  return (
    <section className="project-container">
      <Helmet>
        <title>BRID | So Owens</title>
      </Helmet>
      <HomeBar />
      <About />
      <SoowensContent />
      <ProjectButtons />
    </section>
  );
}

export default Owens;
