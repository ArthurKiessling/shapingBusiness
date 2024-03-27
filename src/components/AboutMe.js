import React from 'react';
import styles from './css/AboutMe.module.css'; // Stelle sicher, dass der Pfad korrekt ist
import ganzSitzBild from '../images/ganz_sitz.jpg';
import background from "../images/hoch_ganz.jpg";
import { ReactComponent as DownArrow } from '../images/downarrow.svg';

import { ReactComponent as Logo } from '../images/AK.svg'
import { useTheme } from './ThemeContext.js';
import { smoothScrollTo, getElementY } from '../effekts/scrollUtils.js';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { MdCompost } from "react-icons/md";
import { GiJourney } from "react-icons/gi";
import { PiCompassToolBold } from "react-icons/pi";
import ScrollProgressIndicator from '../effekts/ScrollProgressIndicator.js';
import heartbrain from '../images/heartbrain.svg';
import { useLanguage } from '../effekts/LanguageProvider.js';
const AboutMe = () => {
  const tableElements =  { de: [
    
    [
      {
        title: "MIT HERZ & HIRN",
        description: (<ul className="about-list">
        <li>empathisch, herzlich, mutig, offen</li>
        <li>analytisch, strukturiert, ergebnis-, lösungsorientiert</li>
        <li>kollaborativ, kommunikations-, umsetzungsstark</li>
      </ul>), icon:  <img 
        src={heartbrain}
        alt="Herz- und Gehirn-Icon" 
        color='white'
        style={{ width: '48px', height: '48px' }} // Größe nach Bedarf anpassen
      />
      },
      {
        title: "FACHLICH KOMPETENT",
        description: (<ul className="about-list">
        <li>Kommunikation & Public Affairs</li>
        <li>Reputation-, Stakeholder Management</li>
        <li>Change - und Krisenmanagement</li>
        <li>Nachhaltigkeit & Digitalisierung</li>
        <li>Technologie & Innovation</li>
      </ul>),icon: <PiCompassToolBold />
      },
     
    ],
    [
      {
        title: "ERFAHREN",
        description: (<ul className="about-list">
        <li>Konzernorganisation & Start-Up</li>
        <li>Konsolidierung & Entwicklung von Standorten</li>
        <li>New Work, Digitale Transformation, Krisenmanagement</li>
        <li>Vereinbarkeit von Beruf & Familie</li>
      </ul>), icon: <GiJourney />
      },
      {
        title: "ZUKUNFTSORIENTIERT",
        description: (<ul className="about-list">
        <li>Entwicklung von Standort-, Nachhaltigkeitsstrategien</li>
        <li>Gestaltung & Begleitung von Organisationsänderungen</li>
        <li>Bildung, Nachwuchsförderung, Innovationskultur, Diversität</li>
      </ul>),icon: <MdCompost />
      },
     
    ]
  ],
  en: [
    
    [
      {
        title: "WITH HEART & BRAIN",
        description: (<ul className="about-list">
        <li>empathetic, warm, courageous, open</li>
        <li>analytical, structured, results- and solution-oriented</li>
        <li>Collaborative, strong in communication and implementation</li>
      </ul>),
        icon:  <img 
        src={heartbrain}
        alt="Herz- und Gehirn-Icon" 
        color='white'
        style={{ width: '48px', height: '48px' }} // Größe nach Bedarf anpassen
      />
      },
      {
        title: "COMPETENT",
        description: (<ul className="about-list">
        <li>Communication & Public Affairs</li>
        <li>Reputation-, Stakeholder Management</li>
        <li>Reputation and stakeholder management</li>
        <li>Sustainability & digitalization</li>
        <li>Technology & Innovation</li>
      </ul>),
      icon: <PiCompassToolBold />
      },
     
    ],
    [
      {
        title: "EXPERIENCE",
        description:(<ul className="about-list">
        <li>Group organization & Start-Up</li>
        <li>Consolidation & development of locations</li>
        <li>New work, digital transformation, crisis management</li>
        <li>Compatibility of career & family</li>
      </ul>), 
      icon: <GiJourney />
      },
      {
        title: "FUTURE-ORIENTED",
        description: (<ul className="about-list">
        <li>Development of location and sustainability strategies</li>
        <li>Design & support of organizational changes</li>
        <li>Education, promotion of young talent, culture of innovation, diversity</li>
      </ul>),
      icon: <MdCompost />
      },
     
    ]
  ]
};

const content = {
  de: {
      heading:"ÜBER MICH",
      secondheading:"Dafür stehe Ich",
      firstcolm:" In mehr als 25 Jahren Erfahrung aus erfolgreicher Corporate Career, mehr als 15 davon in leitenden Management-Funktionen im internationalen Technologie- und Dienstleistungsunternehmen, prägen die Gestaltung von Zukunftsfeldern im Forschungs-, Technologie- und Bildungsumfeld sowie in der Standortentwicklung mein berufliches Engagement.",
      secondcolm:"Mit ganzheitlichem, strategischem, unternehmerischem Denken und Handeln sowie innovativem Mindset und ausgeprägten Problemlösungskompetenzen habe ich eine Vielzahl von Projekten den Bereichen in Technologie & Digitalisierung, Innovation & Nachhaltigkeit sowie Marketing & Sales erfolgreich umgesetzt.",
      sprachenHeading:"Sprachen",
      sprachen:"Deutsch, Englisch"
    },
  en:  {
    heading:"ABOUT ME",
    secondheading:"That's what I stand for",
    firstcolm:"In more than 25 years of experience from a successful corporate career, more than 15 of them in leading management positions in international technology and service companies, the shaping of future fields in the research, technology and education environment as well as in location development characterize my professional commitment.",
     secondcolm:"With holistic, strategic, entrepreneurial thinking and action as well as an innovative mindset and strong problem-solving skills, I have successfully implemented a large number of projects in the areas of technology & digitization, innovation & sustainability and marketing & sales."
    ,sprachenHeading:"Languages",
     sprachen:"German, English"
    },
};
const { language } = useLanguage(); // 'de' oder 'en'
  const currentElements = tableElements[language]; 

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
         <div className="imagecontainer">
      <img className="first" src={background} />
      </div>
        <div className="header2">
          <h1 className="conn">{content[language].heading}</h1>
        </div>


        <Logo /*style={{ fill: themeColor }}*/ className="logoSvg"></Logo>
        <div className="scroll-down-arrow" onClick={handleScroll}><DownArrow width="40" height="40" /></div>
      </article>

      <div  style={{ backgroundColor: themeColor }} className="banner"></div>
      <div ref={targetRef} className={styles['about-me-container']}>
        <h1 id="startElement" className={styles.hHead}> {content[language].secondheading}</h1>

        {currentElements.map((row, rowIndex) => (
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
      {content[language].firstcolm}
      </div>
      <div className={styles.column}>
      {content[language].secondcolm}
       </div>
    </div>
      </div>
   

   <div>
   <h1  className={styles.hLang} >{content[language].sprachenHeading}</h1>
  <h1  className={styles.h3} >{content[language].sprachen}</h1>
   <a href="https://www.linkedin.com/in/angelika-kiessling-kranzelmayer-20b62a93" className={styles.hLinked} ><FaLinkedin /> </a>
      
   
   </div>
   <div style={{ backgroundColor: themeColor }} className="banner" id="endElement"></div>
    </div>


  );
};

export default AboutMe;