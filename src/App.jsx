import "./App.css";
import Detect from "./Detect.jsx";
import Features from "./Features.jsx";
import Hero from "./Hero.jsx";
// import Hero from "./Hero.jsx";
import ImageHoverAccordian from "./ImageHoverAccordian";
import Navbar from "./Navbar.jsx";
import PlantsZoom from "./PlantsZoom.jsx";
import Steps from "./Steps.jsx";
import TakePic from "./TakePic.jsx";

export default function App() {
  const tip = "text-5xl font-bold";
  return (
    <>
      {/* <Hero /> */}
      <Navbar />
      <Hero />
      <Steps />
      {/* <Features /> */}
      <PlantsZoom />
      <Detect />
      <ImageHoverAccordian />

      {/* <TakePic /> */}
    </>
  );
}
