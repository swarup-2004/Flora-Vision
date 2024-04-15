import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
// import "ai-taxonomist";
import Plant from "/img3.jpg";
import PData from "./PlantData.js";
import "./Detect.css";
import Modalx from "./Modalx";

function Detect() {
  const [image, setImage] = useState("Hello World");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState({});
  const [plantName, setPlantName] = useState("");

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
      <div className="detect-form flex flex-col items-center justify-center  p-6 ">
        <form
          onSubmit={sendImg}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <input
            type="file"
            name="image"
            className="detect-form-input-field appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button
            type="submit"
            className="detect-form-input-submit mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>

      <Modalx isOpen={loading} onClose={() => setLoading(false)}>
        <div className=" pt-6 flex justify-between">
          <div className="detect-modal-img w-7/12">
            <img
              src={results.image}
              alt="Plant"
              className="detect-modal-image"
            />
            <div className="my-8  font-bold text-lg">
              Accuracy: <span className=" text-green-700">85%</span>
            </div>
          </div>
          <div className="detect-modal-info  w-5/12">
            <div className="bg-white  px-8  pb-8 mb-4 flex flex-col ">
              <div className="text-4xl pb-2 font-bold mb-4 border-b-2 border-gray-200 text-green-900">
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
