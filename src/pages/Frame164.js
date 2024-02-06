import React, { useState } from "react";
import HeaderTwo from "../components/HeaderTwo";
import image1 from "../assets/image_8.png";
import image2 from "../assets/image_35.png";
import image3 from "../assets/image_47.png";
import ArrowSvg from "../components/ArrowSvg";
import GreenArrowSvg from "../components/GreenArrowSvg";
import RoundLineSvg from "../components/RoundLineSvg";

const horizonData = [
  {
    id: 0,
    name: "horizon",
    image: image1,
    info: "digital marketing agency from germany",
    button: "branding, packaging",
  },
  {
    id: 1,
    name: "horizon",
    image: image2,
    info: "digital marketing agency from germany",
    button: "branding",
  },
  {
    id: 2,
    name: "horizon",
    image: image3,
    info: "digital marketing agency from germany",
    button: "branding",
  },
];

function Frame164() {
  const [active, setActive] = useState(0);

  return (
    <section className="mt-10">
      <HeaderTwo />
      <div className="grid grid-cols-3 grid-rows-1 gap-4 p-10">
        {horizonData.map((item) => {
          return (
            <div
              onClick={() => setActive(item.id)}
              className={
                active === item.id
                  ? "w-full *:duration-300 relative border-bottom duration-500 flex flex-col h-full"
                  : "w-full *:duration-300 relative border-bottom duration-500 flex flex-col h-full brightness-75"
              }
              key={item.id}
            >
              <article className="flex flex-row w-full h-12 relative mb-10 space-x-6 border-bottom">
                <div className="h-12">
                  {active === item.id ? <GreenArrowSvg /> : <ArrowSvg />}
                </div>
                <h1
                  className={
                    active === item.id
                      ? "text-4xl text-green center duration-500"
                      : "text-4xl center"
                  }
                >
                  {item.name}
                </h1>
              </article>

              <div className="w-full h-full">
                <img className="w-full h-full" src={item.image} alt="horizon" />
              </div>
              <p className="capitalize py-3 text-sm">{item.info}</p>
              <article className=" flex justify-end *:cursor-pointer">
                {active === item.id ? <RoundLineSvg /> : ""}
                <h1
                  className={
                    active === item.id
                      ? "text-end w-full pr-5 text-green duration-500"
                      : "text-end w-full pr-5 "
                  }
                >
                  {item.button}
                </h1>
              </article>
            </div>
          );
        })}
      </div>
      <div className="p-4 flex justify-end ">
        <h1 className="mr-10 text-3xl underline underline-offset-2 text-gray500">
          view all projects
        </h1>
      </div>
    </section>
  );
}

export default Frame164;
