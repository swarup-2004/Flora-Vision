import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { IoLogoDropbox } from "react-icons/io";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useScroll, useTransform } from "framer-motion";

function Navbar({ chat, changechat }) {
  const [navBarStatus, setNavBarStatus] = useState("nav");

  useEffect(() => {
    let lastScrollTop = 0;

    const updateNavBarStatus = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setNavBarStatus(scrollTop > lastScrollTop ? "nav nav-up" : "nav");
      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", updateNavBarStatus);

    return () => {
      window.removeEventListener("scroll", updateNavBarStatus);
    };
  }, []);

  return (
    <>
      <div className={navBarStatus}>
        <div className="nav-left">
          <span className="nav-left-name">FloraVision</span>
        </div>
        <div className="nav-right">
          <ul className="nav-right-lis">
            <li className="nav-right-link linke">
              <Link to="/chatbot" onClick={(e) => changechat(true)}>
                Chatbot
              </Link>
            </li>
            <motion.li
              className="nav-right-link linke cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                let Element = document.querySelector(".mainx");
                Element.scrollIntoView({ behavior: "smooth" });
              }}
              disabled={chat === true}
            >
              Supported Plants
            </motion.li>
          </ul>
          <motion.button
            className="nav-right-button"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#6a72ec",
            }}
            whileTap={{ scale: 0.9, backgroundColor: "#4fff94" }}
          >
            <Link to="/" onClick={(e) => changechat(false)}>
              Identify Plant
            </Link>
          </motion.button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
