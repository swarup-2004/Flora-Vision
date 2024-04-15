import React from "react";
import "./Navbar.css";
import { IoLogoDropbox } from "react-icons/io";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <>
      <div className="nav">
        <div className="nav-left">
          <span className="nav-left-name">FloralVision</span>
        </div>
        <div className="nav-right">
          <ul className="nav-right-lis">
            <li className="nav-right-link linke">Stats</li>
            <li className="nav-right-link linke">Footer</li>
          </ul>
          <motion.button
            className="nav-right-button"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#d72525",
            }}
            whileTap={{ scale: 0.9, backgroundColor: "var(--main-color)" }}
          >
            Idenitfy Plant
          </motion.button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
