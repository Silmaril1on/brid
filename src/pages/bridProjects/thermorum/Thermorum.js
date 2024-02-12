import React from "react";
import ThermorumContent from "./ThermorumContent";
import HomeBar from "../../../components/HomeBar";
import { Helmet } from "react-helmet";
import ProjectButtons from "./ProjectButtons";

function Thermorum() {
  return (
    <section className="project-container">
      <Helmet>
        <title>BRID | Thermorum</title>
      </Helmet>
      <HomeBar />
      <ThermorumContent />
      <ProjectButtons />
    </section>
  );
}

export default Thermorum;
