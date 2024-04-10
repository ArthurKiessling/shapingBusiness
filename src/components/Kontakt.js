import React from 'react';
import './css/kontakt.css'; // Stellen Sie sicher, dass Sie diese CSS-Datei für das Styling erstellen
import { FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../effekts/LanguageProvider.js';

// Inhalte für jede Sprache


const Kontakt = () => {
  const { language } = useLanguage();
  const content = {
    de: {
      heading:"Let´s connect!",
      telefon: 'Telefon',
      email: 'E-Mail',
      anschrift: 'Anschrift',
      linkedin: 'LinkedIn',
      phone: '+43 664 426 85 08',
      emailAddress: 'office(at)angelikakiessling.com',
      address: (<ul className="about-list">
      <li>Mag. Angelika Kiessling-Kranzelmayer</li>
      <li>Strategy & Business Consulting</li>
      <li>Leopold Gattringer-Straße 25</li>
      <li>A-2345 Brunn am Gebirge</li>
    </ul>),
      linkedinName: 'Angelika Kiessling-Kranzelmayer',
    },
    en: {
      heading:"Let´s connect!",
      telefon: 'Phone',
      email: 'E-Mail',
      anschrift: 'Address',
      linkedin: 'LinkedIn',
      phone: '+43 664 426 85 08',
      emailAddress: 'office(at)angelikakiessling.com',
      address: (<ul className="about-list">
      <li>Mag. Angelika Kiessling-Kranzelmayer</li>
      <li>Strategy & Business Consulting</li>
      <li>Leopold Gattringer-Straße 25</li>
      <li>A-2345 Brunn am Gebirge</li>
    </ul>),
      linkedinName: 'Angelika Kiessling-Kranzelmayer',
    }
  };
  
  // Funktion zum Ändern der Sprache

  return (
    <div>
    <h2 className='heading'>{content[language].heading}</h2>
 
    <div className="contact-info-konakt">
    <div className="felder-kontakt">
    <a href={`mailto:office@angelikakiessling.com`}>
        
        <div className="text-wrapper-kontakt">{content[language].emailAddress}</div>
        </a>
      </div>
 
      <div className="felder-kontakt">
      <a href={`tel:+436644268508`}>
       
        <div className="text-wrapper-kontakt">{content[language].phone}</div>
        </a>
      </div>
   
     
      <div className="felder-kontakt">

        <div className="text-wrapper-kontakt">{content[language].address}</div>
      </div>
  
      <div className="felder-kontakt">
      <a href="https://www.linkedin.com/in/angelika-kiessling-kranzelmayer-20b62a93" className="hLinked" ><FaLinkedin /> </a>
     
      </div>
    
    </div>
    <div  style={{ backgroundColor: '#c1b3a5' }} className="banner"></div>
  </div>

    
  );
};

export default Kontakt;