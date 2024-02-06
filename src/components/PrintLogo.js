import React from "react";
import logo from "../assets/fingerprint.png";

function PringLogo() {
  return (
    <div className="h-5 md:h-8 w-auto ml-16 md:ml-28">
      <img className="w-full h-full" src={logo} alt="print_logo" />
    </div>
  );
}

export default PringLogo;
