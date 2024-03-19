import React from "react";

function SectionThree() {
  return (
    <section className="flex flex-col md:flex-row w-full h-screen bg-gray800">
      <div className="w-full md:w-4/12 flex flex-col md:pl-20 pt-10">
        <div className="h-full p-4 text-2xl flex flex-col justify-evenly space-y-6 md:space-y-0">
          <h6>Get your project requirements and goals</h6>
          <h6>Creative brief and idea generation</h6>
          <h6>Design creation and development</h6>
          <h6>Communicating with you to obtain feedback and insights</h6>
          <h6>Communicating with you to obtain feedback and insights</h6>
          <h6>Project Completion and Asset Delivery</h6>
        </div>
      </div>
      <div className="w-full md:w-8/12 center flex-col items-end justify-end">
        <h1 className="text-green m-5 text-lg md:text-2xl"> how it works</h1>
      </div>
    </section>
  );
}

export default SectionThree;
