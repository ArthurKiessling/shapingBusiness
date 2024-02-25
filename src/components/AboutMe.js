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
      {
        title: "ERFAHREN",
        description: "Konzernorganisation & Start-Up. Konsolidierung & Entwicklung von Standorten. New Work, Digitale Transformation, Krisenmanagement. Vereinbarkeit von Beruf & Familie.",
        icon: <FaHandshake />
      },
    ],
    [
      {
        title: "ZUKUNFTSORIENTIERT",
        description: "Entwicklung von Standort-, Nachhaltigkeitsstrategien. Gestaltung & Begleitung von Organisationsänderungen. Bildung, Nachwuchsförderung, Innovationskultur, Diversität.",
        icon: <FaSeedling />
      },
      {
        title: "BERUFLICHES ENGAGEMENT",
        description: "Mehr als 25 Jahre Erfahrung in leitenden Management-Funktionen prägen die Gestaltung von Zukunftsfeldern in Forschung, Technologie und Bildung sowie in der Standortentwicklung.",
        icon: <FaRocket />
      },
      {
        title: "UNTERSTÜTZUNG & BERATUNG",
        description: "Unterstützung von Organisationen und Entscheidern in dynamischen Zeiten, um Komplexität zu reduzieren, Strategien zu erarbeiten und relevante Stakeholder durch professionelle Kommunikationsmaßnahmen zu involvieren.",
        icon: <FaUsers />
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

      <div id="startElement" style={{ backgroundColor: themeColor }} className="banner"></div>
      <div className={styles['about-me-container']}>
        <h1 className={styles.h1}>Dafür stehe Ich</h1>

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

        <p className={styles.fullWidthText}>In mehr als 25 Jahren Erfahrung aus erfolgreicher Corporate Career, mehr als 15 davon in leitenden Management-Funktionen im internationalen Technologie- und Dienstleistungsunternehmen, prägen die Gestaltung von Zukunftsfeldern im Forschungs-, Technologie- und Bildungsumfeld sowie in der Standortentwicklung mein berufliches Engagement.
          Mit ganzheitlichem, strategischem, unternehmerischem Denken und Handeln sowie innovativem Mindset und ausgeprägten Problemlösungskompetenzen habe ich eine Vielzahl von Projekten den Bereichen in Technologie & Digitalisierung, Innovation & Nachhaltigkeit sowie Marketing & Sales erfolgreich umgesetzt.
          In einer dynamischen Zeit mit Veränderungen in Geopolitik, Klimawandel, digitaler Transformation unterstütze ich Organisationen und Entscheider dabei, Komplexität zu reduzieren, Strategien für die Geschäftsentwicklung zu erarbeiten, relevante Stakeholder einzubeziehen und diese durch professionelle Kommunikationsmaßnahmen auf den gemeinsamen Weg mitzunehmen.
          Die Kombination aus Know How, interdisziplinärer Erfahrung und einem sehr guten persönlichen Netzwerk  in Industrie, Wirtschaft und öffentlicher Hand in Österreich und über die Grenzen hinaus bringe ich in die Beratung und Begleitung von Veränderungen ein.
        </p>
      </div>
      <div style={{ backgroundColor: themeColor }} className="banner" id="endElement"></div>
   
    </div>
  );
};

export default AboutMe;