import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ArrowSvg from "../../components/ArrowSvg";
import GreenArrowSvg from "../../components/GreenArrowSvg";

function UserForm() {
  const [active, setActive] = useState(1);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_5vt7uf4", "template_ahjww3l", form.current, {
        publicKey: "yQmXdXcvudISkKYU1",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.currentTarget.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="w-full h-96 p-4 space-y-5">
      <div
        id="1"
        onClick={() => setActive(1)}
        className="w-full md:w-10/12 relative border-bottom flex flex-row"
      >
        <div className="h-9 center flex-row relative border-bottom">
          {active === 1 ? <GreenArrowSvg /> : <ArrowSvg />}
        </div>
        <input
          type="text"
          placeholder="your name"
          className={
            active === 1
              ? "footer-input-style placeholder:text-green"
              : "footer-input-style"
          }
          name="to_name"
        />
      </div>
      <div
        id="2"
        onClick={() => setActive(2)}
        className="w-full md:w-10/12 relative border-bottom flex flex-row"
      >
        <div className="h-9 center flex-row relative border-bottom">
          {active === 2 ? <GreenArrowSvg /> : <ArrowSvg />}
        </div>
        <input
          type="email"
          placeholder="your email"
          className={
            active === 2
              ? "footer-input-style placeholder:text-green"
              : "footer-input-style"
          }
          name="from_mail"
        />
      </div>
      <div className="w-full md:w-10/12 relative border-bottom ">
        <textarea
          name="message"
          placeholder="tell us about your project"
          className="footer-input-style h-36"
        />
      </div>
      <div className="flex justify-end w-10/12">
        <div className="h-9 center flex-row relative border-bottom">
          <ArrowSvg />
          <input
            type="submit"
            value="Send"
            className="uppercase cursor-pointer text-sm hover:text-white duration-300"
          />
        </div>
      </div>
    </form>
  );
}

export default UserForm;
