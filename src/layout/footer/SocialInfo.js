import React from "react";
import SocialMedia from "../../components/SocialMedia";

function SocialInfo() {
  return (
    <div className="w-full h-auto md:h-96">
      <article className="w-full flex h-full flex-col justify-center md:justify-between space-y-5">
        <div className="p-10">
          <SocialMedia />
        </div>
        <div className=" w-full flex flex-col items-end *md:text-2xl p-5">
          <h1>ilia chavchavadze ave.37m</h1>
          <h3>+995 599 49 888 09</h3>
          <h4>id@brid.me</h4>
        </div>
      </article>
    </div>
  );
}

export default SocialInfo;
