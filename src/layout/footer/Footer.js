import React from "react";
import AnimatedLetters from "../../components/AnimatedLetters";
import Info from "./Info";

function Footer() {
  return (
    <section
      id="footer"
      className="w-full h-screen pt-16 flex flex-col justify-between"
    >
      <div className="flex flex-row justify-between items-end relative border-bottom ">
        <p className="w-1/3 pl-5 text-sm">
          Are you interested in working together and elevate your brand to the
          next level?
        </p>
        <AnimatedLetters text="hello" className="text-9xl text-end pr-10 " />
      </div>
      <article className="pl-5 py-5">
        <h1>lets talk about you</h1>
      </article>
      <Info />
    </section>
  );
}

export default Footer;
