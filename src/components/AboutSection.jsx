import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./AboutSection.css";
import avatar from "../assets/avatar.png.jpg";
import StarBorder from "assets/animations/TechBorder"; // ← import StarBorder
import { FaJava } from "react-icons/fa";
import "../assets/font/fonts.css";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGithub,
  SiCplusplus,
  SiFramer,
} from "react-icons/si";
import { Weight } from "lucide-react";

const techStack = [
  { name: "HTML", icon: <SiHtml5 color="#e44d26" /> },
  { name: "CSS", icon: <SiCss3 color="#264de4" /> },
  { name: "ReactJS", icon: <SiReact color="#61dafb" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#38bdf8" /> },
  { name: "NodeJS", icon: <SiNodedotjs color="#3c873a" /> },
  { name: "ExpressJS", icon: <SiExpress color="#fff" /> },
  { name: "Framer Motion", icon: <SiFramer color="#e76f51" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47a248" /> },
  { name: "JavaScript", icon: <SiJavascript color="#f0db4f" /> },
  { name: "Java", icon: <FaJava color="#f89820" /> },
  { name: "Python", icon: <SiPython color="#3776ab" /> },
  { name: "C++", icon: <SiCplusplus color="#004482" /> },
  { name: "GitHub", icon: <SiGithub color="#fff" /> },
];

const tagline = "GET TO KNOW ME";

const AboutSection = () => {
  const titleRef = useRef();
  const isTitleInView = useInView(titleRef, { once: false });
  const titleLetters = "About Me".split("");

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="about" className="about-section">
      {/* Tagline */}
      <h5 className="tagline">
        {tagline.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: index * 0.1,
              duration: 0.05,
            }}
            viewport={{ once: false }}
            style={{ display: "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
        <span className="cursor">|</span>
      </h5>

      {/* Animated About Me title */}
      <motion.h2
        ref={titleRef}
        initial="hidden"
        animate={isTitleInView ? "show" : "hidden"}
        variants={titleVariants}
        viewport={{ once: false }}
        className="text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem] title"
      >
        {titleLetters.map((letter, i) => (
          <motion.span key={i} variants={titleVariants} custom={i}>
            {letter}
          </motion.span>
        ))}
      </motion.h2>

      <div className="about-content">
        {/* Slide in from left */}
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <img src={avatar} alt="Profile" className="about-avatar" />
          <p className="about-bio">
            I'm a passionate Full-Stack Developer who loves building dynamic,
            user-friendly applications. I thrive on solving problems, creating
            seamless experiences, and continuously expanding my skills. Always
            eager to learn and grow, I'm currently looking for new opportunities
            to contribute and innovate.
          </p>
        </motion.div>

        {/* Slide in from right */}
        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="education">
            <h3>Education</h3>
            <p>
              <strong>VIT Bhopal University</strong>
            </p>
            <p>Computer Science Engineering</p>
            <div className="edu-meta">
              <span>2022 - 2026</span>
              <span>CGPA: 8.1</span>
            </div>
          </div>

          <hr />

          <div className="experience">
            <h3>
              Experience & Certi
              <span
                style={{ fontFamily: "Roboto, sans-serif", fontweight: "100" }}
              >
                f
              </span>
              ications
            </h3>
            <p>Experience</p>
            <div className="exp-meta">
              <ul>
                <li>
                  <span>Space Lab Internship - </span>

                  <span> Nov 24 - Dec 24</span>
                </li>
                <li>
                  <span>CodeTech IT Solutions Internship - </span>
                  <span>Jan 25 - March 25</span>
                </li>
              </ul>
            </div>
            <p>
              Certi
              <span
                style={{ fontFamily: "Roboto, sans-serif", fontweight: "100" }}
              >
                f
              </span>
              ications
            </p>
            <ul>
              <li>
                MongoDB SmartBridge MERN Stack Certi
                <span
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontweight: "100",
                  }}
                >
                  f
                </span>
                ication
              </li>
              <li>
                IBM Gen AI Certi
                <span
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontweight: "100",
                  }}
                >
                  f
                </span>
                ication
              </li>
            </ul>
          </div>

          <hr />

          <div className="tech-stack">
            <h3>Tech Stack</h3>
            <motion.div
              className="stack-icons"
              initial="hidden"
              whileInView="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3,
                  },
                },
              }}
              viewport={{ once: false }}
            >
              {techStack.map((tech) => (
                <motion.div
                  className="stack-chip-wrapper"
                  key={tech.name}
                  variants={{
                    hidden: { opacity: 0, scale: 0.6 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.1, ease: "easeOut" }}
                >
                  <StarBorder
                    as="div"
                    className="stack-chip"
                    color="#00ffff"
                    speed="4s"
                  >
                    {tech.icon}
                    <span>{tech.name}</span>
                  </StarBorder>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
