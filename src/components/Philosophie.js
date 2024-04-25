import React from 'react';
import { useInView } from 'react-intersection-observer';
import AnimatedHeading from '../effekts/AnimatedHeading.js';
import './css/Philosophie.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faStream, faComments, faRocket, faHeart, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../effekts/LanguageProvider.js';

const Philosophie = () => {
 
  const textsLeft = [
    { text: "Klarheit", icon: faLightbulb },
    { text: "Konsequenz", icon: faStream },
    { text: "Kommunikation", icon: faComments },
  ];

  const textsRight = [
    { text: "Effektivität", icon: faRocket },
    { text: "Empathie", icon: faHeart },
    { text: "Erfolg", icon: faTrophy },
  ];

  const calculateOffset = (index, isLeftColumn) => {
    // Basisverschiebung für alle Felder
    let xOffset = 0;
    let yOffset = index * 100; // Vertikale Position basierend auf dem Index

    // Zusätzliche Verschiebung für das mittlere Feld
    if (index !== 1) {
      xOffset = isLeftColumn ? +100 : -100; // Links verschieben für linke Spalte, rechts für rechte Spalte
    }

    return { xOffset, yOffset };
  };
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const { language, toggleLanguage } = useLanguage();
  const texts = {
    de: {
      mainText: "In einer dynamischen Zeit mit Veränderungen in Geopolitik, Klimawandel, digitaler Transformation unterstütze ich Sie dabei,",
      mainPoint: (<ul className="pointList">
        <li>Strategien für Ihre Geschäftsentwicklung neu zu denken,</li>
        <li>Veränderungen in Ihrer Organisation aktiv zu gestalten,</li>
        <li>relevante Stakeholder einzubinden und diese durch</li>
        <li>professionelle Kommunikationsmaßnahmen auf den gemeinsamen Weg mitzunehmen.</li>
      </ul>),
      mainText2:"Die Kombination aus Know-How, interdisziplinärer Erfahrung und einem sehr guten persönlichen Netzwerk in Industrie, Wirtschaft, öffentlicher Hand – national wie international - bringe ich in die Beratung und in die Begleitung von Veränderungen ein.",
      SloganFirst: "Connecting People,",
      SloganSecond: "Shaping Business.",
      philosophy: "Philosophie",
      standsFor: "Dafür Steht",
    },
    en: {
      mainText: "In a dynamic time with changes in geopolitics, climate change and digital transformation, I support you in this,",
      mainPoint: (<ul className="pointList">
      <li>rethink strategies for your business development,</li>
      <li>actively shape change in your organization,</li>
      <li>relevant stakeholders and to involve them through</li>
      <li>professional communication measures along the way.</li>
    </ul>),
      mainText2:"The combination of know-how, interdisciplinary experience and a very good personal network in industry, business and the public sector - both nationally and internationally - is what I bring to consulting and change management.",
      SloganFirst: "Connecting People,",
      SloganSecond: "Shaping Business.",
      philosophy: "Philosophy",
      standsFor: "This is what I stand for:",
    }
  };

  return (
    <div className="grid-container">
     <div ref={ref}className="center">
      <div  className={`${inView ? 'fade-in fade-in-delay-1' : 'initial-hide'}`}>
        <h1 className='heading3' id="endElement">{texts[language].philosophy}</h1>
        <div className='main'>
          {texts[language].mainText}
        <br></br>
        <br></br>
        {texts[language].mainPoint}
        <br></br>
        {texts[language].mainText2}
        </div>
      </div>
      <div ref={ref} className={` main end ${inView ? 'fade-in fade-in-delay-3' : 'initial-hide'}`}>
        <p >{texts[language].standsFor}</p>
        <div className='endslogan'>
        <p className='noww1'>{texts[language].SloganFirst}</p>
        <p className='noww2'>{texts[language].SloganSecond}</p>
          </div>
      </div>
    </div>
    </div>
  )
};

export default Philosophie;