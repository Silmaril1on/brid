import React from "react";
import SelectedLogosContent from "./SelectedLogosContent";
import HomeBar from "../../../components/HomeBar";
import { Helmet } from "react-helmet";
import ProjectButtons from "./ProjectButtons";
import About from "./About";

function SelectedLogos() {
  return (
    <section className="project-container">
      <Helmet>
        <title>BRID | Selected Logos & Marks</title>
      </Helmet>
      <HomeBar />
      <About />
      <SelectedLogosContent />
      <ProjectButtons />
    </section>
  );
}

export default SelectedLogos;
