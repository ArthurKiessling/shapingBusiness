import React, { useState } from 'react';
import styles from './css/HomeFirstPart.module.css'; // Update the import path according to the new name
import { faLightbulb, faStream, faComments, faRocket, faHeart, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const HomeFirstPart= () => {
  // Initialisierung eines Zustands, der für jede Box einen Boolean-Wert speichert
  const [isOpen, setIsOpen] = useState([false, false, false]);

  // Direkte Definition der Box-Inhalte im Modul
  const services = [
    { title: "Klarheit",
    icon: faLightbulb,
    id: 'klarheit',
     content: "Wo soll es hingehen, was ist eigentlich das Ziel? Das ist eine der wichtigsten Fragen, wenn es um Erfolg geht.Ich unterstütze Menschen und Organisationen, Klarheit in ihrer Zielsetzung zu finden, um den  Weg zum Ziel konsequent beschreiten zu können." },
    { 
    title: "Konsequenz",
    icon: faStream,
    id: 'konsequenz',
    content: "Am Weg zum Ziel gibt es unzählige Weggabelungen, Stolpersteine und  Ablenkungen. Welcher Weg ist der richtige, wie treffe ich Entscheidungen und wie finde ich in einer sich dynamisch verändernden komplexen Welt den Weg zum Ziel? Mit analytischem und gleichzeitig agilem Vorgehen helfe ich, den richtigen Weg zu finden und diesen kraftvoll und zielstrebig zu beschreiten. " },
    { 
      title: "Kommunikation",
      icon: faComments,
      id: 'kommunikation',
      content: "Wen brauche ich, um meine Ziele zu erreichen, wer hat Einfluss auf meinen Erfolg? Mit der Definition relevanter Stakeholder, dem Aufbau tragfähiger Beziehungen sowie einem aktiven Stakeholdermanagement helfe ich, Brücken zu relevanten Stakeholdern zu bauen, um eine Kultur des Miteinanders und „An-einem-Strang-Ziehens“ zu etablieren. Dazu braucht es Botschaften, die ankommen.",
    }
  ];
  const slogan="Erfolg liegt in der Kraft der Menschen, die gemeinsam an einem Strang ziehen.";
  const fließContent="Klarheit in der Zielsetzung, Konsequenz in der Umsetzung, erfolgreiche Kommunikation und Einbindung relevanter Stakeholder führen zu Effektivität und Effizienz in der Erreichung von persönlichen und unternehmerischen Zielen. Darüber hinaus sind Empathie und das Gespür, die richtigen Menschen miteinander zu verbinden wichtige Bausteine für den gemeinsamen Erfolg. In einer dynamischen Zeit mit Veränderungen in Geopolitik, Klimawandel, digitaler Transformation unterstütze ich Organisationen und Entscheider dabei, Komplexität zu reduzieren, Strategien für die Geschäftsentwicklung zu erarbeiten, relevante Stakeholder einzubinden und diese durch professionelle Kommunikationsmaßnahmen auf den gemeinsamen Weg mitzunehmen. Die Kombination aus Know How, interdisziplinärer Erfahrung und einem sehr guten persönlichen Netzwerk in Industrie, Wirtschaft und öffentlicher Hand in Österreich und über die Grenzen hinaus bringe ich in die Beratung und in die Begleitung von Veränderungen ein.";
  // Funktion zum Umschalten des geöffneten Zustands einer Box
  const toggleBox = (index) => {
    setIsOpen(isOpen.map((open, i) => i === index ? !open : open));
  };
  const [activeTab, setActiveTab] = useState('tab1');

  const TabContent = ({ tab }) => {
    const contents = {
      Klarheit: <div>Wo soll es hingehen, was ist eigentlich das Ziel? Das ist eine der wichtigsten Fragen, wenn es um Erfolg geht.Ich unterstütze Menschen und Organisationen, Klarheit in ihrer Zielsetzung zu finden, um den  Weg zum Ziel konsequent beschreiten zu können.</div>,
      Konsequenz: <div>Am Weg zum Ziel gibt es unzählige Weggabelungen, Stolpersteine und  Ablenkungen. Welcher Weg ist der richtige, wie treffe ich Entscheidungen und wie finde ich in einer sich dynamisch verändernden komplexen Welt den Weg zum Ziel? Mit analytischem und gleichzeitig agilem Vorgehen helfe ich, den richtigen Weg zu finden und diesen kraftvoll und zielstrebig zu beschreiten.</div>,
      Kommunikation: <div>Wen brauche ich, um meine Ziele zu erreichen, wer hat Einfluss auf meinen Erfolg? Mit der Definition relevanter Stakeholder, dem Aufbau tragfähiger Beziehungen sowie einem aktiven Stakeholdermanagement helfe ich, Brücken zu relevanten Stakeholdern zu bauen, um eine Kultur des Miteinanders und „An-einem-Strang-Ziehens“ zu etablieren. Dazu braucht es Botschaften, die ankommen.</div>,
    };
    return contents[tab] || null;
  };
  return (
    <div className={styles.centered}>
    
     {/*<h1 className={styles.slogan}>{slogan}</h1>
      <p className={styles.fließContent}>{fließContent}</p>*/}
      <div className={styles.boxesContainer}>
      {services.map((service, index) => (
        <div
          key={index}
          className={`${styles.box} ${isOpen[index] ? styles.open : ''}`}
          onClick={() => toggleBox(index)}
        >
          <div className={styles.header}>
            <FontAwesomeIcon icon={service.icon} className={styles.icon}/> {/* Größe des Icons */}
            <span>{service.title}</span>
          </div>
          {isOpen[index] && (
            <div className={styles.content}>
              {service.content}
            </div>
          )}
        </div>
      ))}
    </div>
    <div className={styles.tabscontainer}>
      <div className={styles.tabs}>
        {['Klarheit', 'Konsequenz', 'Kommunikation'].map((tab) => (
          <button
            key={tab}
            className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.replace('tab', 'Tab ')}
          </button>
        ))}
      </div>
      <div className={styles.tabcontent}>
        <TabContent tab={activeTab} />
      </div>
    </div>
    </div>
  );
}

export default HomeFirstPart;