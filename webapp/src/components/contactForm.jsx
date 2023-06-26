import React from "react";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FiMail } from "react-icons/fi";

import "./styles/contactForm.css";
import CONFIG from "../data/config"

const ContactForm = () => {
  const handleSubmit = (event) => {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    let data = "{"
    for (let [key, value] of formData.entries()) {
      data += `"${key}":"${value}",`
    }
    data = data.substring(0, data.length - 1) + "}";
    try {
      fetch(CONFIG.CONTACT_URL, {
        method: 'POST',
        body: data,
      })
        .then((response) => {
          if (response.status === 200) {
            alert("Message Sent successfully.");
            event.target.reset();
          } else {
            alert("Failed to send the message.")
          }
      })
    } catch (error) {
      console.log("Failed to send the message.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="contact-form">
        <div className="contact-field">
          <span className="contact-icon">
            <CgProfile />
          </span>
          <input className="contact-name" type="text" name="name" placeholder="Fullname..." />
        </div>
        <div className="contact-field">
          <span className="contact-icon">
            <MdAlternateEmail />
          </span>
          <input className="contact-email" required type="email" name="email" placeholder="Email..." />
        </div>
        <div className="contact-field">
          <span className="contact-icon">
            <FiMail />
          </span>
          <textarea className="contact-message" required cols="30" rows="10" name="message" placeholder="Message..."></textarea>
        </div>
        <div className="contact-field">
          <button className="contact-submit" type="submit">Submit</button>
        </div>
      </div>
    </form >
  );
};

export default ContactForm;
