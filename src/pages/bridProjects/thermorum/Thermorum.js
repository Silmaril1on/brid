import React from "react";
import ThermorumContent from "./ThermorumContent";
import HomeBar from "../../../components/HomeBar";
import { Helmet } from "react-helmet";
import ProjectButtons from "./ProjectButtons";
import About from "./About";

function Thermorum() {
  return (
    <section className="project-container">
      <Helmet>
        <title>BRID | Thermorum</title>
      </Helmet>
      <HomeBar />
      <About />
      <ThermorumContent />
      <ProjectButtons />
    </section>
  );
}

export default Thermorum;
