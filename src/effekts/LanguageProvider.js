import React, { createContext, useContext, useState } from 'react';

// Erstellen des Contexts
const LanguageContext = createContext();

// Provider-Komponente
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('de'); // Standardmäßig auf Deutsch gesetzt

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook, um den Context zu nutzen
export const useLanguage = () => useContext(LanguageContext);
