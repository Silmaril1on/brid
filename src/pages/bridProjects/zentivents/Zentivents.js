import React from "react";
import ZentiventsContent from "./ZentiventsContent";
import HomeBar from "../../../components/HomeBar";
import { Helmet } from "react-helmet";
import ProjectButtons from "./ProjectButtons";

function Zentivents() {
  return (
    <section className="project-container">
      <Helmet>
        <title>BRID | Zentivents</title>
      </Helmet>
      <HomeBar />
      <ZentiventsContent />
      <ProjectButtons />
    </section>
  );
}

export default Zentivents;
