import React from "react";
import ServicesList from "./ServicesList";
import AnimatedLetters from "../../../components/AnimatedLetters";

function Services() {
  return (
    <section id="services" className="center flex-col w-full py-14">
      <div className="center flex-col w-full">
        <AnimatedLetters
          text="services"
          className="stagger-letters text-end mr-20"
        />
        <ServicesList />
      </div>
    </section>
  );
}

export default Services;
