import React from "react";
import UserSvg from "../../components/UserSvg";
import ElipseSvg from "../../components/ElipseSvg";

function SectionThree() {
  return (
    <section className="flex flex-col md:flex-row w-full h-auto py-14">
      <div className="w-full md:w-7/12 flex flex-col md:pl-20 pt-10">
        <h1 className="text-green pl-5 text-6xl my-16">how it works</h1>
        <div className="space-y-6 p-4 *:text-sm md:*:text-base">
          <h6>Get your project requirements and goals</h6>
          <h6>Creative brief and idea generation</h6>
          <h6>Design creation and development</h6>
          <h6>Communicating with you to obtain feedback and insights</h6>
          <h6>Communicating with you to obtain feedback and insights</h6>
          <h6>Project Completion and Asset Delivery</h6>
        </div>
      </div>
      <div className="w-full md:w-6/12 center flex-col">
        <div className="w-80 md:w-96 mt-10 relative">
          <UserSvg />
          <h1 className="text-white absolute bottom-20 w-full text-center pl-5">
            consultant
          </h1>
        </div>
        <h1 className="w-56 text-center text-sm text-gray400 mt-2">
          we are ready to answer your questions
        </h1>
        <button className="relative uppercase my-10 w-64 h-20">
          <ElipseSvg />
          book consultation
        </button>
      </div>
    </section>
  );
}

export default SectionThree;
