import React from "react";
import OrkaContent from "./OrkaContent";
import HomeBar from "../../../components/HomeBar";
import { Helmet } from "react-helmet";
import ProjectButtons from "./ProjectButtons";

function Orka() {
  return (
    <section className="project-container">
      <Helmet>
        <title>BRID | Orka</title>
      </Helmet>
      <HomeBar />
      <OrkaContent />
      <ProjectButtons />
    </section>
  );
}

export default Orka;
