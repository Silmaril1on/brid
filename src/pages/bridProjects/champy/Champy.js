import React from "react";
import ChampyContent from "./ChampyContent";
import HomeBar from "../../../components/HomeBar";
import { Helmet } from "react-helmet";
import ProjectButtons from "./ProjectButtons";

function Champy() {
  return (
    <section className="project-container">
      <Helmet>
        <title>BRID | Champy</title>
      </Helmet>
      <HomeBar />
      <ChampyContent />
      <ProjectButtons />
    </section>
  );
}

export default Champy;
