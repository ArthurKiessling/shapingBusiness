import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './css/HomeFirstPart.module.css';
import { useLanguage } from '../effekts/LanguageProvider.js';
import { smoothScrollTo, getElementY } from '../effekts/scrollUtils.js';
const HomeFirstPart = ({ startAnimation }) => {
  const { language, toggleLanguage } = useLanguage();
  const initialTab = language === 'en' ? 'Klarheit' : 'Klarheit';

// Verwendung von initialTab als initialer Zustand für activeTab
const [activeTab, setActiveTab] = useState(initialTab);
  const tabNames = {
    Klarheit: { de: 'KLARHEIT', en: 'Clarity' },
    Konsequenz: { de: 'KONSEQUENZ', en: 'Consistency' },
    Kommunikation: { de: 'KOMMUNIKATION', en: 'Communication' },
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren:0.8, delayChildren: 0.5,duration: 0.3 } },
  };

  const itemVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: {  damping: 10, duration: 1 } },
  };

  const contentVariants = {
    initial: { opacity: 0, y:20 },
    animate: { opacity: 1, y: 0, transition: { delay: 4,duration: 1} },
  };

  const TabContent = ({ lang,tab}) => {
    const contents ={de: {
      Klarheit: "Wo soll es eigentlich hingehen? Eine der wichtigsten Fragen, wenn es um Erfolg geht. Ich unterstütze Menschen und Organisationen, Klarheit in ihrer Zielsetzung zu finden, um den Weg zum Ziel konsequent beschreiten zu können.",
      Konsequenz: "Mit analytischem und gleichzeitig agilem Vorgehen helfe ich, den richtigen Weg zu finden und diesen kraftvoll und zielstrebig zu beschreiten.",
      Kommunikation: "Mit der Definition relevanter Stakeholder und einem aktivem Stakeholder Management helfe ich, Brücken zu relevanten Stakeholdern zu bauen, um eine Kultur des Miteinanders und „An-einem-Strang-Ziehens“ zu etablieren. Dazu braucht es Botschaften, die ankommen.",
    },
    en:
    {
      Klarheit: "Where are we actually headed? One of the most important questions when it comes to success. I support people and organizations to find clarity in their objectives so that they can consistently pursue the path to their goals.",
      Konsequenz: "With an analytical and agile approach, I support in finding the right path and pursuing it with power and purpose.",
      Kommunikation: "By defining relevant stakeholders and actively managing corresponding relationships, I help build bridges to important stakeholders, establishing a culture of collaboration and pulling together. This requires messages that resonate.",},
  };
    return <div className={styles.fließContent}>{contents[lang][tab]}</div>;
  };
  const [animationCompleted, setAnimationCompleted] = useState(false);


  return (
    <motion.div className={styles.centered} variants={containerVariants} initial="initial" animate={startAnimation ? "animate" : "initial"}  onAnimationComplete={() => setAnimationCompleted(true)}>
      <motion.div className={styles.tabs}>
        {Object.keys(tabNames).map((tabKey, index) => (
          <motion.button 
            key={tabKey} 
            custom={index} 
            variants={itemVariants} 
            onClick={() => {
              const element = document.getElementById(tabKey);
              if (element) {
                const targetY = getElementY(element);
                smoothScrollTo(targetY, 1000);
              }
            }}
            className={`${styles.tab} ${activeTab === tabKey ? '' : ''}`}
            style={{
              transition: animationCompleted ? 'transform 1s ease' : 'none',
            }}
          >
            {tabNames[tabKey][language]}
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default HomeFirstPart;
