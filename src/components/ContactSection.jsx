import React, { useRef } from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import "./ContactSection.css";
import "../assets/font/fonts.css";
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

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const childVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.4 + i * 0.2,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const ContactSection = () => {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: false });

  const boxRef = useRef(null);
  const isBoxInView = useInView(boxRef, { once: false });

  const titleLetters = "Contact Me".split("");

  return (
    <section className="contact-section" id="contact">
      <motion.h5
        className="contact-tagline"
        variants={titleVariants}
        initial="hidden"
        animate="show"
        custom={0}
      >
        GET IN TOUCH
      </motion.h5>

      <div className="projects-header">
        <motion.h2
          ref={titleRef}
          className="contact-title"
          initial="hidden"
          animate={isTitleInView ? "show" : "hidden"}
          variants={titleVariants}
        >
          {titleLetters.map((letter, i) => (
            <motion.span key={i} variants={titleVariants} custom={i}>
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h2>
      </div>

      <motion.div
        ref={boxRef}
        className="contact-box"
        initial="hidden"
        animate={isBoxInView ? "show" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          className="contact-methods"
          custom={0}
          variants={childVariants}
          initial="hidden"
          animate={isBoxInView ? "show" : "hidden"}
        >
          <a
            href="mailto:avinashsingh9946@gmail.com"
            className="contact-option"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope /> virajm0812@gmail.com
          </a>
          <a
            href="https://wa.me/918668926338"
            className="contact-option"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </motion.div>

        <motion.span
          className="divider"
          variants={childVariants}
          custom={1}
          initial="hidden"
          animate={isBoxInView ? "show" : "hidden"}
        >
          Or send a message
        </motion.span>

        <motion.form
          className="contact-form"
          variants={childVariants}
          custom={2}
          initial="hidden"
          animate={isBoxInView ? "show" : "hidden"}
          onSubmit={(e) => e.preventDefault()}
        >
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required rows="5" />
          <button type="submit" class="Submitbutton">
            Send Message
          </button>
        </motion.form>
      </motion.div>

      <footer className="footer">
        <hr />
        <p>© 2025 Viraj Mane. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default ContactSection;
