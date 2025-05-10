import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="contact-container">
      <ContactForm formData={formData} onChange={handleChange} />
    </div>
  );
}

export default Contact;