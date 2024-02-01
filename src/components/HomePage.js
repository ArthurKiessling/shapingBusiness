import "./HomePage.css";
import React from 'react';

import background from "../images/Quer_turkis.jpg";
import Upside from "../images/hoch_sitz.jpg";
import { ReactComponent as Logo } from '../images/image2vector.svg'
import { useTheme } from './ThemeContext.js'; 


import { motion } from 'framer-motion';
import { useInView } from "framer-motion"
import { useRef } from "react";

const HomePage = () => {
  const { themeColor, setThemeColor } = useTheme();
  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: i => ({
      opacity: 1,
      y: 20,
      transition: {
        delay: i * 1,
        duration: 1,
      },
    }),
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div>
    <article className="article">
      <img className="first" src={background} />
      <h1 className="header">Connecting People - Shaping Business.</h1>
      <Logo style={{ fill: themeColor }} className="logoSvg"></Logo>
    </article>

    <div className="grid w-full grid-cols-2 gap-8 px-6 py-20 md:grid-cols-2  bottom-0">
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
    <motion.div
      className="motionDiv"
    >
      {[...Array(8)].map((_, i) => (
        <motion.h1
        ref={ref} 
          key={i}
          custom={i} // Übergabe der Reihenfolge des Elements als custom Prop
          variants={containerVariants}
          initial="hidden"
          animate="visible" 
          className="leftText"
        >
          {i === 1 && "Erfolg liegt in der Kraft der Menschen,"}
          {i === 2 && "Die gemeinsam an einem Strang ziehen."}
          {i === 4 && "Dabei sind drei Faktoren wesentlich:"}
          {i === 5 && "Klarheit"}
          {i === 6 && "Konsequenz"}
          {i === 7 && "Kommunikation"}
        </motion.h1>
      ))}
    </motion.div>
    </span>
    </section>
    <img  className="second " src={Upside}></img>
    </div>

    </div>
  );
};

export default HomePage;