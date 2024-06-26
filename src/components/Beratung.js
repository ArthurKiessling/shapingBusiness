import "./css/Beratung.css";

import React from 'react';
import { NavLink } from 'react-router-dom'
import { ReactComponent as DownArrow } from '../images/downarrow.svg';


import { useTheme } from './ThemeContext.js';
import { smoothScrollTo, getElementY } from '../effekts/scrollUtils.js';

import { faLightbulb, faStream, faComments, faBusinessTime, faRocket, faHeart, faTrophy } from '@fortawesome/free-solid-svg-icons';


import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useState } from "react";

import { useLanguage } from '../effekts/LanguageProvider.js';


function useIsMobile() {
  // Setze einen initialen Zustand basierend auf der aktuellen Bildschirmbreite
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    // Definiere eine Funktion, um den Zustand basierend auf der Bildschirmbreite zu aktualisieren
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Füge einen Event-Listener für das Resize-Event hinzu
    window.addEventListener('resize', handleResize);

    // Entferne den Event-Listener, wenn die Komponente unmountet
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
}
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
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  
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
        secondheading:"Meine Leistungen",
        contact:"Let´s connect!"
       },
    en:  {
      heading:"SHAPING FUTURE",
      secondheading:"My services",
      contact:"Let´s connect!"
    },
  };
  const services = {de:[
    {
      title: "Strategie & Change",
      description:(<ul className="custom-list">
        <li>Entwicklung und Implementierung von Geschäftsstrategien</li>
        <li>Planung und Begleitung von Change- und Transformationsprozessen</li>
        <li>Gestaltung von Unternehmenskultur und Innovationskultur</li>
      </ul>) 
      ,
      icon: faBusinessTime,
      id:"tab1"
    },
    {
      title: "Kommunikation & Reputation",
      description: (<ul className="custom-list">
        <li>Integrierte Kommunikationsstrategien und -konzepte</li>
        <li>Professionelle Krisenkommunikation</li>
        <li>Positionierung von Organisationen, Personen, Standorten, Produkten & Dienstleitungen </li>
      </ul>) 
      ,icon: faComments,
      id:"tab2"
    },
    {
      title: "Executive Coaching",
      description: (<ul className="custom-list">
        <li>Sparring und Begleitung für Führungskräfte</li>
        <li>Individuelle Beratung bei Change- und Krisenthemen</li>
      </ul>) 
      , icon: faComments,
      id:"tab3"
    },
    {
      title: "Stakeholder Management",
      description: (<ul className="custom-list">
        <li>Public Affairs Consulting</li>
        <li>Aktives Stakeholdermanagement</li>
      </ul>) 
      ,icon: faComments,
      id:"tab4"
    },
    
   
    // Füge bei Bedarf weitere Dienstleistungen mit Icons hinzu
  ],
  en:[
    {
      title: "Strategy & Change",
      description: (<ul className="custom-list">
      <li>Developing and implementing business strategies</li>
      <li>Planning and guiding change and transformation processes</li>
      <li>Designing and developing corporate culture and innovation culture</li>
    </ul>) 
    ,icon: faBusinessTime,
      id:"tab1"
    },
    {
      title: "Communication & Reputation",
      description: (<ul className="custom-list">
        <li>Integrated communication strategies and concepts </li>
        <li>Professional crisis communication </li>
        <li>Positioning of organizations, individuals, locations, products & services</li>
      </ul>) 
      ,icon: faComments,
      id:"tab2"
    },
    {
      title: "Stakeholder Management",
      description: (<ul className="custom-list">
      <li>Sparring and support for executives</li>
      <li>Individual consulting on change and crisis topics</li>
    </ul>) 
    , icon: faComments,
      id:"tab3"
    },
    
    {
      title: "Executive Coaching",
      description: (<ul className="custom-list">
      <li>Public affairs consulting</li>
      <li>Active stakeholder management</li>
    </ul>) 
    ,icon: faComments,
      id:"tab4"
    },
    // Füge bei Bedarf weitere Dienstleistungen mit Icons hinzu
  ]};

  const { language } = useLanguage(); // 'de' oder 'en'
  const currentElements = services[language]; 

  const isMobil = useIsMobile();
  if(isMobil){
    var leftColumnServices = currentElements.filter((_, index) => index <2);
    var rightColumnServices = currentElements.filter((_, index) => index >1);
    var rightColumnServices = rightColumnServices.slice().reverse();
  }else{
    var leftColumnServices = currentElements.filter((_, index) => index % 2 === 0);
    var rightColumnServices = currentElements.filter((_, index) => index % 2 !== 0);
  }
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageUrl = "../images/beratung_comp.jpg"; // Setzen Sie hier den Pfad zu Ihrem Bild ein

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
 
    <div>
      <article className="article2">
        <img className="cover" src={imageUrl} />
        <div className="header2">
          <h1 className="conn">{content[language].heading}</h1>
        </div>

       {/* <Logo /*style={{ fill: themeColor }} className="logoSvg"></Logo> */} 
        <div className="scroll-down-arrow" onClick={handleScroll}><DownArrow width="40" height="40" /></div>
      </article>

      <div ref={targetRef} style={{ backgroundColor: themeColor }} className="banner" id="startElementMobil"></div>


      <div >
        <div className="services-list" >
          <h2 id="startElement" className="leistung"> {content[language].secondheading}</h2>
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
        

      </div >

      <NavLink onClick={() => {scrollToTop();}} to="/kontakt" ><h1 className="h3" >{content[language].contact}</h1></NavLink >
      <div id="point3" className="banner alltop2"></div>
      <div style={{ backgroundColor: themeColor }} className="banner" id="endElement"></div>
      
    </div>
 
  );
};

export default HomePage;

