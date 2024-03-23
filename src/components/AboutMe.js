import React from 'react';
import styles from './css/AboutMe.module.css'; // Stelle sicher, dass der Pfad korrekt ist
import ganzSitzBild from '../images/ganz_sitz.jpg';
import background from "../images/ganz_sitz.jpg";
import { ReactComponent as DownArrow } from '../images/downarrow.svg';

import { ReactComponent as Logo } from '../images/image2vector.svg'
import { useTheme } from './ThemeContext.js';
import { smoothScrollTo, getElementY } from '../effekts/scrollUtils.js';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useState } from "react";
import { FaHeartbeat, FaBrain, FaHandshake, FaSeedling, FaRocket, FaUsers } from 'react-icons/fa';
import ScrollProgressIndicator from '../effekts/ScrollProgressIndicator.js';

const AboutMe = () => {
  const tableElements = [
    [
      {
        title: "MIT HERZ & HIRN",
        description: "Empathisch, herzlich, mutig, offen. Analytisch, strukturiert, ergebnis-, lösungsorientiert. Kollaborativ, kommunikations-, umsetzungsstark.",
        icon: <FaHeartbeat />
      },
      {
        title: "FACHLICH KOMPETENT",
        description: "Kommunikation & Public Affairs. Reputation-, Stakeholder Management. Change – und Krisenmanagement. Nachhaltigkeit & Digitalisierung. Technologie & Innovation.",
        icon: <FaBrain />
      },
     
    ],
    [
      {
        title: "ERFAHREN",
        description: "Konzernorganisation & Start-Up, Konsolidierung & Entwicklung von Standorten New Work, Digitale Transformation, Krisenmanagement, Vereinbarkeit von Beruf & Familie.",
        icon: <FaSeedling />
      },
      {
        title: "ZUKUNFTSORIENTIERT",
        description: "Entwicklung von Standort-, Nachhaltigkeitsstrategien Gestaltung & Begleitung von Organisationsänderungen Bildung, Nachwuchsförderung, Innovationskultur, Diversität.",
        icon: <FaRocket />
      },
     
    ]
  ];

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

      <article className="article">
        <div className={styles.imagecontainer}>
      <img className={styles.coverPicture} src={background} />
      </div>
        <div className="header2">
          <h1 className="conn">ÜBER MICH</h1>
        </div>


        <Logo /*style={{ fill: themeColor }}*/ className="logoSvg"></Logo>
        <div className="scroll-down-arrow" onClick={handleScroll}><DownArrow width="40" height="40" /></div>
      </article>

      <div  style={{ backgroundColor: themeColor }} className="banner"></div>
      <div ref={targetRef} className={styles['about-me-container']}>
        <h1 id="startElement" className={styles.h1}>Dafür stehe Ich</h1>

        {tableElements.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {row.map((item, itemIndex) => (
              <div key={itemIndex} className={styles.tableElement}>
                <div className={styles.icon}>{item.icon}</div>
                <h2 className={styles.h2}>{item.title}</h2>
                <p className={styles.p}>{item.description}</p>
              </div>
            ))}
          </div>
        ))}

<div className={styles.twocolumnscontainer}>
      <div className={styles.column}>
        In mehr als 25 Jahren Erfahrung aus erfolgreicher Corporate Career, mehr als 15 davon in leitenden Management-Funktionen im internationalen Technologie- und Dienstleistungsunternehmen, prägen die Gestaltung von Zukunftsfeldern im Forschungs-, Technologie- und Bildungsumfeld sowie in der Standortentwicklung mein berufliches Engagement.
      </div>
      <div className={styles.column}>
        Mit ganzheitlichem, strategischem, unternehmerischem Denken und Handeln sowie innovativem Mindset und ausgeprägten Problemlösungskompetenzen habe ich eine Vielzahl von Projekten den Bereichen in Technologie & Digitalisierung, Innovation & Nachhaltigkeit sowie Marketing & Sales erfolgreich umgesetzt.
      </div>
    </div>
      </div>
      <div style={{ backgroundColor: themeColor }} className="banner" id="endElement"></div>
      <ScrollProgressIndicator
          themeColor={themeColor}
          startElementId="startElement"
          endElementId="endElement"
          pointElementIds={[, "tab1", "tab2","tab3","tab4","tab5"]}
        />
    </div>
  );
};

export default AboutMe;