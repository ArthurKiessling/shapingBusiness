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
      mainText: "In einer dynamischen Zeit mit Veränderungen in Geopolitik, Klimawandel, digitaler Transformation unterstütze ich Organisationen und Entscheider dabei, Komplexität zu reduzieren, Strategien für die Geschäftsentwicklung zu erarbeiten, relevante Stakeholder einzubinden und diese durch professionelle Kommunikationsmaßnahmen auf den gemeinsamen Weg mitzunehmen.",
      mainText2:"Die Kombination aus Know-How, interdisziplinärer Erfahrung und einem sehr guten persönlichen Netzwerk in Industrie, Wirtschaft und öffentlicher Hand in Österreich und über die Grenzen hinaus bringe ich in die Beratung und in die Begleitung von Veränderungen ein.",
      SloganFirst: "Connecting People,",
      SloganSecond: "Shaping Business.",
      philosophy: "Pilosophie",
      standsFor: "Dafür Steht",
    },
    en: {
      mainText: "In a dynamic time with changes in geopolitics, climate change and digital transformation, I support organizations and decision-makers in reducing complexity, developing strategies for business development, involving relevant stakeholders and taking them along on the common path through professional communication measures.",
      mainText2:"I bring the combination of know-how, interdisciplinary experience and a very good personal network in industry, business and the public sector in Austria and beyond into consulting and change management.",
      SloganFirst: "Connecting People,",
      SloganSecond: "Shaping Business.",
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
     <div ref={ref}className="center">
      <div  className={`${inView ? 'fade-in fade-in-delay-1' : 'initial-hide'}`}>
        <h1 className='heading3' id="endElement">{texts[language].philosophy}</h1>
        <p className='main'>{texts[language].mainText}
        <br/> <br/>
        {texts[language].mainText2}
        </p>
      </div>
      <div ref={ref} className={` main end ${inView ? 'fade-in fade-in-delay-3' : 'initial-hide'}`}>
        <p >{texts[language].standsFor}</p>
        <div className='endslogan'>
        <p className='noww1'>{texts[language].SloganFirst}</p>
        <p className='noww2'>{texts[language].SloganSecond}</p>
          </div>
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