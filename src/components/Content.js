import React from 'react';
import { useInView } from 'react-intersection-observer';
import AnimatedHeading from '../effekts/AnimatedHeading.js';
import './css/content.css';
import Upside from "../images/hoch_sitz.jpg";


// Separate Komponente für jeden Inhaltsabschnitt
const Section = ({ heading, content }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '0px',
  });

  return (
    <div ref={ref}>
      <AnimatedHeading text={heading} />
      <p className={`content ${inView ? 'visible' : ''}`}>{content}</p>
    </div>
  );
};


const sections = [
  {
    className:"text2",
    heading: "KLARHEIT",
    content: "Wo soll es hingehen, was ist eigentlich das Ziel? Das ist eine der wichtigsten Fragen, wenn es um Erfolg geht. Ich unterstütze Menschen und Organisationen, Klarheit in ihrer Zielsetzung zu finden, um den Weg zum Ziel konsequent beschreiten zu können."
  },
  {className:"text2",
    heading: "KONSEQUENZ",
    content: "Am Weg zum Ziel gibt es unzählige Weggabelungen, Stolpersteine und  Ablenkungen. Welcher Weg ist der richtige, wie treffe ich Entscheidungen und wie finde ich in einer sich dynamisch verändernden komplexen Welt den Weg zum Ziel? Mit analytischem und gleichzeitig agilem Vorgehen helfe ich, den richtigen Weg zu finden und diesen kraftvoll und zielstrebig zu beschreiten.",
 },
  {className:"text2",
    heading: "KOMMUNIKATION",
    content: "Wen brauche ich, um meine Ziele zu erreichen, wer hat Einfluss auf meinen Erfolg? Mit der Definition relevanter Stakeholder, dem Aufbau tragfähiger Beziehungen sowie einem aktiven Stakeholdermanagement helfe ich, Brücken zu relevanten Stakeholdern zu bauen, um eine Kultur des Miteinanders und „An-einem-Strang-Ziehens“ zu etablieren. Dazu braucht es Botschaften, die ankommen.",
},
  // Weitere Abschnitte hinzufügen
];

const Content = () => {
  return (
    <div  className="alltop" >
      <div id="point2" className='section'>
      {sections.map((section, index)  => (
        <Section  key={index} heading={section.heading} content={section.content} />
      ))}
      </div>
      <img className="third" src={Upside}></img>
    </div>
  );
};

export default Content;