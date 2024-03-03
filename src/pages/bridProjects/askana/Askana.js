import React from "react";
import AskanaContent from "./AskanaContent";
import HomeBar from "../../../components/HomeBar";
import { Helmet } from "react-helmet";
import ProjectButtons from "./ProjectButtons";
import About from "./About";

function Askana() {
  return (
    <section className="project-container">
      <Helmet>
        <title>BRID | Chateau Askana</title>
      </Helmet>
      <HomeBar />
      <About />
      <AskanaContent />
      <ProjectButtons />
    </section>
  );
}

export default Askana;
