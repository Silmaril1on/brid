import React from "react";
import ChampyContent from "./ChampyContent";
import HomeBar from "../../../components/HomeBar";
import { Helmet } from "react-helmet";
import ProjectButtons from "./ProjectButtons";
import About from "./About";

function Champy() {
  return (
    <section className="project-container">
      <Helmet>
        <title>BRID | Champy</title>
      </Helmet>
      <HomeBar />
      <About />
      <ChampyContent />
      <ProjectButtons />
    </section>
  );
}

export default Champy;
