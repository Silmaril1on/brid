import React from "react";
import GreenArrowSvg from "./GreenArrowSvg";

function LeftButton({ onClick }) {
  return (
    <button className="w-9 h-9 cursor-pointer" onClick={onClick}>
      <div className="rotate-180">
        <GreenArrowSvg />
      </div>
    </button>
  );
}

export default LeftButton;
