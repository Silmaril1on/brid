import React, { useRef } from "react";
import ElipseSvg from "../../components/ElipseSvg";
import emailjs from "@emailjs/browser";
import { IoIosArrowDown } from "react-icons/io";

function FactoryForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_5vt7uf4", "template_cr1yhjk", form.current, {
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
    <section className="bg-gray800 center flex-col w-full">
      <h1 className="my-10 text-white">fill to be part of our team</h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="my-5 w-11/12 md:w-2/4 center flex-col space-y-4"
      >
        <div className="w-10/12">
          <input
            type="name"
            placeholder="name surename"
            className="factory-input-style"
            name="to_name"
          />
        </div>
        <div className="w-10/12">
          <input
            type="company name"
            placeholder="company name"
            className="factory-input-style"
            name="company_name"
          />
        </div>
        <div className="w-10/12">
          <input
            type="email"
            placeholder="contact e-mail"
            className="factory-input-style"
            name="from_name"
          />
        </div>
        <div className="w-10/12">
          <input
            type="phone number"
            placeholder="phone number"
            className="factory-input-style"
            name="phone_number"
          />
        </div>
        <div className="w-10/12 relative z-5">
          <div className="absolute right-5 h-full center -z-1">
            <IoIosArrowDown className="text-green text-xl" />
          </div>
          <select
            type="name"
            placeholder="offer of packages"
            className="factory-input-style appearance-none text-white *:bg-gray800"
            name="package_offer"
          >
            <option value="free">free package</option>
            <option value="standart">standart package</option>
            <option value="premium">premium package</option>
            <option value="ultimate">ultimate package</option>
          </select>
        </div>
        <div className="w-10/12 relative z-5">
          <div className="absolute right-5 h-full center -z-1">
            <IoIosArrowDown className="text-green text-xl" />
          </div>
          <select
            type="duration"
            placeholder="duration of cooperation"
            className="factory-input-style appearance-none text-white *:bg-gray800"
            name="colab_duration"
          >
            <option value="1 month">1 month</option>
            <option value="3 month">3 month</option>
            <option value="6 month">6 month</option>
            <option value="1 year">1 year</option>
          </select>
        </div>
        <div className="w-10/12">
          <textarea
            name="message"
            placeholder="descriotion"
            className="factory-input-style rounded-3xl h-36"
          />
        </div>
        <div className="center w-10/12 relative">
          <ElipseSvg />
          <input
            type="submit"
            value="Send To Us"
            className="uppercase cursor-pointer text-base hover:text-white relative z-2"
          />
        </div>
      </form>
      <div className="center flex-col my-3">
        <h1 className="text-center">
          Our meeting will be scheduled by our manager
        </h1>
        <h6 className="text-green text-xs">approximate time 2 days</h6>
      </div>
    </section>
  );
}

export default FactoryForm;
