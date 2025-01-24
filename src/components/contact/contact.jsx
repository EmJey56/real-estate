import React, { useState } from 'react';
import './contact.scss';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import { db } from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [notification, setNotification] = useState({ show: false, message: '', type: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'messages'), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: serverTimestamp(),
      });

      // Show success notification
      setNotification({ show: true, message: 'Message sent successfully!', type: 'success' });

      // Reset the form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form: ', error);

      // Show error notification
      setNotification({ show: true, message: 'Failed to send the message. Try again.', type: 'error' });
    }

    // Hide notification after 4 seconds
    setTimeout(() => setNotification({ show: false, message: '', type: '' }), 4000);
  };

  return (
    <div className="contact-wrapper">
      <header className="contact-header">
        <div className="contact-logo"></div>
        <nav className="contact-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          
          </ul>
        </nav>
      </header>

      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <p>If you have any inquiries about real estate, please feel free to contact us. We would love to hear from you.</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

        <div className="social-links">
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} />
          </a>
        </div>

        <div className="contact-info">
          <p>Email: <a href="mailto:purerealestate@gmail.com">purerealestate@gmail.com</a></p>
          <p>Location: Abu Dhabi, UAE</p>
        </div>

        <p className="privacy">Your information is confidential and will not be shared with third parties.</p>
      </section>

      {notification.show && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}
    </div>
  );
};

export default Contact;
