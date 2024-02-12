import React from "react";
import TbilisiLibrariesContent from "./TbilisiLibrariesContent";
import HomeBar from "../../../components/HomeBar";
import { Helmet } from "react-helmet";
import ProjectButtons from "./ProjectButtons";

function TbilisiLibraries() {
  return (
    <section className="project-container">
      <Helmet>
        <title>BRID | Tbilisi Libraries</title>
      </Helmet>
      <HomeBar />
      <TbilisiLibrariesContent />
      <ProjectButtons />
    </section>
  );
}

export default TbilisiLibraries;
