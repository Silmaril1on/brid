import React from "react";
import HomeBar from "../../../components/HomeBar";
import AgrohubContent from "./AgrohubContent";
import { Helmet } from "react-helmet";
import ProjectButtons from "./ProjectButtons";

function Agrohub() {
  return (
    <section className="project-container">
      <Helmet>
        <title>BRID | Argohub Winery</title>
      </Helmet>
      <HomeBar />
      <AgrohubContent />
      <ProjectButtons />
    </section>
  );
}

export default Agrohub;
