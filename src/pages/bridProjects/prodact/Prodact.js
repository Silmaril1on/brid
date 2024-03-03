import React from "react";
import ProdactContent from "./ProdactContent";
import HomeBar from "../../../components/HomeBar";
import { Helmet } from "react-helmet";
import ProjectButtons from "./ProjectButtons";
import About from "./About";

function Prodact() {
  return (
    <section className="project-container">
      <Helmet>
        <title>BRID | Prodact</title>
      </Helmet>
      <HomeBar />
      <About />
      <ProdactContent />
      <ProjectButtons />
    </section>
  );
}

export default Prodact;
