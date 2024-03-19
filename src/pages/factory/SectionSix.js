import React from "react";
import FactoryForm from "./FactoryForm";

function SectionSix() {
  return (
    <section className="flex flex-col md:flex-row w-full">
      <div className="w-full md:w-2/4 p-3 flex flex-col justify-between py-10">
        <h1 className="text-2xl md:text-5xl ">fill to be part of our team</h1>
        <h1 className="text-xs">
          download <span className="text-green">presentation</span>{" "}
        </h1>
      </div>
      <FactoryForm />
    </section>
  );
}

export default SectionSix;
