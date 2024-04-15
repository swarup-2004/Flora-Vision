import React, { useState, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import "./PlantsZoom.css";
import { useScroll, useTransform, motion } from "framer-motion";
import S1 from "/img1.jpg";
import S2 from "/img2.jpg";
import SX from "/mainimg.png";
import S3 from "/img4.webp";
import S4 from "/img5.jpg";
import S5 from "/img3.jpg";

function PlantsZoom() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
  const pictures = [
    {
      src: SX,
      scale: scale4,
    },
    {
      src: S1,
      scale: scale5,
    },
    {
      src: S3,
      scale: scale6,
    },
    {
      src: S2,
      scale: scale8,
    },
    {
      src: S4,
      scale: scale9,
    },
    {
      src: S5,
      scale: scale6,
    },
  ];
  return (
    <div ref={container} className="PO-container">
      <div className="PO-sticky">
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div key={index} style={{ scale }} className="PO-el">
              <div className="PO-imageContainer">
                <img src={src} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default PlantsZoom;
