import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://127.0.0.1:8000/save_contact_message/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(formData).toString(),
    });

    if (response.ok) {
      alert('Message sent successfully.');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Error sending message.');
    }
  };

  return (
    <section id="Contact" className="contact-section">
    <h2>Contact Us</h2>
    <p className="contact-intro">
      We're here to help you with any questions or concerns you may have. Please fill out the form below, and we'll get back to you as soon as possible.
    </p>
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required onChange={handleChange} />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required onChange={handleChange} />
      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" rows="5" required onChange={handleChange}></textarea>
      <button type="submit" className="submit-button">Submit</button>
    </form>
    
  </section>
  );
};

export default Contact;
