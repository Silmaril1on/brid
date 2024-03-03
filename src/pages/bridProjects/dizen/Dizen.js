import React from "react";
import HomeBar from "../../../components/HomeBar";
import DizenContent from "./DizenContent";
import { Helmet } from "react-helmet";
import ProjectButtons from "./ProjectButtons";
import About from "./About";

function Dizen() {
  return (
    <section className="project-container">
      <Helmet>
        <title>BRID | Dizen</title>
      </Helmet>
      <HomeBar />
      <About />
      <DizenContent />
      <ProjectButtons />
    </section>
  );
}

export default Dizen;
