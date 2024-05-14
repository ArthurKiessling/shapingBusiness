import React, { useState } from 'react';
import KontaktForm from './KontaktForm.js'; // Pfad anpassen
import './css/agb.css'; // Stellen Sie sicher, dass Sie diese CSS-Datei für das Styling erstellen
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../effekts/LanguageProvider.js';

// Inhalte für jede Sprache


const Impressum = () => {
  const { language } = useLanguage();
  const content = {
    de: {
      heading:"Impressum",
      telefon: 'Telefon',
      email: 'E-Mail',
      anschrift: 'Anschrift',
      linkedin: 'LinkedIn',
      phone: '+43 664 426 85 08',
      emailAddress: 'office@shapingbusiness.at',
      address: 'Musterstraße 1, 12345 Musterstadt',
      linkedinName: 'Angelika Kiessling-Kranzelmayer',
	 
    },
    en: {
      heading:"Impressum",
      telefon: 'Phone',
      email: 'Email',
      anschrift: 'Address',
      linkedin: 'LinkedIn',
      phone: '+43 664 426 85 08',
      emailAddress: 'office@shapingbusiness.at',
      address: 'Sample Street 1, 12345 Sample City',
      linkedinName: 'Angelika Kiessling-Kranzelmayer',
    }
  };
  
  // Funktion zum Ändern der Sprache

  return (
    <div>
	
    <div className='box'>

	<div>
				<ol>
			<li><strong>Impressum</strong></li>
			</ol>
			<p><strong>Informationen und Offenlegung gem&auml;&szlig; &sect;5 (1) ECG, &sect; 25 MedienG, &sect; 63 GewO und &sect; 14 UGB</strong></p>
				<p>&nbsp;</p>
				<p><strong>Webseitenbetreiber:</strong>&nbsp;Mag. Angelika Kiessling-Kranzelmayer</p>
				<p>&nbsp;</p>
				<p><strong>Anschrift:</strong>&nbsp;Leopold Gattringer-Stra&szlig;e 25, 2345 Brunn am Gebirge</p>
				<p>&nbsp;</p>
				<p><strong>Berufsbezeichnung / Unternehmensgegenstand:<br /> </strong>Unternehmensberatung einschlie&szlig;lich der Unternehmensorganisation</p>
				<p>&nbsp;</p>
				<p><strong>UID-Nr: ATU68954107</strong><br /> <strong>Gewerbeaufsichtbeh&ouml;rde:</strong>&nbsp;BH M&ouml;dling<br /><strong>GISA-Zahl:</strong> 37011987<br />  <strong>Mitgliedschaften: </strong>Wirtschaftskammer Niederösterreich, Fachgruppe Unternehmensberatung</p>
				<p>&nbsp;</p>
				<p><strong>Kontaktdaten:</strong><br /> Telefon: +436644268508<br /> Email: <a href="mailto:office@angelikakiessling.com">office@angelikakiessling.com</a></p>
				<p>&nbsp;</p>
				<p><strong>Anwendbare Rechtsvorschrift:</strong>&nbsp;</p>
				<ul>
				<li><a href="https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&amp;Gesetzesnummer=10007517">RIS - Gewerbeordnung 1994 - Bundesrecht konsolidiert, Fassung vom 09.04.2024 (bka.gv.at)</a></li>
				<li><a href="https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&amp;Gesetzesnummer=20002509">RIS - Unternehmensberatungs-Verordnung - Zugangsvoraussetzungen - Bundesrecht konsolidiert, Fassung vom 09.04.2024 (bka.gv.at)</a> </li>
				</ul>
				<p><strong>Online Streitbeilegung:</strong>&nbsp;Verbraucher, welche in &Ouml;sterreich oder in einem sonstigen Vertragsstaat der ODR-VO niedergelassen sind, haben die M&ouml;glichkeit Probleme bez&uuml;glich dem entgeltlichen Kauf von Waren oder Dienstleistungen im Rahmen einer Online-Streitbeilegung (nach OS, AStG) zu l&ouml;sen. Die Europäische Kommission stellt eine Plattform hierf&uuml;r bereit: <a href="https://ec.europa.eu/consumers/odr">https://ec.europa.eu/consumers/odr</a></p>
				<p>&nbsp;</p>
				<p><strong>Urheberrecht:</strong>&nbsp;Die Inhalte dieser Webseite unterliegen, soweit dies rechtlich m&ouml;glich ist, diversen Schutzrechten (z.B dem Urheberrecht). Jegliche Verwendung/Verbreitung von bereitgestelltem Material, welche urheberrechtlich untersagt ist, bedarf schriftlicher Zustimmung des Webseitenbetreibers.</p>
				<p>&nbsp;</p>
				<p><strong>Haftungsausschluss:</strong>&nbsp;Trotz sorgf&auml;ltiger inhaltlicher Kontrolle &uuml;bernimmt der Webseitenbetreiber dieser Webseite keine Haftung f&uuml;r die Inhalte externer Links. F&uuml;r den Inhalt der verlinkten Seiten sind ausschlie&szlig;lich deren Betreiber verantwortlich. Sollten Sie dennoch auf ausgehende Links aufmerksam werden, welche auf eine Webseite mit rechtswidriger T&auml;tigkeit/Information verweisen, ersuchen wir um dementsprechenden Hinweis, um diese nach &sect; 17 Abs. 2 ECG umgehend zu entfernen.<br /> Die Urheberrechte Dritter werden vom Betreiber dieser Webseite mit gr&ouml;&szlig;ter Sorgfalt beachtet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden derartiger Rechtsverletzungen werden wir den betroffenen Inhalt umgehend entfernen.</p>
				<p>&nbsp;</p>
				<p>Quelle:&nbsp;<a href="https://www.fairesrecht.at/"><strong>fairesRecht.at</strong></a></p>
        <br></br>
				<p><strong>Fotocredit: </strong>Andrea Sojka</p>
				<p>&nbsp;</p>
 </div>
</div>
	
    <div  style={{ backgroundColor: '#c1b3a5' }} className="banner"></div>
  </div>

    
  );
};

export default Impressum;