import React from "react";
import Car from "/Car1.jpeg";
import "./Card2.css";

function Card2(props) {
  return (
    <div className="card">
      <div className="imgbox">
        <img src={Car} />
      </div>
      <div className="content">
        <h3>title</h3>
        <p>Feature Explanation</p>
      </div>
    </div>
  );
}

export default Card2;
