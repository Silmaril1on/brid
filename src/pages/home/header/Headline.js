import React from "react";
import HeadlineOne from "./HeadlineOne";
import HeadlineTwo from "./HeadlineTwo";

function Headline() {
  return (
    <article className="absolute bottom-0 overflow-hidden w-full *:text-4xl md:*:text-9xl *:w-full *:my-5 *:font-normal">
      <HeadlineOne />
      <HeadlineTwo />
    </article>
  );
}

export default Headline;
