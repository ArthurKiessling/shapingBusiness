import React from 'react';
import { useInView } from 'react-intersection-observer';
import AnimatedHeading from '../effekts/AnimatedHeading.js';
import './css/content.css';
import { useLanguage } from '../effekts/LanguageProvider.js';

// Separate Komponente für jeden Inhaltsabschnitt
const Section = ({ heading, content,id }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '0px',
  });

  return (
    <div ref={ref} id={id} className='sections'>
      <AnimatedHeading text={heading} />
      <p className={`content ${inView ? 'visible' : ''}`}>{content}</p>
    </div>
  );
};


const sections = {
  de:[
  {
    id:"Klarheit",
    heading: "KLARHEIT",
    content: "Wo soll es eigentlich hingehen? Eine der wichtigsten Fragen, wenn es um Erfolg geht. Ich unterstütze Menschen und Organisationen, Klarheit in ihrer Zielsetzung zu finden, um den Weg zum Ziel konsequent beschreiten zu können."
  },
  {id:"Konsequenz",
    heading: "KONSEQUENZ",
    content: "Mit analytischem und gleichzeitig agilem Vorgehen helfe ich, den richtigen Weg zu finden und diesen kraftvoll und zielstrebig zu beschreiten.",
 },
  {id:"Kommunikation",
    heading: "KOMMUNIKATION",
    content: "Mit der Definition relevanter Stakeholder und einem aktivem Stakeholder Management helfe ich, Brücken zu relevanten Stakeholdern zu bauen, um eine Kultur des Miteinanders und „An-einem-Strang-Ziehens“ zu etablieren. Dazu braucht es Botschaften, die ankommen.",
},],
en:[
  {
    id:"Klarheit",
    heading: "CLARITY",
    content: "Where do you actually want to go? One of the most important questions when it comes to success. I support people and organizations in finding clarity in their objectives so that they can consistently pursue the path to their goal."
  },
  {id:"Konsequenz",
    heading: "CONSEQUENCE",
    content: "With an analytical and at the same time agile approach, I help you to find the right path and to follow it powerfully and purposefully.",
 },
  {id:"Kommunikation",
    heading: "COMMUNICATION",
    content: "With the definition of relevant stakeholders and active stakeholder management, I help to build bridges to relevant stakeholders in order to establish a culture of cooperation and pulling together. This requires messages that resonate. ",
},],

  // Weitere Abschnitte hinzufügen
};

const Content = ({targetRef}) => {
  const { language, toggleLanguage } = useLanguage();
  return (
    <div   className="alltopContent" >
      <div className='section'>
      {sections[language].map((section, index)  => (
        <Section  key={index} heading={section.heading} content={section.content} id={section.id} />
      ))}
      </div>
    
    </div>
  );
};

export default Content;