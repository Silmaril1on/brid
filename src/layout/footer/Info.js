import React from "react";
import UserForm from "./UserForm";
import SocialInfo from "./SocialInfo";

function Info() {
  return (
    <div className="bg-gray800">
      <article className="relative border-bottom p-3">
        <h1>lets talk about you</h1>
      </article>
      <section className="center flex-row mt-5">
        <UserForm />
        <SocialInfo />
      </section>
    </div>
  );
}

export default Info;
