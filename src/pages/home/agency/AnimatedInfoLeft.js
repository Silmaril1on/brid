import React, { useState } from "react";
import RoundLineSvg from "../../../components/RoundLineSvg";

function AnimatedInfo() {
  const [line, setLine] = useState(false);
  return (
    <section className="w-full md:w-7/12 bg-gray800">
      <article className="flex flex-col justify-between h-full py-5">
        <div className="m-3 md:m-10 relative border-bottom">
          <h1 className="w-full md:w-3/5">
            Our goal is to pay special attention to each client, providing them
            with a high-quality final product. To achieve these results,
          </h1>
        </div>
        <div
          onMouseEnter={() => setLine(true)}
          onMouseLeave={() => setLine(false)}
          className="relative mb-5 mr-10 ml-5 border-right z-5"
        >
          <a
            href="#footer"
            className="w-80 uppercase p-5 center z-5 bg-gray800 relative underline underline-offset-2 text-sm hover:text-white duration-300"
          >
            {line && <RoundLineSvg />}
            lets start create your brand id
          </a>
        </div>
      </article>
    </section>
  );
}

export default AnimatedInfo;
