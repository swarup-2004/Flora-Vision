import React from "react";
import "./Imgx.css";
import { motion, useTransform, useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";

//send img to imga, ref to rafa and scal(bool) to scale

function Imgx({ imga, rafa, scal }) {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  const { scrollYProgress } = useScroll(rafa);
  const y = useTransform(scrollYProgress, [0, 1], [-250, 15]);
  //Change the value of y From 250 to 450 to see the difference
  const scaleY = useTransform(scrollYProgress, [0, 1], [0.9, 1.3]);
  //Change the value of scale to 1.7 to see the difference

  return (
    <div>
      <motion.div className="imgx-div">
        <motion.div className="imgx-div2 ixx" />
        {scal ? (
          <motion.img style={{ y, scaleY }} src={imga} alt="Easter" />
        ) : (
          <motion.img style={{ y }} src={imga} alt="Car" />
        )}
        <motion.div className="imgx-div2 ix " />
      </motion.div>
    </div>
  );
}

export default Imgx;
