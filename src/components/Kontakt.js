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
      heading:"Kontaktieren Sie uns",
      telefon: 'Telefon',
      email: 'E-Mail',
      anschrift: 'Anschrift',
      linkedin: 'LinkedIn',
      phone: '+43 664 426 85 08',
      emailAddress: 'office@angelikakiessling.com',
      address: 'Leopold Gattringerstraße 25 2345 Brunn am Gebirge',
      linkedinName: 'Angelika Kiessling-Kranzelmayer',
    },
    en: {
      heading:"Get in touch with us",
      telefon: 'Phone',
      email: 'Email',
      anschrift: 'Address',
      linkedin: 'LinkedIn',
      phone: '+43 664 426 85 08',
      emailAddress: 'office@angelikakiessling.com',
      address: 'Leopold Gattringerstraße 25 2345 Brunn am Gebirge',
      linkedinName: 'Angelika Kiessling-Kranzelmayer',
    }
  };
  
  // Funktion zum Ändern der Sprache

  return (
    <div>
    <h2 className='heading'>{content[language].heading}</h2>
 
    <div className="contact-info">
    <div className="felder-beratung">
        <div className="title-wrapper-beratung">{content[language].email}</div>
        <div className="text-wrapper-beratung">
          <a href={`mailto:${content[language].emailAddress}`}>{content[language].emailAddress}</a>
        </div>
      </div>
      <div className="felder-beratung">
        <div className="title-wrapper-beratung">{content[language].telefon}</div>
        <div className="text-wrapper-beratung">{content[language].phone}</div>
      </div>
    
      <div className="felder-beratung">
        <div className="title-wrapper-beratung">{content[language].anschrift}</div>
        <div className="text-wrapper-beratung">{content[language].address}</div>
      </div>
      <div className="felder-beratung">
  
        <div className="title-wrapper-beratung">      <FaLinkedin/>{content[language].linkedin}</div>
        <div className="text-wrapper-beratung">{content[language].linkedinName}</div>
      </div>
    </div>
    <div  style={{ backgroundColor: '#c1b3a5' }} className="banner"></div>
  </div>

    
  );
};

export default Kontakt;