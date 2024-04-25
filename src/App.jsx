import "./App.css";
import Detect from "./Detect.jsx";
// import Features from "./Features.jsx";
import Hero from "./Hero.jsx";
// import Hero from "./Hero.jsx";
import ImageHoverAccordian from "./ImageHoverAccordian";
import Navbar from "./Navbar.jsx";
import PlantsZoom from "./PlantsZoom.jsx";
import Steps from "./Steps.jsx";
import Chatbot from "./Components/Chatbot/Chatbot.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import TakePic from "./TakePic.jsx";
import React, { useState, useEffect } from "react";

export default function App() {
  const [chat, changechat] = useState(false);
  const tip = "text-5xl font-bold";
  return (
    <Router>
      <Navbar chat={chat} changechat={changechat} />
      <Hero chat={chat} changechat={changechat} />
      <Routes>
        <Route path="/chatbot" element={<Chatbot />} />
        <Route
          path="/"
          element={
            <>
              <Steps />
              <PlantsZoom />
              <Detect />
              <ImageHoverAccordian />
            </>
          }
        />
      </Routes>
    </Router>
  );
}
