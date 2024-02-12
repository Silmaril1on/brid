import React from "react";
import AnimatedLetters from "../../components/AnimatedLetters";
import Info from "./Info";

function Footer() {
  return (
    <section id="footer" className="w-full">
      <AnimatedLetters text="hello" className="text-9xl text-end pr-10 py-20" />
      <Info />
    </section>
  );
}

export default Footer;
