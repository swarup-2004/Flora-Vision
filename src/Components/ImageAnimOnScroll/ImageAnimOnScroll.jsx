// import React from 'react'
import React, { useState, useEffect, useRef } from "react";
import "./ImageAnimOnScroll.css";
import { motion, useTransform, useScroll } from "framer-motion";
import Imgx from "./Imgx.jsx";
import Easter from "/easter.jpg";
import Car from "/car.webp";

function ImageAnimOnScroll() {
  const ref = useRef(null);

  return (
    <div ref={ref} className="iaos">
      <div className="iaos-right">
        <h1>Image Animation on Scroll</h1>
        <p>Scroll down to see the animation</p>
      </div>
      <div className="iaos-left">
        <Imgx imga={Easter} rafa={ref} scal={0} />
        <Imgx imga={Car} rafa={ref} scal={1} />
      </div>
    </div>
  );
}

export default ImageAnimOnScroll;
