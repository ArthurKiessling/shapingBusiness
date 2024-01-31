import { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Hamburger } from '../images/menu_icon.svg'
import { ReactComponent as LogoSvg } from '../images/image2vector.svg'
import { useTheme } from './ThemeContext.js'; 
import './navbar.css'
import './styles.css'; 
const Navbar = () => {
  const { themeColor, setThemeColor } = useTheme();

  const [showNavbar, setShowNavbar] = useState(false)
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  return (
    <nav style={{ backgroundColor: themeColor }} className="navbar ">
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