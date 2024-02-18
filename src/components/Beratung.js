import  "./css/Beratung.css";
import React from 'react';

import { ReactComponent as DownArrow } from '../images/downarrow.svg';

import { ReactComponent as Logo } from '../images/image2vector.svg'
import { useTheme } from './ThemeContext.js';
import { smoothScrollTo, getElementY } from '../effekts/scrollUtils.js';


import background from "../images/sitz_gelb.png";
import Upside from "../images/sitz_gelb.png";
import Whiteboard from "../images/whiteboard.png";
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useState } from "react";
import seedrandom from 'seedrandom';

import Philosophie from "./Philosophie";
import Content from "./Content.js";
import ScrollProgressIndicator from '../effekts/ScrollProgressIndicator.js';

const HomePage = () => {
  const targetRef = useRef(null);
  const targetRef2 = useRef(null);
  const targetRef3 = useRef(null);
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

  const handleScroll3 = () => {
    if (targetRef3.current) {
      const targetY = getElementY(targetRef3.current);
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
      <article className="article2">
        <img className="first" src={background} />
        <div className="header2">
          <h1 className="conn">BERATUNG</h1>
        </div>

        <Logo /*style={{ fill: themeColor }}*/ className="logoSvg"></Logo>
        <div className="scroll-down-arrow" onClick={handleScroll}><DownArrow width="40" height="40" /></div>
      </article>

      <div id="startElement" style={{ backgroundColor: themeColor }} className="banner"></div>


      <div id="point1"  ref={targetRef}>
      <div className="services-list">
      <h2 className="leistung">Unsere Leistungen</h2>
      <ul>
        <li>Strategieberatung: Business Development, Gestaltung & Begleitung von Change-Prozessen, Unternehmenskultur, Innovationskultur</li>
        <li>Kommunikationsberatung: Entwicklung von smarten Kommunikationsstrategien & -Konzepten für integrierte Kommunikation (intern, extern), Krisenkommunikation</li>
        <li>Beratung zu Public Affairs, Interessensvertretung, strategischem Stakeholdermanagement</li>
        <li>Reputation- und Markenmanagement für Organisationen (inkl. Employer Branding), Standorte, Personen</li>
        <li>Executive Coaching & Sparring</li>
      </ul>
    </div>
    <div id="point2" className="banner alltop2"></div>

      </div >
 

      <div style={{ backgroundColor: themeColor }}  className="banner" id="endElement"></div>
        <div className="adjustLeft">
      <ScrollProgressIndicator 
        themeColor={themeColor}
        startElementId="startElement"
        endElementId="endElement"
        pointElementIds={["point1","point2"]}
      />
      </div>
      <div className="adjustRight">
      <ScrollProgressIndicator 
        themeColor={themeColor}
        startElementId="startElement"
        endElementId="endElement"
        pointElementIds={["point1","point2"]}
      />
      </div>
    </div>
  );
};

export default HomePage;

