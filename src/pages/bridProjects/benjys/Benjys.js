import React from "react";
import BenjysContent from "./BenjysContent";
import HomeBar from "../../../components/HomeBar";
import { Helmet } from "react-helmet";
import ProjectButtons from "./ProjectButtons";
import About from "./About";

function Benjys() {
  return (
    <section className="project-container bg-white">
      <Helmet>
        <title>BRID | Benjy's</title>
      </Helmet>
      <HomeBar />
      <About />
      <BenjysContent />
      <ProjectButtons />
    </section>
  );
}

export default Benjys;
