import { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Hamburger } from '../images/menu_icon.svg'
import { ReactComponent as LogoSvg } from '../images/image2vector.svg'
import { useTheme } from './ThemeContext.js'; 
import './css/navbar.css'
import './css/styles.css'; 
const Navbar = () => {
  const { themeColor, setThemeColor } = useTheme();

  const [showNavbar, setShowNavbar] = useState(false)
  // State für die Sichtbarkeit der NavBar
  const [show, setShow] = useState(true);
  // State für die letzte Scroll-Position
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    // Wenn der aktuelle Scroll kleiner ist als der letzte (nach oben scrollen), zeige die NavBar
    if (typeof window !== 'undefined') {
      if (window.scrollY < lastScrollY) {
        setShow(true);
      } else if (window.scrollY > lastScrollY) {
        // Wenn der aktuelle Scroll größer ist als der letzte (nach unten scrollen), verstecke die NavBar
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
  return (
    <nav style={{ backgroundColor: themeColor}} className={`navbar ${!show && 'hide'}`}>
      <div className="container">
        <div>
        <LogoSvg className='logo'/>
        </div>
          <p className='textSize'>Connecting People - Shaping Business</p>
        <div  className="menu-icon" onClick={handleShowNavbar}>
        <Hamburger />
        </div>
       <div style={{ backgroundColor: themeColor }} className={`nav-elements    ${showNavbar && 'active'}`}>
          <ul className="px-6 py-8 ">
            <li>
              <NavLink onClick={() => setThemeColor('#87b1bf')} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink onClick={() => setThemeColor('green')} to="/beratung">Beratung</NavLink>
            </li>
            <li>
              <NavLink to="/uebermich">Über mich</NavLink>
            </li>
            <li>
              <NavLink to="/philosopie">Philosophie</NavLink>
            </li>
            <li>
              <NavLink to="/kontakt">Kontakt</NavLink>
            </li>
            <li>
              <NavLink to="/kontakt">de | en</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar