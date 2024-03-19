import React from "react";
import ArrowSvg from "../../../components/ArrowSvg";

function About() {
  return (
    <section className="w-full px-5 flex flex-col md:flex-row *:mb-4 md:space-x-10 py-5">
      <article className="w-full flex flex-col h-full ">
        <div className="w-full items-center flex flex-row relative border-bottom">
          <span className="w-9">
            <ArrowSvg />
          </span>
          <h1>about</h1>
        </div>
        <p className="mt-8 text-xs md:text-sm">
          we try to understand client’s requirements the best that we can and
          offer effective ways to solve for their business. we try to understand
          client’s requirements the best that we can and offer effective ways to
          solve for their business.
        </p>
      </article>

      <article className="w-full flex flex-col h-full ">
        <div className="w-full items-center flex flex-row relative border-bottom">
          <span className="w-9">
            <ArrowSvg />
          </span>
          <h1>scope of work</h1>
        </div>
        <div className="mt-8 flex flex-col">
          <span>logo design</span>
          <span>brand identity</span>
          <span>brand collateral</span>
          <span>website design</span>
        </div>
      </article>
    </section>
  );
}

export default About;
