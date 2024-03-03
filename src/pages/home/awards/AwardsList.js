import React, { useState } from "react";
import awardsData from "../../../database/awardsData";

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
              <h1 className={active === award.id ? "text-green" : ""}>
                {award.award}
              </h1>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AwardsList;
