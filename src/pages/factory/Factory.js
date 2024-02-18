import React from "react";
import HomeBar from "../../components/HomeBar";
import FactoryHeader from "./FactoryHeader";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import { Helmet } from "react-helmet";
import SectionFive from "./SectionFive";
import FactoryForm from "./FactoryForm";

function Factory() {
  return (
    <section className="project-container">
      <Helmet>
        <title>BRID | Factory</title>
      </Helmet>
      <HomeBar />
      <FactoryHeader />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <FactoryForm />
    </section>
  );
}

export default Factory;
