import React from "react";
import TouchContent from "./TouchContent";
import HomeBar from "../../../components/HomeBar";
import { Helmet } from "react-helmet";
import ProjectButtons from "./ProjectButtons";

function Touch() {
  return (
    <section className="project-container">
      <Helmet>
        <title>BRID | Touch</title>
      </Helmet>
      <HomeBar />
      <TouchContent />
      <ProjectButtons />
    </section>
  );
}

export default Touch;
