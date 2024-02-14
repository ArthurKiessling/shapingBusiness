import React, { useState } from 'react';
import './css/kontaktForm.css'; // Stellen Sie sicher, dass Sie diese CSS-Datei für das Styling erstellen

const KontaktForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier könnten Sie die Formulardaten an einen Server senden
    console.log(formData);
    alert("Nachricht gesendet!"); // Für Demonstrationszwecke
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Ihr Name"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Ihre E-Mail-Adresse"
        required
      />
      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Betreff"
        required
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Ihre Nachricht"
        required
      ></textarea>
      <button type="submit">Senden</button>
    </form>
  );
};

export default KontaktForm;
