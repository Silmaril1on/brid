import React from "react";
import ProdactContent from "./ProdactContent";
import HomeBar from "../../../components/HomeBar";
import { Helmet } from "react-helmet";
import ProjectButtons from "./ProjectButtons";

function Prodact() {
  return (
    <section className="project-container">
      <Helmet>
        <title>BRID | Prodact</title>
      </Helmet>
      <HomeBar />
      <ProdactContent />
      <ProjectButtons />
    </section>
  );
}

export default Prodact;
