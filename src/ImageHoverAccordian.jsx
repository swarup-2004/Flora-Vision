import React, { useState, useEffect } from "react";
import "./ImageHoverAccordian.css";
import { data } from "autoprefixer";
import Project from "./Project";
import Modal from "./Modal";
import Lav from "./assets/Lavender.jpg";
import Nee from "./assets/Neem.jpg";
import Tul from "./assets/Tulsi.jpg";
import Alo from "./assets/Aloe.jpg";

const Data = [
  {
    title: "Arjuna",
    src: Lav,
    color: "#4a3650",
  },
  {
    title: "Neem",
    src: Nee,
    color: "#739734",
  },
  {
    title: "Brahmi",
    src: Tul,
    color: "#4e5f2b",
  },
  {
    title: "Rubble",
    src: Alo,
    color: "#2e3819",
  },
  {
    title: "Curry",
    src: Alo,
    color: "#2e3819",
  },
  {
    title: "Mint",
    src: Alo,
    color: "#2e3819",
  },
];

export default function ImageHoverAccordian() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <>
      <h1 className="titlex">Plants We Support</h1>
      <div className="mainx">
        <div className="mainx-bodx">
          {Data.map((item, index) => {
            return (
              <Project
                index={index}
                title={item.title}
                setModal={setModal}
                key={index}
              />
            );
          })}
        </div>
        <Modal modal={modal} projects={Data} />
      </div>
    </>
  );
}
