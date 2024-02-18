import React from "react";

function FactoryHeader() {
  return (
    <section className="w-full h-96 flex flex-col justify-between items-end">
      <div className="py-3 w-full center flex-col md:flex-row items-end">
        <h1 className="text-green text-6xl md:text-90 w-full pl-5">
          how brid factory works
        </h1>
        <h1 className="relative border-top w-64 text-end mt-5 md:mt-0 pb-1 pr-4">
          join the factory
        </h1>
      </div>
      <h1 className="text-sm mx-5 mb-5">
        don’t follow your old rules. make your own
      </h1>
    </section>
  );
}

export default FactoryHeader;
