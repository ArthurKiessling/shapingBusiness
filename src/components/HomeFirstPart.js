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
    animate: { opacity: 1, transition: { staggerChildren:1, delayChildren: 1,duration: 0.1 } },
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
      Klarheit: "Where do we want to go, what is the actual goal? This is one of the most important questions when it comes to success. I support people and organizations in finding clarity in their objectives so that they can consistently pursue the path to their goal.",
      Konsequenz: "There are countless forks in the road, stumbling blocks and distractions on the way to the goal. Which path is the right one, how do I make decisions and how do I find the way to the goal in a dynamically changing, complex world? With an analytical and at the same time agile approach, I help you to find the right path and to follow it powerfully and purposefully.",
      Kommunikation: "Who do I need to achieve my goals, who has an influence on my success? By defining relevant stakeholders, building sustainable relationships and active stakeholder management, I help to build bridges to relevant stakeholders in order to establish a culture of cooperation and pulling together. This requires messages that resonate.",},
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
