import React, { useState } from 'react';
import KontaktForm from './KontaktForm.js'; // Pfad anpassen
import './css/kontakt.css'; // Stellen Sie sicher, dass Sie diese CSS-Datei für das Styling erstellen
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaLinkedin } from 'react-icons/fa';
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
      emailAddress: 'office@angelikakiessling.com',
      address: (<ul className="about-list">
      <li>Mag. Angelika Kiessling-Kranzelmayer</li>
      <li>Unternehmensberatung</li>
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
      emailAddress: 'office@angelikakiessling.com',
      address: (<ul className="about-list">
      <li>Mag. Angelika Kiessling-Kranzelmayer</li>
      <li>Unternehmensberatung</li>
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
    <a href={`mailto:${content[language].emailAddress}`}>
        <div className="title-wrapper-kontakt">{content[language].email}</div>
        <div className="text-wrapper-kontakt">{content[language].emailAddress}</div>
        </a>
      </div>
      <div className="felder-kontakt">
        <div className="title-wrapper-kontakt">{content[language].telefon}</div>
        <div className="text-wrapper-kontakt">{content[language].phone}</div>
      </div>
      <div className="felder-kontakt">
      <a href="https://www.linkedin.com/in/angelika-kiessling-kranzelmayer-20b62a93">
        <div className="title-wrapper-kontakt">      <FaLinkedin/>{content[language].linkedin}</div>
        <div className="text-wrapper-kontakt">{content[language].linkedinName}</div>
        </a>
      </div>
      <div className="felder-kontakt">
        <div className="title-wrapper-kontakt">{content[language].anschrift}</div>
        <div className="text-wrapper-kontakt">{content[language].address}</div>
      </div>
  
     
    
    </div>
    <div  style={{ backgroundColor: '#c1b3a5' }} className="banner"></div>
  </div>

    
  );
};

export default Kontakt;