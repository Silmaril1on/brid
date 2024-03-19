import React from "react";
import RoundedLineSvg from "../../components/RoundLineSvg";

function FactoryHeader() {
  return (
    <section className="w-full h-screen flex flex-col justify-between -mt-16">
      <article className="flex justify-between items-end flex-col w-full mt-20 grow">
        <h1 className="text-sm text-gray400 mx-5 pt-5">join the factory</h1>

        <div className="py-3 w-full center flex-col md:flex-row items-end pb-16 md:pb-0">
          <h1 className="text-green text-6xl md:text-8xl md:text-90 w-full pl-5">
            monthly design service <br />
            <span className="text-gray100">for your business</span>
          </h1>
          <h1 className="text-gray400 text-xs w-90 md:absolute right-3 text-end mt-5 md:mt-0 pb-1 pr-4">
            don't follow your old rules. make your own.
          </h1>
        </div>
      </article>

      <article className="px-5 *:text-xs md:*:text-xl flex flex-row md:h-44 justify-between items-end pl-4 pb-3 w-full bg-gray800">
        <h1 className="w-64">
          hire creative team and graphic designer to help you scale
        </h1>
        <button className="uppercase relative">
          <RoundedLineSvg />
          get started
        </button>
      </article>
    </section>
  );
}

export default FactoryHeader;
