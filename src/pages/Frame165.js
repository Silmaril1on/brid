import React, { useState } from "react";
import HeaderTwo from "../components/HeaderTwo";
import GreenArrowSvg from "../components/GreenArrowSvg";
import ArrowSvg from "../components/ArrowSvg";

const awardsData = [
  {
    id: 0,
    name: "print contest",
    year: 2021,
    type: "acag",
    award: "gold",
  },
  {
    id: 1,
    name: "print contest",
    year: 2021,
    type: "acag",
    award: "gold",
  },
  {
    id: 2,
    name: "print contest",
    year: 2021,
    type: "acag",
    award: "gold",
  },
  {
    id: 3,
    name: "print contest",
    year: 2021,
    type: "acag",
    award: "gold",
  },
  {
    id: 4,
    name: "print contest",
    year: 2021,
    type: "acag",
    award: "gold",
  },
  {
    id: 5,
    name: "print contest",
    year: 2021,
    type: "acag",
    award: "gold",
  },
  {
    id: 6,
    name: "print contest",
    year: 2021,
    type: "acag",
    award: "gold",
  },
  {
    id: 7,
    name: "print contest",
    year: 2021,
    type: "acag",
    award: "gold",
  },
];

function Frame165() {
  const [active, setActive] = useState(0);

  return (
    <section>
      <HeaderTwo />
      <article className="center flex-col">
        <div className="w-full relative  border-bottom my-5">
          <h1 className="text-6xl md:text-200 pl-2 w-full text-start">
            awards
          </h1>
        </div>
        <div className="w-full flex justify-end mt-5 mb-7 pb-5 relative border-bottom">
          <section className="w-full md:w-2/4 mr-5 my-9">
            {awardsData.map((item) => {
              return (
                <div
                  onClick={() => setActive(item.id)}
                  key={item.id}
                  className="flex cursor-pointer odd:bg-gray900 flex-row items-center w-full"
                >
                  <div className="w-9 h-9">
                    {active === item.id ? <GreenArrowSvg /> : <ArrowSvg />}
                  </div>
                  <article
                    className={
                      active === item.id
                        ? "flex w-full flex-row ml-2 items-center justify-between text-green duration-300"
                        : "flex w-full flex-row ml-2 items-center justify-between"
                    }
                  >
                    <div className="flex flex-row items-center">
                      <h1 className="ml-2 text-xl">{item.year}</h1>
                      <h1 className="border-r ml-2 pr-2 ">{item.type}</h1>
                      <h1 className="ml-3">{item.name}</h1>
                    </div>
                    <div className="">
                      <h1>{item.award}</h1>
                    </div>
                  </article>
                </div>
              );
            })}
          </section>
        </div>
      </article>
    </section>
  );
}

export default Frame165;
