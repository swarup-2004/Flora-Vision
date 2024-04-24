import React, { useState, useEffect, useRef } from "react";
import "./Hero.css";
import DetectPlant from "/img6.png";
import {
  motion,
  useViewportScroll,
  useTransform,
  useScroll,
} from "framer-motion";
import CountUp from "react-countup";

function Hero() {
  const imgxcont = useRef < HTMLDivElement > null;
  const { scrollYProgress } = useScroll({
    target: imgxcont,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.2, 1], [0.5, 0.9, 1]);
  return (
    <>
      <div className=" flex h-screen justify-center  ">
        <div className="flex flex-col justify-between w-1/2">
          <div />
          <div />
          <div className=" ml-10 ">
            <h6 className="he-welcome">Welcome to FloraVision</h6>
            <h1 className="he-head">Un🔓lock the plant's🪴identity</h1>
            <div className="he-p">
              FloraVision harnesses the power of machine learning to bring you
              instant, accurate plant identification.
            </div>
            <div>
              <button className="he-btn1 he-btn">Detect Plant</button>

              <button className="he-btn2 he-btn">How It Works</button>
            </div>
          </div>
          <div className="flex w-full mb-10 ml-10">
            <div className="flex mr-10 w-1/6">
              <motion.div
                className=" hero-line-3 mr-4"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
              <div className="flex flex-col h-full justify-between">
                <div className="he-bot">
                  <CountUp end={97} duration={10} />%
                </div>
                <span>Accuracy</span>
              </div>
            </div>
            <div className="flex mr-10">
              <motion.div
                className=" hero-line-3 mr-4"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
              <div className="flex flex-col h-full justify-between">
                <div className="he-bot">06</div>
                <span>Supported Plants</span>
              </div>
            </div>
            <div className="flex">
              <motion.div
                className=" hero-line-3 mr-4"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
              <div className="flex flex-col h-full justify-between">
                <div className="he-bot">1s</div>
                <span>Avg Response Time</span>
              </div>
            </div>
          </div>
        </div>
        <div className="he-r">
          <motion.img
            src={DetectPlant}
            className="sticky mb-3rem"
            style={{ top: 0, scale }}
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
