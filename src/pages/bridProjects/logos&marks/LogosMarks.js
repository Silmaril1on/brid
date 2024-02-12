import React from "react";
import HomeBar from "../../../components/HomeBar";
import LogosMarksContent from "./LogosMarksContent";
import { Helmet } from "react-helmet";
import ProjectButtons from "./ProjectButtons";

function LogosMarks() {
  return (
    <section className="project-container">
      <Helmet>
        <title>BRID | Logos & Marks</title>
      </Helmet>
      <HomeBar />
      <LogosMarksContent />
      <ProjectButtons />
    </section>
  );
}

export default LogosMarks;
