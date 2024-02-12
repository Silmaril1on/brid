import React from "react";
import logo from "../../../assets/header_image.jpg";
import { motion } from "framer-motion";
import { zoomIn } from "../../../framerMotion/motionValues";
import Headline from "./Headline";

function HeaderVideo() {
  return (
    <div className="w-full h-full center relative">
      <motion.img
        variants={zoomIn}
        initial="hidden"
        animate="visible"
        className="w-auto p-5 h-full object-cover"
        src={logo}
        alt="header"
      />
      <Headline />
    </div>
  );
}

export default HeaderVideo;
