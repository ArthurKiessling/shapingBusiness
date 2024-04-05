import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import HomePage from './components/HomePage.js'
import AboutMe from './components/AboutMe.js'
import Kontakt from './components/Kontakt.js';
import AGB from './components/AGB.js';
import Beratung from './components/Beratung.js';
import { ThemeProvider } from './components/ThemeContext.js'; 
import { LanguageProvider } from './effekts/LanguageProvider.js';

import './components/css/HomePage.css'


const PreloadImages = ({ imageUrls, children }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const promises = imageUrls.map(src => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(promises)
      .then(() => setLoaded(true))
      .catch(() => setError(true));
  }, [imageUrls]);

  if (error) {
    return <div>Es gab einen Fehler beim Laden der Bilder.</div>;
  }

  if (!loaded) {
    return <div>Lädt...</div>;
  }

  return (
    <>
      {children}
    </>
  );
};


const App = () => {
  const imageUrls = [
   require('./images/ganz_sitz.jpg') ,
   require('./images/hoch_ganz.jpg'),
   require('./images/beratung.jpg'),
    // weitere URLs
  ];

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
  
        <PreloadImages  imageUrls={imageUrls}>
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
          </Routes>
        </BrowserRouter>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </ThemeProvider>
    </LanguageProvider>
    </PreloadImages>)}
    
    </div>
  );
};


export default App