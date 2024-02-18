import React from "react";
import ElipseSvg from "../../../components/ElipseSvg";

function AnimatedInfo() {
  return (
    <section className="w-full md:w-7/12 bg-gray800">
      <article className="flex flex-col justify-between h-full py-5">
        <div className="m-3 md:m-10 relative border-bottom">
          <h1 className="w-full md:w-3/5">
            Our goal is to pay special attention to each client, providing them
            with a high-quality final product. To achieve these results,
          </h1>
        </div>
        <div className="relative mb-5 mr-10 ml-5 border-right z-0">
          <button className="uppercase p-5 center z-5 bg-gray800 relative underline underline-offset-2 text-sm hover:text-white duration-300">
            <ElipseSvg />
            lets start create your brand id
          </button>
        </div>
      </article>
    </section>
  );
}

export default AnimatedInfo;
