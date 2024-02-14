import React from 'react';
import styles from './css/AboutMe.module.css'; // Stelle sicher, dass der Pfad korrekt ist
import ganzSitzBild from '../images/ganz_sitz.jpg';

const AboutMe = () => {
  return (
    <div className={styles['about-me-container']}>
      <div className={styles.div}></div>
      <h1 className={styles.h1}>Über mich</h1>
     {/* <h1 className={styles.h1}>Dafür stehe ich</h1> */}
   
      <section className={styles.section}>
     
      <img src={ganzSitzBild} alt="Bildbeschreibung" className={styles.imageLeft}/>
      <div>
      <h2 className={styles.h2}>MIT HERZ & HIRN</h2>
      <ul className={styles.ul}>
        <li className={styles.li}>empathisch, herzlich, mutig, offen</li>
        <li className={styles.li}>analytisch, strukturiert, ergebnis-, lösungsorientiert</li>
        <li className={styles.li}>kollaborativ, kommunikations-, umsetzungsstark</li>
        </ul>
        </div>
      </section>
      
      <section className={styles.section}>
      <div>
        <h2 className={styles.h2}>FACHLICH KOMPETENT</h2>
        <ul className={styles.ul}>
          <li className={styles.li}>Kommunikation & Public Affairs</li>
          <li className={styles.li}>Reputation-, Stakeholder Management</li>
          <li className={styles.li}>Change – und Krisenmanagement</li>
          <li className={styles.li}>Nachhaltigkeit & Digitalisierung</li>
          <li className={styles.li}>Technologie & Innovation</li>
        </ul>
        </div>
        <img src={ganzSitzBild} alt="Bildbeschreibung" className={styles.imageRight}/>
      </section>
      
      <section className={styles.section}>
      <img src={ganzSitzBild} alt="Bildbeschreibung" className={styles.imageLeft}/>
      <div>
        <h2 className={styles.h2}>ERFAHREN</h2>
        <ul className={styles.ul}>
          <li className={styles.li}>Konzernorganisation & Start-Up</li>
          <li className={styles.li}>Konsolidierung & Entwicklung von Standorten</li>
          <li className={styles.li}>New Work, Digitale Transformation, Krisenmanagement</li>
          <li className={styles.li}>Vereinbarkeit von Beruf & Familie</li>
        </ul>
        </div>
      </section>
      <section className={styles.section}>
      <div>
        <h2 className={styles.h2}>ZUKUNFTSORIENTIERT</h2>
        <ul className={styles.ul}>
          <li className={styles.li}>Entwicklung von Standort-, Nachhaltigkeitsstrategien</li>
          <li className={styles.li}>Gestaltung & Begleitung von Organisationsänderungen</li>
          <li className={styles.li}>Bildung, Nachwuchsförderung, Innovationskultur, Diversität</li>
        </ul>
        </div>
        <img src={ganzSitzBild} alt="Bildbeschreibung" className={styles.imageRight}/>
      </section>
    </div>
  );
};

export default AboutMe;