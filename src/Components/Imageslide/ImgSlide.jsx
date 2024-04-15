import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";
import Car from "./assets/Car1.jpeg";
import { TimelineLite, Power2, gsap } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";

function App() {
  let image = useRef(null);
  let container = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  let tl = new TimelineLite();

  useLayoutEffect(() => {
    tl.to(container, 0, { css: { visibility: "visible" } });
    tl.to(imageReveal, 1.4, { width: "0%", ease: Power2.easeInOut });
    tl.from(image, 1.4, {
      scale: 1.6,
      ease: Power2.easeInOut,
      delay: -1.4,
    });
  }, []);

  return (
    <section className="main">
      <div className="container" ref={(el) => (container = el)}>
        <>
          <div className="img-container">
            <img
              ref={(el) => {
                image = el;
              }}
              src={Car}
            />
          </div>
        </>
      </div>
    </section>
  );
}

export default App;
