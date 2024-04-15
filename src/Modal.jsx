import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import "./Modal.css";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function index({ modal, projects }) {
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(() => {
    //Move Container

    let xMoveContainer = gsap.quickTo(".modalContainer", "left", {
      duration: 0.8,
      ease: "power3",
    });

    let yMoveContainer = gsap.quickTo(".modalContainer", "top", {
      duration: 0.8,
      ease: "power3",
    });

    //Move cursor

    let xMoveCursor = gsap.quickTo(".cursor", "left", {
      duration: 0.5,
      ease: "power3",
    });

    let yMoveCursor = gsap.quickTo(".cursor", "top", {
      duration: 0.5,
      ease: "power3",
    });

    //Move cursor label

    let xMoveCursorLabel = gsap.quickTo(".cursorLabel", "left", {
      duration: 0.45,
      ease: "power3",
    });

    let yMoveCursorLabel = gsap.quickTo(".cursorLabel", "top", {
      duration: 0.45,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX);
      yMoveContainer(pageY);
      xMoveCursor(pageX);
      yMoveCursor(pageY);
      xMoveCursorLabel(pageX);
      yMoveCursorLabel(pageY);
    });
  }, []);

  return (
    <>
      <motion.div
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="modalContainer"
      >
        <div style={{ top: index * -100 + "%" }} className="modalSlider">
          {projects.map((project, index) => {
            const { src, color } = project;
            return (
              <div
                className="modal"
                style={{ backgroundColor: color }}
                key={`modal_${index}`}
              >
                <img src={src} alt="image" width="100" height="600" />
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        ref={cursor}
        className="cursor"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      ></motion.div>

      <motion.div
        ref={cursorLabel}
        className="cursorLabel"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        View
      </motion.div>
    </>
  );
}
