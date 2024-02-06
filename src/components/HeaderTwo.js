import React from "react";
import BridLogo from "./BridLogo";
import Initials from "./Initials";
import Lines from "./Lines";

function HeaderTwo() {
  return (
    <header className="w-full">
      <div className="flex justify-center items-center m-2 p-2 relative before:absolute before:w-98 before:bottom-1 md:before:-bottom-2 before:border-b before:border-gray200">
        <div className="flex flex-row items-center justify-between w-full">
          <BridLogo />
          <Lines />
          <Initials />
        </div>
      </div>
    </header>
  );
}

export default HeaderTwo;
