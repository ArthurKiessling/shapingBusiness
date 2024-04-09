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
import heartbrain from '../images/heartbrain_now.svg';
import glue from '../images/birne.svg';
import { useLanguage } from '../effekts/LanguageProvider.js';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const AboutMe = () => {
  const tableElements =  { de: [
    
    [
      {
        title: "MIT HERZ & HIRN",
        description: (<ul className={styles.aboutlist}>
        <li>empathisch, herzlich, mutig, offen</li>
        <li>analytisch, strukturiert</li>
        <li>ergebnis-, lösungsorientiert</li>
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
        description: (<ul className={styles.aboutlist}>
        <li>Kommunikation & Public Affairs</li>
        <li>Reputation-, Stakeholder Management</li>
        <li>Change - und Krisenmanagement</li>
        <li>Nachhaltigkeit & Digitalisierung</li>
        <li>Technologie & Innovation</li>
      </ul>),icon: <img 
      src={glue}
      alt="Herz- und Gehirn-Icon" 
      color='white'
      style={{ width: '48px', height: '48px' }} // Größe nach Bedarf anpassen
    />
      },
     
    ],
    [
      {
        title: "ERFAHREN",
        description: (<ul className={styles.aboutlist}>
        <li>Konzernorganisation & Start-Up</li>
        <li>Konsolidierung & Entwicklung von Standorten</li>
        <li>New Work, Digitale Transformation, Krisenmanagement</li>
        <li>Vereinbarkeit von Beruf & Familie</li>
      </ul>), icon: <GiJourney />
      },
      {
        title: "ZUKUNFTSORIENTIERT",
        description: (<ul className={styles.aboutlist}>
        <li>Entwicklung von Standort-, Nachhaltigkeitsstrategien</li>
        <li>Gestaltung & Begleitung von Organisationsänderungen</li>
        <li>Bildung, Nachwuchsförderung</li>
        <li>Innovationskultur, Diversität</li>
      </ul>),icon: <MdCompost />
      },
     
    ]
  ],
  en: [
    
    [
      {
        title: "WITH HEART & MIND",
        description: (<ul className={styles.aboutlist}>
        <li>empathetic, warm, courageous, open</li>
        <li>analytical, structured</li>
       <li>results-oriented, solution-focused</li>
        <li>collaborative, strong in communication and implementation</li>
      </ul>),
        icon:  <img 
        src={heartbrain}
        alt="Herz- und Gehirn-Icon" 
        color='white'
        style={{ width: '48px', height: '48px' }} // Größe nach Bedarf anpassen
      />
      },
      {
        title: "PROFESSIONALLY COMPETENT",
        description: (<ul className={styles.aboutlist}>
        <li>Communication & public affairs</li>
        <li>Reputation management, stakeholder management</li>
        <li>Change and crisis management</li>
        <li>Sustainability & digitalization</li>
        <li>Technology & Innovation</li>
      </ul>),
      icon: <img 
      src={glue}
      alt="Herz- und Gehirn-Icon" 
      color='white'
      style={{ width: '48px', height: '48px' }} // Größe nach Bedarf anpassen
    />
      },
     
    ],
    [
      {
        title: "EXPERIENCED",
        description:(<ul className={styles.aboutlist}>
        <li>Corporate organization & start up</li>
        <li>Consolidation & development of locations</li>
        <li>New work, digital transformation, crisis management</li>
        <li>Reconciliation of family & workinglife</li>
      </ul>), 
      icon: <GiJourney />
      },
      {
        title: "FUTURE-ORIENTED",
        description: (<ul className={styles.aboutlist}>
        <li>Development of location and sustainability strategies</li>
        <li>Design & support of organizational changes</li>
        <li>Education, talent development</li>
        <li>Innovation culture, diversity</li>
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
      firstcolm:"In mehr als 25 Jahren Erfahrung aus erfolgreicher Corporate Career, mehr als 15 davon in leitenden Management-Funktionen im internationalen Technologie- und Dienstleistungsunternehmen, prägen die Gestaltung von Zukunftsfeldern im Forschungs-, Technologie- und Bildungsumfeld sowie in der Standortentwicklung mein berufliches Engagement.",
      secondcolm:"Mit ganzheitlichem, strategischem, unternehmerischem Denken und Handeln sowie innovativem Mindset und ausgeprägten Problemlösungskompetenzen habe ich eine Vielzahl von Projekten den Bereichen in Technologie & Digitalisierung, Innovation & Nachhaltigkeit sowie Marketing & Sales erfolgreich umgesetzt.",
      sprachenHeading:"Sprachen",
      sprachen:"Deutsch, Englisch",
      ausbildung: "Ausbildung",
    ausbildungen: [
      {
        institution: "Wirtschaftsuniversität Wien (WU-Wien)",
        abschluss: "Studium Betriebswirtschaft, Abschluss mit Mag. rer.soc.oec."
      },
      {
        institution: "WU Executive Academy",
        abschluss: 'Zertifikat “Governance Excellence- Programm für AufsichtsrätInnen”'
      },
      {
        institution: "University of Cambridge",
        extrainfo:"Judge Business School Executive Education",
        abschluss: 'Certificate “Circular Economy & Sustainable Strategies”'
      }
    ]
   },
  en:  {
    heading:"ABOUT ME",
    secondheading:"That's what I stand for",
    firstcolm:"More than 25 years of successful corporate experience define my professional commitment. Over 15 of these years have been spent in senior management positions in international technology and service companies, shaping future fields in research, technology and educational environments, and location development.",
     secondcolm:"With holistic, strategic, entrepreneurial thinking and action as well as an innovative mindset and pronounced problem-solving skills, I have successfully implemented a variety of projects in the fields of technology & digitalization, innovation & sustainability, and marketing & sales.",
     sprachenHeading:"Languages",
     sprachen:"German, English",
     ausbildung: "Education",
     ausbildungen: [
       {
         institution: "University of Ecnonomics & Business, Vienna (WU-Wien)",
         abschluss: "Studies in Business Administration, graduation with MBA equivalent (Mag. rer.soc.oec.)"
       },
       {
         institution: "WU Executive Academy",
         abschluss: 'Certificate “Governance Excellence-Program for Supervisory Board Members”'
       },
       {
         institution: "University of Cambridge",
         extrainfo:"Judge Business School Executive Education",
         abschluss: 'Certificate “Circular Economy & Sustainable Strategies”'
       }
     ]
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
         <LazyLoadImage
      src={background} // Use your own image file here
      className="first"
      width="100%"
      height="auto"
      effect="blur" // Optional: use 'blur' effect while loading
    />
      </div>
        <div className="header2">
          <h1 className="conn">{content[language].heading}</h1>
        </div>


      {/* <Logo /*style={{ fill: themeColor }} className="logoSvg"></Logo> */} 
        <div className="scroll-down-arrow" onClick={handleScroll}><DownArrow width="40" height="40" /></div>
      </article>

      <div ref={targetRef} style={{ backgroundColor: themeColor }} className="banner"></div>
      <div  className={styles['about-me-container']}>
        <h1 id="startElement" className={styles.hHead}> {content[language].secondheading}</h1>

        {currentElements.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {row.map((item, itemIndex) => (
              <div key={itemIndex} className={styles.tableElement}>
                <div className={styles.icon}>{item.icon}</div>
                <h2 className={styles.h2}>{item.title}</h2>
                <div className={styles.p}>{item.description}</div>
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
  <h1  className={styles.hLang} >{content[language].ausbildung}</h1>
  {
  content[language].ausbildungen.map(ausbildung => (
    <div key={ausbildung.institution}>
      <div className={styles.hAusbildung}>
       <h1> {ausbildung.institution}</h1>
        <h1 className='hJahre'>{ausbildung.jahre}</h1>
        </div>
      { ausbildung.extrainfo && <h1 className={styles.hAusbildung}>{ausbildung.extrainfo}</h1> }
      <h1 className={styles.textAusbildung}>{ausbildung.abschluss}</h1>
    </div>
  ))
}
   <a href="https://www.linkedin.com/in/angelika-kiessling-kranzelmayer-20b62a93" className={styles.hLinked} ><FaLinkedin /> </a>
      
   
   </div>
   <div style={{ backgroundColor: themeColor }} className="banner" id="endElement"></div>
   
    </div>


  );
};

export default AboutMe;