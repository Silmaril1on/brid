import React from "react";
import ArrowSvg from "../../components/ArrowSvg";

const data = [
  {
    id: 0,
    number: 1,
    price: 700,
    itemAmount: "15 item",
    duration: "per month",
  },
  {
    id: 1,
    number: 2,
    price: 900,
    itemAmount: "25 item",
    duration: "per month",
  },
  {
    id: 2,
    number: 3,
    price: 2200,
    itemAmount: "unlimited",
    duration: "per month",
  },
  {
    id: 3,
    number: 4,
    price: 35,
    itemAmount: "hourly",
    duration: "per hour",
  },
];

function SectionFive() {
  return (
    <section className="center flex-col w-full h-auto md:h-screen my-10 md:my-5 bg-black">
      <div className="grid grid-cols-1 md:grid-cols-4 w-full">
        {data.map((item) => {
          return (
            <div
              className="center pb-5 px-5 flex-col h-500 justify-between space-y-5 even:mt-14 even:bg-gray800 odd:bg-gray900 "
              key={item.id}
            >
              <article className="w-full mt-10">
                <h1 className="text-6xl relative border-bottom text-gray100 w-full text-start">
                  {item.itemAmount}
                </h1>
                <div className="flex flex-row mt-5 relative border-bottom items-center justify-between">
                  <h1>{item.duration}</h1>
                  <span className="h-9 rotate-90">
                    <ArrowSvg />
                  </span>
                </div>
              </article>
              <article className="relative border-t border-gray400 pt-2 items-center justify-between w-full flex flex-row">
                <div>
                  <h1>price</h1>
                  <h6>total [ inc vat ] </h6>
                </div>
                <h1 className="text-2xl">$ {item.price}</h1>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SectionFive;
