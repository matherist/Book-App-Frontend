import React from 'react';

const Contact = () => {
  return (
    <section id="Contact" className="contact-section">
      <h2>Contact Us</h2>
      <p className="contact-intro">
        We're here to help you with any questions or concerns you may have. Please fill out the form below, and we'll get back to you as soon as possible.
      </p>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
