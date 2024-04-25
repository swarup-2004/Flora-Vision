import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
// import "ai-taxonomist";
import Plant from "/img3.jpg";
import PData from "./PlantData.js";
import "./Detect.css";
import Modalx from "./Modalx";
import Imgx from "./Components/ImageAnimOnScroll/Imgx.jsx";
import Identify from "/Identify.svg";

function Detect() {
  const [image, setImage] = useState("Hello World");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState({});
  const [plantName, setPlantName] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    console.log(PData);
  }, []);
  const sendImg = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", e.target.image.files[0]);
    axios
      .post("http://localhost:5000/api/submit_data", formData)
      .then((response) => {
        setResults(PData[response.data.plantName]);
        setPlantName(response.data.plantName);
        setLoading(true);
        console.log(PData[response.data.plantName]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="detect">
      <div className=" font-sans  font-bold tracking-wide text-4xl  pt-10 px-10">
        Upload
      </div>
      <div class="flex">
        <div class="w-1/2 flex col items-center w-1/2 justify-center ">
          <form onSubmit={sendImg} class="m-4">
            <div>
              <input type="file" name="image" class="m-2" />
            </div>
            <button
              type="submit"
              class="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </form>
        </div>
        <div class="flex w-1/2 h-full justify-center">
          <img src={Identify} alt="Plant" class="m-4 h-1/2 w-4/6" />
        </div>
      </div>

      <Modalx isOpen={loading} onClose={() => setLoading(false)} ref={ref}>
        <div className=" pt-6 flex justify-between">
          <div className="detect-modal-img w-7/12">
            {/* <img
              src={results.image}
              alt="Plant"
              className="detect-modal-image"
            /> */}
            <Imgx imga={results.image} rafa={ref} scal={0} />
          </div>
          <div className="detect-modal-info bg-[f5f5f5]  w-5/12">
            <div className="  px-8  pb-8 mb-4 flex flex-col ">
              <div className="text-4xl pb-2 font-bold mb-4 border-b-2 border-gray-200 text-green-900 tracking-wide font-sans">
                {plantName}
              </div>
              <div className="font-bold text-xl mb-2">
                Scientific Name:{" "}
                <span className="font-normal">{results.scientific_name}</span>
              </div>
              <div className="mb-2">
                Common Names:{" "}
                <span className="font-light">{results.common_names}</span>
              </div>
              <div className="mb-2">
                <span className="font-bold">Description</span> <br />
                <span className="font-light">{results.description}</span>
              </div>
              <div className="mb-2">
                Soil Type:{" "}
                <span className="font-light">{results.soil_type}</span>
              </div>
              <div className="mb-2">
                Climate:{" "}
                <span className="font-light">
                  {results.weather_preferences}
                </span>
              </div>
              <div className="mb-2">
                Sunlight Requirements:{" "}
                <span className="font-light">
                  {results.sunlight_requirements}
                </span>
              </div>
              <div className="mb-2">
                Watering Needs:{" "}
                <span className="font-light">{results.watering_needs}</span>
              </div>
              <div className="mb-2">
                Growth-Rate:{" "}
                <span className="font-light">{results.growth_rate}</span>
              </div>
              <div className="mb-2">
                Maintenance-Level:{" "}
                <span className="font-light">{results.maintenance_level}</span>
              </div>
              <div className="mb-2">
                Special Features:{" "}
                <span className="font-light">{results.special_features}</span>
              </div>
            </div>
          </div>
        </div>
      </Modalx>
    </div>
  );
}

export default Detect;
