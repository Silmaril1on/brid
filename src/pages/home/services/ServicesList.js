import React, { useState } from "react";
import GreenArrowSvg from "../../../components/GreenArrowSvg";
import ArrowSvg from "../../../components/ArrowSvg";
import { motion } from "framer-motion";
import { slideFromTop } from "../../../framerMotion/motionValues";
import servicesData from "../../../database/servicesData";

function ServicesList() {
  const [active, setActive] = useState(0);
  const [index, setIndex] = useState(0);

  const renderServiceInfo = (index) => {
    setIndex(index);
  };

  return (
    <section className="flex flex-col md:flex-row w-full">
      <motion.div
        variants={slideFromTop}
        initial="hidden"
        whileInView="visible"
        className="px-2 md:px-10 w-full md:w-9/12 flex items-start flex-col bg-gray800 pt-16 pb-5 "
      >
        <div className="my-10 relative border-bottom w-full">
          <h1>services</h1>
        </div>
        {servicesData.map((item, index) => {
          return (
            <motion.div
              key={item.id}
              variants={slideFromTop}
              onClick={() => renderServiceInfo(index)}
              className="center overflow-hidden cursor-pointer w-full flex-col h-auto"
            >
              <article className="center overflow-hidden cursor-pointer w-full flex-row space-x-4 md:space-x-10 h-auto">
                <div className="h-10">
                  {active === item.id ? <GreenArrowSvg /> : <ArrowSvg />}
                </div>
                <h1
                  onClick={() => setActive(item.id)}
                  className={
                    active === item.id
                      ? "text-lg md:text-4xl w-full text-green duration-300"
                      : "text-lg md:text-4xl w-full duration-300"
                  }
                >
                  {item.name}
                </h1>
              </article>
              {index === active ? (
                <div className="block md:hidden">
                  <ServicesInfo data={servicesData[index]} />
                </div>
              ) : (
                ""
              )}
            </motion.div>
          );
        })}
      </motion.div>
      <div className="hidden md:flex flex-col md:w-2/4 pt-16">
        <div className="relative mx-5 border-bottom w-auto pt-16"></div>
        <ServicesInfo data={servicesData[index]} />
      </div>
    </section>
  );
}

function ServicesInfo({ data }) {
  return (
    <div className="w-full">
      <article className="p-4 md:p-5 w-full">
        <p className="text-xs md:text-xs h-12 ">{data.info}</p>
        <img
          className="mt-3 h-96 w-full object-cover"
          src={data.image}
          alt="service_pic"
        />
      </article>
    </div>
  );
}

export default ServicesList;
