import React, { useState } from 'react';
import KontaktForm from './KontaktForm.js'; // Pfad anpassen
import './css/agb.css'; // Stellen Sie sicher, dass Sie diese CSS-Datei für das Styling erstellen
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../effekts/LanguageProvider.js';

// Inhalte für jede Sprache


const Datenschutz = () => {
  const { language } = useLanguage();
  const content = {
    de: {
      heading:"Allgemeine Geschäftsbedingungen (AGB)",
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
      heading:"GENERAL TERMS AND CONDITIONS (GTC)",
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
	<div >
<h3>Erkl&auml;rung zur Informationspflicht</h3>
<br />
<p align="center"><strong>Datenschutzerkl&auml;rung</strong></p>
<p align="center">&nbsp;</p>
<p>In folgender Datenschutzerkl&auml;rung informieren wir Sie &uuml;ber die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Webseite. Wir erheben und verarbeiten personenbezogene Daten nur auf Grundlage der gesetzlichen Bestimmungen (Datenschutzgrundverordnung, Telekommunikationsgesetz 2003).</p>
<p>Sobald Sie als Benutzer auf unsere Webseite zugreifen oder diese besuchen wird Ihre IP-Adresse, Beginn sowie Beginn und Ende der Sitzung erfasst. Dies ist technisch bedingt und stellt somit ein berechtigtes Interesse iSv Art 6 Abs 1 lit f DSGVO.</p>
<p>&nbsp;</p>
<h2><strong>Kontakt mit uns</strong></h2>
<p>Wenn Sie uns, entweder &uuml;ber unser Kontaktformular auf unserer Webseite, oder per Email kontaktieren, dann werden die von Ihnen an uns &uuml;bermittelten Daten zwecks Bearbeitung Ihrer Anfrage oder f&uuml;r den Fall von weiteren Anschlussfragen f&uuml;r sechs Monate bei uns gespeichert. Es erfolgt, ohne Ihre Einwilligung, keine Weitergabe Ihrer &uuml;bermittelten Daten.</p>
<p>&nbsp;</p>
<h2><strong>Cookies</strong></h2>
<p>Unsere Website verwendet so genannte Cookies. Dabei handelt es sich um kleine Textdateien, die mit Hilfe des Browsers auf Ihrem Endger&auml;t abgelegt werden. Sie richten keinen Schaden an. Wir nutzen Cookies dazu, unser Angebot nutzerfreundlich zu gestalten. Einige Cookies bleiben auf Ihrem Endger&auml;t gespeichert, bis Sie diese l&ouml;schen. Sie erm&ouml;glichen es uns, Ihren Browser beim n&auml;chsten Besuch wiederzuerkennen. Wenn Sie dies nicht w&uuml;nschen, so k&ouml;nnen Sie Ihren Browser so einrichten, dass er Sie &uuml;ber das Setzen von Cookies informiert und Sie dies nur im Einzelfall erlauben. Bei der Deaktivierung von Cookies kann die Funktionalit&auml;t unserer Website eingeschr&auml;nkt sein.</p>
<p>&nbsp;</p>
<h2><strong>Google Fonts</strong></h2>
<p>Unsere Website verwendet Schriftarten von &bdquo;Google Fonts&ldquo;. Der Dienstanbieter dieser Funktion ist:</p>
<ul>
<li>Google Ireland Limited Gordon House, Barrow Street Dublin 4. Ireland</li>
</ul>
<p>Tel: +353 1 543 1000</p>
<p>Beim Aufrufen dieser Webseite l&auml;dt Ihr Browser Schriftarten und speichert diese in den Cache. Da Sie, als Besucher der Webseite, Daten des Dienstanbieters empfangen kann Google unter Umst&auml;nden Cookies auf Ihrem Rechner setzen oder analysieren.</p>
<p>Die Nutzung von &bdquo;Google-Fonts&ldquo; dient der Optimierung unserer Dienstleistung und der einheitlichen Darstellung von Inhalten. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.</p>
<p>Weitere Informationen zu Google Fonts erhalten Sie unter folgendem Link:</p>
<ul>
<li><a href="https://developers.google.com/fonts/faq"> https://developers.google.com/fonts/faq </a></li>
</ul>
<p>Weitere Informationen &uuml;ber den Umgang mit Nutzerdaten von Google k&ouml;nnen Sie der Datenschutzerkl&auml;rung entnehmen:</p>
<ul>
<li><a href="https://policies.google.com/privacy?hl=de"> https://policies.google.com/privacy?hl=de </a> .</li>
</ul>
<p>Google verarbeitet die Daten auch in den USA, hat sich jedoch dem <br /> EU-US Privacy-Shield unterworfen.</p>
<p><a href="https://www.privacyshield.gov/EU-US-Framework"> https://www.privacyshield.gov/EU-US-Framework </a></p>
<p>&nbsp;</p>
<h2><strong>Server-Log Files</strong></h2>
<p>Diese Webseite und der damit verbundene Provider erhebt im Zuge der Webseitennutzung automatisch Informationen im Rahmen sogenannter &bdquo;Server-Log Files&ldquo;. Dies betrifft insbesondere:</p>
<ul>
<li>IP-Adresse oder Hostname</li>
<li>den verwendeten Browser</li>
<li>Aufenthaltsdauer auf der Webseite sowie Datum und Uhrzeit</li>
<li>aufgerufene Seiten der Webseite</li>
<li>Spracheinstellungen und Betriebssystem</li>
<li>&bdquo;Leaving-Page&ldquo; (auf welcher URL hat der Benutzer die Webseite verlassen)</li>
<li>ISP (Internet Service Provider)</li>
</ul>
<p>Diese erhobenen Informationen werden nicht personenbezogen verarbeitet oder mit personenbezogenen Daten in Verbindung gebracht.</p>
<p>Der Webseitenbetreiber beh&auml;lt es sich vor, im Falle von Bekanntwerden rechtswidriger T&auml;tigkeiten, diese Daten auszuwerten oder zu &uuml;berpr&uuml;fen.</p>
<p>&nbsp;</p>
<h2><strong>Ihre Rechte als Betroffener</strong></h2>
<p>Sie als Betroffener haben bez&uuml;glich Ihrer Daten, welche bei uns gespeichert sind grunds&auml;tzlich ein Recht auf:</p>
<ul>
<li>Auskunft</li>
<li>L&ouml;schung der Daten</li>
<li>Berichtigung der Daten</li>
<li>&Uuml;bertragbarkeit der Daten</li>
<li>Wiederruf und Widerspruch zur Datenverarbeitung</li>
<li>Einschr&auml;nkung</li>
</ul>
<p>Wenn sie vermuten, dass im Zuge der Verarbeitung Ihrer Daten Verst&ouml;&szlig;e gegen das Datenschutzrecht passiert sind, so haben Sie die M&ouml;glichkeit sich bei uns (office@angelikakiessling.com) oder der Datenschutzbeh&ouml;rde zu beschweren.</p>
<p>&nbsp;</p>
<h5>Sie erreichen uns unter folgenden Kontaktdaten:</h5>
<p><strong>Webseitenbetreiber:</strong> Mag. Angelika Kiessling-Kranzelmayer<br /> <strong>Telefonnummer:</strong> +436644268508<br /> <strong>Email:</strong> office@angelikakiessling.com</p>
<p>Quelle: <strong><a href="https://www.fairesrecht.at/">fairesRecht.at</a></strong></p>

</div>
</div>
	
    <div  style={{ backgroundColor: '#c1b3a5' }} className="banner"></div>
  </div>

    
  );
};

export default Datenschutz;