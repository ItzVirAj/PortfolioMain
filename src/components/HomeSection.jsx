import React, { useState, useRef, useEffect } from "react";
import "./HomeSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import avatar from "../assets/avatar.png.jpg";
import earthImage from "../assets/Earth.jpg";
import "../assets/font/fonts.css";
import StarBorder from "assets/animations/StarBorder";
import { motion, useInView, AnimatePresence } from "framer-motion";

// Rotating Text Component
const roles = [
  "A Tech Lover",
  "A Programmer",
  "Full-Stack Dev",
  "An AI/ML Buff",
  "A UI/UX Nerd",
];

const RotatingText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={roles[index]}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ display: "inline-block", minWidth: "200px" }}
        className="highlight role-wrapper"
      >
        {roles[index]}
      </motion.span>
    </AnimatePresence>
  );
};

const HomeSection = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  const email = "virajm0812@gmail.com";

  const earthRef = useRef(null);
  const isEarthInView = useInView(earthRef, { once: true });

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => setCopySuccess(true))
      .catch(() => setCopySuccess(false));
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <section id="home" className="home">
      <div className="intro-tag">
        Building <span>something big!</span>
      </div>

      {/* Zoom-in animation on load */}
      <motion.div
        className="homecntnr"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="headline">
          Crafting code with clarity,
          <br />
          shaping ideas into <span className="italic">Beautiful Realities</span>
        </h1>

        <div className="bio">
          <span className="name">
            Hello, I'm <span className="highlight">Viraj Mane</span>
          </span>
          <img src={avatar} alt="Logo" className="avatar" />
          <RotatingText />
        </div>

        <div className="cta">
          <StarBorder
            as="a"
            href="#contact"
            className="connect-button"
            color="cyan"
            speed="5s"
          >
            Let's Connect <span className="arrow">→</span>
          </StarBorder>

          <span className="email">
            {email}
            <FontAwesomeIcon
              icon={faCopy}
              className="copy-icon"
              onClick={copyToClipboard}
              style={{
                cursor: "pointer",
                marginLeft: "10px",
                fontSize: "18px",
              }}
            />
          </span>
          {copySuccess && <span className="copy-feedback">Copied!</span>}
        </div>
      </motion.div>

      {/* Animated Earth */}
      <motion.div
        ref={earthRef}
        className="Earth"
        initial={{ opacity: 0, y: 50 }}
        animate={
          isEarthInView
            ? {
                opacity: 1,
                y: [0, -3, 0],
                transition: {
                  opacity: { duration: 0.8, ease: "easeOut" },
                  y: {
                    duration: 3,
                    ease: "easeInOut",
                    repeat: Infinity,
                  },
                },
              }
            : {}
        }
      >
        <img src={earthImage} alt="Earth" />
      </motion.div>
    </section>
  );
};

export default HomeSection;
