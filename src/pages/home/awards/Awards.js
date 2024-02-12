import React from "react";
import AnimatedLetters from "../../../components/AnimatedLetters";
import AwardsList from "./AwardsList";

function Awards() {
  return (
    <section id="awards" className="pt-20 pb-5 w-full">
      <AnimatedLetters text="awards" className=" ml-5 md:ml-20" />
      <AwardsList />
    </section>
  );
}

export default Awards;
