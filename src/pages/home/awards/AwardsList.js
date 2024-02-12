import React, { useState } from "react";
import awardsData from "../../../database/awardsData";
import RoundedLineSvg from "../../../components/RoundLineSvg";
import logo from "../../../assets/awards_image.jpg";

function AwardsList() {
  const [active, setActive] = useState(0);
  return (
    <div className="flex flex-col my-10 relative">
      {awardsData.map((award) => {
        return (
          <div
            onClick={() => setActive(award.id)}
            className="center flex-col md:flex-row justify-between py-4 odd:bg-gray800 cursor-pointer"
            key={award.id}
          >
            <div className="center flex-col md:flex-row md:space-x-8 ">
              <h1
                className={
                  active === award.id
                    ? "w-10 text-xl md:ml-4 text-green"
                    : "w-10 text-xl md:ml-4"
                }
              >
                {award.year}
              </h1>
              <h1 className="text-sm p-1 text-center">{award.name}</h1>
            </div>
            <div className="md:mr-7 relative center md:items-end w-24">
              {active === award.id ? <RoundedLineSvg /> : ""}
              <h1>{award.award}</h1>
            </div>
          </div>
        );
      })}
      <div className="hidden md:flex absolute w-80 left-2/3 bottom-10">
        <img className="w-full h-full" src={logo} alt="awards-pic" />
      </div>
    </div>
  );
}

export default AwardsList;
