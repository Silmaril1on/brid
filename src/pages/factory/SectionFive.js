import React from "react";
import ElipseSvg from "../../components/ElipseSvg";

const data = [
  {
    id: 0,
    number: 1,
    price: 100,
    itemAmount: "12 items",
  },
  {
    id: 1,
    number: 2,
    price: 100,
    itemAmount: "20 items",
  },
  {
    id: 2,
    number: 3,
    price: 100,
    itemAmount: "30 items",
  },
  {
    id: 3,
    number: 4,
    price: 100,
    itemAmount: "unlimited",
  },
];

function SectionFive() {
  return (
    <section className="center flex-col w-full">
      <div className="flex flex-col md:flex-row w-full my-5">
        <article className="flex flex-col w-full p-10">
          <h1 className="text-green text-4xl">pricing and packages</h1>
          <h6>description</h6>
        </article>
        <article className="flex flex-col items-end justify-center w-full">
          <button className="relative mr-10 uppercase text-white p-10 center flex">
            <ElipseSvg />
            get started
          </button>
        </article>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 w-full border-t border-gray800">
        {data.map((item) => {
          return (
            <div
              className="center flex-col h-500 border-r border-gray-800 space-y-5"
              key={item.id}
            >
              <h1 className="text-9xl text-gray800">{item.number}</h1>
              <h1>$ {item.price}</h1>
              <h1 className="text-green text-2xl">{item.itemAmount}</h1>
              <h1 className="text-xs">per month</h1>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SectionFive;
