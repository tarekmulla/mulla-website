import React from "react";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FiMail } from "react-icons/fi";

import "./styles/contactForm.css";
import CONFIG from "../../data/config"

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
      <div className="name">
        <span>
          <CgProfile />
        </span>
        <input type="text" name="name" placeholder="Fullname..." />
      </div>
      <div className="email">
        <span>
          <MdAlternateEmail />
        </span>
        <input required type="email" name="email" placeholder="Email..." />
      </div>
      <div className="message">
        <span className="messageIcon">
          <FiMail />
        </span>
        <textarea required cols="30" rows="10" name="message" placeholder="Message..."></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
