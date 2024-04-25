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
import { Link } from "react-router-dom";

function Hero({ chat, changechat }) {
  const imgxcont = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgxcont,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0.5, 0.9, 1], [0.5, 0.6, 0.6]);
  return (
    <>
      <div className=" flex  h-screen justify-center  " ref={imgxcont}>
        <div className="flex flex-col justify-between  w-full md:w-1/2">
          <div />
          <div />
          <div className=" ml-5 md:ml-10 ">
            <h6 className="he-welcome">Welcome to FloraVision</h6>
            <h1 className="he-head">Un🔓lock the plant's🪴identity</h1>
            <div className="he-p">
              FloraVision harnesses the power of machine learning to bring you
              instant, accurate plant identification.
            </div>
            <div>
              <button className="he-btn1 he-btn">
                <Link to="/" onClick={(e) => changechat(false)}>
                  Detect Plant
                </Link>
              </button>

              <button className="he-btn2 he-btn">
                <Link to="/chatbot" onClick={(e) => changechat(true)}>
                  Chatbot
                </Link>
              </button>
            </div>
          </div>
          <div className="flex w-full mb-5 md:mb-10 ml-5 md:ml-10 ">
            <div className="flex mr-5 md:mr-10 w-1/3 md:w-1/6">
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
        <div className="he-r w-full md:w-1/2">
          <motion.img
            src={DetectPlant}
            className=" mb-3rem"
            style={{ top: 0 }}
            initial={{ scale: 0 }}
            animate={{ scale: 0.6 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
