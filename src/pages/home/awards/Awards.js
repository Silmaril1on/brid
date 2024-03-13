import React from "react";
import AnimatedLetters from "../../../components/AnimatedLetters";
import AwardsList from "./AwardsList";

function Awards() {
  return (
    <section id="awards" className="w-full h-auto md:h-screen pt-16">
      <AnimatedLetters text="awards" className=" ml-5 md:ml-20" />
      <AwardsList />
    </section>
  );
}

export default Awards;
