import React from 'react';
import { useInView } from 'react-intersection-observer';
import AnimatedHeading from '../effekts/AnimatedHeading.js';
import './css/Philosophie.css';


const Philosophie = () => {
    const textsLeft = ["Klarheit", "Konsequenz", "Kommunikation"];
    const textsRight = ["Effektivität", "Empathie", "Erfolg"];
    const mainText = "Klarheit in der Zielsetzung, Konsequenz in der Umsetzung, erfolgreiche Kommunikation und Einbindung relevanter Stakeholder führen zu Effizienz und Effektivität bei der Erreichung von persönlichen und unternehmerischen Zielen. Meinen Kund*innen stelle ich meine langjährige Erfahrung aus erfolgreich umgesetzten Projekten in Industrie, Konzernstruktur und Start-Up Organisation sowie meine Expertise in strategischer Planung, allen Disziplinen moderner Kommunikation sowie professionellem Stakeholdermanagement zur Verfügung.";
    const endText = "Dafür steht Connecting People, Shaping Business.";
    
    const calculateOffset = (index, isLeftColumn) => {
        // Basisverschiebung für alle Felder
        let xOffset = 0;
        let yOffset = index *140; // Vertikale Position basierend auf dem Index
    
        // Zusätzliche Verschiebung für das mittlere Feld
        if (index !== 1) {
          xOffset = isLeftColumn ? +100 : -100; // Links verschieben für linke Spalte, rechts für rechte Spalte
        }
    
        return { xOffset, yOffset };
      };

    return (
        <div class="grid-container">
            <div className='left'>
        {textsLeft.map((text, index) => {
          const { xOffset, yOffset } = calculateOffset(index, true);
          return (
            <div key={`left-${index}`} className="left felder" style={{
              transform: `translate(${xOffset}px, ${yOffset}px)`
            }}>
              {text}
            </div>
          );
        })}
      </div>
        <div class="center">
          <h1 className='heading3' id="endElement">Philosophie</h1>
          <p className='main'>{mainText}</p>
          <p className='main end'>{endText}</p>
        </div>
      <div className='right'>
        {textsRight.map((text, index) => {
          const { xOffset, yOffset } = calculateOffset(index, false);
          return (
            <div key={`right-${index}`} className="right felder" style={{
              transform: `translate(${xOffset}px, ${yOffset}px)`
            }}>
              {text}
            </div>
          );
        })}
        </div >
      </div>
    )
  };
  
  export default Philosophie;