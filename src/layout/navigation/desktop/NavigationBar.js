import React from "react";
import NavLinks from "./NavLinks";
import BridLogo from "../../../components/BridLogo";

function NavigationBar() {
  return (
    <nav className="md:flex z-10 flex-row justify-between items-center p-2 border-b border-gray-400 py-3 hidden fixed top-0 w-full bg-black">
      <BridLogo />
      <NavLinks />
    </nav>
  );
}

export default NavigationBar;
