import React from 'react';
import KontaktForm from './KontaktForm.js'; // Pfad anpassen
import './css/kontakt.css'; // Stellen Sie sicher, dass Sie diese CSS-Datei für das Styling erstellen

const Kontakt = () => {
  return (
    <div className="contact-page">
      <h2 className='heading'>Kontaktieren Sie uns</h2>
      <div className="contact-info">
        <p>Wenn Sie Fragen haben, zögern Sie nicht uns zu kontaktieren:</p>
        <p>Email: office@shapingbusiness.at</p>
        <p>Telefon: +43 664 426 85 08</p>
        {/* Optional: Soziale Medien-Links hinzufügen */}
      </div>
      <KontaktForm />
    </div>
  );
};

export default Kontakt;