import React from "react";
import ServicesList from "./ServicesList";

function Services() {
  return (
    <section id="services" className="h-screen w-full mt-10">
      <div className="w-full">
        <ServicesList />
      </div>
      <div className=" mt-10 pl-10">
        <h1>other stuff</h1>
      </div>
    </section>
  );
}

export default Services;
