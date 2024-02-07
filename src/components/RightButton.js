import React from "react";
import GreenArrowSvg from "./GreenArrowSvg";

function RightButton({ onClick }) {
  return (
    <button className="h-9 w-9 cursor-pointer" onClick={onClick}>
      <GreenArrowSvg />
    </button>
  );
}

export default RightButton;
