import React from "react";
import HomeBar from "../../../components/HomeBar";
import LogosMarksContent from "./LogosMarksContent";
import { Helmet } from "react-helmet";
import ProjectButtons from "./ProjectButtons";
import About from "./About";

function LogosMarks() {
  return (
    <section className="project-container">
      <Helmet>
        <title>BRID | Logos & Marks</title>
      </Helmet>
      <HomeBar />
      <About />
      <LogosMarksContent />
      <ProjectButtons />
    </section>
  );
}

export default LogosMarks;
