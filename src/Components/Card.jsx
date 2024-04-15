import React, { useEffect } from "react";
import SplitType from "split-type";
import "./Card.css";

function Card(props) {
  return (
    <div>
      <div className="cardo">
        <div className="cardo-txt">
          {/* {chark.map((char, index) => (
            <span key={index} className="cardo-text-char">
              {char}
            </span>
          ))} */}
          {props.txt}
        </div>
        <div className="cardo-img">
          <img src={props.imgsrc} alt="img" className="cardo-img-i" />
        </div>
      </div>
    </div>
  );
}

export default Card;
