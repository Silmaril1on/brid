import React, { useRef, useState } from "react";
import ElipseSvg from "../../components/ElipseSvg";
import emailjs from "@emailjs/browser";
import { IoIosArrowDown } from "react-icons/io";
import ArrowSvg from "../../components/ArrowSvg";
import GreenArrowSvg from "../../components/GreenArrowSvg";

function FactoryForm() {
  const [active, setActive] = useState(1);
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
    <section className="bg-gray800 center flex-col w-full md:w-2/4 p-2">
      <h1 className="my-10 text-white">fill to be part of our team</h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="my-5 w-full center flex-col space-y-4"
      >
        <div
          id="1"
          onClick={() => setActive(1)}
          className="w-full md:w-10/12 relative border-bottom flex flex-row"
        >
          <div className="h-9 center flex-row relative border-bottom">
            {active === 1 ? <GreenArrowSvg /> : <ArrowSvg />}
          </div>
          <input
            type="name"
            placeholder="name surename"
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
            type="company_name"
            placeholder="company name"
            className={
              active === 2
                ? "footer-input-style placeholder:text-green"
                : "footer-input-style"
            }
            name="company_name"
          />
        </div>
        <div
          id="3"
          onClick={() => setActive(3)}
          className="w-full md:w-10/12 relative border-bottom flex flex-row"
        >
          <div className="h-9 center flex-row relative border-bottom">
            {active === 3 ? <GreenArrowSvg /> : <ArrowSvg />}
          </div>
          <input
            type="email"
            placeholder="email"
            className={
              active === 3
                ? "footer-input-style placeholder:text-green"
                : "footer-input-style"
            }
            name="email"
          />
        </div>
        <div
          id="4"
          onClick={() => setActive(4)}
          className="w-full md:w-10/12 relative border-bottom flex flex-row"
        >
          <div className="h-9 center flex-row relative border-bottom">
            {active === 4 ? <GreenArrowSvg /> : <ArrowSvg />}
          </div>
          <input
            type="phone number"
            placeholder="phone number"
            className={
              active === 4
                ? "footer-input-style placeholder:text-green"
                : "footer-input-style"
            }
            name="phone_number"
          />
        </div>

        <div
          id="5"
          onClick={() => setActive(5)}
          className="w-full md:w-10/12 z-5 relative border-bottom flex flex-row"
        >
          <div className="h-9 center flex-row relative border-bottom">
            {active === 5 ? <GreenArrowSvg /> : <ArrowSvg />}
          </div>
          <div className="absolute right-5 h-full center -z-1">
            <IoIosArrowDown className="text-gray400 text-xl" />
          </div>
          <select
            type="name"
            placeholder="offer of packages"
            className={
              active === 5
                ? "footer-input-style placeholder:text-green appearance-none"
                : "footer-input-style appearance-none"
            }
            name="package_offer"
          >
            <option value="free">free package</option>
            <option value="standart">standart package</option>
            <option value="premium">premium package</option>
            <option value="ultimate">ultimate package</option>
          </select>
        </div>

        <div
          id="6"
          onClick={() => setActive(6)}
          className="w-full md:w-10/12 z-5 relative border-bottom flex flex-row"
        >
          <div className="h-9 center flex-row relative border-bottom">
            {active === 6 ? <GreenArrowSvg /> : <ArrowSvg />}
          </div>
          <div className="absolute right-5 h-full center -z-1">
            <IoIosArrowDown className="text-gray400 text-xl" />
          </div>
          <select
            type="duration"
            placeholder="duration of cooperation"
            className={
              active === 5
                ? "footer-input-style placeholder:text-green appearance-none"
                : "footer-input-style appearance-none"
            }
            name="colab_duration"
          >
            <option value="1 month">1 month</option>
            <option value="3 month">3 month</option>
            <option value="6 month">6 month</option>
            <option value="1 year">1 year</option>
          </select>
        </div>

        <div className="w-full md:w-10/12 z-5 relative border-bottom flex flex-row">
          <textarea
            name="message"
            placeholder="project description"
            className="footer-input-style rounded-3xl h-36"
          />
        </div>
        <section className="flex flex-row justify-between w-full px-2 md:px-16">
          <div className="flex flex-col my-3">
            <h1 className="text-xs">
              Our meeting will be scheduled by our manager
            </h1>
            <h6 className="text-green text-xxs">approximate time 2 days</h6>
          </div>
          <div className="center w-32 relative">
            <ElipseSvg />
            <input
              type="submit"
              value="Send"
              className="uppercase cursor-pointer text-base hover:text-white relative z-2"
            />
          </div>
        </section>
      </form>
    </section>
  );
}

export default FactoryForm;
