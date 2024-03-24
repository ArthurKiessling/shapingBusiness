import "./css/Beratung.css";
import React from 'react';

import { ReactComponent as DownArrow } from '../images/downarrow.svg';

import { ReactComponent as Logo } from '../images/image2vector.svg'
import { useTheme } from './ThemeContext.js';
import { smoothScrollTo, getElementY } from '../effekts/scrollUtils.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faStream, faComments, faBusinessTime, faRocket, faHeart, faTrophy } from '@fortawesome/free-solid-svg-icons';
import background from "../images/sitz_gelb_v2.jpg";

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useState } from "react";
import seedrandom from 'seedrandom';

import Philosophie from "./Philosophie";
import Content from "./Content.js";
import ScrollProgressIndicator from '../effekts/ScrollProgressIndicator.js';
import { useLanguage } from '../effekts/LanguageProvider.js';
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
      y: 0,
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
  const content = {
    de: {
        heading:"ZUKUNFT GESTALTEN",
        secondheading:"Meine Leistungen", },
    en:  {
      heading:"SHAPING FUTURE",
      secondheading:"My services",
    },
  };
  const services = {de:[
    {
      title: "Strategie & Change",
      description: "Unterstützung bei der Entwicklung und Implementierung von Business-Strategien, Change-Management-Prozessen, Kulturgestaltung und Innovationsförderung.",
      icon: faBusinessTime,
      id:"tab1"
    },
    {
      title: "Kommunikation & Reputation",
      description: "Erarbeitung integrierter Kommunikationsstrategien und -konzepte, die sowohl interne als auch externe Kanäle umfassen, einschließlich Krisenkommunikation.",
      icon: faComments,
      id:"tab2"
    },
    {
      title: "Stakeholder Management",
      description: "Beratung zur Interessensvertretung und zum strategischen Management von Stakeholderbeziehungen, um Ihre Unternehmensziele effektiv zu unterstützen.",
      icon: faComments,
      id:"tab3"
    },
    
    {
      title: "Executive Coaching",
      description: "Individuelles Coaching und Sparring für Führungskräfte zur Steigerung der persönlichen Effektivität und zur Bewältigung spezifischer Führungs- und Managementherausforderungen.",
      icon: faComments,
      id:"tab4"
    },
    // Füge bei Bedarf weitere Dienstleistungen mit Icons hinzu
  ],
  en:[
    {
      title: "Strategy & Change",
      description: "Support in the development and implementation of business strategies, change management processes, cultural design and innovation promotion.",
      icon: faBusinessTime,
      id:"tab1"
    },
    {
      title: "Communication & Reputation",
      description: "Development of integrated communication strategies and concepts covering both internal and external channels, including crisis communication.                          a]",
      icon: faComments,
      id:"tab2"
    },
    {
      title: "Stakeholder Management",
      description: "Advice on advocacy and strategic management of stakeholder relationships to effectively support your business objectives.",
      icon: faComments,
      id:"tab3"
    },
    
    {
      title: "Executive Coaching",
      description: "Individual coaching and sparring for managers to increase personal effectiveness and overcome specific leadership and management challenges. ",
      icon: faComments,
      id:"tab4"
    },
    // Füge bei Bedarf weitere Dienstleistungen mit Icons hinzu
  ]};

  const { language } = useLanguage(); // 'de' oder 'en'
  const currentElements = services[language]; 
  const leftColumnServices = currentElements.filter((_, index) => index % 2 === 0);
  const rightColumnServices = currentElements.filter((_, index) => index % 2 !== 0);
  return (

    <div>
      <article className="article2">
        <img className="cover" src={background} />
        <div className="header2">
          <h1 className="conn">{content[language].heading}</h1>
        </div>

        <Logo /*style={{ fill: themeColor }}*/ className="logoSvg"></Logo>
        <div className="scroll-down-arrow" onClick={handleScroll}><DownArrow width="40" height="40" /></div>
      </article>

      <div style={{ backgroundColor: themeColor }} className="banner" id="startElementMobil"></div>


      <div >
        <div className="services-list" >
          <h2 id="startElement" ref={targetRef} className="leistung"> {content[language].secondheading}</h2>
          {/*<h1 className={styles.slogan}>{slogan}</h1>
      <p className={styles.fließContent}>{fließContent}</p>*/}
          <div id="point1" style={{ backgroundColor: "" }} className="banner"></div>
        </div>
        <div className="grid-container-beratung">
          <div className="column-beratung">
            {leftColumnServices.map((service, index) => (
              <div key={`left-${index}`} className="felder-beratung" >
                
                <div id={service.id}className="title-wrapper-beratung">
                  {service.title} {/* Überschrift hinzugefügt */}
                </div>
                <div className="text-wrapper-beratung">
                  {service.description} {/* Beschreibung hinzugefügt */}
                </div>
              </div>
            ))}

          </div>
          <div className="column-beratung leftShift" >
            {rightColumnServices.map((service, index) => (
              <div key={`right-${index}`} className="felder-beratung" >
            
                <div id={service.id}className="title-wrapper-beratung">
                  {service.title} {/* Überschrift hinzugefügt */}
                </div>
                <div className="text-wrapper-beratung">
                  {service.description} {/* Beschreibung hinzugefügt */}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div id="point3" className="banner alltop2"></div>

      </div >


      <div style={{ backgroundColor: themeColor }} className="banner" id="endElement"></div>
      <div className="">
        <ScrollProgressIndicator
          themeColor={themeColor}
          startElementId="startElement"
          endElementId="endElement"
          pointElementIds={[, "tab1", "tab2","tab3","tab4","tab5"]}
        />
      </div>
      <div className="IndicatorMobil">
        <ScrollProgressIndicator
          themeColor={themeColor}
          startElementId="startElementMobil"
          endElementId="endElement"
          pointElementIds={["tab1", "tab2","tab3","tab4","tab5",]}
        />
      </div>
    </div>
  );
};

export default HomePage;

