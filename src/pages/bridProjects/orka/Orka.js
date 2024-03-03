import React from "react";
import OrkaContent from "./OrkaContent";
import HomeBar from "../../../components/HomeBar";
import { Helmet } from "react-helmet";
import ProjectButtons from "./ProjectButtons";
import About from "./About";

function Orka() {
  return (
    <section className="project-container">
      <Helmet>
        <title>BRID | Orka</title>
      </Helmet>
      <HomeBar />
      <About />
      <OrkaContent />
      <ProjectButtons />
    </section>
  );
}

export default Orka;
