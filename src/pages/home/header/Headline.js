import React, { useState } from "react";
import HeadlineOne from "./HeadlineOne";
import HeadlineTwo from "./HeadlineTwo";

function Headline() {
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  window.addEventListener("mousemove", (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  });

  return (
    <article className="absolute bottom-0 h-full overflow-hidden w-full *:text-4xl md:*:text-9xl *:w-full *:my-5 *:font-normal">
      <div className="cursor-container h-full">
        <HeadlineOne />
        <HeadlineTwo />
        <div
          className="cursor"
          style={{ left: cursorX + "px", top: cursorY + "px" }}
        >
          <div className="hidden">
            <p>{cursorX}</p>
            <p>{cursorY}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Headline;
