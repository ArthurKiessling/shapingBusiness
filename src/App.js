import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import Background from './components/Background'
import { ThemeProvider } from './components/ThemeContext.js'; 

const App = () => {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <BrowserRouter>
          <Navbar />
            <Routes>
            <Route exact path="/" element={<Background/>}/>
          </Routes>
        </BrowserRouter>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};


export default App