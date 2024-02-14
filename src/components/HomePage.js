import "./css/HomePage.css";
import React from 'react';

import background from "../images/Quer_turkis.jpg";
import Upside from "../images/hoch_sitz.jpg";
import Whiteboard from "../images/whiteboard.png";

import { ReactComponent as DownArrow } from '../images/downarrow.svg';

import { ReactComponent as Logo } from '../images/image2vector.svg'
import { useTheme } from './ThemeContext.js'; 
import { smoothScrollTo, getElementY } from '../effekts/scrollUtils.js'; 

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useState } from "react";
import seedrandom from 'seedrandom';

import Content from "./Content.js";
import ScrollProgressIndicator from '../effekts/ScrollProgressIndicator.js';

const HomePage = () => {
  const targetRef = useRef(null);
  const targetRef2 = useRef(null);

  // Scroll-Funktion
  const handleScroll = () => {
    if (targetRef.current) {
      const targetY = getElementY(targetRef.current);
      smoothScrollTo(targetY, 1000); // 1000 ms = 1 Sekunde für das Scrollen
    }
  };
  const handleScroll2 = () => {
    if (targetRef2.current) {
      const targetY = getElementY(targetRef2.current);
      smoothScrollTo(targetY, 1000); // 1000 ms = 1 Sekunde für das Scrollen
    }
  };


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
  const [animateState, setAnimateState] = useState("hidden");
  useEffect(() => {
    if (isInView) {
      setAnimateState("visible");
    }
  }, [isInView]);

  const [reveal, setReveal] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReveal(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);



  return (
    
    <div>
    <article className="article">
      <img className="first" src={background} />
      <div className="header">
        <h1 className="conn">CONNECTING PEOPLE,</h1>
        <h1 className="shap">SHAPING BUSINESS.</h1>
      </div>

      <Logo /*style={{ fill: themeColor }}*/ className="logoSvg"></Logo>
      <div className="scroll-down-arrow" onClick={handleScroll}><DownArrow width="40" height="40" /></div>
    </article>

    <div id="startElement" style={{ backgroundColor: themeColor }} className="banner"></div>
   

    <div id="point1" className="grid w-full grid-cols-2 gap-8 px-6 py-10 md:grid-cols-2  bottom-0"  ref={targetRef}>
      
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
    <motion.div
      className="motionDiv"
    >
      {[...Array(9)].map((_, i) => (
        <motion.h1
        ref={ref} 
          key={i}
          custom={i} // Übergabe der Reihenfolge des Elements als custom Prop
          variants={containerVariants}
          initial="hidden"
          animate={animateState}
          className="leftText"
        >
          {i === 1 && "Erfolg liegt in der Kraft der Menschen,"}
          {i === 2 && "Die gemeinsam an einem Strang ziehen."}
          {i === 3 && "Dabei sind drei Faktoren wesentlich:"}
          {i === 4 && "Klarheit"}
          {i === 5 && "Konsequenz"}
          {i === 6 && "Kommunikation"}
          {i===7&&<div className="scroll-down-arrow arrow-second" onClick={handleScroll2}><DownArrow width="40" height="40"  /></div>}
        </motion.h1>
      ))}
    </motion.div>
    </span>
   
    </section>
    
    <img  className="second" src={Upside}></img>
    
    </div >
    <div id="point2" ref={targetRef2} className="grid w-full grid-cols-2 gap-8 px-6 md:grid-cols-2 bottom-0 alltop" >
    <img  className="second third" src={Upside}></img>
    <Content/>
   </div>
  
    
    <div class="philo"  >
        <PhilosophySection />
    
    </div>
  
    <div style={{ backgroundColor: themeColor }} className="banner"></div>
    <ScrollProgressIndicator
        startElementId="startElement"
        endElementId="endElement"
        pointElementIds={["point1", "point2","point3"]}
      />

    </div>
  );
};

export default HomePage;

const PhilosophySection = () => {
  const textsLeft = ["Klarheit", "Konsequenz", "Kommunikation"];
  const textsRight = ["Effizienz", "Effektivität", "Erfolg"];
  const mainText = "Klarheit in der Zielsetzung, Konsequenz in der Umsetzung, erfolgreiche Kommunikation und Einbindung relevanter Stakeholder führen zu Effizienz und Effektivität bei der Erreichung von persönlichen und unternehmerischen Zielen. Meinen Kund*innen stelle ich meine langjährige Erfahrung aus erfolgreich umgesetzten Projekten in Industrie, Konzernstruktur und Start-Up Organisation sowie meine Expertise in strategischer Planung, allen Disziplinen moderner Kommunikation sowie professionellem Stakeholdermanagement zur Verfügung. Dafür steht Connecting People, Shaping Business.";

  // Funktion, um die Verschiebung für jedes Feld zu berechnen
  const calculateOffset = (index, isLeftColumn) => {
    // Basisverschiebung für alle Felder
    let xOffset = 0;
    let yOffset = index * 50; // Vertikale Position basierend auf dem Index

    // Zusätzliche Verschiebung für das mittlere Feld
    if (index === 1) {
      xOffset = isLeftColumn ? -100 : 100; // Links verschieben für linke Spalte, rechts für rechte Spalte
    }

    return { xOffset, yOffset };
  };

  return (
    <div className="containe">
      <div className="colum">
        {textsLeft.map((text, index) => {
          const { xOffset, yOffset } = calculateOffset(index, true);
          return (
            <div key={`left-${index}`} className="text" style={{ 
              transform: `translate(${xOffset}px, ${yOffset}px)` 
            }}>
              {text}
            </div>
          );
        })}
      </div>
      <h1 className="heading center-title" id="endElement">Philosophie</h1>
      <div className="main-text">{mainText}</div>
      <div className="colum">
        {textsRight.map((text, index) => {
          const { xOffset, yOffset } = calculateOffset(index, false);
          return (
            <div key={`right-${index}`} className="text" style={{ 
              transform: `translate(${xOffset}px, ${yOffset}px)` 
            }}>
              {text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

