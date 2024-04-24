import React, { useState, useEffect, useRef } from "react";
import { useInView, useScroll } from "framer-motion";
import Img1 from "/Phone1.jpg";
import Img2 from "/Phone2.jpg";
import Img3 from "/Phone3.jpg";
import Img4 from "/Phone4.jpg";

import "./Steps.css";

const data = [
  {
    content: "📷 Take Picture of the Plant",
    id: 1,
  },
  {
    content: "Upload the Picture to the Website",
    id: 2,
  },
  {
    content: "Wait for the Plant to be Identified",
    id: 3,
  },
  {
    content: "🚀 Get the Plant Information ",
    id: 4,
  },
];

function Steps() {
  const [imgx, setImgx] = useState(1);
  return (
    <>
      <div className="w-full flex items-start gap-20 px-4">
        <div className="w-full flex items-start py-[50vh]">
          <ul>
            {data.map((item) => {
              return (
                <li key={item.id} className="py-40 px-40 w-full justify-center">
                  <FeatureTitle
                    title={item.content}
                    id={item.id}
                    key={item.id}
                    setImgx={setImgx}
                    imgx={imgx}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="sticky top-0 flex items-center justify-center h-screen w-full overflow-hidden">
          <div className="w-full">
            <img
              src={
                imgx === 1 ? Img1 : imgx === 2 ? Img2 : imgx === 3 ? Img3 : Img4
              }
              alt="img"
              className="h-96 object-contain transition-all duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>
    </>
  );
}

function FeatureTitle(props) {
  const ref = useRef(null);
  const isInview = useInView(ref, { margin: "-30% 0px -30% 0px" });
  useEffect(() => {
    if (isInview) {
      props.setImgx(props.id);
    }
  }, [isInview]);
  return (
    <div
      ref={ref}
      className={
        isInview
          ? " text-5xl text-black-700 font-mono transition-colors"
          : " text-5xl text-gray-200 font-mono transition-colors "
      }
    >
      <div className=" text-3xl mb-3">Step {props.id}</div>
      <div>{props.title}</div>
    </div>
  );
}

export default Steps;
