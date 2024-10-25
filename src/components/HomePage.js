import "./css/HomePage.css";
import React from 'react';



import { ReactComponent as DownArrow } from '../images/downarrow.svg';

import { ReactComponent as Logo } from '../images/AK.svg'
import { useTheme } from './ThemeContext.js';
import { smoothScrollTo, getElementY } from '../effekts/scrollUtils.js';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useState } from "react";


import Philosophie from "./Philosophie";
import Content from "./Content.js";

import HomeFirstPart from "./HomeFirstPart";
import { useLanguage } from '../effekts/LanguageProvider.js';


const HomePage = () => {

  const targetRef = useRef(null);

  const targetRef3 = useRef(null);
  // Scroll-Funktion
  const handleScroll = () => {
    if (targetRef.current) {
      const targetY = getElementY(targetRef.current);
      smoothScrollTo(targetY+2, 1000); // 1000 ms = 1 Sekunde für das Scrollen
    }
  };


  const handleScroll3 = () => {
    if (targetRef3.current) {
      const targetY = getElementY(targetRef3.current);
      smoothScrollTo(targetY+2, 1000); // 1000 ms = 1 Sekunde für das Scrollen
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
  const [ref, isInView] = useInView({
    triggerOnce: true,
    threshold: 0.1  // 1.0 bedeutet, dass das gesamte Element sichtbar sein muss
  });
  const [animateState, setAnimateState] = useState("hidden");
  useEffect(() => {
    if (isInView) {
      setAnimateState("visible");
    }
  }, [isInView]);


  const [contentOpacity, setContentOpacity] = useState(0);
  const [ref2, isInView2] = useInView({
    triggerOnce: true,
    threshold: 0.4  // 1.0 bedeutet, dass das gesamte Element sichtbar sein muss
  });

  useEffect(() => {
    if (isInView2) {
      setContentOpacity(1);
    }
  }, [isInView2]);
  const targetRef2 = useRef(null);
  const handleScroll2 = () => {
    if (targetRef2.current) {
      const targetY = getElementY(targetRef2.current);
      smoothScrollTo(targetY+2, 1000); // 1000 ms = 1 Sekunde für das Scrollen
    }
  };
  const setRefs = (node) => {
    // Setze dein eigenes ref
    targetRef2.current = node;
    // Setze das ref von useInView
    ref2(node);
  };





  const [startAnimation, setStartAnimation] = useState(false);
  const ref3 = useRef(null);
  const { language, toggleLanguage } = useLanguage();

  const content = {
    de: {
      animatedLines: {
        one:"Erfolg liegt in der Kraft der Menschen, die gemeinsam an einem Strang ziehen.",
        two:"Dabei sind drei Faktoren wesentlich:",
      },
     
    },
    en: {
      animatedLines: {
        one:"Success lies in the power of people pulling together.",
        two:"Three factors are essential here:",
      },
    }
  };
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageUrl = "../images/ganz_sitz_comp.jpg"; // Setzen Sie hier den Pfad zu Ihrem Bild ein
  const [imageClass, setImageClass] = useState("blur");
  useEffect(() => {
    const image = new Image();
    image.onload = () => setImageLoaded(true);
    image.src = imageUrl;
  }, [imageUrl]);

  if (!imageLoaded) {
    return  <div className="spinner-container">
    <div className="loading-spinner"></div>
  </div>
  }

  return (

    <div >
 
      <article className="article">
        <div className="imagecontainer">

          
      <img className="first" src={imageUrl} />
      </div>
        <div className="header">
          <h1 className="firstHead">Angelika</h1>
          <h1 className="secondHead">Kiessling-Kranzelmayer</h1>
        </div>


        <Logo /*style={{ fill: themeColor }}*/ className="logoSvg"></Logo>
        <div className="scroll-down-arrow" onClick={handleScroll}><DownArrow width="40" height="40" /></div>
      </article>
      <div  style={{ backgroundColor: themeColor }} id="startElement"className="banner" ref={targetRef}></div>


      {/*<div id="point1" className="first-part" ref={targetRef}>
        <div ref={ref} className="section-text">
          <span
            style={{
              transform: isInView ? "none" : "none",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <motion.div
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
                  <ul className="custom-ul" style={{ listStyleType: 'none', paddingLeft: '20px' }}>
                    {i === 4 && <li className="custom-li">Klarheit</li>}
                    {i === 5 && <li className="custom-li">Konsequenz</li>}
                    {i === 6 && <li className="custom-li">Kommunikation</li>}
                  </ul>
                  {i === 7 && <div className="scroll-down-arrow arrow-second" onClick={handleScroll2}><DownArrow width="40" height="40" /></div>}
                </motion.h1>
              ))}
            </motion.div>
          </span>
        </div>
        <img className="second" src={Upside}></img>

      </div >*/}
              
    
    <div id="point1" className="first-part" >
        <div ref={ref}  className="section-text">
          <span
            style={{
              transform: isInView ? "none" : "none",
              opacity: isInView ? 1 : 0,
              transition: "all 0.1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
            }}
          >
            <motion.div
            >
              {[...Array(12)].map((_, i) => (
                <motion.h1
                  ref={ref}
                  key={i}
                  custom={i} // Übergabe der Reihenfolge des Elements als custom Prop
                  variants={containerVariants}
                  initial="hidden"
                  animate={animateState}
                  className="leftText"
                  onAnimationComplete={() => {
                    if (i === 2) {
                      setStartAnimation(true);
                    }
                    if (i === 7) {
                      setContentOpacity(1);
                    }
                  }}
                >
                  {i === 1 && content[language].animatedLines.one}
                  {i === 2 && content[language].animatedLines.two}
             
                  {i === 3 && <HomeFirstPart startAnimation={startAnimation} />}
                  {i === 6 && <div className="scroll-down-arrow arrow-second" onClick={handleScroll2}><DownArrow width="40" height="40" /></div>}
                 
                </motion.h1>
              ))}
            </motion.div>
          </span>
        </div>
      

      </div >  
      <div className="philo" ref={setRefs} style={{ opacity: contentOpacity ,transition: 'opacity 0.5s ease-in-out' }}>

        <Philosophie />
        <div className="scroll-down-arrow arrow-third" onClick={handleScroll3}><DownArrow width="40" height="40" /></div>
      </div>
    {/*<div style={{ backgroundColor: themeColor }} className="banner"></div>
  {/**/}
      <div className="mid-part" ref={targetRef3} style={{ opacity: contentOpacity ,transition: 'opacity 1s ease-in-out' }} >

        <Content />
        
      </div>



      

      <div style={{ backgroundColor: themeColor }} className="banner" id="endElement"></div>
     
    </div>

  );
};

export default HomePage;

const PhilosophySection = () => {
  const textsLeft = ["Klarheit", "Konsequenz", "Kommunikation"];
  const textsRight = ["Effizienz", "Effektivität", "Erfolg"];
  const mainText = "Klarheit in der Zielsetzung, Konsequenz in der Umsetzung, erfolgreiche Kommunikation und Einbindung relevanter Stakeholder führen zu Effizienz und Effektivität bei der Erreichung von persönlichen und unternehmerischen Zielen. Meinen Kund*innen stelle ich meine langjährige Erfahrung aus erfolgreich umgesetzten Projekten in Industrie, Konzernstruktur und Start-Up Organisation sowie meine Expertise in strategischer Planung, allen Disziplinen moderner Kommunikation sowie professionellem Stakeholdermanagement zur Verfügung.";
  const endText = "Dafür steht Connecting People, Shaping Business.";
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
      <h1 className="heading2 center-title" id="endElement">Philosophie</h1>
      <div className="main-text">{mainText}</div>
      <div className="end-text ">{endText}</div>
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

