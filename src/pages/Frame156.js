import React from "react";
import HeaderTwo from "../components/HeaderTwo";
import ElipseSvg from "../components/ElipseSvg";

function Frame156() {
  return (
    <section className="h-full">
      <HeaderTwo />
      <div className="center flex-row relative">
        <article className="bg-gray400 flex justify-between flex-col h-screen w-full">
          <div className="relative w-auto m-5 border-bottom mt-10 pt-20 border-top">
            <h1 className="w-2/4">
              Our goal is to pay special attention to each client, providing
              them with a high-quality final product. To achieve these results,
            </h1>
          </div>

          <div className="mb-10 w-auto relative z-5  border-right mx-5">
            <div className="relative w-80 z-2 center bg-gray400 h-10">
              <h1>lets start create your brand id</h1>
              <ElipseSvg />
            </div>
          </div>
        </article>
        <article className="bg-black h-screen w-2/3 center">
          <div className="mb-20 ">
            <h1 className="my-5 mx-10 overflow-hidden relative border-left">
              we try to understand client’s requirements the best that we can
              and offer effective ways to solve for their business.
            </h1>
          </div>
        </article>
        <article className="absolute bottom-40 px-5 w-full">
          <h1 className="text-5xl">
            \ we are team of young professionals who create Brand identity that
            leaves fingerprints on the market & the minds of your customers, so
            their numbers grow by leaps & bounds \
          </h1>
        </article>
      </div>
    </section>
  );
}

export default Frame156;
