import React from "react";
import FastLaneContent from "./FastLaneContent";
import HomeBar from "../../../components/HomeBar";
import { Helmet } from "react-helmet";
import ProjectButtons from "./ProjectButtons";

function Fastlane() {
  return (
    <section className="project-container">
      <Helmet>
        <title>BRID | Fastlane</title>
      </Helmet>
      <HomeBar />
      <FastLaneContent />
      <ProjectButtons />
    </section>
  );
}

export default Fastlane;
