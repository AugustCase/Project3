import React from 'react';
import './ContactForm.css';

function ContactForm({ formData, onChange }) {
  return (
    <form className="contact-form">
      <label>First Name: <input name="firstName" value={formData.firstName} onChange={onChange} /></label>
      <label>Last Name: <input name="lastName" value={formData.lastName} onChange={onChange} /></label>
      <label>Email: <input type="email" name="email" value={formData.email} onChange={onChange} /></label>
      <label>Comments: <textarea name="comments" value={formData.comments} onChange={onChange}></textarea></label>
    </form>
  );
}

export default ContactForm;