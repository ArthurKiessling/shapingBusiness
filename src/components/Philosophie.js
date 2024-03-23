import React from 'react';
import { useInView } from 'react-intersection-observer';
import AnimatedHeading from '../effekts/AnimatedHeading.js';
import './css/Philosophie.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faStream, faComments, faRocket, faHeart, faTrophy } from '@fortawesome/free-solid-svg-icons';


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
  const mainText = "Klarheit in der Zielsetzung, Konsequenz in der Umsetzung, erfolgreiche Kommunikation und Einbindung relevanter Stakeholder führen zu Effizienz und Effektivität bei der Erreichung von persönlichen und unternehmerischen Zielen. Meinen Kund*innen stelle ich meine langjährige Erfahrung aus erfolgreich umgesetzten Projekten in Industrie, Konzernstruktur und Start-Up Organisation sowie meine Expertise in strategischer Planung, allen Disziplinen moderner Kommunikation sowie professionellem Stakeholdermanagement zur Verfügung.";
  const endText = "Connecting People, Shaping Business.";

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
      <div class="center">
        <div ref={ref} className={`${inView ? 'fade-in fade-in-delay-1'  : 'initial-hide'}`}>
        <h1 className='heading3' id="endElement">Philosophie</h1>
        <p className='main'>{mainText}</p>
        </div>
        <div  ref={ref} className={`${inView ? 'fade-in fade-in-delay-3'  : 'initial-hide'}`}>
        <p className='main end'>Dafür Steht</p>
        <p className='main end endslogan'>{endText}</p>
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