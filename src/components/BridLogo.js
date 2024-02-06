import React from "react";
import logo from "../assets/logo_brid.png";

function BridLogo() {
  return (
    <div className="h-5 md:h-9 w-auto">
      <img className="w-full h-full" src={logo} alt="brid_logo" />
    </div>
  );
}

export default BridLogo;
