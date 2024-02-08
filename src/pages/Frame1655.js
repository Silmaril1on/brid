import React, { useState } from "react";
import HeaderTwo from "../components/HeaderTwo";
import ArrowSvg from "../components/ArrowSvg";
import logo1 from "../assets/image_9.png";
import logo2 from "../assets/image_31.png";
import RightButton from "../components/RightButton";
import LeftButton from "../components/LeftButton";

function Frame1655() {
  const [active, setActive] = useState(0);

  return (
    <section>
      <HeaderTwo />
      <section className="flex flex-col md:flex-row mt-10 mb-10 px-5">
        <div className="w-full flex flex-col">
          <div className="m-1 flex flex-row items-center relative border-bottom">
            <span className="w-9 h-9">
              <ArrowSvg />
            </span>
            <h1>about</h1>
          </div>
          <div className="mt-10 px-2">
            <h1>
              we try to understand client’s requirements the best that we can
              and offer effective ways to solve for their business. we try to
              understand client’s requirements the best that we can and offer
              effective ways to solve for their business.
            </h1>
          </div>
        </div>
        <div className="w-full flex flex-col mt-10 md:mt-0">
          <div className="m-1 flex flex-row items-center relative border-bottom">
            <span className="w-9 h-9">
              <ArrowSvg />
            </span>
            <h1>scope of work</h1>
          </div>
          <div className="mt-10 px-2">
            <h1>logo design</h1>
            <h1>brand identity</h1>
            <h1>brand collateral</h1>
            <h1>website design</h1>
          </div>
        </div>
      </section>
      <article className="bg-gray400 center flex-col h-64 md:h-1500 mt-32 relative">
        <div className="absolute -top-20">
          <img className="p-5" src={logo1} alt="logo" />
        </div>
        <div className="absolute -bottom-20">
          <img className="p-5" src={logo2} alt="logo" />
        </div>
      </article>
      <article className="h-20 *:px-5 mt-16 *:center *:flex-row flex flex-row justify-between items-center">
        <div className="h-9 ">
          preview <ArrowSvg />
        </div>
        <div className="text-green ">
          <RightButton /> next
        </div>
      </article>
    </section>
  );
}

export default Frame1655;
