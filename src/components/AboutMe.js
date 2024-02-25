import React from 'react';
import styles from './css/AboutMe.module.css'; // Stelle sicher, dass der Pfad korrekt ist
import ganzSitzBild from '../images/ganz_sitz.jpg';

import { FaHeartbeat, FaBrain, FaHandshake, FaSeedling, FaRocket, FaUsers } from 'react-icons/fa';

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
  return (
    <div className={styles['about-me-container']}>
      <h1 className={styles.h1}>Über mich</h1>
      
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
  );
};

export default AboutMe;