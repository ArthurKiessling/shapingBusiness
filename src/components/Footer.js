'use client';

import { Footer } from 'flowbite-react';
import { NavLink } from 'react-router-dom'
import './css/footer.css'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../effekts/LanguageProvider.js';
export default function Component() {
  const content = {
    de: {
      home: 'Home',
      beratung: 'Beratung',
      mich: 'Über mich',
      kontakt: 'Kontakt',
      impressum:'Impressum',
      daten:'Datenschutz',
      agb:'AGB'
    },
    en: {
      home: 'Home',
      beratung: 'Consulting',
      mich: 'About Me',
      kontakt: 'Contact',
      impressum:'Imprint',
      daten:'Privacy Protection',
      agb:'Legal & Privacy'
    }
  };
  const { language, toggleLanguage } = useLanguage();
  return (
    <Footer className="footer">
     <div className="w-full footer-background" /> 
      <div className="w-full footer-content">
        <div className="grid w-full grid-cols-2 gap-8 px-20 py-8 md:grid-cols-3  bottom-0">
          <div>
            <Footer.Title title="Unternehmen" />
            <Footer.LinkGroup col>
              <Footer.Link href="/">{content[language].home}</Footer.Link>
              <Footer.Link href="/beratung">{content[language].beratung}</Footer.Link>
              <Footer.Link href="/uebermich">{content[language].mich}</Footer.Link>
              <Footer.Link href="/kontakt">{content[language].kontakt}</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="/Impressum">{content[language].impressum}</Footer.Link>
              <Footer.Link href="/Datenschutz">Cookies</Footer.Link>
              <Footer.Link href="/Datenschutz">{content[language].daten}</Footer.Link>
              <Footer.Link href="/AGB">{content[language].agb}</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Socials" />
           
            <Footer.LinkGroup col>
            <Footer.Link href="https://www.linkedin.com/in/angelika-kiessling-kranzelmayer-20b62a93" ><FaLinkedin size={32}/></Footer.Link>
         
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Angelika Kiessling-Kranzelmayer" year={2024} />
         
        </div>
         
      </div>
     
    </Footer>
  );
}