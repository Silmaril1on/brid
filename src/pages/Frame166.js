import React from "react";
import HeaderTwo from "../components/HeaderTwo";
import RoundLineSvg from "../components/RoundLineSvg";

function Frame166() {
  return (
    <section>
      <HeaderTwo />
      <article className="flex flex-col w-full items-end justify-between">
        <div className="flex flex-row w-full items-end justify-between pb-10 mb-24">
          <h1 className="text-green relative z-5 text-8xl py-6 pl-5">
            how brid factory work
          </h1>
          <h1 className="relative border-top h-9 mb-5 mr-5">
            join the factory
          </h1>
        </div>
        <h1 className="text-sm pr-5">
          don’t follow your old rules. make your own
        </h1>
      </article>
      <article className="bg-gray400 flex flex-col w-full">
        <div className=" flex flex-col w-1/5 ml-5 py-10">
          <h1 className="text-2xl">
            hire creative team and graphic designer to help you scale
          </h1>
          <button className="uppercase w-48 my-5 relative">
            <RoundLineSvg />
            get started
          </button>
        </div>
        <div className="flex flex-row ">
          <div className="bg-black w-10/12 h-500"></div>
          <div className="bg-gray400 h-500 border">
            <h1 className="text-green pt-10 pl-6">why it works</h1>
            <h1 className="w-full text-end">benefits</h1>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Frame166;
