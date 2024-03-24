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
      mainText: "In einer dynamischen Zeit mit Veränderungen in Geopolitik, Klimawandel, digitaler Transformation unterstütze ich Organisationen und Entscheider dabei, Komplexität zu reduzieren, Strategien für die Geschäftsentwicklung zu erarbeiten, relevante Stakeholder einzubinden und diese durch professionelle Kommunikationsmaßnahmen auf den gemeinsamen Weg mitzunehmen. Die Kombination aus Know-How, interdisziplinärer Erfahrung und einem sehr guten persönlichen Netzwerk in Industrie, Wirtschaft und öffentlicher Hand in Österreich und über die Grenzen hinaus bringe ich in die Beratung und in die Begleitung von Veränderungen ein.",
      endText: "Connecting People, Shaping Business.",
      philosophy: "Pilosophie",
      standsFor: "Dafür Steht",
    },
    en: {
      mainText: "Clarity in setting goals, consistency in implementation, successful communication, and involvement of relevant stakeholders lead to efficiency and effectiveness in achieving personal and corporate goals. I offer my clients my extensive experience from successfully implemented projects in industry, corporate structures, and start-up organizations, as well as my expertise in strategic planning, all disciplines of modern communication, and professional stakeholder management.",
      endText: "Connecting People, Shaping Business.",
      philosophy: "Philosophy",
      standsFor: "Stands For",
    }
  };

  return (
    <div class="grid-container">
      {/*<div  ref={ref} className={`left ${inView ? 'fade-in fade-in-delay-2'  : 'initial-hide'}`}>
        {textsLeft.map((item, index) => {
          const { xOffset, yOffset } = calculateOffset(index, true);
          return (
            <div key={`left-${index}`} className="left felder" style={{
              transform: `translate(${xOffset}px, ${yOffset}px)`
            }}>
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={item.icon} className='icon-style' />
              </div>
              <div className="text-wrapper">
                {item.text}
              </div>
            </div>
          );
        })}
      </div>*/}
     <div className="center">
      <div ref={ref} className={`${inView ? 'fade-in fade-in-delay-1' : 'initial-hide'}`}>
        <h1 className='heading3' id="endElement">{texts[language].philosophy}</h1>
        <p className='main'>{texts[language].mainText}</p>
      </div>
      <div ref={ref} className={`${inView ? 'fade-in fade-in-delay-3' : 'initial-hide'}`}>
        <p className='main end'>{texts[language].standsFor}</p>
        <p className='main end endslogan'>{texts[language].endText}</p>
      </div>
    </div>
      {/*<div  ref={ref} className={`right ${inView ? 'fade-in fade-in-delay-2'  : 'initial-hide'}`}>
        {textsRight.map((item, index) => {
          const { xOffset, yOffset } = calculateOffset(index, false);
          return (
            <div key={`right-${index}`} className="right felder" style={{
              transform: `translate(${xOffset}px, ${yOffset}px)`
            }}>
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={item.icon} className='icon-style' />
              </div>
              <div className="text-wrapper">
                {item.text}
              </div>
            </div>
          );
        })}
      </div >*/}
    </div>
  )
};

export default Philosophie;