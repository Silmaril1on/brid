import React from "react";
import UserForm from "./UserForm";
import SocialMedia from "../../components/SocialMedia";

function Info() {
  return (
    <div className="bg-gray800 h-full">
      <section className="flex flex-col md:flex-row items-end justify-between mt-5">
        <UserForm />
        <div className="pr-5">
          <SocialMedia />
        </div>
      </section>
      <div className="flex flex-col md:flex-row items-center justify-between *:md:text-xs">
        <p className="md:pl-5 text-sm">
          fill out the form and We will get back to you within 2 business days
          with a link to our calendar. 
        </p>
        <div className="w-full flex flex-col items-end md:pr-5 *:text-xxs">
          <h1>ilia chavchavadze ave.37m</h1>
          <h3>+995 599 49 888 09</h3>
          <h4>id@brid.me</h4>
        </div>
      </div>
    </div>
  );
}

export default Info;
