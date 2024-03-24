import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import HomePage from './components/HomePage.js'
import AboutMe from './components/AboutMe.js'
import Kontakt from './components/Kontakt.js';
import Beratung from './components/Beratung.js';
import { ThemeProvider } from './components/ThemeContext.js'; 
import { LanguageProvider } from './effekts/LanguageProvider.js';

const App = () => {

  return (
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
          </Routes>
        </BrowserRouter>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </ThemeProvider>
    </LanguageProvider>
  );
};


export default App