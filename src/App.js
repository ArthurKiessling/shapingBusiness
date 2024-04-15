import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import HomePage from './components/HomePage.js'
import AboutMe from './components/AboutMe.js'
import Kontakt from './components/Kontakt.js';
import AGB from './components/AGB.js';
import Impressum from './components/Impressum.js';
import Datenschutz from './components/Datenschutz.js';
import Beratung from './components/Beratung.js';
import { ThemeProvider } from './components/ThemeContext.js'; 
import { LanguageProvider } from './effekts/LanguageProvider.js';
import CookieBanner from "./effekts/CookieBanner.js";
import './components/css/HomePage.css'



const App = () => {


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');

  const correctPassword = 'mama'; // In einer echten Anwendung solltest du hier eine sicherere Überprüfung implementieren

  const handleLogin = () => {
    if (password === correctPassword) {
      setIsLoggedIn(true);
    } else {
      alert('Falsches Passwort');
    }
  };
  return (<div >
     {false ? (
        <div className='login'>
          <input
            type="password"
            placeholder="Passwort eingeben"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={handleLogin}>Einloggen</button>
        </div>
      ) : (

    <LanguageProvider>
   
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <BrowserRouter basename="/">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/beratung" element={<Beratung/>}/>
            <Route  path="/uebermich" element={<AboutMe/>}/>
            <Route  path="/kontakt" element={<Kontakt/>}/>
            <Route  path="/AGB" element={<AGB/>}/>
            <Route  path="/Impressum" element={<Impressum/>}/>
            <Route  path="/Datenschutz" element={<Datenschutz/>}/>
          </Routes>
          <CookieBanner />
        </BrowserRouter>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </ThemeProvider>
    </LanguageProvider>
)}
    
    </div>
  );
};


export default App