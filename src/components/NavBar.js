import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Hamburger } from '../images/menu_icon.svg'
import './navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar ">
      <div className="container">
        <div className="logo">
        <p>Connecting People - Shaping Business</p>
        </div>
        <div  className="menu-icon" onClick={handleShowNavbar}>
        <Hamburger />
        </div>
       <div className={`nav-elements    ${showNavbar && 'active'}`}>
          <ul className="px-6 py-8 ">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/beratung">Beratung</NavLink>
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