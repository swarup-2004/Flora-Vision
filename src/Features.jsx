import React from "react";
import "./Features.css";
import Card2 from "./Components/Card2";

const Features = () => {
  return (
    <div className="featuress">
      <div className="headin">Salient Features</div>
      <div className="featur">
        <Card2 />
        <Card2 />
        <Card2 />
      </div>
    </div>
  );
};

export default Features;
