import { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Hamburger } from '../images/menu_icon.svg'
import { ReactComponent as LogoSvg } from '../images/AK.svg'
import { useTheme } from './ThemeContext.js'; 
import './css/navbar.css'
import './css/styles.css'; 
import { useLanguage } from '../effekts/LanguageProvider.js';

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  
  const { themeColor, setThemeColor } = useTheme();

  const [showNavbar, setShowNavbar] = useState(false)
  // State für die Sichtbarkeit der NavBar
  const [show, setShow] = useState(true);
  // State für die letzte Scroll-Position
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      // Zeige die Navbar immer an, wenn der Benutzer ganz oben auf der Seite ist
      if (window.scrollY <= 0) {
        setShow(true);
      } 
      // Wenn der aktuelle Scroll kleiner ist als der letzte (nach oben scrollen), zeige die NavBar
      else if (window.scrollY < lastScrollY) {
        setShow(true);
      } 
      // Wenn der aktuelle Scroll größer ist als der letzte (nach unten scrollen), verstecke die NavBar
      else if (window.scrollY > lastScrollY) {
        setShow(false);
      }
      // Aktualisiere die letzte Scroll-Position
      setLastScrollY(window.scrollY);
    }
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // Cleanup-Funktion, um den Event-Listener zu entfernen
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);


  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  const { language, toggleLanguage } = useLanguage();
  const content = {
    de: {
      home: 'Home',
      beratung: 'Beratung',
      mich: 'Über mich',
      kontakt: 'Kontakt'
    },
    en: {
      home: 'Home',
      beratung: 'Consulting',
      mich: 'About Me',
      kontakt: 'Contact'
    }
  };
  {/*Interresant Farbe:#989292*/}
  return (
    <nav style={{ backgroundColor: themeColor}} className={`navbar ${!show && 'hide'}`}>
      <div className="container">
        <div>
        <LogoSvg className='logo'/>
        </div>
        <div className='menuHeader'>
        <p className='nameHead'>Angelika Kiessling-Kranzelmayer</p>
        <p className='sloganHead'>Connecting People, Shaping Business</p>
        </div>
        <div  className="menu-icon" onClick={handleShowNavbar}>
        <Hamburger />
        </div>
       <div style={{ backgroundColor: themeColor }} className={`nav-elements    ${showNavbar && 'active'}`}>
          <ul className="px-6 py-8 ">
            <li>
              <NavLink onClick={() => {setThemeColor('#c1b3a5'); scrollToTop();handleShowNavbar();}} to="/">{content[language].home}</NavLink>
            </li>
            <li>
              <NavLink onClick={() =>{setThemeColor('#c1b3a5'); scrollToTop();handleShowNavbar();}} to="/beratung">{content[language].beratung}</NavLink>
            </li>
            <li>
              <NavLink onClick={() => {setThemeColor('#c1b3a5'); scrollToTop();handleShowNavbar();}} to="/uebermich">{content[language].mich}</NavLink>
            </li>
            <li>
              <NavLink onClick={() => {setThemeColor('#c1b3a5'); scrollToTop();handleShowNavbar();}} to="/kontakt">{content[language].kontakt}</NavLink>
            </li>
            <li>
            <button onClick={() =>toggleLanguage('de')}className={ language === 'de' ? 'selected-lang' : ''}> de</button> | <button onClick={() => toggleLanguage('en')}className={ language === 'en' ? 'selected-lang' : ''} >en</button>
        </li>
           
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar