import React from "react";
import BridLogo from "./BridLogo";
import { NavLink } from "react-router-dom";

function HomeBar() {
  return (
    <header className="flex flex-row justify-between items-center p-2 border-b border-gray-400 py-3 fixed top-0 w-full max-w-screen-2xl bg-black z-5">
      <BridLogo />
      <NavLink to="/">home</NavLink>
    </header>
  );
}

export default HomeBar;
