import React from 'react';
import { useInView } from 'react-intersection-observer';
import AnimatedHeading from '../effekts/AnimatedHeading.js';
import './css/content.css';
import Upside from "../images/hoch_sitz.jpg";


// Separate Komponente für jeden Inhaltsabschnitt
const Section = ({ heading, content,id }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '0px',
  });

  return (
    <div ref={ref} id={id}>
      <AnimatedHeading text={heading} />
      <p className={`content ${inView ? 'visible' : ''}`}>{content}</p>
    </div>
  );
};


const sections = [
  {
    id:"Klarheit",
    heading: "KLARHEIT",
    content: "Wo soll es hingehen, was ist eigentlich das Ziel? Das ist eine der wichtigsten Fragen, wenn es um Erfolg geht. Ich unterstütze Menschen und Organisationen, Klarheit in ihrer Zielsetzung zu finden, um den Weg zum Ziel konsequent beschreiten zu können."
  },
  {id:"Konsequenz",
    heading: "KONSEQUENZ",
    content: "Am Weg zum Ziel gibt es unzählige Weggabelungen, Stolpersteine und  Ablenkungen. Welcher Weg ist der richtige, wie treffe ich Entscheidungen und wie finde ich in einer sich dynamisch verändernden komplexen Welt den Weg zum Ziel? Mit analytischem und gleichzeitig agilem Vorgehen helfe ich, den richtigen Weg zu finden und diesen kraftvoll und zielstrebig zu beschreiten.",
 },
  {id:"Kommunikation",
    heading: "KOMMUNIKATION",
    content: "Wen brauche ich, um meine Ziele zu erreichen, wer hat Einfluss auf meinen Erfolg? Mit der Definition relevanter Stakeholder, dem Aufbau tragfähiger Beziehungen sowie einem aktiven Stakeholdermanagement helfe ich, Brücken zu relevanten Stakeholdern zu bauen, um eine Kultur des Miteinanders und „An-einem-Strang-Ziehens“ zu etablieren. Dazu braucht es Botschaften, die ankommen.",
},
  // Weitere Abschnitte hinzufügen
];

const Content = ({targetRef}) => {
  return (
    <div   className="alltop" >
      <div className='section'>
      {sections.map((section, index)  => (
        <Section  key={index} heading={section.heading} content={section.content} id={section.id} />
      ))}
      </div>
    
    </div>
  );
};

export default Content;