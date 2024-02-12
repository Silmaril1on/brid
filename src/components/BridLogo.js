import React from "react";
import logo from "../assets/logo_brid.png";

function BridLogo() {
  return (
    <div className="h-5 md:h-7 w-auto">
      <a href="#top">
        <img className="w-full h-full" src={logo} alt="brid_logo" />
      </a>
    </div>
  );
}

export default BridLogo;
